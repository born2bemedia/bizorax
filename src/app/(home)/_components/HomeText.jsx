"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeText = () => {

    return (
        <>
            <section className="home-text">
                <div className="home-text__container _container">
                    <div className="home-text__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-text__title">
                            Why Your Trusted Partner?
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-text__text">
                            As a young yet highly experienced agency, we bring a fresh perspective to business consulting, combining innovative thinking with proven strategies.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeText;