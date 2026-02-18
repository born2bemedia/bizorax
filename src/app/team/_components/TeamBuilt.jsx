"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const TeamBuilt = () => {
    return (
        <>
            <section className="team-built">
                <div className="team-built__container _container">
                    <div className="team-built__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="team-built__col-01">
                            <h2 className="team-built__title">A Team Built for <br /> Excellence</h2>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="team-built__col-02">
                            <div className="team-built__text">The Bizorax experts are diverse professionals, each with a unique skill set. Together, we cover all aspects of business growth and transformation.</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamBuilt;