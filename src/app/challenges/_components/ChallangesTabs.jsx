"use client";
import React, { useState } from "react";
import ChallangeTab1 from "../ChallangesTabs/ChallangeTab1";
import ChallangeTab2 from "../ChallangesTabs/ChallangeTab2";
import ChallangeTab3 from "../ChallangesTabs/ChallangeTab3";
import ChallangeTab4 from "../ChallangesTabs/ChallangeTab4";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ChallangesTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const tabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <section className="challanges-site">
            <div className="challanges-site__container _container">
                <div className="challanges-site__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="challanges-site__text">
                        60% of businesses cite operational inefficiencies as their biggest growth barrier.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="challanges-site__tabs">
                        <div className="tabs-challanges">
                            <div className="tabs-challanges__nav">
                                <button
                                    onClick={() => tabChange("tab1")}
                                    className={`tabs-challanges__button ${activeTab === "tab1" ? "active" : ""}`}
                                >
                                    Initial Consultation
                                </button>
                                <button
                                    onClick={() => tabChange("tab2")}
                                    className={`tabs-challanges__button ${activeTab === "tab2" ? "active" : ""}`}
                                >
                                    Customised Solutions
                                </button>
                                <button
                                    onClick={() => tabChange("tab3")}
                                    className={`tabs-challanges__button ${activeTab === "tab3" ? "active" : ""}`}
                                >
                                    Technological Challenges
                                </button>
                                <button
                                    onClick={() => tabChange("tab4")}
                                    className={`tabs-challanges__button ${activeTab === "tab4" ? "active" : ""}`}
                                >
                                    Talent & Leadership Challenges
                                </button>
                            </div>

                            <div className="tabs-challanges__content">
                                {activeTab === "tab1" && <ChallangeTab1 />}
                                {activeTab === "tab2" && <ChallangeTab2 />}
                                {activeTab === "tab3" && <ChallangeTab3 />}
                                {activeTab === "tab4" && <ChallangeTab4 />}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ChallangesTabs;