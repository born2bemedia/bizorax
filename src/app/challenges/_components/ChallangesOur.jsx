"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesOur = () => {
    return (
        <>
            <section className="challanges-our">
                <div className="challanges-our__container _container">
                    <div className="challanges-our__body">
                        <div className="challanges-our__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="challanges-our__title">
                                Our Proven Approach to Overcoming Roadblocks
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="challanges-our__text">
                                At Bizorax, we go beyond identifying problems — we partner with you to implement solutions that yield measurable results. Our success is built on innovative methodologies, cutting-edge tools, and a deep understanding of diverse industries.
                            </motion.div>
                        </div>
                        <div className="challanges-our__col-02">
                            <div className="challanges-our__items">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.1}
                                    className="challanges-our__item">
                                    <div className="challanges-our__number">1</div>
                                    <div className="challanges-our__warpper">
                                        <h3 className="challanges-our__label">Tailored Assessments</h3>
                                        <div className="challanges-our__subtext">Conducting a deep dive into your unique challenges and opportunities.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.2}
                                    className="challanges-our__item">
                                    <div className="challanges-our__number">2</div>
                                    <div className="challanges-our__warpper">
                                        <h3 className="challanges-our__label">Innovative Frameworks</h3>
                                        <div className="challanges-our__subtext">Utilising tools like SWOT analysis, Lean Six Sigma, and OKRs to structure effective strategies.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="challanges-our__item">
                                    <div className="challanges-our__number">3</div>
                                    <div className="challanges-our__warpper">
                                        <h3 className="challanges-our__label">Technology Integration</h3>
                                        <div className="challanges-our__subtext">Seamlessly incorporating platforms like Tableau, Power BI, and Asana to enhance efficiency.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.4}
                                    className="challanges-our__item">
                                    <div className="challanges-our__number">4</div>
                                    <div className="challanges-our__warpper">
                                        <h3 className="challanges-our__label">Strategic Execution</h3>
                                        <div className="challanges-our__subtext">Implementing strategies in partnership with your team to align with your business objectives.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.5}
                                    className="challanges-our__item">
                                    <div className="challanges-our__number">5</div>
                                    <div className="challanges-our__warpper">
                                        <h3 className="challanges-our__label">Ongoing Support</h3>
                                        <div className="challanges-our__subtext">Continuously optimising solutions to adapt to evolving needs.</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesOur;