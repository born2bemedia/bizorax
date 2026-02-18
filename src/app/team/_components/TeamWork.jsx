"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const TeamWork = () => {
    return (
        <>
            <section className="team-work">
                <div className="team-work__container _container">
                    <div className="team-work__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="team-work__title">
                            Work with the Bizorax Team <br /> Today
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="team-work__buttons">
                            <Link href="/request" className="team-work__link">Explore Our Solutions</Link>
                            <Link href="/contact" className="team-work__link">Contact Our Experts Now</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamWork;