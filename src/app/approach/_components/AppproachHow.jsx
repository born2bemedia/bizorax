"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";

const AppproachHow = () => {

    return (
        <section className="approach-how">
            <div className="approach-how__container _container">
                <div className="approach-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="approach-how__title">
                        Your Partner in Business Transformation
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="approach-how__desc">When you choose Bizorax, you’re not just hiring a consulting firm but gaining a trusted partner dedicated to your success.</motion.div>
                    <div className="approach-how__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-how__item">
                            <div className="approach-how__number">20%</div>
                            <div className="approach-how__text">industries served with tailored solutions.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="approach-how__item">
                            <div className="approach-how__number">50+</div>
                            <div className="approach-how__text">of clients report significant performance improvements within 6 months.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="approach-how__item">
                            <div className="approach-how__number">90%</div>
                            <div className="approach-how__text">expert consultants specialising in strategy, operations, and growth.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="approach-how__item">
                            <div className="approach-how__number">€12M+</div>
                            <div className="approach-how__text">lient satisfaction with our projects so far.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppproachHow;