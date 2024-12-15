"use client";
import React, { useState, useEffect } from "react";
import "@/styles/contact.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <>
            <section className="contact-hero">
                <div className="contact-hero__container _container">
                    <div className="contact-hero__body">
                        <div className="contact-hero__col-01">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="contact-hero__title">
                                We’re Here to Help <br /> <span>Your Business <br /> Thrive</span>
                            </motion.h1>
                        </div>
                        <div className="contact-hero__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="contact-hero__text">
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
                    className="contact-hero__image">
                    <img src="/images/contact/img-01.jpg" alt="image" />
                </motion.div>
            </section>
        </>
    );
};

export default ContactHero;