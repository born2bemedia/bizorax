"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ApproachHero = () => {
    return (
        <>
            <section className="approach-hero">
                <div className="approach-hero__container _container">
                    <div className="approach-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-hero__title">
                            Our Approach: <br /> Where Strategy <br /> Meets Results
                        </motion.h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachHero;