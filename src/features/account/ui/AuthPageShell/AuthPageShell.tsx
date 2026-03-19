'use client';

import type { ReactNode } from 'react';

import styles from './AuthPageShell.module.scss';

type AuthPageShellProps = {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

export const AuthPageShell = ({
  title,
  description,
  children,
}: AuthPageShellProps) => {
  return (
    <>
      <section className={styles.auth_page}>
        <div className="_container">
          <div className={styles.auth_page__inner}>
            <div className={styles.auth_page__copy}>
              <h1 className={styles.auth_page__title}>{title}</h1>
            </div>

            <div className={styles.auth_page__content}>
              {description ? (
                <p className={styles.auth_page__description}>{description}</p>
              ) : null}
              {children}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.auth_page__image_strip} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/img-01.jpg"
          alt=""
          className={styles.auth_page__image}
        />
      </div>
    </>
  );
};
