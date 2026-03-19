import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SERVER_URL = process.env.SERVER_URL;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn("[order/route] SENDGRID_API_KEY is not set — emails will NOT be sent");
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function generatePassword() {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function logSendGridError(context, error) {
  console.error(`[order/route] ${context} — error:`, error?.message ?? error);
  if (error?.response) {
    console.error(`[order/route] ${context} — status:`, error.response.statusCode);
    console.error(
      `[order/route] ${context} — body:`,
      JSON.stringify(error.response.body, null, 2)
    );
  }
}

async function findUserByEmail(email) {
  const normalizedEmail = normalizeEmail(email);

  const response = await fetch(
    `${SERVER_URL}/api/users?where[email][equals]=${encodeURIComponent(normalizedEmail)}&limit=1`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  );

  if (!response.ok) {
    if (response.status === 404) return null;
    const errorText = await response.text();
    throw new Error(`Failed to find user: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  if (data.docs && data.docs.length > 0) {
    return data.docs[0];
  }

  return null;
}

async function createUserInCMS({ email, firstName, lastName, phone }) {
  const password = generatePassword();
  const normalizedEmail = normalizeEmail(email);

  console.log(`[order/route] Creating CMS user: ${normalizedEmail}`);

  const response = await fetch(`${SERVER_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: normalizedEmail,
      password,
      firstName,
      lastName,
      phone,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[order/route] Failed to create user: ${response.status} - ${errorText}`);
    throw new Error(`Failed to create user: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  console.log(`[order/route] CMS user created: ${result.doc?.id}`);
  return { user: result.doc, password };
}

async function sendCredentialsEmail({ firstName, email, password }) {
  const normalizedEmail = normalizeEmail(email);

  if (!SENDGRID_API_KEY) {
    console.warn("[order/route] Skipping credentials email — SENDGRID_API_KEY not set");
    return;
  }
  if (!FROM_EMAIL) {
    console.warn("[order/route] Skipping credentials email — FROM_EMAIL not set");
    return;
  }

  const msg = {
    to: normalizedEmail,
    from: FROM_EMAIL,
    subject: "Welcome to Bizorax! Your account is ready",
    html: `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
          <thead>
              <tr>
                  <th style="background-image: url('https://bizorax.com/images/letter-top.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                      <h2 style="text-align: left; font-size: 20px;">Dear ${firstName},</h2>
                      <p style="font-size: 16px; line-height: 19px;">Thank you for joining Bizorax! Your account has been successfully created, and you are now ready to manage your orders and access your services.</p>
                      <p style="font-size: 16px; line-height: 19px;">Your login details:</p>
                      <div style="margin: 0 0 20px 0; padding: 16px; background: #f5f5f5; border-left: 3px solid #008967;">
                          <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 19px;">Login: <strong>${normalizedEmail}</strong></p>
                          <p style="margin: 0; font-size: 16px; line-height: 19px;">Password: <strong>${password}</strong></p>
                      </div>
                      <p style="font-size: 16px; line-height: 19px;">You can sign in to your account at any time to update your profile and manage your services.</p>
                      <p style="font-size: 16px; line-height: 19px;">If you did not create this account, please contact our support at <a href="mailto:info@bizorax.com" style="color: #008967; font-weight: 600;text-decoration: underline;">info@bizorax.com</a>.</p>
                      <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                          Best regards,
                          <br>
                          The Bizorax Team
                      </p>
                  </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                      <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://bizorax.com/" style="color: #008967; text-decoration: none;">Bizorax</a></p>
                  </td>
              </tr>
          </tfoot>
      </table>
    `,
  };

  console.log(`[order/route] Sending credentials email to: ${normalizedEmail}, from: ${FROM_EMAIL}`);

  try {
    const [response] = await sgMail.send(msg);
    console.log(`[order/route] Credentials email sent to ${normalizedEmail} — statusCode: ${response.statusCode}`);
  } catch (err) {
    logSendGridError("Credentials email", err);
    throw err;
  }
}

async function ensureUser({ email, firstName, lastName, phone }) {
  const normalizedEmail = normalizeEmail(email);
  console.log(`[order/route] ensureUser called for: ${normalizedEmail}`);

  const existingUser = await findUserByEmail(normalizedEmail);

  if (existingUser) {
    console.log(`[order/route] User already exists: ${normalizedEmail} (id: ${existingUser.id})`);
    return { userId: existingUser.id, isNewUser: false };
  }

  console.log(`[order/route] User not found, creating: ${normalizedEmail}`);
  const { user, password } = await createUserInCMS({
    email: normalizedEmail,
    firstName,
    lastName,
    phone,
  });

  try {
    await sendCredentialsEmail({ firstName, email: normalizedEmail, password });
  } catch (emailError) {
    console.error(`[order/route] Credentials email failed for ${normalizedEmail} — continuing without email`);
  }

  return { userId: user.id, isNewUser: true, password };
}

export async function POST(request) {
  console.log("[order/route] POST handler invoked");
  console.log("[order/route] ENV check — SENDGRID_API_KEY:", SENDGRID_API_KEY ? "SET" : "MISSING");
  console.log("[order/route] ENV check — FROM_EMAIL:", FROM_EMAIL ?? "MISSING");
  console.log("[order/route] ENV check — ADMIN_EMAIL:", ADMIN_EMAIL ?? "MISSING");
  console.log("[order/route] ENV check — SERVER_URL:", SERVER_URL ?? "MISSING");

  try {
    const bodyJSON = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      company,
      website,
      budget,
      message,
    } = bodyJSON;

    console.log("[order/route] Request body:", JSON.stringify({ firstName, lastName, email, phone, service, company, website, budget }, null, 2));

    let userId = null;
    let isNewUser = false;

    // 1. Ensure user exists in CMS (creates + sends credentials email if new)
    if (SERVER_URL) {
      try {
        const userResult = await ensureUser({
          email,
          firstName: firstName || "",
          lastName: lastName || "",
          phone: phone || "",
        });
        userId = userResult.userId;
        isNewUser = userResult.isNewUser;
        console.log(`[order/route] User ${isNewUser ? "created" : "found"}: ${userId}`);
      } catch (userError) {
        console.error("[order/route] ensureUser failed:", userError?.message ?? userError);
      }
    } else {
      console.warn("[order/route] SERVER_URL not set — skipping CMS user creation");
    }

    // 2. Create service order in CMS linked to the user
    if (userId && SERVER_URL) {
      try {
        const orderData = {
          user: userId,
          items: [
            {
              product: service || "Service Request",
              quantity: 1,
              price: 0,
            },
          ],
          total: 0,
          status: "pending",
          paymentMethod: "N/A",
          orderNotes: [
            `Service: ${service}`,
            `Company: ${company}`,
            `Website: ${website}`,
            `Budget: ${budget}`,
            message ? `Message: ${message}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        };

        console.log("[order/route] Creating service order:", JSON.stringify(orderData, null, 2));

        const orderResponse = await fetch(`${SERVER_URL}/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(orderData),
        });

        if (orderResponse.ok) {
          const orderResult = await orderResponse.json();
          console.log("[order/route] Service order created:", orderResult.doc?.id);
        } else {
          const errorText = await orderResponse.text();
          console.error(`[order/route] Failed to create service order: ${orderResponse.status} - ${errorText}`);
        }
      } catch (orderError) {
        console.error("[order/route] Error creating service order:", orderError);
      }
    }

    // 3. Send notification emails
    if (!SENDGRID_API_KEY || !FROM_EMAIL || !ADMIN_EMAIL) {
      console.warn("[order/route] Skipping notification emails — missing env vars");
      return NextResponse.json({
        message: "Order processed but emails skipped (missing config)",
        userId,
        isNewUser,
      });
    }

    const msgRecipient = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: "Order Form Submission",
      text: `Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Service: ${service}
Company name: ${company}
Company website: ${website}
Budget: ${budget}
Message: ${message}${userId ? `\nCMS User ID: ${userId}` : ""}`,
    };

    const msgClient = {
      to: email,
      from: FROM_EMAIL,
      subject: "Your Service Request Has Been Received",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
            <thead>
                <tr>
                    <th style="background-image: url('https://bizorax.com/images/letter-top.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${firstName},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Bizorax! We have received your request for the <span style="color: #008967; font-weight: 600;">${service}</span> and appreciate your interest in our services.</p>
                        <p style="font-size: 16px; line-height: 19px;">Our manager will review your inquiry and contact you shortly to discuss your needs. We aim to respond quickly to ensure you receive the required assistance.</p>
                        <p style="font-size: 16px; line-height: 19px;">If you have any questions or need further assistance, please contact us at <a href="mailto:info@bizorax.com" style="color: #008967; font-weight: 600;text-decoration: underline;">info@bizorax.com</a>.</p>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Bizorax. We look forward to assisting you!</p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>
                            The Bizorax Team
                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                        <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://bizorax.com/" style="color: #008967; text-decoration: none;">Bizorax</a></p>
                    </td>
                </tr>
            </tfoot>
        </table>
      `,
    };

    console.log(`[order/route] Sending admin notification to: ${ADMIN_EMAIL}`);
    try {
      const [adminRes] = await sgMail.send(msgRecipient);
      console.log(`[order/route] Admin email sent — statusCode: ${adminRes.statusCode}`);
    } catch (err) {
      logSendGridError("Admin notification email", err);
      throw err;
    }

    console.log(`[order/route] Sending client notification to: ${email}`);
    try {
      const [clientRes] = await sgMail.send(msgClient);
      console.log(`[order/route] Client email sent — statusCode: ${clientRes.statusCode}`);
    } catch (err) {
      logSendGridError("Client notification email", err);
      throw err;
    }

    console.log("[order/route] All emails sent successfully");
    return NextResponse.json({ message: "Success: emails were sent", userId, isNewUser });
  } catch (error) {
    console.error("[order/route] Unhandled error:", error?.message ?? error);
    if (error?.response) {
      console.error("[order/route] SendGrid response body:", JSON.stringify(error.response.body, null, 2));
    }
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}
