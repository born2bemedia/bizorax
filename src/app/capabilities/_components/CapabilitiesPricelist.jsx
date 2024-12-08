"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";

const CapabilitiesPricelist = () => {
    return (
        <>
            <section className="cappa-pricelist">
                <div className="cappa-pricelist__container _container">
                    <div className="cappa-pricelist__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="cappa-pricelist__col-01">
                            <div className="cappa-pricelist__text">Get a detailed overview of all our services, packages, and pricing. Our comprehensive price list includes information on every solution we offer, ensuring you have complete transparency before making your decision.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="cappa-pricelist__col-02">
                            <h2 className="cappa-pricelist__title">Download Our Full Price List</h2>
                            <Link href="https://bizorax.com/Bizorax-price-list.pdf" download="download" className="cappa-pricelist__link">
                                Download price list <ArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesPricelist;