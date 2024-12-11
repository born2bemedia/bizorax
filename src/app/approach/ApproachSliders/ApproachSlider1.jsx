"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
    { image: "/images/approach/approach-slider-01.svg" },
    { image: "/images/approach/approach-slider-02.svg" },
    { image: "/images/approach/approach-slider-03.svg" },
];

const ApproachSlider1 = () => {
    return (
        <div className="approach-slider">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                loop={true}
                speed={5000} // Smooth transition with longer speed
                slidesPerView="auto"
                autoplay={{
                    delay: 10, // Set a very short delay to ensure smooth transitions
                    disableOnInteraction: false,
                }}
                className="approach-slider__swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: "auto" }}
                    >
                        <div className="approach-slider__item">
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    display: "block",
                                    height: "auto",
                                    maxWidth: "100%",
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ApproachSlider1;
