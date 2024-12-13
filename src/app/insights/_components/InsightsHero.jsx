"use client";
import React, { useState, useEffect } from "react";
import "@/styles/insights.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const InsightsHero = () => {
    return (
        <>
            <section className="insight-hero">
                <div className="insight-hero__container _container">
                    <div className="insight-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="insight-hero__title">
                            Insights: Unlocking Strategies for Success
                        </motion.h1>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="insight-hero__text">
                            Dive into expert articles, actionable tips, and industry insights designed to empower your business. Stay ahead of market trends, leverage innovative tools, and discover strategies to overcome challenges and drive success.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InsightsHero;