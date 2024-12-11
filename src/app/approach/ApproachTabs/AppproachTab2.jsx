"use client";
import ArrowRight from "@/icons/other/ArrowRight";
import React from "react";
import Link from "next/link";

const AppproachTab2 = () => {
    return (
        <div className="tabs-solutions__tab tab2">
            <div className="tabs-solutions__wrapper">
                <h3 className="tabs-solutions__label">Customization</h3>
                <div className="tabs-solutions__col-01">
                    <div className="tabs-solutions__text">Every strategy we develop is tailored to address your unique challenges and opportunities.</div>
                </div>
                <div className="tabs-solutions__col-02"><img src="/images/approach/img-03.jpg" alt="image" /></div>
            </div>
        </div>
    );
};

export default AppproachTab2;