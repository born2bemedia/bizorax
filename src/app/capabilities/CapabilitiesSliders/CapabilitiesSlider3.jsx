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

const CapabilitiesSlider3 = () => {

    const slides = [
        {
            title: "<span>Market</span> <span>Research & </span> <span>Analysis</span>",
            text: "Comprehensive studies to identify opportunities.",
            service: 'Market Research & Analysis',
        },
        {
            title: "<span>Entry</span> <span>Strategy</span> <span>Development</span>",
            text: "Crafting a plan tailored to the target market.",
            service: 'Entry Strategy Development',
        },
        {
            title: "<span>Regulatory</span> <span>Compliance</span> <span>Guidance</span>",
            text: "Navigating legal and cultural nuances.",
            service: 'Regulatory Compliance Guidance',
        },
        {
            title: "<span>Competitor</span> <span>Landscape</span> <span>Analysis</span>",
            text: "Understanding your competition in the new market.",
            service: 'Competitor Landscape Analysis',
        },
        {
            title: "<span>Localization</span> <span>Strategies</span>",
            text: "Adapting products and services to meet local demands.",
            service: 'Localization Strategies',
        },
        {
            title: "<span>Channel</span> <span>Partnership</span> <span>Development</span>",
            text: "Identifying and securing local partnerships.",
            service: 'Channel Partnership Development',
        },
        {
            title: "<span>Pricing</span> <span>Strategy</span> <span>Design</span>",
            text: "Setting competitive and profitable prices.",
            service: 'Pricing Strategy Design',
        },
        {
            title: "<span>Brand</span> <span>Positioning</span> <span>for New Markets</span>",
            text: "Establishing your presence and reputation.",
            service: 'Brand Positioning for New Markets',
        },
        {
            title: "<span>Go-To-Market</span> <span>Execution</span> <span>Support</span>",
            text: "Helping launch your business in the new market.",
            service: 'Go-To-Market Execution Support',
        },
        {
            title: "<span>Post-Entry</span> <span>Monitoring & Adjustments</span>",
            text: "Continuously optimising your market presence.",
            service: 'Post-Entry Monitoring & Adjustments',
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

export default CapabilitiesSlider3;