"use client";
import React, { useState, useEffect } from "react";
import "@/styles/challanges.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesGlobal = () => {
    return (
        <>
            <section className="challanges-global">
                <div className="challanges-global__container _container">
                    <div className="challanges-global__body">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="challanges-global__col-01">
                            A global retail chain reduced costs by 25% and improved operational efficiency by 30% with our tailored solutions.
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="challanges-global__col-02">
                            A healthcare provider saved $500K annually by adopting our data-driven recommendations.
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallangesGlobal;