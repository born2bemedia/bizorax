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

const CapabilitiesSlider1 = () => {

    const slides = [
        {
            title: "<span>Business</span> <span>Needs</span> <span>Assessment</span>",
            text: "Deep dive into your organisation to identify key focus areas.",
            service: 'Business Needs Assessment',
        },
        {
            title: "<span>Goal</span> <span>Alignment</span> <span>Roadmap</span>",
            text: "Ensuring your operations align with long-term objectives.",
            service: 'Goal Alignment Roadmap',
        },
        {
            title: "<span>SWOT</span> <span>Analysis</span>",
            text: "Identifying strengths, weaknesses, opportunities, and threats.",
            service: 'SWOT Analysis',
        },

        {
            title: "<span>Risk</span> <span>Assessment</span> <span>Frameworks</span>",
            text: "Evaluating potential risks to safeguard your strategy.",
            service: 'Risk Assessment Frameworks',
        },

        {
            title: "<span>Competitive</span> <span>Benchmarking</span>",
            text: "Understanding how you compare to industry leaders.",
            service: 'Competitive Benchmarking',
        },

        {
            title: "<span>Strategic</span> <span>Vision</span> <span>Workshops</span>",
            text: "Guiding leadership in defining and communicating goals.",
            service: 'Strategic Vision Workshops',
        },

        {
            title: "<span>Market</span> <span>Trend</span> <span>Analysis</span>",
            text: "Leveraging data to predict and prepare for industry changes.",
            service: 'Market Trend Analysis',
        },

        {
            title: "<span>OKR</span> <span>Development</span>",
            text: "Implementing measurable objectives and key results.",
            service: 'OKR Development',
        },

        {
            title: "<span>Scenario</span> <span>Planning</span>",
            text: "Preparing your business for various market outcomes.",
            service: 'Scenario Planning',
        },

        {
            title: "<span>Resource</span> <span>Allocation</span> <span>Strategy</span>",
            text: "Ensuring optimal use of assets and personnel.",
            service: 'Resource Allocation Strategy',
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
        <div className="capa-slider">
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

export default CapabilitiesSlider1;