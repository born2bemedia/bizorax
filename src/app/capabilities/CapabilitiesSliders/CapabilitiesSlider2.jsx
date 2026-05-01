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

const CapabilitiesSlider2 = () => {

    const slides = [
        {
            title: "<span>Operational</span> <span>Process</span> <span>Check</span>",
            text: "A targeted review of a selected workflow with practical improvement suggestions.",
            service: 'Operational Process Check',
        },
        {
            title: "<span>Process</span> <span>Optimization</span>",
            text: "Identifying and eliminating inefficiencies in workflows.",
            service: 'Process Optimization',
        },
        {
            title: "<span>Cost-Reduction</span> <span>Strategies</span>",
            text: "Cutting unnecessary expenses while maintaining quality.",
            service: 'Cost-Reduction Strategies',
        },
        {
            title: "<span>Automation</span> <span>Integration</span>",
            text: "Leveraging tools like RPA to automate repetitive tasks.",
            service: 'Automation Integration',
        },
        {
            title: "<span>Employee</span> <span>Productivity</span> <span>Programs</span>",
            text: "Enhancing team output through training and support.",
            service: 'Employee Productivity Programs',
        },
        {
            title: "<span>Lean</span> <span>Management</span> <span>Implementation</span>",
            text: "Adopting Lean principles to maximise value.",
            service: 'Lean Management Implementation',
        },
        {
            title: "<span>Supply</span> <span>Chain</span> <span>Optimization</span>",
            text: "Improving logistics and inventory management.",
            service: 'Supply Chain Optimization',
        },
        {
            title: "<span>Time</span> <span>Management</span> <span>Systems</span>",
            text: "Implementing solutions to track and improve time utilisation.",
            service: 'Time Management Systems',
        },
        {
            title: "<span>KPI</span> <span>Monitoring</span> <span>Dashboards</span>",
            text: "Providing real-time performance analytics.",
            service: 'KPI Monitoring Dashboards',
        },
        {
            title: "<span>Cross-Department</span> <span>Collaboration</span> <span>Frameworks</span>",
            text: "Enhancing communication and teamwork.",
            service: 'Cross-Department Collaboration Frameworks',
        },
        {
            title: "Change Impact Assessment",
            text: "Evaluating how operational shifts affect the organisation.",
            service: 'Change Impact Assessment',
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

export default CapabilitiesSlider2;