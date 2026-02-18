"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ApproachWhat = () => {
    return (
        <>
            <section className="approach-what">
                <div className="approach-what__container _container">
                    <div className="approach-what__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-what__title">
                            What Makes Bizorax Different?
                        </motion.h2>
                        <div className="approach-what__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="approach-what__item">
                                <div className="approach-what__icon"><img src="/images/approach/icon-01.svg" alt="icon" /></div>
                                <div className="approach-what__wrapper">
                                    <h3 className="approach-what__label">Empathy-Driven <br /> Consulting</h3>
                                    <div className="approach-what__text">We immerse ourselves in your business to truly understand its pain points.</div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="approach-what__item">
                                <div className="approach-what__icon"><img src="/images/approach/icon-02.svg" alt="icon" /></div>
                                <div className="approach-what__wrapper">
                                    <h3 className="approach-what__label">Data-Backed <br /> Insights</h3>
                                    <div className="approach-what__text">Our decisions are rooted in rigorous analysis and actionable insights.</div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="approach-what__item">
                                <div className="approach-what__icon"><img src="/images/approach/icon-03.svg" alt="icon" /></div>
                                <div className="approach-what__wrapper">
                                    <h3 className="approach-what__label">Future-Ready <br /> Strategies</h3>
                                    <div className="approach-what__text">Our approach ensures your business stays competitive in a rapidly changing market.</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachWhat;