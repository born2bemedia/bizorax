"use client";
import React, { useState, useEffect } from "react";
import "@/styles/approach.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import AppproachTab1 from "../ApproachTabs/AppproachTab1";
import AppproachTab2 from "../ApproachTabs/AppproachTab2";
import AppproachTab3 from "../ApproachTabs/AppproachTab3";
import AppproachTab4 from "../ApproachTabs/AppproachTab4";

const AppproachSolutions = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
            console.log("Window width:", window.innerWidth, "isMobile:", window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <section className="approach-solutions">
            <div className="approach-solutions__container _container">
                <div className="approach-solutions__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="approach-solutions__title">
                        What Guides Every Project at Bizorax
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="approach-solutions__text">
                        Our approach is built on a foundation of core values that ensure every client receives the highest level of service:
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="approach-solutions__tabs">
                        <div className="tabs-solutions">
                            {!isMobile && (
                                <div className="tabs-solutions__nav">
                                    <button
                                        onClick={() => tabChange("tab1")}
                                        className={`tabs-solutions__button ${activeTab == "tab1" ? "active" : ""}`}
                                    >
                                        Collaboration
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab2")}
                                        className={`tabs-solutions__button ${activeTab == "tab2" ? "active" : ""}`}
                                    >
                                        Customization
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab3")}
                                        className={`tabs-solutions__button ${activeTab == "tab3" ? "active" : ""}`}
                                    >
                                        Innovation
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab4")}
                                        className={`tabs-solutions__button ${activeTab == "tab4" ? "active" : ""}`}
                                    >
                                        Accountability
                                    </button>
                                </div>
                            )}

                            <div className="tabs-solutions__content">
                                {isMobile ? (
                                    <>
                                        <AppproachTab1 />
                                        <AppproachTab2 />
                                        <AppproachTab3 />
                                        <AppproachTab4 />
                                    </>
                                ) : (
                                    <>
                                        {activeTab == "tab1" && <AppproachTab1 />}
                                        {activeTab == "tab2" && <AppproachTab2 />}
                                        {activeTab == "tab3" && <AppproachTab3 />}
                                        {activeTab == "tab4" && <AppproachTab4 />}
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppproachSolutions;