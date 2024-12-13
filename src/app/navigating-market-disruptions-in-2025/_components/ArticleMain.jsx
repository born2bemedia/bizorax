"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import "@/styles/article.scss";

const ArticleMain = () => {
    const [activeSection, setActiveSection] = useState("section1");

    return (
        <section className="article-main">
            <div className="article-main__container _container">
                <div className="article-main__body">
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="article-main__col-01">
                        <div className="article-main__wrapper">
                            <h3 className="article-main__title">On this article</h3>
                            <ul className="article-main__table">
                                {[
                                    { id: "section1", label: "Understanding Market Disruptions" },
                                    { id: "section2", label: "Key Strategies for Navigating Disruptions" },
                                    { id: "section3", label: "Industries Most Affected by Disruptions in 2025" },
                                    { id: "section4", label: "Real-World Examples of Adaptation" },
                                    { id: "section5", label: "Preparing for Future Disruptions" },
                                    { id: "section6", label: "Conclusion" },
                                ].map((section) => (
                                    <li key={section.id}>
                                        <ScrollLink
                                            to={section.id}
                                            smooth={true}
                                            duration={500}
                                            offset={-50}
                                            className={`article-main__link ${activeSection === section.id ? "_active" : ""
                                                }`}
                                            onClick={() => setActiveSection(section.id)}
                                        >
                                            {section.label}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="article-main__col-02">
                        <div id="section1" className="article-main__row">
                            <h2 className="title">Understanding Market Disruptions</h2>
                            <p className="text">Market disruptions come in many forms, including:</p>
                            <ul className="list">
                                <li><span>Economic Uncertainty:</span> Global inflation, fluctuating exchange rates, and recession risks.</li>
                                <li><span>Technological Advancements:</span> The rise of AI, blockchain, and IoT is transforming industries.</li>
                                <li><span>Shifting Consumer Behaviour:</span> Demand for personalization, sustainability, and ethical practices.</li>
                                <li><span>Regulatory Changes:</span> Adapting to evolving policies and compliance requirements.</li>
                            </ul>
                            <p className="text">To succeed, businesses must identify these disruptions early and adapt with agility.</p>
                        </div>
                        <div id="section2" className="article-main__row">
                            <h2 className="title">Key Strategies for Navigating Disruptions</h2>
                            <ul className="list">
                                <li><span>Embrace Agility:</span> Businesses must adopt a flexible approach to respond quickly to changes:</li>
                                <li><span>Scenario Planning:</span> Develop multiple action plans for potential market outcomes.</li>
                                <li><span>Cross-Functional Teams:</span> Empower teams to make swift decisions across departments.</li>
                                <li><span>Lean Operations:</span> Eliminate inefficiencies to maintain adaptability.</li>
                            </ul>
                            <h3 className="label">Leverage Technology</h3>
                            <p className="text">Stay ahead by integrating advanced tools:</p>
                            <ul className="list">
                                <li><span>AI and Predictive Analytics:</span> Anticipate trends and consumer needs.</li>
                                <li><span>Cloud-Based Solutions:</span> Enhance collaboration and data security.</li>
                                <li><span>Automation:</span> Streamline workflows and reduce costs.</li>
                            </ul>
                            <h3 className="label">Strengthen Supply Chains</h3>
                            <p className="text">Mitigate risks by ensuring supply chain resilience:</p>
                            <ul className="list">
                                <li><span>Diversify Suppliers:</span> Reduce dependency on single sources.</li>
                                <li><span>Real-Time Monitoring:</span> Use IoT and analytics for supply chain transparency.</li>
                                <li><span>Nearshoring:</span> Shift production closer to your markets to minimise disruptions.</li>
                            </ul>
                            <h3 className="label">Focus on Customer Experience</h3>
                            <p className="text">Consumers expect more during uncertain times:</p>
                            <ul className="list">
                                <li><span>Personalization:</span> Use data-driven insights to tailor experiences.</li>
                                <li><span>Transparent Communication:</span> Build trust by sharing your business’s values and efforts.</li>
                                <li><span>Omnichannel Presence:</span> Engage customers where they are, both online and offline.</li>
                            </ul>
                            <h3 className="label">Foster a Culture of Innovation</h3>
                            <p className="text">Encourage your team to think creatively:</p>
                            <ul className="list">
                                <li><span>Innovation Labs:</span> Create spaces for brainstorming and testing new ideas.</li>
                                <li>Employee Upskilling: Equip teams with the latest skills to stay relevant.</li>
                                <li>Collaboration with Startups: Partner with agile innovators to explore emerging solutions.</li>
                            </ul>
                        </div>
                        <div id="section3" className="article-main__row">
                            <h2 className="title">Industries Most Affected by Disruptions in 2025</h2>
                            <h4 className="subtitle">1. Technology and IT</h4>
                            <p className="text">The rapid pace of innovation demands constant adaptation. Businesses must:</p>
                            <ul className="list">
                                <li>Invest in cybersecurity to combat evolving threats.</li>
                                <li>Adopt AI to stay competitive in product development and customer interaction.</li>
                            </ul>
                            <h4 className="subtitle">2. Retail and E-Commerce</h4>
                            <p className="text">Shifting consumer behaviours require:</p>
                            <ul className="list">
                                <li>Enhanced last-mile delivery options.</li>
                                <li>Investment in sustainability to meet eco-conscious demands.</li>
                            </ul>
                            <h4 className="subtitle">3. Healthcare</h4>
                            <p className="text">Regulatory changes and advancements in telehealth call for:</p>
                            <ul className="list">
                                <li>Better integration of patient data.</li>
                                <li>Implementation of AI for diagnostics and resource management.</li>
                            </ul>
                        </div>
                        <div id="section4" className="article-main__row">
                            <h2 className="title">Real-World Examples of Adaptation</h2>
                            <div className="columns">
                                <div className="col">
                                    <h4 className="subtitle">Case Study 1: <span> Retail Resilience</span></h4>
                                    <div className="text">A global retail chain faced supply chain disruptions during a geopolitical crisis. By diversifying suppliers and investing in IoT for real-time tracking, they reduced delivery delays by 30%.</div>
                                </div>
                                <div className="col">
                                    <h4 className="subtitle">Case Study 2: <span>Tech Startup Scalability</span></h4>
                                    <div className="text">A tech startup integrated AI and cloud solutions to predict market trends, enabling it to pivot its product offerings and achieve 20% revenue growth despite market instability.</div>
                                </div>
                            </div>
                        </div>
                        <div id="section5" className="article-main__row">
                            <h2 className="title">Preparing for Future Disruptions</h2>
                            <p className="text">The key to thriving in uncertain times is proactive preparation:</p>
                            <ul className="list">
                                <li><span>Monitor Trends:</span> Stay informed about global economic, political, and technological developments.</li>
                                <li><span>Invest in Digital Transformation:</span> Build a tech-savvy infrastructure to adapt quickly.</li>
                                <li><span>Build Strong Partnerships:</span> Collaborate with industry peers to share insights and resources.</li>
                                <li><span>Create a Crisis Management Plan:</span> Ensure your business has a roadmap for handling unexpected challenges.</li>
                            </ul>
                        </div>
                        <div id="section6" className="article-main__row">
                            <h2 className="title">Conclusion</h2>
                            <p className="text">Market disruptions in 2025 present challenges that can reshape industries but also open doors to innovation and growth. By adopting agile strategies, leveraging technology, and focusing on customer needs, businesses can weather the storm and emerge stronger.</p>
                            <ul className="list">
                                <li><span>Take the First Step:</span> Begin assessing your business’s resilience today to stay ahead of the curve.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ArticleMain;
