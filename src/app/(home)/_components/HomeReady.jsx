"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeReady = () => {

    return (
        <>
            <section className="home-ready">
                <div className="home-ready__container _container">
                    <div className="home-ready__body">
                        <div className="home-ready__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="home-ready__title">
                                Ready to <br /> Accelerate Your <br /> Business?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-ready__buttons">
                                <Link href="/request" className="home-ready__btn-01">Request a Custom Solution</Link>
                                <Link href="/contact" className="home-ready__btn-02">Contact Our Experts</Link>
                            </motion.div>
                        </div>
                        <div className="home-ready__col-02"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeReady;