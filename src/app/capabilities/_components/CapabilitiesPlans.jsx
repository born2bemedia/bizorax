"use client";
import React, { useState, useEffect } from "react";
import "@/styles/capabilities.scss";
import Link from "next/link";

const CapabilitiesPlans = () => {
    return (
        <>
            <section className="capa-plans">
                <div className="capa-plans__container _container">
                    <div className="capa-plans__body">
                        <div className="capa-plans__plans">
                            {/* 01 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Strategic Planning</h2>
                                    <div className="capa-plans__text">Helping businesses chart a clear path to success with tailored strategies:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                            {/* 02 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Operational Efficiency</h2>
                                    <div className="capa-plans__text">Streamlining operations to drive productivity and reduce costs:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                            {/* 03 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Market Entry Strategies</h2>
                                    <div className="capa-plans__text">Helping businesses expand into new markets with confidence:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                            {/* 04 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Digital Transformation</h2>
                                    <div className="capa-plans__text">Modernising businesses through cutting-edge technology:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                            {/* 05 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Change Management</h2>
                                    <div className="capa-plans__text">Guiding businesses through transitions with minimal disruption:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                            {/* 06 */}
                            <div className="capa-plans__plan">
                                <div className="capa-plans__top">
                                    <h2 className="capa-plans__title">Performance Optimization</h2>
                                    <div className="capa-plans__text">Helping businesses maximise efficiency and profitability:</div>
                                </div>
                                <div className="capa-plans__slider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CapabilitiesPlans;