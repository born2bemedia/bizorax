"use server";

import sgMail from "@sendgrid/mail";

import { getRegistrationWelcomeEmail } from "@/shared/lib/emails/authTemplates";

const SERVER_URL = process.env.SERVER_URL;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn("[user] SENDGRID_API_KEY is not set — registration emails will NOT be sent");
}

export type UserData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type User = {
  id: string;
  email: string;
  [key: string]: unknown;
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Генерує випадковий пароль
 */
function generatePassword(): string {
  const length = 12;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

/**
 * Перевіряє чи існує користувач з вказаним email
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  if (!SERVER_URL) {
    throw new Error("SERVER_URL is not configured");
  }

  const normalizedEmail = normalizeEmail(email);

  try {
    const response = await fetch(
      `${SERVER_URL}/api/users?where[email][equals]=${encodeURIComponent(normalizedEmail)}&limit=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      const errorText = await response.text();
      console.error(`Failed to find user: ${response.status} - ${errorText}`);
      throw new Error(`Failed to find user: ${response.status} - ${errorText}`);
    }

    const data = (await response.json()) as { docs?: User[] };
    
    if (data.docs && data.docs.length > 0) {
      return data.docs[0];
    }

    return null;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

/**
 * Створює нового користувача з автоматично згенерованим паролем
 */
export async function createUser(userData: UserData): Promise<{ user: User; password: string }> {
  if (!SERVER_URL) {
    throw new Error("SERVER_URL is not configured");
  }

  const password = generatePassword();
  const normalizedEmail = normalizeEmail(userData.email);

  const userPayload = {
    email: normalizedEmail,
    password: password,
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
  };

  try {
    const response = await fetch(`${SERVER_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to create user: ${response.status} - ${errorText}`);
      try {
        const errJson = JSON.parse(errorText) as { errors?: Array<{ message?: string }> };
        if (errJson.errors?.length) {
          console.error("Payload errors:", JSON.stringify(errJson.errors, null, 2));
        }
      } catch {
        // ignore
      }
      throw new Error(`Failed to create user: ${response.status} - ${errorText}`);
    }

    const result = (await response.json()) as { doc: User };
    const user = result.doc;

    if (!SENDGRID_API_KEY) {
      console.warn(`[user] Skipping credentials email for ${normalizedEmail} — SENDGRID_API_KEY not set`);
    } else if (!FROM_EMAIL) {
      console.warn(`[user] Skipping credentials email for ${normalizedEmail} — FROM_EMAIL not set`);
    } else {
      try {
        const registrationMsg = {
          to: normalizedEmail,
          from: FROM_EMAIL,
          subject: "Welcome to Bizorax! Your account is ready",
          html: getRegistrationWelcomeEmail({
            firstName: userData.firstName,
            email: normalizedEmail,
            password,
          }),
        };

        console.log(`[user] Sending credentials email to: ${normalizedEmail}, from: ${FROM_EMAIL}`);
        const [response] = await sgMail.send(registrationMsg);
        console.log(`[user] Credentials email sent to ${normalizedEmail} — statusCode: ${response.statusCode}`);
      } catch (emailError: unknown) {
        const err = emailError as { message?: string; response?: { statusCode?: number; body?: unknown } };
        console.error(`[user] Error sending credentials email to ${normalizedEmail}:`, err.message ?? emailError);
        if (err.response) {
          console.error(`[user] SendGrid status: ${err.response.statusCode}`);
          console.error(`[user] SendGrid body:`, JSON.stringify(err.response.body, null, 2));
        }
      }
    }

    return { user, password };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export type EnsureUserResult = {
  userId: string;
  isNewUser: boolean;
  /** Тільки якщо isNewUser — тимчасовий пароль для автоматичного логіну після покупки */
  password?: string;
};

/**
 * Перевіряє чи існує користувач, якщо ні - створює нового.
 * Повертає userId, чи був створений новий користувач, та пароль (якщо новий) для логіну після покупки.
 */
export async function ensureUser(userData: UserData): Promise<EnsureUserResult> {
  try {
    const normalizedEmail = normalizeEmail(userData.email);
    const existingUser = await findUserByEmail(normalizedEmail);

    if (existingUser) {
      console.log(`User already exists: ${normalizedEmail}`);
      return { userId: existingUser.id, isNewUser: false };
    }

    console.log(`Creating new user: ${normalizedEmail}`);
    const { user, password } = await createUser({
      ...userData,
      email: normalizedEmail,
    });
    return { userId: user.id, isNewUser: true, password };
  } catch (error) {
    console.error("Error ensuring user:", error);
    throw error;
  }
}
