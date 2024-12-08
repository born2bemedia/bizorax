"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CapabilitiesReady = () => {
    return (
        <>
            <section className="capa-ready">
                <div className="capa-ready__container _container">
                    <div className="capa-ready__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="capa-ready__title">
                            Ready to Tackle Your Business Challenges?
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="capa-ready__buttons">
                            <Link href="/request" className="capa-ready__link">Request a Custom Solution</Link>
                            <Link href="/cases" className="capa-ready__link">Analyse Case Studies</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesReady;