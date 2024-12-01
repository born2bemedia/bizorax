"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__container _container">
          <div className="home-hero__body">
            <div className="home-hero__content">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.1}
                className="home-hero__tile">
                Transforming Challenges Into Wins
              </motion.h1>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
                className="home-hero__text">
                Discover how Bizorax drives measurable <br /> growth for your business.
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="home-hero__buttons">
                <Link href="/capabilities" className="home-hero__link">Capabilities</Link>
                <Link href="/request" className="home-hero__link">Request a Consultation</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;