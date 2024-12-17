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
                                    { id: "section1", label: "Asana: Simplify Project Management" },
                                    { id: "section2", label: "Slack: Enhance Team Communication" },
                                    { id: "section3", label: "Tableau: Unlock the Power of Data" },
                                    { id: "section4", label: "HubSpot: Automate Marketing and Sales" },
                                    { id: "section5", label: "DocuSign: Simplify Document Management" },
                                    { id: "section6", label: "How to Choose the Right Tools" },
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
                            <h2 className="title">Asana: Simplify Project Management</h2>
                            <h3 className="label">Why Asana?</h3>
                            <p className="text">Managing multiple projects can be overwhelming, but Asana makes it easy by offering a centralised platform to track tasks, deadlines, and team responsibilities.</p>
                            <h3 className="label">Key Features:</h3>
                            <ul className="list">
                                <li><span>Task Assignments:</span> Delegate tasks to team members with clear deadlines.</li>
                                <li><span>Custom Workflows:</span> Create processes tailored to your business needs.</li>
                                <li><span>Progress Tracking:</span> Use dashboards to monitor project milestones in real-time.</li>
                                <li><span>Integration:</span> Connect with tools like Slack, Google Drive, and Microsoft Teams.</li>
                            </ul>
                            <h3 className="label">How It Helps:</h3>
                            <p className="text">Improves productivity and ensures everyone stays on the same page, regardless of team size or location.</p>
                        </div>
                        <div id="section2" className="article-main__row">
                            <h2 className="title">Slack: Enhance Team Communication</h2>
                            <h3 className="label">Why Slack?</h3>
                            <p className="text">Clear communication is the backbone of effective operations. Slack brings your team together with instant messaging and organised channels for specific topics or projects.</p>
                            <h3 className="label">Key Features:</h3>
                            <ul className="list">
                                <li><span>Channels:</span> Keep discussions organised by projects, teams, or goals.</li>
                                <li><span>File Sharing:</span> Easily share documents, images, and videos.</li>
                                <li><span>Searchable Archives:</span> Quickly find past conversations and files.</li>
                                <li><span>Third-Party Integrations:</span> Connect with tools like Asana, Zoom, and Google Workspace.</li>
                            </ul>
                            <h3 className="label">How It Helps:</h3>
                            <p className="text">Reduces email clutter and promotes fast, focused communication across teams.</p>
                        </div>
                        <div id="section3" className="article-main__row">
                            <h2 className="title">Tableau: Unlock the Power of Data</h2>
                            <h3 className="label">Why Tableau?</h3>
                            <p className="text">Data-driven decisions are critical for growth. Tableau transforms raw data into interactive visualisations, making understanding trends and performance metrics easier.</p>
                            <ul className="list">
                                <li><span>Data Visualization:</span> Build interactive dashboards to analyse data at a glance.</li>
                                <li><span>Real-Time Analytics:</span> Access up-to-date metrics for informed decisions.</li>
                                <li><span>Scalability:</span> Suitable for businesses of all sizes.</li>
                                <li><span>Integration:</span> Works with Excel, SQL, and other data sources.</li>
                            </ul>
                            <h3 className="label">How It Helps:</h3>
                            <p className="text">Enables data-driven decision-making and helps identify opportunities for growth or improvement.</p>
                        </div>
                        <div id="section4" className="article-main__row">
                            <h2 className="title">HubSpot: Automate Marketing and Sales</h2>
                            <h3 className="label">Why HubSpot?</h3>
                            <p className="text">Streamlining customer relationship management (CRM) and marketing efforts is vital. HubSpot combines CRM, email marketing, and sales automation into one powerful platform.</p>
                            <ul className="list">
                                <li><span>CRM:</span> Track leads, customers, and sales progress.</li>
                                <li><span>Marketing Automation:</span> Automate email campaigns, social media posts, and ads.</li>
                                <li><span>Sales Tools:</span> Manage pipelines and forecast revenue.</li>
                                <li><span>Reporting:</span> Generate detailed performance reports to measure ROI.</li>
                            </ul>
                            <h3 className="label">How It Helps:</h3>
                            <p className="text">Saves time on repetitive tasks, nurtures leads effectively, and boosts sales productivity.</p>
                        </div>
                        <div id="section5" className="article-main__row">
                            <h2 className="title">DocuSign: Simplify Document Management</h2>
                            <h3 className="label">Why DocuSign?</h3>
                            <p className="text">Managing contracts and agreements can be time-consuming. DocuSign streamlines the process with electronic signatures and secure document sharing.</p>
                            <h3 className="label">Key Features:</h3>
                            <ul className="list">
                                <li><span>E-Signatures:</span> Sign and send documents quickly and securely.</li>
                                <li><span>Workflow Automation:</span> Automate approval processes and reminders.</li>
                                <li><span>Cloud Storage:</span> Store signed documents for easy access.</li>
                                <li><span>Compliance:</span> Meets global security and legal standards.</li>
                            </ul>
                            <h3 className="label">How It Helps:</h3>
                            <p className="text">Eliminates paperwork delays, ensuring faster turnaround times for agreements and contracts.</p>
                        </div>
                        <div id="section6" className="article-main__row">
                            <h2 className="title">How to Choose the Right Tools</h2>
                            <p className="text">While these five tools are among the best, the right choice depends on your business’s unique needs. Consider these factors:</p>
                            <ul className="list">
                                <li><span>Scalability:</span> Can the tool grow with your business?</li>
                                <li><span>Ease of Use:</span> Will your team adopt and effectively use the tool?</li>
                                <li><span>Integration:</span> Does it work well with your existing software?</li>
                                <li><span>Cost:</span> Do the potential efficiency gains justify the investment?</li>
                            </ul>
                        </div>
                        <div id="section7" className="article-main__row">
                            <h2 className="title">Conclusion</h2>
                            <p className="text">Leveraging digital tools like Asana, Slack, Tableau, HubSpot, and DocuSign can transform your operations, helping you achieve greater efficiency, better collaboration, and smarter decision-making. In today’s competitive market, streamlining operations isn’t just a convenience — it’s a necessity.</p>
                            <br />
                            <p className="text">Start by exploring how these tools can fit into your workflows and drive tangible results for your business.</p>
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
