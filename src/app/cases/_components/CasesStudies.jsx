"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/styles/cases.scss";
import CountUpOnViewport from "@/components/CountUpOnViewport";

const CasesStudies = () => {
    const [visibleRows, setVisibleRows] = useState(new Set());
    const rowRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const targetIndex = rowRefs.current.indexOf(entry.target);

                    if (entry.isIntersecting) {
                        setVisibleRows((prev) => {
                            const newSet = new Set(prev);
                            newSet.add(entry.target);
                            return newSet;
                        });
                    } else {
                        setVisibleRows((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(entry.target);
                            return newSet;
                        });
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        rowRefs.current.forEach((row) => {
            if (row) observer.observe(row);
        });

        return () => {
            rowRefs.current.forEach((row) => {
                if (row) observer.unobserve(row);
            });
        };
    }, []);
    return (
        <>
            <section className="cases-studies">
                <div className="cases-studies__container">
                    <div className="cases-studies__body">
                        <h2 className="cases-studies__title">Case Studies</h2>
                        <div className="cases-studies__rows">
                            {/* 01 */}
                            <div
                                ref={(el) => (rowRefs.current[0] = el)}
                                className={`cases-studies__row-01 ${visibleRows.has(rowRefs.current[0]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-01.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Optimising Operations for a Retail Chain</h3>
                                    <div className="text">The Bizorax crew follows a structured yet flexible process that ensures every project is tailored to your business goals.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">High operational costs due to outdated processes.</li>
                                                    <li className="item">Fragmented supply chain, leading to delays and stock inconsistencies.</li>
                                                    <li className="item">Difficulty in tracking performance metrics across multiple locations.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 10.4242C33.1564 9.69194 34.3436 9.69194 35.0758 10.4242L53.8258 29.1742C54.1775 29.5258 54.375 30.0027 54.375 30.5C54.375 30.9973 54.1775 31.4742 53.8258 31.8258L35.0758 50.5758C34.3436 51.3081 33.1564 51.3081 32.4242 50.5758C31.6919 49.8436 31.6919 48.6564 32.4242 47.9242L47.9733 32.375H7.5C6.46447 32.375 5.625 31.5355 5.625 30.5C5.625 29.4645 6.46447 28.625 7.5 28.625H47.9734L32.4242 13.0758C31.6919 12.3436 31.6919 11.1564 32.4242 10.4242Z" fill="#EDEBE7" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Conducted a full operational audit to identify inefficiencies.</li>
                                                    <li className="item-ol">Implemented a centralised supply chain management system.</li>
                                                    <li className="item-ol">Designed streamlined workflows to enhance in-store processes.</li>
                                                    <li className="item-ol">Provided training for regional managers to adopt new systems effectively.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={25} />%</div>
                                                    <div className="text">reduction in operational costs achieved within 6 months.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={30} />%</div>
                                                    <div className="text">improvement in supply chain efficiency led to faster restocking times.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={100} />+</div>
                                                    <div className="text">locations now benefit from enhanced tracking and reporting.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“With Bizorax’s help, we scaled faster than we thought possible. Their insights into market trends and customer behaviour were game-changing.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 02 */}
                            <div
                                ref={(el) => (rowRefs.current[1] = el)}
                                className={`cases-studies__row-02 ${visibleRows.has(rowRefs.current[1]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-02.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Scaling Growth for a Tech Startup</h3>
                                    <div className="text">A fast-growing tech startup needed a scalable business model to meet increasing demand. Despite a strong product offering, they struggled with operational bottlenecks and slow customer acquisition.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">Lack of a clear growth strategy.</li>
                                                    <li className="item">Inefficient customer acquisition funnel.</li>
                                                    <li className="item">Limited operational capacity to handle scaling.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 10.4242C33.1564 9.69194 34.3436 9.69194 35.0758 10.4242L53.8258 29.1742C54.1775 29.5258 54.375 30.0027 54.375 30.5C54.375 30.9973 54.1775 31.4742 53.8258 31.8258L35.0758 50.5758C34.3436 51.3081 33.1564 51.3081 32.4242 50.5758C31.6919 49.8436 31.6919 48.6564 32.4242 47.9242L47.9733 32.375H7.5C6.46447 32.375 5.625 31.5355 5.625 30.5C5.625 29.4645 6.46447 28.625 7.5 28.625H47.9734L32.4242 13.0758C31.6919 12.3436 31.6919 11.1564 32.4242 10.4242Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Conducted a full operational audit to identify inefficiencies.</li>
                                                    <li className="item-ol">Implemented a centralised supply chain management system.</li>
                                                    <li className="item-ol">Designed streamlined workflows to enhance in-store processes.</li>
                                                    <li className="item-ol">Provided training for regional managers to adopt new systems effectively.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={40} />%</div>
                                                    <div className="text">increase in revenue recorded within 12 months.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={80} />%</div>
                                                    <div className="text">faster customer acquisition boosted market share significantly.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number">0%</div>
                                                    <div className="text">client satisfaction with our projects so far.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“Bizorax transformed our operations, making us more agile and cost-efficient. Their team worked closely with ours to ensure a seamless transition.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 03 */}
                            <div
                                ref={(el) => (rowRefs.current[2] = el)}
                                className={`cases-studies__row-03 ${visibleRows.has(rowRefs.current[2]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-03.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Driving Digital Transformation for a Healthcare Provider</h3>
                                    <div className="text">A mid-sized healthcare provider faced challenges with patient engagement and outdated IT systems. Their fragmented infrastructure hindered efficient care delivery and regulatory compliance.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">Outdated IT systems that couldn’t support modern healthcare needs.</li>
                                                    <li className="item">Low patient engagement due to lack of digital communication tools.</li>
                                                    <li className="item">Compliance risks with fragmented patient data management.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 9.92417C33.1564 9.19194 34.3436 9.19194 35.0758 9.92417L53.8258 28.6742C54.1775 29.0258 54.375 29.5027 54.375 30C54.375 30.4973 54.1775 30.9742 53.8258 31.3258L35.0758 50.0758C34.3436 50.8081 33.1564 50.8081 32.4242 50.0758C31.6919 49.3436 31.6919 48.1564 32.4242 47.4242L47.9733 31.875H7.5C6.46447 31.875 5.625 31.0355 5.625 30C5.625 28.9645 6.46447 28.125 7.5 28.125H47.9734L32.4242 12.5758C31.6919 11.8436 31.6919 10.6564 32.4242 9.92417Z" fill="#EDEBE7" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Implemented a centralised IT system for patient data management.</li>
                                                    <li className="item-ol">Designed and launched a patient engagement platform with mobile capabilities.</li>
                                                    <li className="item-ol">Streamlined workflows to reduce administrative burden for healthcare staff.</li>
                                                    <li className="item-ol">Conducted compliance training for all employees.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={50} />%</div>
                                                    <div className="text">increase in patient engagement delivered through the new platform.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={500} />K</div>
                                                    <div className="text">saved annually by streamlining IT operations.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={3} /></div>
                                                    <div className="text">months was all it took to achieve full compliance with healthcare regulations.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“Bizorax not only modernised our systems but also transformed how we engage with patients. The results speak for themselves.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 04 */}
                            <div
                                ref={(el) => (rowRefs.current[3] = el)}
                                className={`cases-studies__row-01 ${visibleRows.has(rowRefs.current[3]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-04.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Enhancing Logistics for a Supply Chain Company</h3>
                                    <div className="text">A supply chain company struggled with rising transportation costs and inefficiencies in inventory management. These challenges impacted their delivery timelines and overall client satisfaction.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">Rising transportation costs eroding profitability.</li>
                                                    <li className="item">Inefficient inventory management resulting in frequent stockouts.</li>
                                                    <li className="item">Delayed deliveries affecting customer satisfaction.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 9.92417C33.1564 9.19194 34.3436 9.19194 35.0758 9.92417L53.8258 28.6742C54.1775 29.0258 54.375 29.5027 54.375 30C54.375 30.4973 54.1775 30.9742 53.8258 31.3258L35.0758 50.0758C34.3436 50.8081 33.1564 50.8081 32.4242 50.0758C31.6919 49.3436 31.6919 48.1564 32.4242 47.4242L47.9733 31.875H7.5C6.46447 31.875 5.625 31.0355 5.625 30C5.625 28.9645 6.46447 28.125 7.5 28.125H47.9734L32.4242 12.5758C31.6919 11.8436 31.6919 10.6564 32.4242 9.92417Z" fill="#EDEBE7" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Introduced AI-driven inventory management tools to optimise stock levels.</li>
                                                    <li className="item-ol">Implemented route optimization software to reduce transportation costs.</li>
                                                    <li className="item-ol">Designed new reporting tools to provide real-time logistics data.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={25} />%</div>
                                                    <div className="text">reduction in delivery times improved customer satisfaction scores.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={15} />%</div>
                                                    <div className="text">decrease in transportation costs achieved within the first quarter.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={35} />%</div>
                                                    <div className="text">boost in inventory accuracy minimized stockouts effectively.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“Bizorax turned our supply chain into a well-oiled machine. Their technology-driven approach was exactly what we needed.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 05 */}
                            <div
                                ref={(el) => (rowRefs.current[4] = el)}
                                className={`cases-studies__row-02 ${visibleRows.has(rowRefs.current[4]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-05.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Boosting Employee Engagement for a Financial Firm</h3>
                                    <div className="text">A financial services firm faced high employee turnover and declining productivity. The leadership sought a strategy to boost engagement and create a more positive workplace culture.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">Employee turnover rates of over 30%, leading to frequent hiring costs.</li>
                                                    <li className="item">Low engagement scores from annual employee surveys.</li>
                                                    <li className="item">Reduced productivity affecting client services.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 10.4242C33.1564 9.69194 34.3436 9.69194 35.0758 10.4242L53.8258 29.1742C54.1775 29.5258 54.375 30.0027 54.375 30.5C54.375 30.9973 54.1775 31.4742 53.8258 31.8258L35.0758 50.5758C34.3436 51.3081 33.1564 51.3081 32.4242 50.5758C31.6919 49.8436 31.6919 48.6564 32.4242 47.9242L47.9733 32.375H7.5C6.46447 32.375 5.625 31.5355 5.625 30.5C5.625 29.4645 6.46447 28.625 7.5 28.625H47.9734L32.4242 13.0758C31.6919 12.3436 31.6919 11.1564 32.4242 10.4242Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Conducted a comprehensive employee satisfaction survey to identify pain points.</li>
                                                    <li className="item-ol">Implemented a recognition and reward program.</li>
                                                    <li className="item-ol">Designed leadership training sessions to improve management skills.</li>
                                                    <li className="item-ol">Streamlined internal communication processes to ensure transparency.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={35} />%</div>
                                                    <div className="text">improvement in employee retention achieved within 6 months.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={20} />%</div>
                                                    <div className="text">increase in productivity levels resulted in enhanced client satisfaction.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={50} />%</div>
                                                    <div className="text">jump in engagement survey scores demonstrated team improvement.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“Bizorax helped us turn our workplace into an environment where employees want to stay and thrive.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 06 */}
                            <div
                                ref={(el) => (rowRefs.current[5] = el)}
                                className={`cases-studies__row-03 ${visibleRows.has(rowRefs.current[5]) ? "_sticky" : ""
                                    }`}
                            >
                                <div className="image"><img src="/images/cases/img-06.jpg" alt="image" /></div>
                                <div className="top">
                                    <h3 className="title">Expanding Market Presence for a Manufacturing Business</h3>
                                    <div className="text">A manufacturing company aimed to enter international markets but faced regulatory and logistical challenges. They sought Bizorax’s expertise to navigate the complexities of global expansion.</div>
                                </div>
                                <div className="table">
                                    <div className="wrapper">
                                        <div className="row-01">
                                            <div className="col-01">
                                                <h4 className="label">Challenges</h4>
                                                <ul className="list">
                                                    <li className="item">Regulatory barriers in target markets.</li>
                                                    <li className="item">Difficulty localising products to meet cultural expectations.</li>
                                                    <li className="item">Limited understanding of international supply chain logistics.</li>
                                                </ul>
                                            </div>
                                            <div className="col-02">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M32.4242 9.92417C33.1564 9.19194 34.3436 9.19194 35.0758 9.92417L53.8258 28.6742C54.1775 29.0258 54.375 29.5027 54.375 30C54.375 30.4973 54.1775 30.9742 53.8258 31.3258L35.0758 50.0758C34.3436 50.8081 33.1564 50.8081 32.4242 50.0758C31.6919 49.3436 31.6919 48.1564 32.4242 47.4242L47.9733 31.875H7.5C6.46447 31.875 5.625 31.0355 5.625 30C5.625 28.9645 6.46447 28.125 7.5 28.125H47.9734L32.4242 12.5758C31.6919 11.8436 31.6919 10.6564 32.4242 9.92417Z" fill="#EDEBE7" />
                                                </svg>
                                            </div>
                                            <div className="col-03">
                                                <h4 className="label">Bizorax Solutions</h4>
                                                <ol className="list-ol">
                                                    <li className="item-ol">Conducted in-depth market research for target regions.</li>
                                                    <li className="item-ol">Developed localization strategies to adapt products for new markets.</li>
                                                    <li className="item-ol">Provided regulatory compliance guidance tailored to each country.</li>
                                                    <li className="item-ol">Established partnerships with local distributors and logistics providers.</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="row-02">
                                            <h4 className="label">Results</h4>
                                            <div className="items">
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={3} /></div>
                                                    <div className="text">new markets successfully entered within 12 months.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={50} />%</div>
                                                    <div className="text">growth in international sales drove significant revenue gains.</div>
                                                </div>
                                                <div className="item">
                                                    <div className="number"><CountUpOnViewport targetNumber={100} />%</div>
                                                    <div className="text">compliance achieved in all target regions, ensuring smooth market entry.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-03">
                                            <h4 className="label">Quote from Client</h4>
                                            <div className="text">“Thanks to Bizorax, we’ve expanded globally without the typical growing pains. Their expertise was invaluable.”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CasesStudies;