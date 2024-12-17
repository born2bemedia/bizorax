"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

const HomePartners = () => {
  const row1Items = [
    { id: 1, src: "/images/home/avatar1.png", alt: "SEO Specialist" },
    { id: 2, src: "/images/home/avatar2.png", alt: "PPC Strategist" },
    { id: 3, src: "/images/home/avatar3.png", alt: "Social Media Manager" },
    { id: 4, src: "/images/home/avatar4.png", alt: "Content Marketing Lead" },
    {
      id: 5,
      src: "/images/home/avatar5.png",
      alt: "Email Marketing Specialist",
    },
  ];

  const row2Items = [
    {
      id: 6,
      src: "/images/home/avatar6.png",
      alt: "Marketing Automation Expert",
    },
    {
      id: 7,
      src: "/images/home/avatar7.png",
      alt: "Performance Marketing Manager",
    },
    { id: 8, src: "/images/home/avatar8.png", alt: "Data Analyst" },
    { id: 9, src: "/images/home/avatar9.png", alt: "Creative Director" },
    { id: 10, src: "/images/home/avatar10.png", alt: "Brand Strategist" },
  ];

  return (
    <section className="home-partners">
      <div className="_container">
        <div className="home-partners__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>We know how to solve your problems</span>
            </div>
            <h2>
              Your Trusted Growth Partners in the <br />
              Digital Era
            </h2>
            <p>
              Specializing in B2B strategies, we empower businesses to overcome
              digital marketing <br />
              challenges and achieve measurable, impactful results tailored to
              their goals.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="professionals"
      >
        {/* Row 1 */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          className="row1"
        >
          {row1Items.concat(row1Items).map((item, index) => (
            <SwiperSlide key={index} className="item">
              <Image alt={item.alt} src={item.src} width={50} height={50} />
              <span>{item.alt}</span>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          speed={10000}
          className="row2"
        >
          {row2Items.concat(row2Items).map((item, index) => (
            <SwiperSlide key={index} className="item">
              <Image alt={item.alt} src={item.src} width={50} height={50} />
              <span>{item.alt}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="buttons"
        >
          <Link href="/agency">
            <span>Learn More About Us</span>
            <img src="/images/arrow-purple.svg" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePartners;