"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamHero = () => {
    return (
        <>
            <section className="team-hero">
                <div className="team-hero__container _container">
                    <div className="team-hero__body">
                        <div className="team-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="team-hero__title">
                                Meet the Minds <span>Behind Bizorax</span>
                            </motion.h1>
                        </div>
                        <div className="team-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="team-hero__text">Our team is your greatest ally in achieving business excellence. With expertise across diverse fields, innovative thinking, and a client-first approach, we transform challenges into opportunities.</motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="team-hero__links">
                                <Link href="/approach" className="team-hero__link">Learn About Our Approach</Link>
                                <Link href="/contact" className="team-hero__link">Contact Our Team Today</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamHero;