"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CasesHero = () => {
    return (
        <>
            <section className="cases-hero">
                <div className="cases-hero__container _container">
                    <div className="cases-hero__body">
                        <div className="cases-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="cases-hero__title">
                                Real Stories
                                <span>Real Results</span>
                            </motion.h1>
                        </div>
                        <div className="cases-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="cases-hero__text">Explore how Bizorax has empowered businesses to overcome challenges and achieve measurable success. Dive into our case studies to see the strategies and outcomes in detail.</motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="cases-hero__links">
                                <Link href="/request" className="cases-hero__link">Request a Custom Solution</Link>
                                <Link href="/capabilites" className="cases-hero__link">Discover All Services</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CasesHero;