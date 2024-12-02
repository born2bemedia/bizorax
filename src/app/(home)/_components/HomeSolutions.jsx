"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import HomeTab1 from "../HomeTabs/HomeTab1";
import HomeTab2 from "../HomeTabs/HomeTab2";
import HomeTab3 from "../HomeTabs/HomeTab3";
import HomeTab4 from "../HomeTabs/HomeTab4";

const HomeSolutions = () => {
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
        <section className="home-solutions">
            <div className="home-solutions__container _container">
                <div className="home-solutions__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-solutions__title">
                        Comprehensive Business Solutions
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-solutions__text">
                        Bizorax delivers targeted, impactful solutions for your business challenges.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="home-solutions__tabs">
                        <div className="tabs-solutions">
                            {!isMobile && (
                                <div className="tabs-solutions__nav">
                                    <button
                                        onClick={() => tabChange("tab1")}
                                        className={`tabs-solutions__button ${activeTab == "tab1" ? "active" : ""}`}
                                    >
                                        Challenges
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab2")}
                                        className={`tabs-solutions__button ${activeTab == "tab2" ? "active" : ""}`}
                                    >
                                        Capabilities
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab3")}
                                        className={`tabs-solutions__button ${activeTab == "tab3" ? "active" : ""}`}
                                    >
                                        Industries
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab4")}
                                        className={`tabs-solutions__button ${activeTab == "tab4" ? "active" : ""}`}
                                    >
                                        Approach
                                    </button>
                                </div>
                            )}

                            <div className="tabs-solutions__content">
                                {isMobile ? (
                                    <>
                                        <HomeTab1 />
                                        <HomeTab2 />
                                        <HomeTab3 />
                                        <HomeTab4 />
                                    </>
                                ) : (
                                    <>
                                        {activeTab == "tab1" && <HomeTab1 />}
                                        {activeTab == "tab2" && <HomeTab2 />}
                                        {activeTab == "tab3" && <HomeTab3 />}
                                        {activeTab == "tab4" && <HomeTab4 />}
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

export default HomeSolutions;