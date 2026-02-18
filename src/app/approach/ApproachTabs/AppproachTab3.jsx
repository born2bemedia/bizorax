"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const AppproachTab3 = () => {
    return (
        <div className="tabs-solutions__tab tab3">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Innovation</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">We leverage the latest tools, technologies, and frameworks to deliver cutting-edge solutions.</div>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/approach/img-04.jpg" alt="image" /></div>
            </div>
        </div>
    );
};

export default AppproachTab3;