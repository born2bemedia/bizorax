"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ApproachSlider1 from "../ApproachSliders/ApproachSlider1";

const ApproachSliders = () => {

    return (
        <>
            <section className="approach-sliders">
                <div className="approach-sliders__container">
                    <div className="approach-sliders__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="approach-sliders__title">
                            Leveraging the Best Resources for Your Success
                        </motion.h2>
                        <div className="approach-sliders__sliders">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="approach-sliders__slider">

                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="approach-sliders__slider">

                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.}
                                className="approach-sliders__slider">

                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApproachSliders;