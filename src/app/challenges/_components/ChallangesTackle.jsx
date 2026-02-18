"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ChallangesTackle = () => {
    return (
        <>
            <section className="challanges-tackle">
                <div className="challanges-tackle__container _container">
                    <div className="challanges-tackle__body">
                        <div className="challanges-tackle__content">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="challanges-tackle__title">
                                Ready to Tackle Your <br /> Business Challenges?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="challanges-tackle__buttons">
                                <Link href="/request" className="challanges-tackle__link">Request a Custom Solution</Link>
                                <Link href="/capabilities" className="challanges-tackle__link">Explore Our Capabilities</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesTackle;