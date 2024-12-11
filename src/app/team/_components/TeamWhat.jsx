"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamWhat = () => {
    return (
        <>
            <section className="team-what">
                <div className="team-what__container _container">
                    <div className="team-what__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="team-what__title">
                            What We Believe
                        </motion.h2>
                        <div className="team-what__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="team-what__item">
                                <div className="team-what__icon"><img src="/images/team/icon-01.svg" alt="image" /></div>
                                <div className="team-what__text">Great solutions stem from great minds working together.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="team-what__item">
                                <div className="team-what__icon"><img src="/images/team/icon-02.svg" alt="image" /></div>
                                <div className="team-what__text">Every challenge is an opportunity to learn, adapt, and grow.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="team-what__item">
                                <div className="team-what__icon"><img src="/images/team/icon-03.svg" alt="image" /></div>
                                <div className="team-what__text">Collaboration isn’t just a process — it’s the foundation of our success.</div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="team-what__desc">
                            Bizorax is more than a team — a community of problem-solvers dedicated to helping your business thrive.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamWhat;