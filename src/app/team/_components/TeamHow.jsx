"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamHow = () => {
    return (
        <>
            <section className="team-how">
                <div className="team-how__container _container">
                    <div className="team-how__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="team-how__title">How We Work Together:</motion.h2>
                        <div className="team-how__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="team-how__item">
                                <div className="team-how__text">Weekly brainstorming sessions to explore creative approaches to challenges.</div>
                                <div className="team-how__image"><img src="/images/team/img-06.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="team-how__item">
                                <div className="team-how__text">Cross-departmental collaboration to ensure holistic solutions.</div>
                                <div className="team-how__image"><img src="/images/team/img-07.jpg" alt="image" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="team-how__item">
                                <div className="team-how__text">An open culture where every idea is valued and considered.</div>
                                <div className="team-how__image"><img src="/images/team/img-08.jpg" alt="image" /></div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="team-how__desc">The best part of working at Bizorax is knowing that everyone is committed to the same goal: helping our clients succeed.</motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamHow;