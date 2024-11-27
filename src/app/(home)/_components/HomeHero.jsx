"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const HomeHero = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile
    ? "/images/home/bizorax-img-01.jpg" /* Mobile */
    : "/images/home/bizorax-img-01.jpg"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={550} className="parallax-custom">
      <section className="home-hero">
        <div className="home-hero__container _container">
          <div className="home-hero__body">
            <div className="home-hero__content">
              <h1 className="home-hero__tile">Transforming Challenges Into Wins</h1>
              <div className="home-hero__text">Discover how Bizorax drives measurable <br /> growth for your business.</div>
              <div className="home-hero__buttons">
                <Link href="/capabilities" className="home-hero__link">Capabilities</Link>
                <Link href="/request" className="home-hero__link">Request a Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default HomeHero;