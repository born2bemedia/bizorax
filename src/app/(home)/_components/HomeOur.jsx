"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import "@/styles/home/home.scss";
import Link from "next/link";
import ArrowTopRight from "@/icons/other/ArrowTopRight";

const HomeOur = () => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const items = [
        {
            title: "Optimising Operations for a Retail Chain",
            details: [
                "Reduced operational costs by 25%.",
                "Improved supply chain efficiency by 30%."
            ],
        },
        {
            title: "Scaling Growth for a Tech Startup",
            details: [
                "Boosted revenue by 40% within 12 months.",
                "Developed a go-to-market strategy that drove 80% faster customer acquisition."
            ],
        },
        {
            title: "Driving Digital Transformation for a Healthcare Provider",
            details: [
                "Enhanced patient engagement by 50%.",
                "Streamlined IT operations, saving $500K annually."
            ]
            ,
        }
    ];

    const handleMouseEnter = (index) => {
        setActiveIndex(index); 
    };

    const handleMouseLeave = () => {
        setActiveIndex(0); 
    };

    return (
        <section className="home-our">
            <div className="home-our__container _container">
                <div className="home-our__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-our__title"
                    >
                        Our Impact in Action
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-our__items"
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href="/cases"
                                className={`home-our__item ${
                                    activeIndex === index ? "_active" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="home-our__icon">
                                    <ArrowTopRight />
                                </div>
                                <h3 className="home-our__label">{item.title}</h3>
                                <ul className="home-our__list">
                                    {item.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="home-our__li">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeOur;