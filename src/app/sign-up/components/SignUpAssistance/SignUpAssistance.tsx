'use client';

import Link from 'next/link';

import styles from './SignUpAssistance.module.scss';

export const SignUpAssistance = () => {
  return (
    <section className={styles.sign_up_assistance} id="home-form">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/request-bg.png"
        alt=""
        aria-hidden="true"
        className={styles.sign_up_assistance__bg}
      />

      <div className={styles.sign_up_assistance__inner}>
        <h2 className={styles.sign_up_assistance__title}>
          Need Assistance?
        </h2>

        <div className={styles.sign_up_assistance__row}>
          <div className={styles.sign_up_assistance__left}>
            <p className={styles.sign_up_assistance__desc}>
              We’re here to make sure you can confidently trust us with your website development, hosting, and support. Reach out! Our team will respond as soon as possible.
            </p>
            <p className={styles.sign_up_assistance__team}>
              Insigmark Team
            </p>
          </div>

          <div className={styles.sign_up_assistance__right}>
            <div className={styles.sign_up_assistance__card}>
              <p className={styles.sign_up_assistance__card_title}>
                Tell us what you need
              </p>
              <p className={styles.sign_up_assistance__card_text}>
                If you already know the kind of support you need, send us a request and we will follow up with the right next steps.
              </p>
              <Link href="/contact" className={styles.sign_up_assistance__card_button}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
