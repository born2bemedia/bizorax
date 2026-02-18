"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const IndustriesOur = () => {
    return (
        <>
            <section className="industries-our">
                <div className="industries-our__container _container">
                    <div className="industries-our__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="industries-our__title">
                            Our Commitment
                        </motion.h2>
                        <div className="industries-our__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="industries-our__item">
                                <div className="industries-our__icon"><img src="/images/industries/industries-icon-01.svg" alt="image" /></div>
                                <div className="industries-our__text">To understand the intricacies of your industry.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="industries-our__item">
                                <div className="industries-our__icon"><img src="/images/industries/industries-icon-02.svg" alt="image" /></div>
                                <div className="industries-our__text">To deliver measurable results that drive long-term success.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="industries-our__item">
                                <div className="industries-our__icon"><img src="/images/industries/industries-icon-03.svg" alt="image" /></div>
                                <div className="industries-our__text">To provide innovative solutions tailored to your unique challenges.</div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-our__desc">
                            90% of businesses we work with report significant improvements within the first year.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesOur;