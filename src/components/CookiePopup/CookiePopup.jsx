'use client';

import { useEffect, useState } from 'react';

import st from './CookiePopup.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    console.log(hasAcceptedCookies);

    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <h2>Cookie settings</h2>
      <p>
      Cookies help us improve our website. By clicking 'Accept,' you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our{' '}
        <Link href="/cookie-policy" className={st.link}>
          Cookie Policy
        </Link>
        .
      </p>
      <div className={st.buttons}>
        <button onClick={handleAccept} className={st.decline}>
          Decline
        </button>
        <button onClick={handleAccept} className={st.accept}>
          Accept
        </button>
      </div>
    </div>
  );
};
