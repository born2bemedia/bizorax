"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CapabilitiesText = () => {
    return (
        <>
            <section className="capa-text">
                <div className="capa-text__container _container">
                    <div className="capa-text__body">
                        <div className="capa-text__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="capa-text__text">
                                At Bizorax, we believe in empowering businesses with strategies and solutions that address their unique challenges.
                            </motion.div>
                        </div>
                        <div className="capa-text__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="capa-text__title">
                                Guiding Your Business to New Heights
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesText;