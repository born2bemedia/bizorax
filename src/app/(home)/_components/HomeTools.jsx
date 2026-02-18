"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import "@/styles/home/home.scss";
import Link from "next/link";
import ArrowRight from "@/icons/other/ArrowRight";

const HomeTools = () => {

    return (
        <>
            <section className="home-tools">
                <div className="home-tools__container">
                    <div className="home-tools__body">
                        <div className="home-tools__content _container">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="home-tools__title">
                                Tools We Use to Deliver Excellence
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-tools__text">
                                Bizorax leverages cutting-edge tools and proven methodologies to streamline processes, enhance decision-making, and maximise efficiency, ensuring outstanding results.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="">
                                <Link href="/approach" className="home-tools__link">Delve Into Our Approach <ArrowRight /></Link>
                            </motion.div>
                        </div>
                        <div className="home-tools__sliders">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="home-tools__slider"></motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-tools__slider"></motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="home-tools__slider"></motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTools;