"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import "@/styles/article.scss";
import Link from "next/link";

const ArticleHero = () => {

    return (
        <>
            <section className="article-hero">
                <div className="article-hero__container _container">
                    <div className="article-hero__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="article-hero__image _article-01">
                            <Link href="/insights" className="article-hero__link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0303 3.96967C11.3232 4.26256 11.3232 4.73744 11.0303 5.03033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L11.0303 18.9697C11.3232 19.2626 11.3232 19.7374 11.0303 20.0303C10.7374 20.3232 10.2626 20.3232 9.96967 20.0303L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L9.96967 3.96967C10.2626 3.67678 10.7374 3.67678 11.0303 3.96967Z" fill="#CD8C2A" />
                                </svg>
                            </Link>
                        </motion.div>
                        <div className="article-hero__content">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="article-hero__title">
                                Navigating Market Disruptions <br /> in 2025
                            </motion.h1>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="article-hero__text">
                                The global business landscape in 2025 continues to evolve at an unprecedented pace, bringing both challenges and opportunities. From economic uncertainties to rapid technological advancements, businesses must adapt to stay competitive. This article explores actionable strategies to navigate market disruptions and build resilience.
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ArticleHero;