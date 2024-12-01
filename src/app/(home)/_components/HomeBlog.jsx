"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import "@/styles/home/home.scss";
import Link from "next/link";
import ArrowRight from "@/icons/other/ArrowRight";

const HomeBlog = () => {

    return (
        <>
            <section className="home-blog">
                <div className="home-blog__container _container">
                    <div className="home-blog__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-blog__title">
                            Recent Blog Posts
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-blog__items">
                            <Link href="#" className="home-blog__item">
                                <div className="home-blog__wrapper">
                                    <h3 className="home-blog__label">Navigating <br /> Market Disruptions <br /> in 2025</h3>
                                    <div className="home-blog__text">Tips for adapting to evolving economic landscapes.</div>
                                    <div className="home-blog__more">Read more <ArrowRight /></div>
                                </div>
                            </Link>
                            <Link href="#" className="home-blog__item">
                                <div className="home-blog__wrapper">
                                    <h3 className="home-blog__label">Top 5 Digital Tools to Streamline Business Operations</h3>
                                    <div className="home-blog__text">Insights into tools driving efficiency and innovation.</div>
                                    <div className="home-blog__more">Read more <ArrowRight /></div>
                                </div>
                            </Link>
                            <Link href="#" className="home-blog__item">
                                <div className="home-blog__wrapper">
                                    <h3 className="home-blog__label">Future-Proofing Your Business: Strategies for 2025 and Beyond</h3>
                                    <div className="home-blog__text">Preparing for technological and market shifts.</div>
                                    <div className="home-blog__more">Read more <ArrowRight /></div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBlog;