"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamProcess = () => {
    return (
        <>
            <section className="team-process">
                <div className="team-process__container _container">
                    <div className="team-process__body">
                        <div className="team-process__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="team-process__title">
                                A Process Tailored for <br /> Results
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="team-process__text">
                                At Bizorax, our process is as collaborative as it is effective. We work closely with you every step of the way, ensuring our solutions align with your business goals.
                            </motion.div>
                        </div>
                        <div className="team-process__col-02">
                            <div className="team-process__items">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.1}
                                    className="team-process__item">
                                    <div className="team-process__number">1</div>
                                    <div className="team-process__warpper">
                                        <h3 className="team-process__label">Listening First</h3>
                                        <div className="team-process__subtext">We begin by understanding your challenges, goals, and vision.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.2}
                                    className="team-process__item">
                                    <div className="team-process__number">2</div>
                                    <div className="team-process__warpper">
                                        <h3 className="team-process__label">Collaborative <br /> Brainstorming</h3>
                                        <div className="team-process__subtext">Bringing together ideas from multiple perspectives to craft innovative strategies.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="team-process__item">
                                    <div className="team-process__number">3</div>
                                    <div className="team-process__warpper">
                                        <h3 className="team-process__label">Execution Excellence</h3>
                                        <div className="team-process__subtext">Implementing solutions with precision and agility.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.4}
                                    className="team-process__item">
                                    <div className="team-process__number">4</div>
                                    <div className="team-process__warpper">
                                        <h3 className="team-process__label">Continuous Improvement</h3>
                                        <div className="team-process__subtext">Gathering feedback and optimising for sustained success.</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamProcess;