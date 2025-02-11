"use client";
import React, { useState, useEffect } from "react";
import "@/styles/contact.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowTopRight from "@/icons/other/ArrowTopRight";
import ContactForm from "@/components/ContactForm";

const ContactMain = () => {
    return (
        <>
            <section className="contact-main">
                <div className="contact-main__container _container">
                    <div className="contact-main__body">
                        <div className="contact-main__col-01">
                            <div className="contact-main__block-01">
                                <motion.h2
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.1}
                                    className="contact-main__title">
                                    Follow Us on Social Media
                                </motion.h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.2}
                                    className="contact-main__text">Follow us on social media for updates, industry insights, and tips to help your business grow.</motion.div>
                                <motion.ul
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="contact-main__socials">
                                    <li className="contact-main__social">
                                        <Link href="#" className="contact-main__link _facebook">Facebook <ArrowTopRight /></Link>
                                    </li>
                                    <li className="contact-main__social">
                                        <Link href="#" className="contact-main__link _instagram">Instagram <ArrowTopRight /></Link>
                                    </li>
                                    <li className="contact-main__social">
                                        <Link href="#" className="contact-main__link _twitter">Twitter <ArrowTopRight /></Link>
                                    </li>
                                </motion.ul>
                            </div>
                            <div className="contact-main__block-02">
                                <motion.h2
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.1}
                                    className="contact-main__title">
                                    Reach Us Directly
                                </motion.h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.2}
                                    className="contact-main__text">
                                    Whether you’re looking for solutions, have a question, or just want to connect, here’s how you can reach us:
                                </motion.div>
                                <motion.ul
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="contact-main__contacts">
                                    <li className="contact-main__contact">
                                        Email:
                                        <Link href="mailto:info@bizorax.com" className="contact-main__link-contact">info@bizorax.com</Link>
                                    </li>
                                    <li className="contact-main__contact">
                                        Phone:
                                        <Link href="tel:+447479028330" className="contact-main__link-contact">+447479028330</Link>
                                    </li>
                                    <li className="contact-main__contact">
                                        Registered address:
                                        <Link href="#" className="contact-main__link-contact">2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE</Link>
                                    </li>
                                    <li className="contact-main__contact">
                                        Office address:
                                        <Link href="#" className="contact-main__link-contact">2nd floor, 39 Ludgate Hill, London EC4M 7JN, United Kingdom</Link>
                                    </li>
                                </motion.ul>
                            </div>
                        </div>
                        <div className="contact-main__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="contact-main__form">
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMain;