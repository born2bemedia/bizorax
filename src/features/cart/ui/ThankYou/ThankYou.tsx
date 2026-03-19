'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import type { CartItem } from '@/features/cart/store/cart';

import { WEBSITE_EMAIL } from '@/shared/lib/constants/constants';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './ThankYou.module.scss';

type LastOrder = {
  orderNumber: string;
  items: CartItem[];
  total: number;
};

const formatPrice = (value: number) =>
  `€${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const ThankYou = () => {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    try {
      const raw = sessionStorage.getItem('lastOrder');
      if (raw) {
        const parsed = JSON.parse(raw) as LastOrder;
        queueMicrotask(() => setOrder(parsed));
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Thank you for partnering with Insigmark!
        </h1>
        <p className={styles.text}>
          We're thrilled to begin this journey with you and help turn your business vision into something impactful and sustainable.
        </p>
        <div className={styles.content}>
          {order && order.items.length > 0 && (
            <div className={styles.orderDetails}>
              <h2 className={styles.orderTitle}>
                Your Order Details:
              </h2>
              <table className={styles.orderTable}>
                <thead>
                  <tr>
                    <th>Service:</th>
                    <th>Quantity:</th>
                    <th>Order ID:</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td data-label="Service:">{item.title}</td>
                      <td data-label="Quantity:">{item.quantity}</td>
                      <td data-label="Order ID:">
                        #{order.orderNumber}
                      </td>
                      <td data-label="Total Amount">
                        {formatPrice(item.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className={styles.textWrapper}>
            <p>
              Your order is being processed, and you'll receive the payment details via email shortly. Make sure your contact info is up to date, so we can send everything right to you.
              <br />
              If you have any questions or just want to chat about next steps, feel free to reach out to us at{' '}
              <a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>. <br />
              We're here for you!
            </p>
            <Button type="link" variant="white" url="/">
              Back to Home Page
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
