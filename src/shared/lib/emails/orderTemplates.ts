import { buildFormConfirmationEmail, escapeHtml } from './baseTemplate';

type OrderItem = {
  title: string;
  quantity: number;
  price: number;
};

type OrderConfirmationEmailOptions = {
  fullName: string;
  orderNumber: string;
  orderDate: string;
  total: number;
  items: OrderItem[];
};

export function getOrderConfirmationEmail({
  fullName,
  orderNumber,
  orderDate,
  total,
  items,
}: OrderConfirmationEmailOptions): string {
  const itemsHtml = items
    .map(
      (item) =>
        `<tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;">${escapeHtml(item.title)}</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; text-align: right;">€${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
    )
    .join('');

  const contentHtml = `
    <p style="font-size: 16px; line-height: 19px;">
      Thank you for your order! We have received your request and will begin processing it shortly.
    </p>
    <div style="margin: 0 0 20px 0; padding: 16px; background: #f5f5f5; border-left: 3px solid #008967;">
      <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 19px;">
        Order Number: <strong>${escapeHtml(orderNumber)}</strong>
      </p>
      <p style="margin: 0; font-size: 16px; line-height: 19px;">
        Date: <strong>${escapeHtml(orderDate)}</strong>
      </p>
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 0 20px 0; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="padding: 8px 0; border-bottom: 2px solid #222; font-size: 14px; text-align: left;">Item</th>
          <th style="padding: 8px 0; border-bottom: 2px solid #222; font-size: 14px; text-align: center;">Qty</th>
          <th style="padding: 8px 0; border-bottom: 2px solid #222; font-size: 14px; text-align: right;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
        <tr>
          <td colspan="2" style="padding: 12px 0 0 0; font-size: 16px; font-weight: 600; text-align: right;">Total:</td>
          <td style="padding: 12px 0 0 0; font-size: 16px; font-weight: 600; text-align: right;">€${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <p style="font-size: 16px; line-height: 19px;">
      If you have any questions about your order, please contact us at
      <a href="mailto:info@bizorax.com" style="color: #008967; font-weight: 600; text-decoration: underline;">info@bizorax.com</a>.
    </p>
    <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
      Best regards,<br>The Bizorax Team
    </p>
  `;

  return buildFormConfirmationEmail({
    fullName,
    contentHtml,
    title: `Order Confirmation - ${orderNumber}`,
  });
}
