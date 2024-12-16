"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import CapabilitiesSlider1 from "../CapabilitiesSliders/CapabilitiesSlider1";
import CapabilitiesSlider2 from "../CapabilitiesSliders/CapabilitiesSlider2";
import CapabilitiesSlider3 from "../CapabilitiesSliders/CapabilitiesSlider3";
import CapabilitiesSlider4 from "../CapabilitiesSliders/CapabilitiesSlider4";
import CapabilitiesSlider5 from "../CapabilitiesSliders/CapabilitiesSlider5";
import CapabilitiesSlider6 from "../CapabilitiesSliders/CapabilitiesSlider6";

const CapabilitiesPlans = () => {
    return (
        <>
            <section className="capa-plans">
                <div className="capa-plans__container _container">
                    <div className="capa-plans__body">
                        <div className="capa-plans__plans">
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Strategic Planning</h2>
                                    <div className="capa-plans__text">Helping businesses chart a clear path to success with tailored strategies:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider1 />
                                </div>
                            </div>
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Operational Efficiency</h2>
                                    <div className="capa-plans__text">Streamlining operations to drive productivity and reduce costs:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider2 />
                                </div>
                            </div>
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Market Entry Strategies</h2>
                                    <div className="capa-plans__text">Helping businesses expand into new markets with confidence:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider3 />
                                </div>
                            </div>
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Digital Transformation</h2>
                                    <div className="capa-plans__text">Modernising businesses through cutting-edge technology:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider4 />
                                </div>
                            </div>
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Change Management</h2>
                                    <div className="capa-plans__text">Guiding businesses through transitions with minimal disruption:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider5 />
                                </div>
                            </div>
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Performance Optimization</h2>
                                    <div className="capa-plans__text">Helping businesses maximise efficiency and profitability:</div>
                                </div>
                                <div className="capa-plans__slider">
                                    <CapabilitiesSlider6 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesPlans;