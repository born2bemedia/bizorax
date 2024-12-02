"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ChallangesReady = () => {
    return (
        <>
            <section className="challanges-ready">
                <div className="challanges-ready__container _container">
                    <div className="challanges-ready__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="challanges-ready__title">
                            Ready to Accelerate Your <br /> Business?
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="challanges-ready__buttons">
                            <Link href="/request" className="challanges-ready__link">Request a Custom Solution</Link>
                            <Link href="/contact" className="challanges-ready__link">Explore Our Capabilities</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesReady;