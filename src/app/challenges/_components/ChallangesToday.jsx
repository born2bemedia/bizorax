"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesToday = () => {
    return (
        <>
            <section className="challanges-today">
                <div className="challanges-today__container _container">
                    <div className="challanges-today__body">
                        <div className="challanges-today__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="challanges-today__text">
                                In today’s fast-evolving market, businesses face unprecedented challenges that demand agility, insight, and expertise. From operational inefficiencies to the relentless pace of technological advancements, navigating these hurdles can feel overwhelming.
                                <br />
                                <br />
                                At Bizorax, we understand the complexity of these issues. Our approach addresses the pain points that hinder growth and provides solutions tailored to your business needs.
                            </motion.div>
                        </div>
                        <div className="challanges-today__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="challanges-today__title">
                                The Challenges Businesses Face Today
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesToday;