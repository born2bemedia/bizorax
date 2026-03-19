'use client';

import Link from 'next/link';

import styles from './AuthPageNotice.module.scss';

type AuthPageNoticeProps = {
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export const AuthPageNotice = ({
  description,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: AuthPageNoticeProps) => {
  return (
    <div className={styles.notice}>
      <p className={styles.notice__description}>{description}</p>

      <div className={styles.notice__actions}>
        <Link href={primaryCtaHref} className={styles.notice__button}>
          {primaryCtaLabel}
        </Link>

        {secondaryCtaLabel && secondaryCtaHref ? (
          <Link href={secondaryCtaHref} className={styles.notice__link}>
            {secondaryCtaLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
};
