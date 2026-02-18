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

const CapabilitiesSlider5 = () => {

    const slides = [
        {
            title: "<span>Stakeholder</span> <span>Engagement</span> <span>Programs</span>",
            text: "Ensuring alignment and buy-in for changes.",
            service: 'Stakeholder Engagement Programs',
        },
        {
            title: "<span>Change</span> <span>Readiness</span> <span>Assessments</span>",
            text: "Evaluating your organisation’s preparedness.",
            service: 'Change Readiness Assessments',
        },
        {
            title: "<span>Transition</span> <span>Roadmaps</span>",
            text: "Providing clear steps for smooth change implementation.",
            service: 'Transition Roadmaps',
        },
        {
            title: "<span>Employee</span> <span>Training & </span> <span>Development</span>",
            text: "Preparing teams for new processes.",
            service: 'Employee Training & Development',
        },
        {
            title: "<span>Communication</span> <span>Strategies</span>",
            text: "Keeping stakeholders informed and engaged.",
            service: 'Communication Strategies',
        },
        {
            title: "<span>Resistance</span> <span>Management</span> <span>Plans</span>",
            text: "Addressing barriers to change.",
            service: 'Resistance Management Plans',
        },
        {
            title: "<span>Leadership</span> <span>Coaching</span>",
            text: "Empowering leaders to guide their teams through change.",
            service: 'Leadership Coaching',
        },
        {
            title: "<span>Cultural</span> <span>Transformation</span> <span>Programs</span>",
            text: "Shaping a culture that embraces innovation.",
            service: 'Cultural Transformation Programs',
        },
        {
            title: "<span>Post-Change</span> <span>Evaluation</span>",
            text: "Measuring the success of change initiatives.",
            service: 'Post-Change Evaluation',
        },
        {
            title: "<span>Continuous</span> <span>Improvement</span> <span>Frameworks</span>",
            text: "Ensuring long-term benefits of changes.",
            service: 'Continuous Improvement Frameworks',
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

export default CapabilitiesSlider5;