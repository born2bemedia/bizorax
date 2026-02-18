"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CapabilitiesHero = () => {
    return (
        <>
            <section className="capa-hero">
                <div className="capa-hero__container _container">
                    <div className="capa-hero__body">
                        <div className="capa-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="capa-hero__title">
                                Crafting Solutions for <span>Lasting Success</span>
                            </motion.h1>
                        </div>
                        <div className="capa-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="capa-hero__text">
                                Explore our comprehensive services designed to drive measurable results and sustainable growth.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="capa-hero__links">
                                <Link href="#packages" className="capa-hero__link">View Service Packages</Link>
                                <Link href="/request" className="capa-hero__link">Request a Custom Solution</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesHero;