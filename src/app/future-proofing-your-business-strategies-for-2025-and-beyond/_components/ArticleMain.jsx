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
                                    { id: "section1", label: "Why Sustainability Matters in Business" },
                                    { id: "section2", label: "Pillars of Sustainable Business Practices" },
                                    { id: "section3", label: "Benefits of Sustainable Practices" },
                                    { id: "section4", label: "Strategies for Implementing Sustainability" },
                                    { id: "section5", label: "Examples of Sustainable Business Practices" },
                                    { id: "section6", label: "Balancing Profit and Responsibility" },
                                    { id: "section7", label: "Challenges to Overcome" },
                                    { id: "section8", label: "Conclusion" },
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
                            <h2 className="title">Why Sustainability Matters in Business</h2>
                            <h3 className="label">Growing Consumer Demand</h3>
                            <ul className="list">
                                <li>Consumers are increasingly choosing brands that align with their values.</li>
                                <li>Sustainable practices enhance brand loyalty and attract eco-conscious customers.</li>
                            </ul>
                            <h3 className="label">Regulatory Pressure</h3>
                            <ul className="list">
                                <li>Governments worldwide are implementing stricter emissions, waste, and resource use regulations.</li>
                                <li>Adopting sustainable practices now helps businesses stay ahead of compliance requirements.</li>
                            </ul>
                            <h3 className="label">Competitive Advantage</h3>
                            <ul className="list">
                                <li>Companies that prioritise sustainability can differentiate themselves in crowded markets.</li>
                                <li>Sustainability can lead to cost savings through efficient resource management.</li>
                            </ul>
                        </div>
                        <div id="section2" className="article-main__row">
                            <h2 className="title">Pillars of Sustainable Business Practices</h2>
                            <h3 className="label">Environmental Sustainability</h3>
                            <ul className="list">
                                <li><span>Energy Efficiency:</span> Shift to renewable energy sources and optimise energy use.</li>
                                <li><span>Waste Reduction:</span> Implement recycling programs and reduce packaging materials.</li>
                                <li><span>Carbon Footprint Management:</span> Offset emissions through carbon credits or green initiatives.</li>
                            </ul>
                            <h3 className="label">Social Responsibility</h3>
                            <ul className="list">
                                <li><span>Fair Labor Practices:</span> Ensure ethical treatment and fair wages for all employees.</li>
                                <li><span>Community Engagement:</span> Invest in local communities through education, health, and infrastructure programs.</li>
                                <li><span>Diversity and Inclusion:</span> Foster an equitable workplace culture.</li>
                            </ul>
                            <h3 className="label">Economic Viability</h3>
                            <ul className="list">
                                <li><span>Long-Term Planning:</span> Develop business models that focus on sustainability without compromising profitability.</li>
                                <li><span>Circular Economy:</span> Reuse, recycle, and repurpose materials to create a closed-loop system.</li>
                            </ul>
                        </div>
                        <div id="section3" className="article-main__row">
                            <h2 className="title">Benefits of Sustainable Practices</h2>
                            <h3 className="label">Cost Savings</h3>
                            <ul className="list">
                                <li>Energy-efficient technologies and waste reduction can significantly lower operating costs.</li>
                                <li>Sustainable supply chains reduce transportation and raw material expenses.</li>
                                <li><span>Enhanced Brand Reputation:</span> Companies known for sustainability enjoy greater trust and loyalty from customers and stakeholders.</li>
                                <li><span>Innovation and Growth:</span> Sustainability often drives innovation, leading to new products, services, or markets.</li>
                                <li><span>Attracting Talent:</span> Employees increasingly want to work for organisations that prioritise environmental and social responsibility.</li>
                            </ul>
                        </div>
                        <div id="section4" className="article-main__row">
                            <h2 className="title">Strategies for Implementing Sustainability</h2>
                            <h3 className="label">Conduct a Sustainability Audit</h3>
                            <ul className="list">
                                <li>Assess your company’s current environmental, social, and economic impact.</li>
                                <li>Identify areas where improvements can be made.</li>
                            </ul>
                            <h3 className="label">Set Clear Goals</h3>
                            <ul className="list">
                                <li>Establish measurable targets, such as reducing carbon emissions by a specific percentage.</li>
                                <li>Communicate these goals transparently to stakeholders.</li>
                            </ul>
                            <h3 className="label">Collaborate with Stakeholders</h3>
                            <ul className="list">
                                <li>Work with suppliers, customers, and industry peers to adopt sustainable practices.</li>
                                <li>Encourage stakeholder input to create impactful initiatives.</li>
                            </ul>
                            <h3 className="label">Invest in Sustainable Technology</h3>
                            <ul className="list">
                                <li>Implement tools like IoT for monitoring energy use and waste.</li>
                                <li>Use AI and data analytics to optimise resource allocation.</li>
                            </ul>
                            <h3 className="label">Educate and Empower Employees</h3>
                            <ul className="list">
                                <li>Train staff on sustainable practices and encourage them to contribute ideas.</li>
                                <li>Reward initiatives that lead to measurable sustainability outcomes.</li>
                            </ul>
                        </div>
                        <div id="section5" className="article-main__row">
                            <h2 className="title">Examples of Sustainable Business Practices</h2>
                            <h3 className="label">Patagonia (Retail)</h3>
                            <ul className="list">
                                <li>Uses recycled materials for its products and commits to environmental activism.</li>
                                <li>Encourages customers to repair and reuse their products through the “Worn Wear” program.</li>
                            </ul>
                            <h3 className="label">IKEA (Furniture)</h3>
                            <ul className="list">
                                <li>Invested in renewable energy and aims to become a climate-positive company by 2030.</li>
                                <li>Offers circular services like furniture rental and recycling.</li>
                            </ul>
                            <h3 className="label">Unilever (Consumer Goods)</h3>
                            <ul className="list">
                                <li>Developed a “Sustainable Living Plan” to reduce its environmental impact and improve social conditions.</li>
                                <li>Committed to sourcing 100% of its agricultural raw materials sustainably.</li>
                            </ul>
                        </div>
                        <div id="section6" className="article-main__row">
                            <h2 className="title">Balancing Profit and Responsibility</h2>
                            <h3 className="label">Integrating Sustainability into Core Strategy</h3>
                            <ul className="list">
                                <li>Make sustainability a core business model, not just an add-on.</li>
                                <li>Align sustainable initiatives with profitability goals.</li>
                            </ul>
                            <h3 className="label">Measuring Impact</h3>
                            <ul className="list">
                                <li>Track the success of your initiatives using metrics such as carbon emissions reduction, cost savings, and customer satisfaction.</li>
                            </ul>
                            <h3 className="label">Engaging Customers</h3>
                            <ul className="list">
                                <li>Share your sustainability story through marketing campaigns and product labels.</li>
                                <li>Educate customers on how they can support your efforts by making eco-friendly choices.</li>
                            </ul>
                        </div>
                        <div id="section7" className="article-main__row">
                            <h2 className="title">Challenges to Overcome</h2>
                            <h3 className="label">Initial Costs</h3>
                            <ul className="list">
                                <li>Implementing sustainable practices often requires upfront investment in technology and infrastructure.</li>
                                <li>Long-term cost savings and efficiency gains can offset these expenses.</li>
                            </ul>
                            <h3 className="label">Resistance to Change</h3>
                            <ul className="list">
                                <li>Employees and stakeholders may be hesitant to adopt new practices.</li>
                                <li>Address concerns through education, training, and communication.</li>
                            </ul>
                            <h3 className="label">Greenwashing Risks</h3>
                            <ul className="list">
                                <li>Ensure credible data backs up your sustainability claims to avoid accusations of greenwashing.</li>
                            </ul>
                            <h3 className="label">The Future of Sustainable Business</h3>
                            <p className="text">Sustainability is no longer a choice but necessary for businesses looking to thrive in the modern world. By balancing profit with responsibility, companies can:</p>
                            <ul className="list">
                                <li>Build trust and loyalty among customers and stakeholders.</li>
                                <li>Create long-term value for shareholders.</li>
                                <li>Contribute positively to the planet and society.</li>
                            </ul>
                        </div>
                        <div id="section8" className="article-main__row">
                            <h2 className="title">Conclusion</h2>
                            <p className="text">Adopting sustainable business practices is about more than just doing the right thing — it’s about future-proofing your organisation for success. Integrating sustainability into your core operations can drive innovation, increase profitability, and build a brand that resonates with today’s values-driven consumers.</p>
                            <br />
                            <p className="text">Start small, think big, and take actionable steps today to balance profit with responsibility.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ArticleMain;
