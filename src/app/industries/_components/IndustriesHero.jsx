"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const IndustriesHero = () => {
    return (
        <>
            <section className="industries-hero">
                <div className="industries-hero__container _container">
                    <div className="industries-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="industries-hero__title">
                            Empowering Industries to Achieve Excellence
                        </motion.h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesHero;