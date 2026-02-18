"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/styles/cases.scss";

const CasesStudies = () => {
    const [visibleRows, setVisibleRows] = useState(new Set());
    const rowRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const targetIndex = rowRefs.current.indexOf(entry.target);

                    if (entry.isIntersecting) {
                        setVisibleRows((prev) => {
                            const newSet = new Set(prev);
                            newSet.add(entry.target);
                            return newSet;
                        });
                    } else {
                        setVisibleRows((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(entry.target);
                            return newSet;
                        });
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        rowRefs.current.forEach((row) => {
            if (row) observer.observe(row);
        });

        return () => {
            rowRefs.current.forEach((row) => {
                if (row) observer.unobserve(row);
            });
        };
    }, []);

    return (
        <section className="cases-studies">
            <div className="cases-studies__container">
                <div className="cases-studies__body">
                    <h2 className="cases-studies__title">Case Studies</h2>
                    <div className="cases-studies__rows">
                        {/* Первый элемент */}
                        <div
                            ref={(el) => (rowRefs.current[0] = el)}
                            className={`cases-studies__row ${visibleRows.has(rowRefs.current[0]) ? "_sticky" : ""
                                }`}
                        >
                            <div className="content">
                                <h3>Case Study 1</h3>
                                <p>Description of the first case study.</p>
                            </div>
                        </div>
                        {/* Второй элемент */}
                        <div
                            ref={(el) => (rowRefs.current[1] = el)}
                            className={`cases-studies__row ${visibleRows.has(rowRefs.current[1]) ? "_sticky" : ""
                                }`}
                        >
                            <div className="content">
                                <h3>Case Study 2</h3>
                                <p>Description of the second case study.</p>
                            </div>
                        </div>
                        {/* Третий элемент */}
                        <div
                            ref={(el) => (rowRefs.current[2] = el)}
                            className={`cases-studies__row ${visibleRows.has(rowRefs.current[2]) ? "_sticky" : ""
                                }`}
                        >
                            <div className="content">
                                <h3>Case Study 3</h3>
                                <p>Description of the third case study.</p>
                            </div>
                        </div>
                        {/* Добавляйте аналогичные элементы ниже */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesStudies;
