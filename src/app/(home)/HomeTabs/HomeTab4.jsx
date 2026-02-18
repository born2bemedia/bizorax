"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const HomeTab4 = () => {
    return (
        <div className="tabs-solutions__tab tab4">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Approach</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">Employing proven methodologies to deliver measurable outcomes</div>
                    <Link href="/approach" className="tabs-solutions__link">Explore <ArrowRight /></Link>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/home/man-near-window.webp" alt="image" /></div>
            </div>
        </div>
    );
};

export default HomeTab4;