"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeText = () => {

    return (
        <>
            <section className="home-text">
                <div className="home-text__container _container">
                    <div className="home-text__body">
                        <h2 className="home-text__title">Why Your Trusted Partner?</h2>
                        <div className="home-text__text">At Bizorax, we are a dynamic team of passionate experts committed to transforming your business challenges into opportunities. As a young yet highly experienced agency, we bring a fresh perspective to business consulting, combining innovative thinking with proven strategies. Our mission is to empower businesses across industries, enabling them to achieve sustainable growth and measurable success.</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeText;