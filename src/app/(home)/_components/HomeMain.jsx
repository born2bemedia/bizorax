"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ArrowRight from "@/icons/other/ArrowRight";

const HomeMain = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const slides = [
        {
            title: "Strategic Planning",
            text: "Crafting roadmaps to align goals and resources for optimal success.",
            image: "/images/home/home-main-01.jpg",
        },
        {
            title: "Operational Efficiency",
            text: "Streamlining processes to boost productivity and reduce costs.",
            image: "/images/home/home-main-02.jpg",
        },
        {
            title: "Market Entry Strategies",
            text: "Guiding businesses into new markets with confidence and precision.",
            image: "/images/home/home-main-03.jpg",
        },
        {
            title: "Digital Transformation",
            text: "Leveraging technology to modernise and enhance business capabilities.",
            image: "/images/home/home-main-01.jpg",
        },
        {
            title: "Change Management",
            text: "Facilitating smooth transitions during organisational shifts or expansions.",
            image: "/images/home/home-main-02.jpg",
        },
        {
            title: "Performance Optimization",
            text: "Enhancing team effectiveness and achieving measurable growth.",
            image: "/images/home/home-main-03.jpg",
        },
    ];

    return (
        <section className="home-main">
            <div className="home-main__container _container">
                <div className="home-main__body">
                    <div className="home-main__top">
                        <h2 className="home-main__title">Main Services We Offer</h2>
                        <Link href="/capabilities" className="home-main__link">
                            Explore All Services
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="home-main__content">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={32}
                            loop={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                            breakpoints={{
                                767: { slidesPerView: 1.5 },
                                992: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                            className="home-main-slider"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="home-main-slider__item"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    >
                                        <div className="home-main-slider__wrapper">
                                            <h3
                                                className="home-main-slider__title"
                                                dangerouslySetInnerHTML={{ __html: slide.title }}
                                            />
                                            <div className="home-main-slider__text">{slide.text}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;
