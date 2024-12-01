"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesItems = () => {
    return (
        <>
            <section className="challanges-items">
                <div className="challanges-items__container _container">
                    <div className="challanges-items__body">
                        <div className="challanges-items__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="challanges-items__item">
                                <div className="wrapper">
                                    <h2 className="title">Adapting to rapidly shifting market conditions</h2>
                                    <div className="text">Sudden changes in customer preferences, competition, or regulations can disrupt operations.</div>
                                </div>
                                <div className="image"><img src="/images/challanges/img-01.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="challanges-items__item">
                                <div className="wrapper">
                                    <h2 className="title">Navigating complex digital transformations and integrating modern technologies:</h2>
                                    <div className="text">Implementing technology without disrupting workflows requires careful planning.</div>
                                </div>
                                <div className="image"><img src="/images/challanges/img-02.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="challanges-items__item">
                                <div className="wrapper">
                                    <h2 className="title">Achieving scalable growth without compromising efficiency</h2>
                                    <div className="text">Expanding too quickly often leads to bottlenecks or quality compromises.</div>
                                </div>
                                <div className="image"><img src="/images/challanges/img-03.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="challanges-items__item">
                                <div className="wrapper">
                                    <h2 className="title">Attracting and retaining skilled talent in competitive industries</h2>
                                    <div className="text">Finding and keeping the right people is critical for long-term success.</div>
                                </div>
                                <div className="image"><img src="/images/challanges/img-04.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.5}
                                className="challanges-items__item">
                                <div className="wrapper">
                                    <h2 className="title">Streamlining operational processes to reduce costs and enhance productivity</h2>
                                    <div className="text">Identifying inefficiencies is the first step to sustainable growth.</div>
                                </div>
                                <div className="image"><img src="/images/challanges/img-05.jpg" alt="image" /></div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="challanges-items__text">
                            Businesses that address operational inefficiencies see an average ROI increase of 30% within the first year.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesItems;