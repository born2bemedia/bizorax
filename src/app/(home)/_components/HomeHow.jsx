"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";
import CountUpOnViewport from "@/components/CountUpOnViewport";

const HomeHow = () => {

    return (
        <section className="home-how">
            <div className="home-how__container _container">
                <div className="home-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-how__title">How We Improve Your Business</motion.h2>
                    <Link href="/team" className="home-how__link">About Our Team <ArrowRight /></Link>
                    <div className="home-how__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-how__item">
                            <div className="home-how__number"><CountUpOnViewport targetNumber={20} />%</div>
                            <div className="home-how__text">industries served with tailored solutions.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-how__item">
                            <div className="home-how__number"><CountUpOnViewport targetNumber={50} />+</div>
                            <div className="home-how__text">of clients report significant performance improvements within 6 months.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-how__item">
                            <div className="home-how__number"><CountUpOnViewport targetNumber={90} />%</div>
                            <div className="home-how__text">expert consultants specialising in strategy, operations, and growth.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-how__item">
                            <div className="home-how__number">€<CountUpOnViewport targetNumber={12} />M+</div>
                            <div className="home-how__text">lient satisfaction with our projects so far.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHow;