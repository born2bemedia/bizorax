"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamWho = () => {
    return (
        <>
            <section className="team-who">
                <div className="team-who__container _container">
                    <div className="team-who__body">
                        <div className="team-who__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="team-who__title">
                                Who We Are
                            </motion.h2>
                        </div>
                        <div className="team-who__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="team-who__text">
                                Every industry faces its own set of challenges in a world of constant disruption and innovation. At Bizorax, we pride ourselves on adapting our strategies to each sector’s dynamics. From reshaping operations to enabling sustainable growth, we craft solutions that precisely address industry-specific needs. Driving Change Across Diverse Industries
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamWho;