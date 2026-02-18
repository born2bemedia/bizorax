"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesEvery = () => {
    return (
        <>
            <section className="challanges-every">
                <div className="challanges-every__container _container">
                    <div className="challanges-every__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="challanges-every__col-01">
                            <div className="challanges-every__text">
                                Every business faces unique challenges, but many share common hurdles that can be categorised into four main areas. Understanding these categories allows us to provide targeted, practical solutions.
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="challanges-every__col-02">
                            <h2 className="challanges-every__title">Breaking Down the Obstacles</h2>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesEvery;