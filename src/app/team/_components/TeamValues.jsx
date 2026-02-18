"use client";
import React, { useState, useEffect } from "react";
import "@/styles/team.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import TeamTab1 from "../TeamTabs/TeamTab1";
import TeamTab2 from "../TeamTabs/TeamTab2";
import TeamTab3 from "../TeamTabs/TeamTab3";
import TeamTab4 from "../TeamTabs/TeamTab4";
import TeamTab5 from "../TeamTabs/TeamTab5";

const TeamValues = () => {
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
        <section className="team-values">
            <div className="team-values__container _container">
                <div className="team-values__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="team-values__title">
                        The Principles That Define Us
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="team-values__text">
                        Our values guide every decision we make and every interaction we have. They’re the cornerstone of our culture and the foundation of our success.
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="team-values__tabs">
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
                                        Integrity
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
                                        Client Focus
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab5")}
                                        className={`tabs-solutions__button ${activeTab == "tab5" ? "active" : ""}`}
                                    >
                                        Excellence
                                    </button>
                                </div>
                            )}

                            <div className="tabs-solutions__content">
                                {isMobile ? (
                                    <>
                                        <TeamTab1 />
                                        <TeamTab2 />
                                        <TeamTab3 />
                                        <TeamTab4 />
                                        <TeamTab5 />
                                    </>
                                ) : (
                                    <>
                                        {activeTab == "tab1" && <TeamTab1 />}
                                        {activeTab == "tab2" && <TeamTab2 />}
                                        {activeTab == "tab3" && <TeamTab3 />}
                                        {activeTab == "tab4" && <TeamTab4 />}
                                        {activeTab == "tab5" && <TeamTab5 />}
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

export default TeamValues;