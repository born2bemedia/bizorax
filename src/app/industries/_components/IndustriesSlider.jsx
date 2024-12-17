"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const IndustriesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const slides = [
        {
            title: "Technology & IT",
            text: "Optimising digital transformation and IT operations for agility and innovation.",
            desc: "Implemented cloud solutions to reduce operational costs by 30%.",
            image: "/images/industries/poster-01.jpg",
        },
        {
            title: "Healthcare & Pharmaceuticals",
            text: "Streamlining patient care processes and ensuring compliance with regulations.",
            desc: "Improved patient satisfaction scores by 25% through workflow automation.",
            image: "/images/industries/poster-02.jpg",
        },
        {
            title: "Retail & E-Commerce",
            text: "Driving customer engagement through data-driven marketing and seamless operations.",
            desc: "Enhanced customer retention rates by 20% with personalised shopping experiences.",
            image: "/images/industries/poster-03.jpg",
        },
        {
            title: "Finance & Banking",
            text: "Enhancing risk management, compliance, and operational efficiency.",
            desc: "Reduced fraud incidents by 15% with advanced analytics solutions.",
            image: "/images/industries/poster-04.jpg",
        },
        {
            title: "Manufacturing",
            text: "Streamlining production processes and adopting smart technologies for efficiency.",
            desc: "Achieved a 40% increase in production efficiency through IoT integration.",
            image: "/images/industries/poster-05.jpg",
        },
        {
            title: "Logistics & Supply Chain",
            text: "Simplifying complex supply chains for cost savings and improved delivery performance.",
            desc: "Reduced delivery times by 25% with optimised routing systems.",
            image: "/images/industries/poster-06.jpg",
        },
        {
            title: "Energy & Utilities",
            text: "Supporting sustainability goals while optimising energy production and distribution.",
            desc: "Helped reduce carbon emissions by 10% through energy-efficient solutions.",
            image: "/images/industries/poster-07.jpg",
        },
        {
            title: "Hospitality & Tourism",
            text: "Enhancing customer experiences and operational workflows for higher satisfaction.",
            desc: "Increased guest satisfaction rates by 30% through data-driven personalization.",
            image: "/images/industries/poster-08.jpg",
        },
        {
            title: "Education",
            text: "Facilitating digital learning platforms and optimising administrative processes.",
            desc: "Enabled a 40% increase in online course enrollment with streamlined LMS solutions.",
            image: "/images/industries/poster-09.jpg",
        },
        {
            title: "Media & Entertainment",
            text: "Innovating content delivery and monetization strategies to capture larger audiences.",
            desc: "Boosted content engagement by 50% with targeted marketing campaigns.",
            image: "/images/industries/poster-10.jpg",
        },
    ];

    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            /* centeredSlides={true} */
            loop={true}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            className="indusctries-slider"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="indusctries-slider__item">
                    <div
                        className="indusctries-slider__wrapper"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="indusctries-slider__visible">
                            <h2 className="indusctries-slider__title">{slide.title}</h2>
                            <p className="indusctries-slider__text">{slide.text}</p>
                        </div>

                        <div className="indusctries-slider__hide">
                            <h3 className="indusctries-slider__label">Example Impact:</h3>
                            <p className="indusctries-slider__desc">{slide.desc}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default IndustriesSlider;