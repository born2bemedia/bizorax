import { buildFormConfirmationEmail, escapeHtml } from './baseTemplate';

const SIGN_IN_URL = 'https://bizorax.com/sign-in';

type RegistrationWelcomeEmailOptions = {
  firstName: string;
  email?: string;
  password?: string;
};

export function getRegistrationWelcomeEmail({
  firstName,
  email,
  password,
}: RegistrationWelcomeEmailOptions): string {
  const safeEmail = escapeHtml(email);
  const safePassword = escapeHtml(password);
  const hasCredentials = Boolean(email && password);

  const credentialsHtml = hasCredentials
    ? `
      <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 19px;">
        Your login details:
      </p>
      <div style="margin: 0 0 20px 0; padding: 16px; background: #f5f5f5; border-left: 3px solid #008967;">
        <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 19px;">
          Login: <strong>${safeEmail}</strong>
        </p>
        <p style="margin: 0; font-size: 16px; line-height: 19px;">
          Password: <strong>${safePassword}</strong>
        </p>
      </div>
    `
    : '';

  const contentHtml = `
    <p style="font-size: 16px; line-height: 19px;">
      Thank you for joining Bizorax! Your account has been successfully created, and you are now
      ready to manage your orders and access your services.
    </p>
    ${credentialsHtml}
    <p style="font-size: 16px; line-height: 19px;">
      You can sign in to your account at any time to update your profile and manage your services.
    </p>
    <p style="font-size: 16px; line-height: 19px;">
      If you did not create this account, please contact our support at
      <a href="mailto:info@bizorax.com" style="color: #008967; font-weight: 600; text-decoration: underline;">info@bizorax.com</a>.
    </p>
    <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
      Best regards,<br>The Bizorax Team
    </p>
  `;

  return buildFormConfirmationEmail({
    fullName: firstName,
    contentHtml,
    cta: {
      text: 'Sign In',
      href: SIGN_IN_URL,
    },
    title: 'Welcome to Bizorax',
  });
}
