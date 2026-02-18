"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const HomeTab1 = () => {
    return (
        <div className="tabs-solutions__tab tab1">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Challenges</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">Tackling complex business hurdles with innovative, actionable solutions.</div>
                    <Link href="/challanges" className="tabs-solutions__link">Explore <ArrowRight /></Link>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/home/upset-disappointed-businesswoman-entering-office-meeting-room-late-night.webp" alt="image" /></div>
            </div>
        </div>
    );
};

export default HomeTab1;