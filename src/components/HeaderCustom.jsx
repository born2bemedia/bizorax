"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import LogoWhite from "@/icons/other/LogoWhite";
import { usePathname } from "next/navigation";
import Twitter from "@/icons/social/Twitter";
import ArrowTopRight from "@/icons/other/ArrowTopRight";
import LangSwitcher from "./LangSwitcher";
import { useAuthStore } from "@/features/account/store/auth";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className="header _white">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo">
                <LogoWhite />
              </Link>
            </div>
            <div className="header__col-02">
              <nav className={`header__nav ${menuOpened ? "_active" : ""}`}>
                <ul className="header__list _white">
                  <li className="header__item">
                    <Link href="/challenges" className="header__link">
                      Challenges
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/capabilities" className="header__link">
                      Capabilities
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/industries" className="header__link">
                      Industries
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/approach" className="header__link">
                      Approach
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/cases" className="header__link">
                      Cases
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/team" className="header__link">
                      Team
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/request" className="header__link">
                      Request
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/insights" className="header__link">
                      Insights
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link href="/contact" className="header__link">
                      Contact
                    </Link>
                  </li>
                  {user ? (
                    <li className="header__item">
                      <Link href="/account" className="header__link">
                        Account
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li className="header__item">
                        <Link href="/sign-in" className="header__link">
                          Sign In
                        </Link>
                      </li>
                      <li className="header__item">
                        <Link href="/sign-up" className="header__link">
                          Sign Up
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
                <ul className="header__socials-mobile">
                  <li className="_facebook">
                    <Link href="https://www.facebook.com/bizorax/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.263 10.868L13.643 8.45396H11.3025V6.88482C11.3025 6.22473 11.6293 5.57973 12.6741 5.57973H13.7532V3.52401C13.1248 3.42381 12.4898 3.36959 11.8534 3.36182C9.92711 3.36182 8.66948 4.51981 8.66948 6.61324V8.45396H6.53418V10.868H8.66948V16.707H11.3025V10.868H13.263Z"
                          fill="#E6DED0"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="_linkedin">
                    <Link href="https://www.linkedin.com/company/bizorax/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.9326 15.4036V8.20012H4.54042V15.4036H6.93285H6.9326ZM5.73701 7.21679C6.57104 7.21679 7.09028 6.66365 7.09028 5.97238C7.07467 5.26536 6.57104 4.72766 5.75287 4.72766C4.93414 4.72766 4.39941 5.26536 4.39941 5.97232C4.39941 6.66359 4.91847 7.21672 5.72134 7.21672H5.73682L5.73701 7.21679ZM8.25671 15.4036H10.6487V11.3813C10.6487 11.1663 10.6643 10.9507 10.7275 10.7971C10.9004 10.3668 11.294 9.92136 11.955 9.92136C12.8203 9.92136 13.1667 10.5819 13.1667 11.5503V15.4036H15.5587V11.2733C15.5587 9.06083 14.3787 8.03125 12.8048 8.03125C11.5145 8.03125 10.9478 8.75308 10.633 9.24471H10.6489V8.20037H8.25683C8.28806 8.87614 8.25665 15.4038 8.25665 15.4038L8.25671 15.4036Z"
                          fill="#E6DED0"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="language">
                <LangSwitcher />
              </div>
               <ul className="header__socials">
               <li className="_facebook">
                    <Link href="https://www.facebook.com/bizorax/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.263 10.868L13.643 8.45396H11.3025V6.88482C11.3025 6.22473 11.6293 5.57973 12.6741 5.57973H13.7532V3.52401C13.1248 3.42381 12.4898 3.36959 11.8534 3.36182C9.92711 3.36182 8.66948 4.51981 8.66948 6.61324V8.45396H6.53418V10.868H8.66948V16.707H11.3025V10.868H13.263Z"
                          fill="#E6DED0"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="_linkedin">
                    <Link href="https://www.linkedin.com/company/bizorax/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.9326 15.4036V8.20012H4.54042V15.4036H6.93285H6.9326ZM5.73701 7.21679C6.57104 7.21679 7.09028 6.66365 7.09028 5.97238C7.07467 5.26536 6.57104 4.72766 5.75287 4.72766C4.93414 4.72766 4.39941 5.26536 4.39941 5.97232C4.39941 6.66359 4.91847 7.21672 5.72134 7.21672H5.73682L5.73701 7.21679ZM8.25671 15.4036H10.6487V11.3813C10.6487 11.1663 10.6643 10.9507 10.7275 10.7971C10.9004 10.3668 11.294 9.92136 11.955 9.92136C12.8203 9.92136 13.1667 10.5819 13.1667 11.5503V15.4036H15.5587V11.2733C15.5587 9.06083 14.3787 8.03125 12.8048 8.03125C11.5145 8.03125 10.9478 8.75308 10.633 9.24471H10.6489V8.20037H8.25683C8.28806 8.87614 8.25665 15.4038 8.25665 15.4038L8.25671 15.4036Z"
                          fill="#E6DED0"
                        />
                      </svg>
                    </Link>
                  </li>
              </ul> 
              <button
                onClick={() => menuOpen()}
                className={`header__menu-btn ${menuOpened ? "_active" : ""}`}
              >
                {!menuOpened ? (
                  <img src="/images/menu-open-white.svg" alt="menu-burger" />
                ) : (
                  <img alt="menu-burger" src="/images/menu-close-white.svg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
