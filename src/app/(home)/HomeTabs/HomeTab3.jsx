"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const HomeTab3 = () => {
    return (
        <div className="tabs-solutions__tab tab3">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Industries</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">Leveraging deep knowledge to serve a diverse range of sectors.</div>
                    <Link href="/industries" className="tabs-solutions__link">Explore <ArrowRight /></Link>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/home/medium-shot-people-chatting-work-event.webp" alt="image" /></div>
            </div>
        </div>
    );
};

export default HomeTab3;