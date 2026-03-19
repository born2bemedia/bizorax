'use client';

import { useEffect, useMemo, useState } from 'react';

import type { Order } from '@/features/account/model/orders.types';

import styles from './MyOrdersPage.module.scss';

type OrderRow = {
  orderId: string;
  orderNumber: string;
  date: string;
  service: string;
  total: number;
  paymentMethod: string;
  statusLabel: string;
  statusClassName: string;
  invoiceDownloadUrl?: string | null;
  deliverablesDownloadUrl?: string | null;
};

function formatDate(createdAt: string): string {
  const date = new Date(createdAt);

  if (Number.isNaN(date.getTime())) {
    return createdAt;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatNumber(value: number): string {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getServiceName(order: Order): string {
  const products = order.items
    ?.map((item) => item.product?.trim())
    .filter(Boolean) as string[] | undefined;

  if (!products?.length) {
    return '—';
  }

  return products.join(', ');
}

function getStatusPresentation(status: string) {
  const normalized = status.toLowerCase();

  if (normalized === 'completed') {
    return {
      label: 'Delivered',
      className: styles.status_delivered,
    };
  }

  if (normalized === 'in progress') {
    return {
      label: 'Paid In Progress',
      className: styles.status_progress,
    };
  }

  if (normalized === 'cancelled') {
    return {
      label: 'Cancelled',
      className: styles.status_cancelled,
    };
  }

  return {
    label: 'Unpaid',
    className: styles.status_unpaid,
  };
}

export const MyOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const response = await fetch('/api/account/orders', {
          credentials: 'include',
        });
        const data = (await response.json()) as { orders?: Order[] };

        if (!cancelled) {
          setOrders(data.orders ?? []);
        }
      } catch {
        if (!cancelled) {
          setOrders([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const rows = useMemo<OrderRow[]>(() => {
    return orders.map((order) => {
      const status = getStatusPresentation(order.status ?? 'pending');

      return {
        orderId: order.id,
        orderNumber: order.orderNumber ?? `#${order.id.slice(0, 6).toUpperCase()}`,
        date: formatDate(order.createdAt),
        service: getServiceName(order),
        total: order.total ?? 0,
        paymentMethod: order.paymentMethod || '—',
        statusLabel: status.label,
        statusClassName: status.className,
        invoiceDownloadUrl: order.invoiceDownloadUrl,
        deliverablesDownloadUrl: order.deliverablesDownloadUrl,
      };
    });
  }, [orders]);

  const labels = {
    orderId: 'Order ID',
    serviceOrdered: 'Service',
    total: 'Total',
    orderDate: 'Order Date',
    paymentMethod: 'Payment Method',
    status: 'Status',
    invoice: 'Invoice',
    deliverables: 'Deliverables (if applicable)',
    download: 'Download',
  };

  if (loading) {
    return <p className={styles.feedbackText}>Loading requests...</p>;
  }

  if (!rows.length) {
    return <p className={styles.feedbackText}>You have no requests yet.</p>;
  }

  return (
    <div className={styles.orders}>
      <div className={styles.desktopTable}>
        <div className={styles.tableHeader}>
          <div>{labels.orderId}</div>
          <div>{labels.serviceOrdered}</div>
          <div>{labels.orderDate}</div>
          <div>{labels.total}</div>
          <div>{labels.paymentMethod}</div>
          <div>{labels.status}</div>
          <div>{labels.invoice}</div>
          <div>{labels.deliverables}</div>
        </div>

        {rows.map((row) => {
          const invoiceAvailable = Boolean(row.invoiceDownloadUrl);

          return (
            <div key={row.orderId} className={styles.tableRow}>
              <div>{row.orderNumber}</div>
              <div className={styles.serviceCell}>{row.service}</div>
              <div>{row.date}</div>
              <div>€{formatNumber(row.total)}</div>
              <div>{row.paymentMethod}</div>
              <div className={`${styles.statusCell} ${row.statusClassName}`}>
                {row.statusLabel}
              </div>
              <div className={styles.invoiceCell}>
                {invoiceAvailable ? (
                  <a
                    href={row.invoiceDownloadUrl ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    {labels.download}
                  </a>
                ) : (
                  <span className={`${styles.downloadButton} ${styles.downloadButton_disabled}`}>
                    {labels.download}
                  </span>
                )}
              </div>
              <div className={styles.invoiceCell}>
                {row.deliverablesDownloadUrl ? (
                  <a
                    href={row.deliverablesDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deliverableLink}
                  >
                    Download
                  </a>
                ) : (
                  <span className={`${styles.downloadButton} ${styles.downloadButton_disabled}`}>
                    {labels.download}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.mobileCards}>
        {rows.map((row) => {
          const invoiceAvailable = Boolean(row.invoiceDownloadUrl);

          return (
            <article key={row.orderId} className={styles.card}>
              <div className={styles.cardRow}>
                <div>
                  <span className={styles.cardLabel}>{labels.orderId}</span>
                  <p className={styles.cardValue}>{row.orderNumber}</p>
                </div>
                <div>
                  <span className={styles.cardLabel}>{labels.orderDate}</span>
                  <p className={styles.cardValue}>{row.date}</p>
                </div>
              </div>

              <div>
                <span className={styles.cardLabel}>{labels.serviceOrdered}</span>
                <p className={styles.cardService}>{row.service}</p>
              </div>

              <div className={styles.cardRow}>
                <div>
                  <span className={styles.cardLabel}>{labels.total}</span>
                  <p className={styles.cardValue}>€{formatNumber(row.total)}</p>
                </div>
                <div>
                  <span className={styles.cardLabel}>{labels.paymentMethod}</span>
                  <p className={styles.cardValue}>{row.paymentMethod}</p>
                </div>
              </div>

              <div className={styles.cardActions}>
                <div className={`${styles.statusCell} ${row.statusClassName}`}>
                  {row.statusLabel}
                </div>

                {invoiceAvailable ? (
                  <a
                    href={row.invoiceDownloadUrl ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    {labels.download}
                  </a>
                ) : (
                  <span className={`${styles.downloadButton} ${styles.downloadButton_disabled}`}>
                    {labels.download}
                  </span>
                )}
              </div>

              <div>
                <span className={styles.cardLabel}>{labels.deliverables}</span>
                {row.deliverablesDownloadUrl ? (
                  <a
                    href={row.deliverablesDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deliverableLink}
                  >
                    Download
                  </a>
                ) : (
                  <p className={styles.cardValue}>–</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
