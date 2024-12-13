"use client";
import React, { useState, useEffect } from "react";
import "@/styles/insights.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";

const InsightsMain = () => {
    return (
        <>
            <section className="insight-main">
                <div className="insight-main__container _container">
                    <div className="insight-main__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="insight-main__title">Recent Blog Posts</motion.h2>
                        <div className="insight-main__content">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="insight-main__col-01">
                                <Link href="#" className="insight-main__link-main">
                                    <img src="/images/insights/img-01.jpg" alt="image" className="image" />
                                    <h2 className="title">Navigating Market Disruptions <br /> in 2025</h2>
                                    <div className="text">Uncover strategies to adapt to unpredictable market shifts, minimise risks, and turn challenges into opportunities for growth.</div>
                                </Link>
                            </motion.div>
                            <div className="insight-main__col-02">
                                <div className="insight-main__items">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={0.1}
                                        className="insight-main__item">
                                        <h3 className="insight-main__label">Navigating Market Disruptions in 2025</h3>
                                        <Link href="#" className="insight-main__link">Read more <ArrowRight /></Link>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={0.2}
                                        className="insight-main__item">
                                        <h3 className="insight-main__label">Top 5 Digital Tools to Streamline Business Operations</h3>
                                        <Link href="#" className="insight-main__link">Read more <ArrowRight /></Link>
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={0.3}
                                        className="insight-main__item">
                                        <h3 className="insight-main__label">Future-Proofing Your Business: Strategies for 2025 and Beyond</h3>
                                        <Link href="#" className="insight-main__link">Read more <ArrowRight /></Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="insight-main__articles">
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">Navigating Market Disruptions in 2025</h3>
                                <div className="text">Uncover strategies to adapt to unpredictable market shifts, minimise risks, and turn challenges into opportunities for growth.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">Top 5 Digital Tools to Streamline Business Operations</h3>
                                <div className="text">Discover the must-have tools that enhance efficiency, improve workflows, and empower your team to achieve more in less time.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">Future-Proofing Your Business: Strategies for 2025 and Beyond</h3>
                                <div className="text">Learn how to prepare your business for upcoming technological advancements, market changes, and emerging trends.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">The Rise of AI in Business: Opportunities and Challenges in 2025</h3>
                                <div className="text">Explore how artificial intelligence reshapes industries and how businesses can leverage it effectively.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">Sustainable Business Practices: Balancing Profit and Responsibility</h3>
                                <div className="text">Learn how incorporating sustainability can drive long-term success and customer loyalty.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                            <Link href="#" className="insight-main__article">
                                <h3 className="title">Mastering Change Management: Thriving in a Rapidly Evolving World</h3>
                                <div className="text">Discover strategies to lead your team through change and build resilience in your business.</div>
                                <div className="link">Read more <ArrowRight /> </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InsightsMain;