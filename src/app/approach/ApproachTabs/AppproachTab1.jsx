"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const AppproachTab1 = () => {
    return (
        <div className="tabs-solutions__tab tab1">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Collaboration</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">We see ourselves as an extension of your team, working alongside you to achieve shared goals.</div>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/approach/img-02.jpg" alt="image" /></div>
            </div>
        </div>
    );
};

export default AppproachTab1;