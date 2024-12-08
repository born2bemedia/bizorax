"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const IndustriesUnder = () => {
    return (
        <>
            <section className="industries-under">
                <div className="industries-under__container _container">
                    <div className="industries-under__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__top">
                            <h2 className="industries-under__title">Understanding Your Industry’s Unique Needs</h2>
                            <div className="industries-under__text">Each industry faces unique hurdles, and Bizorax thrives on solving them. We identify pain points and craft tailored strategies to address the following</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row _top">
                            <h3 className="label">Challenges:</h3>
                            <h3 className="label">Bizorax Solutions:</h3>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Technology & IT</h4>
                                <ul className="list">
                                    <li className="item">Struggles with scalability and digital transformation.</li>
                                    <li className="item">Addressing security threats and data management.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Seamless system integration, robust cybersecurity frameworks, and data analytics optimization.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Healthcare</h4>
                                <ul className="list">
                                    <li className="item">Navigating complex regulations and patient care inefficiencies.</li>
                                    <li className="item">Managing the integration of digital health technologies and electronic health records.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Workflow automation, compliance strategy development, and patient engagement improvements.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Retail</h4>
                                <ul className="list">
                                    <li className="item">Adapting to evolving consumer preferences and competition.</li>
                                    <li className="item">Tackling supply chain disruptions and inventory management challenges.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Personalised marketing campaigns, advanced CRM implementation, and AI-driven inventory optimization.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Finance & Banking</h4>
                                <ul className="list">
                                    <li className="item">Managing regulatory compliance in a dynamic global environment.</li>
                                    <li className="item">Mitigating financial risks and improving operational efficiency.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Automated compliance monitoring, advanced risk management frameworks, and process optimization for higher profitability.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Manufacturing</h4>
                                <ul className="list">
                                    <li className="item">Inefficient production processes and outdated equipment.</li>
                                    <li className="item">Difficulty adopting Industry 4.0 technologies like IoT and automation.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Streamlined production workflows, smart technology integration, and predictive maintenance strategies.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Logistics & Supply Chain</h4>
                                <ul className="list">
                                    <li className="item">Complex supply chain networks and rising transportation costs.</li>
                                    <li className="item">Inefficiencies in inventory management and last-mile delivery.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Advanced supply chain analytics, route optimization tools, and AI-driven inventory management systems.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Energy & Utilities</h4>
                                <ul className="list">
                                    <li className="item">Pressure to meet sustainability goals and adopt clean energy technologies.</li>
                                    <li className="item">Managing ageing infrastructure and ensuring reliable service delivery.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Energy-efficient solutions, renewable energy integration, and infrastructure modernization for enhanced reliability and sustainability.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Hospitality & Tourism</h4>
                                <ul className="list">
                                    <li className="item">Meeting rising customer expectations for personalised experiences.</li>
                                    <li className="item">Managing seasonal demand fluctuations and operational costs.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Dynamic pricing strategies, data-driven personalization, and operational workflow enhancements to maximise efficiency and guest satisfaction.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Education</h4>
                                <ul className="list">
                                    <li className="item">Adapting to hybrid and online learning models.</li>
                                    <li className="item">Improving administrative efficiency in a technology-driven environment.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Development of digital learning platforms, administrative process automation, and learning management systems (LMS) integration to enhance education delivery.</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="industries-under__row">
                            <div className="industries-under__col-01">
                                <h4 className="title">Media & Entertainment</h4>
                                <ul className="list">
                                    <li className="item">Capturing audience attention in a competitive content landscape.</li>
                                    <li className="item">Monetizing digital content effectively while maintaining scalability.</li>
                                </ul>
                            </div>
                            <div className="industries-under__col-02">
                                <div className="text">Innovative content distribution strategies, targeted marketing solutions, and scalable monetization frameworks for digital platforms.</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesUnder;