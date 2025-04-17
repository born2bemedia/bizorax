"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const HomeTab2 = () => {
    return (
        <div className="tabs-solutions__tab tab2">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Capabilities</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">Designing tailored strategies that amplify efficiency and drive results.</div>
                    <Link href="/capabilities" className="tabs-solutions__link">Explore <ArrowRight /></Link>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/home/demographic-census-concept-representation.webp" alt="image" /></div>
            </div>
        </div>
    );
};

export default HomeTab2;