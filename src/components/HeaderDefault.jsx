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

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();

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
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo"><LogoWhite /></Link>
            </div>
            <div className="header__col-02">
              <nav className={`header__nav ${menuOpened ? "_active" : ""}`}>
                <ul className="header__list">
                  <li className="header__item">
                    <Link href="/challenges" className="header__link">Challenges</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/capabilities" className="header__link">Capabilities</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/industries" className="header__link">Industries</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/approach" className="header__link">Approach</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/cases" className="header__link">Cases</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/team" className="header__link">Team</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/request" className="header__link">Request</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/insights" className="header__link">Insights</Link>
                  </li>
                  <li className="header__item">
                    <Link href="/contact" className="header__link">Contact</Link>
                  </li>
                </ul>
                <ul className="header__socials-mobile">
                  <li className="_facebook">
                    <Link href="#">Facebook <ArrowTopRight /> </Link>
                  </li>
                  <li className="_twitter">
                    <Link href="#">Instagram <ArrowTopRight /></Link>
                  </li>
                  <li className="_instagram">
                    <Link href="#">Twitter <ArrowTopRight /></Link>
                  </li>
                </ul>
              </nav>
              <ul className="header__socials">
                <li className="header__social _facebook">
                  <Link href="#"><Facebook /></Link>
                </li>
                <li className="header__social _twitter">
                  <Link href="#"><Twitter /></Link>
                </li>
                <li className="header__social _instagram">
                  <Link href="#"><Instagram /></Link>
                </li>
              </ul>
              <button onClick={() => menuOpen()} className={`header__menu-btn ${menuOpened ? "_active" : ""}`}>
                {!menuOpened ? (
                  <img src="/images/menu-open.svg" alt="menu-burger" />
                ) : (
                  <img alt="menu-burger" src="/images/menu-close.svg" />
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
