"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const IndustriesText = () => {
    return (
        <>
            <section className="indus-text">
                <div className="indus-text__container _container">
                    <div className="indus-text__body">
                        <div className="indus-text__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="indus-text__text">
                                Every industry faces its own set of challenges in a world of constant disruption and innovation. At Bizorax, we pride ourselves on adapting our strategies to each sector’s dynamics. From reshaping operations to enabling sustainable growth, we craft solutions that precisely address industry-specific needs.
                            </motion.div>
                        </div>
                        <div className="indus-text__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="indus-text__title">
                                Driving Change Across Diverse Industries
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesText;