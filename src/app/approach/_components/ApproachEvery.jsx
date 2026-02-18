"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ApproachEvery = () => {
    return (
        <>
            <section className="approach-every">
                <div className="approach-every__container _container">
                    <div className="approach-every__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-every__text">
                            Every business deserves a tailored strategy to unlock its full potential. Our proven methodology combines innovation, expertise, and a relentless focus on measurable outcomes.
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="approach-every__buttons">
                            <Link href="/capabilities" className="approach-every__link">Explore Solutions</Link>
                            <Link href="/cases" className="approach-every__link">Analyse Case Studies</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachEvery;