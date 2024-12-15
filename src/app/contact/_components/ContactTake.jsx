"use client";
import React, { useState, useEffect } from "react";
import "@/styles/contact.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactTake = () => {
    return (
        <>
            <section className="contact-take">
                <div className="contact-take__container _container">
                    <div className="contact-take__body">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="contact-take__title">
                            Take the Next Step with Bizorax
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="contact-take__buttons">
                            <Link href="/request" className="contact-take__link">Request a Consultation</Link>
                            <Link href="/insights" className="contact-take__link">Explore Our Insights</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactTake;