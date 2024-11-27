"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";

const HomeReady = () => {

    return (
        <>
            <section className="home-ready">
                <div className="home-ready__container _container">
                    <div className="home-ready__body">
                        <h2 className="home-ready__title">Ready to Accelerate Your <br /> Business?</h2>
                        <div className="home-ready__buttons">
                            <Link href="/request" className="home-ready__btn-01">Request a Custom Solution</Link>
                            <Link href="/contact" className="home-ready__btn-02">Contact Our Experts</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeReady;