"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ApproachOur = () => {
    return (
        <>
            <section className="approach-our">
                <div className="approach-our__container _container">
                    <div className="approach-our__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-our__col-01">
                            <div className="approach-our__wrapper">
                                <h2 className="approach-our__title">Our Step-by-Step Approach</h2>
                                <div className="approach-our__text">The Bizorax crew follows a structured yet flexible process that ensures every project is tailored to your business goals.</div>
                            </div>
                        </motion.div>
                        <div className="approach-our__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="approach-our__row">
                                <div className="approach-our__number">1</div>
                                <div className="approach-our__col">
                                    <h3 className="approach-our__label">Discovery</h3>
                                    <ul className="approach-our__list">
                                        <li className="approach-our__li">Collaborate with your team to uncover goals, challenges, and opportunities.</li>
                                        <li className="approach-our__li">Conduct stakeholder interviews, market research, and competitor analysis.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="approach-our__row">
                                <div className="approach-our__number">2</div>
                                <div className="approach-our__col">
                                    <h3 className="approach-our__label">Assessment</h3>
                                    <ul className="approach-our__list">
                                        <li className="approach-our__li">Perform a deep dive into operational inefficiencies, industry trends, and potential risks.</li>
                                        <li className="approach-our__li">Use tools like SWOT analysis and industry benchmarks to pinpoint areas for improvement.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="approach-our__row">
                                <div className="approach-our__number">3</div>
                                <div className="approach-our__col">
                                    <h3 className="approach-our__label">Strategy Development</h3>
                                    <ul className="approach-our__list">
                                        <li className="approach-our__li">Design a detailed roadmap that aligns with your business objectives.</li>
                                        <li className="approach-our__li">Develop measurable KPIs to track progress and success.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="approach-our__row">
                                <div className="approach-our__number">4</div>
                                <div className="approach-our__col">
                                    <h3 className="approach-our__label">Implementation</h3>
                                    <ul className="approach-our__list">
                                        <li className="approach-our__li">Execute the strategy with precision, using cutting-edge tools and proven frameworks.</li>
                                        <li className="approach-our__li">Work closely with your team to ensure seamless integration with existing processes.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.5}
                                className="approach-our__row">
                                <div className="approach-our__number">5</div>
                                <div className="approach-our__col">
                                    <h3 className="approach-our__label">Evaluation & Optimization</h3>
                                    <ul className="approach-our__list">
                                        <li className="approach-our__li">Continuously monitor progress and refine strategies based on real-time data.</li>
                                        <li className="approach-our__li">Provide comprehensive reports that highlight achievements and areas for further growth.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachOur;