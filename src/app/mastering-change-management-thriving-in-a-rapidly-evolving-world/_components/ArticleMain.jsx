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
                                    { id: "section1", label: "Understanding Change Management" },
                                    { id: "section2", label: "Why Effective Change Management Matters" },
                                    { id: "section3", label: "Challenges in Change Management" },
                                    { id: "section4", label: "The Pillars of Effective Change Management" },
                                    { id: "section5", label: "Proven Strategies for Thriving Amid Change" },
                                    { id: "section6", label: "Real-World Examples of Successful Change Management" },
                                    { id: "section7", label: "Conclusion" },
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
                            <h2 className="title">Understanding Change Management</h2>
                            <p className="text">Change management is a structured approach to transitioning individuals, teams, and organisations from their current state to a desired future state. Its goals are minimising resistance, maximising engagement, and successfully adopting new processes or strategies.</p>
                        </div>
                        <div id="section2" className="article-main__row">
                            <h2 className="title">Why Effective Change Management Matters</h2>
                            <h3 className="label">Ensures Organisational Agility</h3>
                            <ul className="list">
                                <li>Helps businesses adapt to market shifts and emerging trends.</li>
                                <li>Enables swift responses to unexpected disruptions.</li>
                            </ul>
                            <h3 className="label">Boosts Employee Morale and Retention</h3>
                            <ul className="list">
                                <li>Reduces uncertainty by clearly communicating the purpose and benefits of change.</li>
                                <li>Builds trust by involving employees in the process.</li>
                            </ul>
                            <h3 className="label">Enhances Competitive Edge</h3>
                            <ul className="list">
                                <li>Organisations that embrace change outperform those that resist it.</li>
                                <li>Drives innovation and positions businesses for long-term success.</li>
                            </ul>
                        </div>
                        <div id="section3" className="article-main__row">
                            <h2 className="title">Challenges in Change Management</h2>
                            <h3 className="label">Resistance to Change</h3>
                            <ul className="list">
                                <li>Fear of the unknown and loss of control are common barriers.</li>
                                <li>Employees may worry about job security or new responsibilities.</li>
                            </ul>
                            <h3 className="label">Lack of Clear Vision</h3>
                            <ul className="list">
                                <li>Without a defined goal, change initiatives can feel directionless.</li>
                                <li>Misaligned priorities can lead to confusion and inefficiency.</li>
                            </ul>
                            <h3 className="label">Poor Communication</h3>
                            <ul className="list">
                                <li>Inconsistent messaging can create mistrust and hinder engagement.</li>
                                <li>Lack of feedback loops may leave concerns unaddressed.</li>
                            </ul>
                            <h3 className="label">Inadequate Resources</h3>
                            <ul className="list">
                                <li>Insufficient training, time, or budget can derail change efforts.</li>
                                <li>Overloaded teams may struggle to balance new initiatives with existing workloads.</li>
                            </ul>
                        </div>
                        <div id="section4" className="article-main__row">
                            <h2 className="title">The Pillars of Effective Change Management</h2>
                            <h3 className="label">Leadership Commitment</h3>
                            <ul className="list">
                                <li>Leaders must champion change and set the tone for the organisation.</li>
                                <li>Visible, consistent support from leadership fosters trust and alignment.</li>
                            </ul>
                            <h3 className="label">Clear Communication</h3>
                            <ul className="list">
                                <li>Explain the why, what, and how of the change initiative.</li>
                                <li>Use multiple channels to reach all stakeholders, from emails to town halls.</li>
                            </ul>
                            <h3 className="label">Employee Involvement</h3>
                            <ul className="list">
                                <li>Engage employees early by seeking their input and feedback.</li>
                                <li>Empower teams to take ownership of the change process.</li>
                            </ul>
                            <h3 className="label">Training and Support</h3>
                            <ul className="list">
                                <li>Equip employees with the skills and knowledge they need to succeed.</li>
                                <li>Provide ongoing resources, such as workshops, FAQs, or one-on-one coaching.</li>
                            </ul>
                            <h3 className="label">Continuous Evaluation</h3>
                            <ul className="list">
                                <li>Monitor progress through KPIs and regular check-ins.</li>
                                <li>Adjust strategies based on feedback and results.</li>
                            </ul>
                        </div>
                        <div id="section5" className="article-main__row">
                            <h2 className="title">Proven Strategies for Thriving Amid Change</h2>
                            <h3 className="label">Start with a Change Readiness Assessment</h3>
                            <ul className="list">
                                <li>Evaluate your organisation’s capacity for change, including culture, resources, and leadership.</li>
                                <li>Identify potential barriers and develop strategies to address them.</li>
                            </ul>
                            <h3 className="label">Create a Detailed Roadmap</h3>
                            <ul className="list">
                                <li>Define clear objectives, timelines, and milestones.</li>
                                <li>Break the change initiative into manageable steps to reduce overwhelm.</li>
                            </ul>
                            <h3 className="label">Leverage Technology</h3>
                            <ul className="list">
                                <li>Use tools like project management platforms to track progress and collaboration.</li>
                                <li>Adopt digital training solutions to upskill teams efficiently.</li>
                            </ul>
                            <h3 className="label">Foster a Culture of Adaptability</h3>
                            <ul className="list">
                                <li>Celebrate small wins to build momentum and confidence.</li>
                                <li>Encourage innovation by rewarding employees who embrace change.</li>
                            </ul>
                            <h3 className="label">Build Resilience</h3>
                            <ul className="list">
                                <li>Prepare teams for future changes by investing in ongoing development.</li>
                                <li>Create an open environment where challenges can be discussed and addressed proactively.</li>
                            </ul>
                        </div>
                        <div id="section6" className="article-main__row">
                            <h2 className="title">Real-World Examples of Successful Change Management</h2>
                            <h3 className="label">Microsoft’s Cultural Transformation</h3>
                            <ul className="list">
                                <li>Under Satya Nadella’s leadership, Microsoft shifted from a “know-it-all” culture to a “learn-it-all” culture.</li>
                                <li>Key strategies included leadership training, a renewed focus on empathy, and a clear mission of empowering every individual and organisation.</li>
                            </ul>
                            <h3 className="label">Netflix’s Business Model Evolution</h3>
                            <ul className="list">
                                <li>Netflix transitioned from DVD rentals to a streaming-first model, embracing digital innovation.</li>
                                <li>The company invested in new technology and data-driven decisions while maintaining employee transparency.</li>
                            </ul>
                            <h3 className="label">Procter & Gamble’s Sustainability Initiative</h3>
                            <ul className="list">
                                <li>P&G integrated sustainability into its business strategy by retraining employees, partnering with eco-friendly suppliers, and setting measurable goals.</li>
                                <li>Transparent communication with stakeholders ensured widespread buy-in.</li>
                            </ul>
                            <h3 className="label">Metrics to Measure Change Success</h3>
                            <p className="text">Tracking the success of change initiatives is critical to refining the process. Common metrics include:</p>
                            <ul className="list">
                                <li><span>Adoption Rates:</span> Measure how many employees actively use new tools or processes.</li>
                                <li><span>Employee Engagement Scores:</span> Gauge morale and alignment with the change initiative.</li>
                                <li><span>Operational Efficiency:</span> Assess improvements in productivity, cost savings, or turnaround times.</li>
                                <li><span>Customer Satisfaction:</span> Evaluate how changes impact the customer experience.</li>
                                <li><span>ROI of Change Initiatives:</span> Determine the financial benefits of the change compared to its costs.</li>
                            </ul>
                            <h3 className="label">Preparing for the Future of Change Management</h3>
                            <p className="text">As technology and global dynamics evolve, businesses must adopt forward-thinking approaches:</p>
                            <ul className="list">
                                <li><span>AI and Data-Driven Insights:</span> Use predictive analytics to anticipate and plan for disruptions.</li>
                                <li><span>Digital Collaboration Tools:</span> Facilitate remote teamwork and engagement during transitions.</li>
                                <li><span>Inclusive Change Processes:</span> Ensure diverse perspectives are included in decision-making.</li>
                            </ul>
                        </div>
                        <div id="section7" className="article-main__row">
                            <h2 className="title">Conclusion</h2>
                            <p className="text">Mastering change management is essential for businesses thriving in a rapidly evolving world. Organisations can turn challenges into opportunities by embracing adaptability, fostering a culture of resilience, and prioritising communication.</p>
                            <br />
                            <p className="text">Remember, change isn’t just about survival but growth and innovation. Start building your organisation’s change management capabilities today to thrive in tomorrow’s world.</p>
                        </div>
                    </motion.div>
                </div>
                <h3 className="article-main__label">Relevant articles</h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={0.2}
                    className="insight-main__articles">
                    <Link href="/navigating-market-disruptions-in-2025" className="insight-main__article">
                        <h3 className="title">Navigating Market Disruptions in 2025</h3>
                        <div className="text">Uncover strategies to adapt to unpredictable market shifts, minimise risks, and turn challenges into opportunities for growth.</div>
                        <div className="link">Read more <ArrowRight /> </div>
                    </Link>
                    <Link href="/top-5-digital-tools-to-streamline-business-operations" className="insight-main__article">
                        <h3 className="title">Top 5 Digital Tools to Streamline Business Operations</h3>
                        <div className="text">Discover the must-have tools that enhance efficiency, improve workflows, and empower your team to achieve more in less time.</div>
                        <div className="link">Read more <ArrowRight /> </div>
                    </Link>
                    <Link href="/future-proofing-your-business-strategies-for-2025-and-beyond" className="insight-main__article">
                        <h3 className="title">Future-Proofing Your Business: Strategies for 2025 and Beyond</h3>
                        <div className="text">Learn how to prepare your business for upcoming technological advancements, market changes, and emerging trends.</div>
                        <div className="link">Read more <ArrowRight /> </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ArticleMain;
