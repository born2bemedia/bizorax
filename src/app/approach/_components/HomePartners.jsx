"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

const HomePartners = () => {
  const row1Items = [
    { id: 1, src: "/images/approach/approach-slider-01.svg", alt: "SEO Specialist" },
    { id: 2, src: "/images/approach/approach-slider-01.svg", alt: "PPC Strategist" },
    { id: 3, src: "/images/approach/approach-slider-01.svg", alt: "Social Media Manager" },
    {
      id: 5,
      src: "/images/approach/approach-slider-01.svg",
      alt: "Email Marketing Specialist",
    },
  ];

  const row2Items = [
    {
      id: 6,
      src: "/images/approach/approach-slider-02.svg",
      alt: "Marketing Automation Expert",
    },
    {
      id: 7,
      src: "/images/approach/approach-slider-02.svg",
      alt: "Performance Marketing Manager",
    },
    { id: 8, src: "/images/approach/approach-slider-02.svg", alt: "Data Analyst" },
    { id: 9, src: "/images/approach/approach-slider-02.svg", alt: "Creative Director" },
    { id: 10, src: "/images/approach/approach-slider-02.svg", alt: "Brand Strategist" },
  ];

  const row3Items = [
    {
      id: 6,
      src: "/images/approach/approach-slider-03.svg",
      alt: "Marketing Automation Expert",
    },
    {
      id: 7,
      src: "/images/approach/approach-slider-03.svg",
      alt: "Performance Marketing Manager",
    },
    { id: 8, src: "/images/approach/approach-slider-03.svg", alt: "Data Analyst" },
    { id: 9, src: "/images/approach/approach-slider-03.svg", alt: "Creative Director" },
    { id: 10, src: "/images/approach/approach-slider-03.svg", alt: "Brand Strategist" },
  ];

  return (
    <section className="home-partners">
      <div className="home-partners__container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={30000}
          className="row1"
        >
          {row1Items.concat(row1Items).map((item, index) => (
            <SwiperSlide key={index} className="item">
              <Image alt={item.alt} src={item.src} width={1280} height={80} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          speed={30000}
          className="row2"
        >
          {row2Items.concat(row2Items).map((item, index) => (
            <SwiperSlide key={index} className="item">
              <Image alt={item.alt} src={item.src} width={1280} height={80} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={35000}
          className="row3"
        >
          {row3Items.concat(row3Items).map((item, index) => (
            <SwiperSlide key={index} className="item">
              <Image alt={item.alt} src={item.src} width={1280} height={80} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomePartners;