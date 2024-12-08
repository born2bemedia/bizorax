"use client";
import React, { useState, useEffect } from "react";
import "@/styles/industries.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const InduscriesTransform = () => {
    return (
        <>
            <section className="induscries-transform">
                <div className="induscries-transform__container _container">
                    <div className="induscries-transform__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="induscries-transform__title">
                            Transform Your Industry with Bizorax
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="induscries-transform__buttons">
                            <Link href="/request" className="induscries-transform__link">Request a Custom Solution</Link>
                            <Link href="/capabilities" className="induscries-transform__link">Explore Our Capabilities</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InduscriesTransform;