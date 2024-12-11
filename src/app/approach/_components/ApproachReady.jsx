"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ApproachReady = () => {

    return (
        <>
            <section className="approach-ready">
                <div className="approach-ready__container _container">
                    <div className="approach-ready__body">
                        <div className="approach-ready__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="approach-ready__title">
                                Let’s Build Your <br /> Success Together
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="approach-ready__buttons">
                                <Link href="/request" className="approach-ready__btn-01">Request a Consultation</Link>
                                <Link href="/contact" className="approach-ready__btn-02">Explore Solutions</Link>
                            </motion.div>
                        </div>
                        <div className="approach-ready__col-02"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachReady;