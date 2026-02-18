"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallengesHero = () => {
    return (
        <>
            <section className="challanges-hero">
                <div className="challanges-hero__container _container">
                    <div className="challanges-hero__body">
                        <div className="challanges-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="challanges-hero__title">
                                Conquer Barriers
                                <span>Unlock Growth</span>
                            </motion.h1>
                        </div>
                        <div className="challanges-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="challanges-hero__text">
                                No matter the obstacle, Bizorax has the expertise to lead your business to success. We don’t just help you overcome — we empower you to thrive.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="challanges-hero__buttons">
                                <Link href="/capabilities" className="challanges-hero__link">Explore Solutions</Link>
                                <Link href="/request" className="challanges-hero__link">Request a Consultation</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallengesHero;