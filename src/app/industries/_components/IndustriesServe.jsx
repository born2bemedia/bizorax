"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const IndustriesServe = () => {
    return (
        <>
            <section className="indus-serve">
                <div className="indus-serve__container _container">
                    <div className="indus-serve__body">
                        <div className="indus-serve__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="indus-serve__title">
                                We don’t just serve companies — <span>we transform them.</span>
                            </motion.h1>
                        </div>
                        <div className="indus-serve__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="indus-serve__text">
                                At Bizorax, we bring tailored solutions to diverse sectors, leveraging our deep industry expertise to help businesses thrive in their unique environments. Whether you’re optimising operations, innovating customer experiences, or navigating complex regulations, we’re here to elevate your business.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="indus-serve__links">
                                <Link href="/capabilities" className="indus-serve__link">Explore Solutions</Link>
                                <Link href="/request" className="indus-serve__link">Request a Consultation</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesServe;