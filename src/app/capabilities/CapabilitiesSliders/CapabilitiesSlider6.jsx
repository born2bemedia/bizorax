"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowLeft from "@/icons/slider/ArrowLeft";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";

const CapabilitiesSlider6 = () => {

    const slides = [
        {
            title: "<span>Employee</span> <span>Performance</span> <span>Metrics</span> <span>Development</span>",
            text: "Defining measurable KPIs for staff.",
            service: 'Employee Performance Metrics Development',
        },
        {
            title: "<span>Sales</span> <span>Funnel</span> <span>Optimization</span>",
            text: "Improving conversion rates.",
            service: 'Sales Funnel Optimization',
        },
        {
            title: "<span>Financial</span> <span>Performance</span> <span>Audits</span>",
            text: "Identifying areas to increase profitability.",
            service: 'Financial Performance Audits',
        },
        {
            title: "<span>Customer</span> <span>Experience</span> <span>Enhancements</span>",
            text: "Boosting satisfaction and retention.",
            service: 'Customer Experience Enhancements',
        },
        {
            title: "<span>Team</span> <span>Collaboration</span> <span>Tools</span>",
            text: "Implementing platforms for seamless teamwork.",
            service: 'Team Collaboration Tools',
        },
        {
            title: "<span>Market</span> <span>Share</span> <span>Growth</span> <span>Strategies</span>",
            text: "Tactics to capture a larger market share.",
            service: 'Market Share Growth Strategies',
        },
        {
            title: "<span>Supply</span> <span>Chain</span> <span>Performance</span> <span>Metrics</span>",
            text: "Tracking and improving logistics KPIs.",
            service: 'Supply Chain Performance Metrics',
        },
        {
            title: "<span>Technology</span> <span>Utilisation</span> <span>Reviews</span>",
            text: "Ensuring tools are used effectively.",
            service: 'Technology Utilisation Reviews',
        },
        {
            title: "<span>Leadership</span> <span>Development</span> <span>Programs</span>",
            text: "Strengthening management effectiveness.",
            service: 'Leadership Development Programs',
        },
        {
            title: "<span>Quarterly</span> <span>Performance</span> <span>Reviews</span>",
            text: "Monitoring and optimising progress.",
            service: 'Quarterly Performance Reviews',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <div className="capa-slider__slider">
            <motion.div className="capa-slider__wrapper">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={16}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                    slidesPerView="auto"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <div className="capa-slider__item">
                                <h3
                                    className="capa-slider__title"
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />
                                <div className="capa-slider__text">{slide.text}</div>
                                <OrderButton
                                    className={"capa-slider__link"}
                                    text={"Order"}
                                    service={slide.service}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
                className="capa-slider__buttons"
            >
                <button ref={prevRef} className="capa-slider__prev">
                    <ArrowLeft />
                </button>
                <button ref={nextRef} className="capa-slider__next">
                    <ArrowRight />
                </button>
            </motion.div>
        </div>
    );
};

export default CapabilitiesSlider6;