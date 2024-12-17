"use client";
import React, { useState, useEffect } from "react";
import "@/styles/request.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const RequestHero = () => {
    return (
        <>
            <section className="request-hero">
                <div className="request-hero__container _container">
                    <div className="request-hero__body">
                        <div className="request-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="request-hero__title">
                                We’re Here to Help <br /> <span>Your Business <br /> Thrive</span>
                            </motion.h1>
                        </div>
                        <div className="request-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="request-hero__text">
                                Reach out to our team for inquiries, collaborations, or tailored solutions. Let’s start a conversation about your success.
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0.3}
                    className="request-hero__image">
                    <img src="/images/request/img-01.jpg" alt="image" />
                </motion.div>
            </section>
        </>
    );
};

export default RequestHero;