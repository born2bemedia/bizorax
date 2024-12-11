"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamCollab = () => {
    return (
        <>
            <section className="team-collab">
                <div className="team-collab__container _container">
                    <div className="team-collab__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="team-collab__text">
                            Our crew is more than a collection of experts — it’s a cohesive unit driven by shared goals and mutual respect. By combining diverse perspectives, we create solutions that are not only effective but also innovative.
                        </motion.div>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="team-collab__title">
                            Collaboration at Our Core
                        </motion.h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamCollab;