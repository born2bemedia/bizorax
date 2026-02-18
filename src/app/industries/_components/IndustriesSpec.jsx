"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import IndustriesSlider from "./IndustriesSlider";

const IndustriesSpec = () => {
    return (
        <>
            <section className="indusctries-spec">
                <div className="indusctries-spec__container _container">
                    <div className="indusctries-spec__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="indusctries-spec__top">
                            <h2 className="indusctries-spec__title">Specialised Expertise Across Key Sectors</h2>
                            <div className="indusctries-spec__text">We specialise in delivering results across a variety of industries. Below is a snapshot of the sectors we serve, along with examples of how we make an impact:</div>
                        </motion.div>
                        <div className="indusctries-spec__slider">
                            <IndustriesSlider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesSpec;