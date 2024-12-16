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

const CapabilitiesSlider4 = () => {

    const slides = [
        {
            title: "<span>Legacy</span> <span>System</span> <span>Modernization</span>",
            text: "Upgrading outdated infrastructure.",
            service: 'Legacy System Modernization',
        },
        {
            title: "<span>Cloud</span> <span>Migration</span> <span>Services</span>",
            text: "Transitioning to scalable and secure cloud platforms.",
            service: 'Cloud Migration Services',
        },
        {
            title: "<span>Digital</span> <span>Process</span> <span>Automation</span>",
            text: "Automating workflows for increased efficiency.",
            service: 'Digital Process Automation',
        },
        {
            title: "<span>Data</span> <span>Analytics</span> <span>Integration</span>",
            text: "Harnessing data for better decision-making.",
            service: 'Data Analytics Integration',
        },
        {
            title: "<span>CRM</span> <span>System</span> <span>Implementation</span>",
            text: "Enhancing customer relationship management.",
            service: 'CRM System Implementation',
        },
        {
            title: "<span>Cybersecurity</span> <span>Solutions</span>",
            text: "Protecting your business from digital threats.",
            service: 'Cybersecurity Solutions',
        },
        {
            title: "<span>IoT</span> <span>Integration</span>",
            text: "Enabling smart devices to improve operations.",
            service: 'IoT Integration',
        },
        {
            title: "<span>E-Commerce</span> <span>Platform</span> <span>Development</span>",
            text: "Building robust online sales platforms.",
            service: 'E-Commerce Platform Development',
        },
        {
            title: "<span>Digital</span> <span>Training</span> <span>Programs</span>",
            text: "Equipping teams with skills to thrive in a digital world.",
            service: 'Digital Training Programs',
        },
        {
            title: "<span>AI and Machine</span> <span>Learning</span> <span>Adoption</span>",
            text: "Using AI for predictive analysis and automation.",
            service: 'AI and Machine Learning Adoption',
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

export default CapabilitiesSlider4;