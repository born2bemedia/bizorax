"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const CasesBusiness = () => {
    return (
        <>
            <section className="cases-business">
                <div className="cases-business__container _container">
                    <div className="cases-business__body">
                        <div className="cases-business__content">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="cases-business__title">
                                Your Business Could <br /> Be Next
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="cases-business__buttons">
                                <Link href="/request" className="cases-business__link">Request a Consultation</Link>
                                <Link href="/capabilities" className="cases-business__link">Explore Our Capabilities</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CasesBusiness;