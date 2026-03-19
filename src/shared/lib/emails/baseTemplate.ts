const BASE_URL = 'https://bizorax.com';
const EMAIL = 'info@bizorax.com';

export function escapeHtml(text: string | undefined | null): string {
  if (text == null) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export interface EmailTemplateOptions {
  fullName: string;
  contentHtml: string;
  cta?: { text: string; href: string };
  title?: string;
}

export function buildFormConfirmationEmail(options: EmailTemplateOptions): string {
  const { fullName, contentHtml, cta, title = 'Bizorax' } = options;
  const safeFirstName = escapeHtml(fullName.split(' ')[0] || fullName);

  const ctaHtml = cta
    ? `
    <p style="margin: 0 0 24px 0;">
      <a href="${escapeHtml(cta.href)}"
        style="display: inline-block; padding: 12px 18px; background-color: #008967; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 2px;">
        ${escapeHtml(cta.text)}
      </a>
    </p>`
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; color: #0A0A0A; font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0"
    style="width: 100%; max-width: 640px; margin: 0 auto; border-collapse: collapse; border-right: 1px solid #222222; border-left: 1px solid #222222;">
    <thead>
      <tr>
        <th style="background-image: url('${BASE_URL}/images/letter-top.jpg'); background-size: cover; background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color: #0A0A0A;">
          <h2 style="text-align: left; font-size: 20px;">Dear ${safeFirstName},</h2>
          ${contentHtml}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif; padding: 24px 0;">
          <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center; margin: 0;">
            Thanks for using <a href="${BASE_URL}/" style="color: #008967; text-decoration: none;">Bizorax</a>
          </p>
        </td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
`;
}
