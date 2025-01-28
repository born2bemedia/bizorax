"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const CapabilitiesServices = () => {
    return (
        <>
            <section className="capa-services" id="packages">
                <div className="capa-services__container _container">
                    <div className="capa-services__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="capa-services__title">
                            Service Packages: <br /> Comprehensive Solutions for Every Business
                        </motion.h2>
                        <div className="capa-services__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="capa-services__item">
                                <h3 className="capa-services__label">Essential <br /> Plan</h3>
                                <div className="capa-services__text">Perfect for startups or small businesses looking to establish a solid foundation, this package is designed to help you launch your business with clarity and focus.</div>
                                <ul className="capa-services__list">
                                    <li className="capa-services__li">What’s Included:</li>
                                    <li className="capa-services__li">Business Needs Assessment.</li>
                                    <li className="capa-services__li">Basic Strategic Plan Development</li>
                                    <li className="capa-services__li">Market Overview Analysis</li>
                                    <li className="capa-services__li">One Consultation Session (2 hours)</li>
                                    <li className="capa-services__li">Email Support for 1 Month</li>
                                    <li className="capa-services__li">Introductory Financial Planning</li>
                                    <li className="capa-services__li">Operational Workflow Recommendations</li>
                                </ul>
                                <div className="capa-services__price">
                                    <h4 className="title">Price:</h4>
                                    <div className="price">From <span>€3,000</span></div>
                                </div>
                                <OrderButton
                                    className={"capa-services__link"}
                                    text={"Get Started →"}
                                    service={"Essential Plan"}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="capa-services__item">
                                <h3 className="capa-services__label">Growth <br /> Plan</h3>
                                <div className="capa-services__text">Ideal for businesses aiming to scale and optimise their operations, this package offers a tailored strategy for sustainable growth.</div>
                                <ul className="capa-services__list">
                                    <li className="capa-services__li">What’s Included:</li>
                                    <li className="capa-services__li">Comprehensive Operational Analysis</li>
                                    <li className="capa-services__li">Tailored Growth Strategy.</li>
                                    <li className="capa-services__li">Three Consultation Sessions (2 hours each)</li>
                                    <li className="capa-services__li">Access to Basic Analytics Tools (2 months)</li>
                                    <li className="capa-services__li">Customer Journey Mapping</li>
                                    <li className="capa-services__li">Competitor Benchmarking</li>
                                    <li className="capa-services__li">Resource Allocation Plan</li>
                                    <li className="capa-services__li">Digital Presence Evaluation</li>
                                    <li className="capa-services__li">Key Performance Indicator Development</li>
                                    <li className="capa-services__li">Process Optimization Recommendations</li>
                                </ul>
                                <div className="capa-services__price">
                                    <h4 className="title">Price:</h4>
                                    <div className="price">From <span>€3,000</span></div>
                                </div>
                                <OrderButton
                                    className={"capa-services__link"}
                                    text={"Get Started →"}
                                    service={"Growth Plan"}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="capa-services__item">
                                <h3 className="capa-services__label">Advanced <br /> Plan</h3>
                                <div className="capa-services__text">This package delivers actionable strategies and comprehensive support for established businesses seeking transformation and innovation.</div>
                                <ul className="capa-services__list">
                                    <li className="capa-services__li">What’s Included:</li>
                                    <li className="capa-services__li">Full Business Audit</li>
                                    <li className="capa-services__li">Custom Action Plan</li>
                                    <li className="capa-services__li">Implementation Support</li>
                                    <li className="capa-services__li">Five Consultation Sessions (3 hours each)</li>
                                    <li className="capa-services__li">Access to Premium Analytics Tools (3 months)</li>
                                    <li className="capa-services__li">Priority Email and Phone Support</li>
                                    <li className="capa-services__li">Market Trend Analysis</li>
                                    <li className="capa-services__li">Change Management Framework</li>
                                    <li className="capa-services__li">Customer Segmentation Analysis</li>
                                    <li className="capa-services__li">Advanced Financial Planning</li>
                                </ul>
                                <div className="capa-services__price">
                                    <h4 className="title">Price:</h4>
                                    <div className="price">From <span>€3,000</span></div>
                                </div>
                                <OrderButton
                                    className={"capa-services__link"}
                                    text={"Get Started →"}
                                    service={"Advanced Plan"}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="capa-services__item">
                                <h3 className="capa-services__label">Enterprise <br /> Plan</h3>
                                <div className="capa-services__text">Tailored for large organisations with complex needs, this all-inclusive package ensures seamless transformation and sustained growth.</div>
                                <ul className="capa-services__list">
                                    <li className="capa-services__li">What’s Included:</li>
                                    <li className="capa-services__li">End-to-End Business Transformation Services</li>
                                    <li className="capa-services__li">In-Depth Market and Competitor Analysis</li>
                                    <li className="capa-services__li">Dedicated Project Manager (6 months)</li>
                                    <li className="capa-services__li">Unlimited Consultation Sessions</li>
                                    <li className="capa-services__li">Access to Premium Tools and Dashboards (6 months)</li>
                                    <li className="capa-services__li">On-Site Implementation Support (if required)</li>
                                    <li className="capa-services__li">Executive Leadership Workshops</li>
                                    <li className="capa-services__li">Global Market Expansion Strategies</li>
                                    <li className="capa-services__li">Custom CRM and ERP Integration</li>
                                    <li className="capa-services__li">Post-Project Performance Reviews</li>
                                </ul>
                                <div className="capa-services__price">
                                    <h4 className="title">Price:</h4>
                                    <div className="price">From <span>€3,000</span></div>
                                </div>
                                <OrderButton
                                    className={"capa-services__link"}
                                    text={"Get Started →"}
                                    service={"Enterprise Plan"}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesServices;