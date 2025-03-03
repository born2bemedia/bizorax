"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import LogoWhite from "@/icons/other/LogoWhite";
import ArrowTop from "@/icons/other/ArrowTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__col-01">
              <Link href="/" className="footer__logo"><LogoWhite /></Link>
               <ul className="footer__contacts">
                <li className="footer__contact">
                  Email:
                  <Link href="mailto:info@bizorax.com" className="footer__contact-link">info@bizorax.com</Link>
                </li>
                <li className="footer__contact">
                  Phone:
                  <Link href="tel:+447479028330" className="footer__contact-link">+447479028330</Link>
                </li>
                <li className="footer__contact">
                  Registered address:
                  <Link href="#" className="footer__contact-link">2nd Floor College House, 17 King Edwards Road, Ruislip, London, <br /> United Kingdom, HA4 7AE</Link>
                </li>
                <li className="footer__contact">
                  Office address:
                  <Link href="#" className="footer__contact-link">2nd floor, 39 Ludgate Hill, London EC4M 7JN, United Kingdom</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-02">
              <div className="footer__col">
                <h3 className="footer__label">Expertise</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link href="/challenges" className="footer__link">Challenges</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/capabilities" className="footer__link">Capabilities</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/industries" className="footer__link">Industries</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/approach" className="footer__link">Approach</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h3 className="footer__label">Company</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link href="/cases" className="footer__link">Cases</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/team" className="footer__link">Team</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/insights" className="footer__link">Insights</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="/contact" className="footer__link">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h3 className="footer__label">Get a Solution</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link href="/request" className="footer__link">Request</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <ul className="footer__socials">
                  <li className="footer__social">
                    <Link href="#" className="footer__social-link">
                      Facebook
                      <ArrowTop />
                    </Link>
                  </li>
                  <li className="footer__social">
                    <Link href="#" className="footer__social-link">
                      Instagram
                      <ArrowTop />
                    </Link>
                  </li>
                  <li className="footer__social">
                    <Link href="#" className="footer__social-link">
                      Twitter
                      <ArrowTop />
                    </Link>
                  </li>
                </ul>
                <ul className="footer__politics">
                  <li className="footer__policy">
                    <Link href="/terms-and-conditions" className="footer__policy-link">Terms and Conditions</Link>
                  </li>
                  <li className="footer__policy">
                    <Link href="/refund-policy" className="footer__policy-link">Refund Policy</Link>
                  </li>
                  <li className="footer__policy">
                    <Link href="/cookie-policy" className="footer__policy-link">Cookie Policy</Link>
                  </li>
                  <li className="footer__policy">
                    <Link href="/privacy-policy" className="footer__policy-link">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__copy">© {currentYear} Bizorax. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;