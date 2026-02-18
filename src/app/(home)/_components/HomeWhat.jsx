"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/other/ArrowRight";
import CountUpOnViewport from "@/components/CountUpOnViewport";

const HomeWhat = () => {
    const [isVisible, setIsVisible] = useState(false);
    const homeWhatRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                rootMargin: "0px 0px -100px 0px",
                threshold: 0.1,
            }
        );
        if (homeWhatRef.current) {
            observer.observe(homeWhatRef.current);
        }
        return () => {
            if (homeWhatRef.current) {
                observer.unobserve(homeWhatRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={homeWhatRef}
            className={`home-what ${isVisible ? "_active" : ""}`}>
            <div className="home-what__container _container">
                <div className="home-what__body">
                    <div className="home-what__row-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-what__title">
                            What Sets Us Apart
                        </motion.h2>
                        <div className="home-what__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="home-what__item">
                                <div className="home-what__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H8.25C9.90685 3 11.25 4.34315 11.25 6V8.25C11.25 9.90685 9.90685 11.25 8.25 11.25H6C4.34315 11.25 3 9.90685 3 8.25V6ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V8.25C4.5 9.07843 5.17157 9.75 6 9.75H8.25C9.07843 9.75 9.75 9.07843 9.75 8.25V6C9.75 5.17157 9.07843 4.5 8.25 4.5H6ZM12.75 6C12.75 4.34315 14.0931 3 15.75 3H18C19.6569 3 21 4.34315 21 6V8.25C21 9.90685 19.6569 11.25 18 11.25H15.75C14.0931 11.25 12.75 9.90685 12.75 8.25V6ZM15.75 4.5C14.9216 4.5 14.25 5.17157 14.25 6V8.25C14.25 9.07843 14.9216 9.75 15.75 9.75H18C18.8284 9.75 19.5 9.07843 19.5 8.25V6C19.5 5.17157 18.8284 4.5 18 4.5H15.75ZM3 15.75C3 14.0931 4.34315 12.75 6 12.75H8.25C9.90685 12.75 11.25 14.0931 11.25 15.75V18C11.25 19.6569 9.90685 21 8.25 21H6C4.34315 21 3 19.6569 3 18V15.75ZM6 14.25C5.17157 14.25 4.5 14.9216 4.5 15.75V18C4.5 18.8284 5.17157 19.5 6 19.5H8.25C9.07843 19.5 9.75 18.8284 9.75 18V15.75C9.75 14.9216 9.07843 14.25 8.25 14.25H6ZM16.875 12.75C17.2892 12.75 17.625 13.0858 17.625 13.5V16.125H20.25C20.6642 16.125 21 16.4608 21 16.875C21 17.2892 20.6642 17.625 20.25 17.625H17.625V20.25C17.625 20.6642 17.2892 21 16.875 21C16.4608 21 16.125 20.6642 16.125 20.25V17.625H13.5C13.0858 17.625 12.75 17.2892 12.75 16.875C12.75 16.4608 13.0858 16.125 13.5 16.125H16.125V13.5C16.125 13.0858 16.4608 12.75 16.875 12.75Z" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="home-what__label">Forward-Thinking Services</h3>
                                <div className="home-what__text">We harness advanced technologies and unconventional strategies to craft innovative, custom-tailored approaches that address complex business challenges.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-what__item">
                                <div className="home-what__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 3C12.8267 3 12.2552 3.44413 12.0662 4.05717C12.0234 4.19622 12 4.34469 12 4.5H16.5C16.5 4.34469 16.4766 4.19622 16.4338 4.05717C16.2448 3.44413 15.6733 3 15 3H13.5ZM10.837 3.11765C11.3367 2.15693 12.3409 1.5 13.5 1.5H15C16.1591 1.5 17.1633 2.15693 17.663 3.11765C17.8877 3.13319 18.1121 3.15026 18.3359 3.16884C19.8752 3.2966 21 4.60282 21 6.10822V16.5C21 18.1569 19.6569 19.5 18 19.5H16.5V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V9.375C3 8.33947 3.83947 7.5 4.875 7.5H7.5V6.10822C7.5 4.60283 8.62475 3.2966 10.164 3.16884C10.3879 3.15026 10.6123 3.13319 10.837 3.11765ZM10.507 4.64604C10.434 4.65177 10.361 4.65765 10.2881 4.6637C9.56523 4.7237 9 5.34365 9 6.10822V7.5H14.625C15.6605 7.5 16.5 8.33947 16.5 9.375V18H18C18.8284 18 19.5 17.3284 19.5 16.5V6.10822C19.5 5.34365 18.9348 4.7237 18.2119 4.6637C18.139 4.65765 18.066 4.65177 17.993 4.64604C17.9196 5.40594 17.2792 6 16.5 6H12C11.2208 6 10.5804 5.40594 10.507 4.64604ZM4.875 9C4.66789 9 4.5 9.16789 4.5 9.375V20.625C4.5 20.8321 4.66789 21 4.875 21H14.625C14.8321 21 15 20.8321 15 20.625V9.375C15 9.16789 14.8321 9 14.625 9H4.875ZM12.4685 12.9143C12.792 13.1731 12.8444 13.6451 12.5857 13.9685L9.58565 17.7185C9.45238 17.8851 9.25448 17.9871 9.04148 17.9989C8.82847 18.0106 8.62052 17.9312 8.46967 17.7803L6.96967 16.2803C6.67678 15.9874 6.67678 15.5126 6.96967 15.2197C7.26256 14.9268 7.73744 14.9268 8.03033 15.2197L8.93781 16.1272L11.4143 13.0315C11.6731 12.708 12.1451 12.6556 12.4685 12.9143Z" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="home-what__label">Multidisciplinary Excellence</h3>
                                <div className="home-what__text">Our team unites experts with deep industry knowledge across diverse domains, offering a holistic perspective that fuels groundbreaking solutions.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="home-what__item">
                                <div className="home-what__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 4.5C10.7576 4.5 9.75024 5.50736 9.75024 6.75C9.75024 7.99264 10.7576 9 12.0002 9C13.2429 9 14.2502 7.99264 14.2502 6.75C14.2502 5.50736 13.2429 4.5 12.0002 4.5ZM8.25024 6.75C8.25024 4.67893 9.92918 3 12.0002 3C14.0713 3 15.7502 4.67893 15.7502 6.75C15.7502 8.82107 14.0713 10.5 12.0002 10.5C9.92918 10.5 8.25024 8.82107 8.25024 6.75ZM5.25024 8.25C4.42182 8.25 3.75024 8.92157 3.75024 9.75C3.75024 10.5784 4.42182 11.25 5.25024 11.25C6.07867 11.25 6.75024 10.5784 6.75024 9.75C6.75024 8.92157 6.07867 8.25 5.25024 8.25ZM2.25024 9.75C2.25024 8.09315 3.59339 6.75 5.25024 6.75C6.9071 6.75 8.25024 8.09315 8.25024 9.75C8.25024 11.4069 6.9071 12.75 5.25024 12.75C3.59339 12.75 2.25024 11.4069 2.25024 9.75ZM18.7502 8.25C17.9218 8.25 17.2502 8.92157 17.2502 9.75C17.2502 10.5784 17.9218 11.25 18.7502 11.25C19.5787 11.25 20.2502 10.5784 20.2502 9.75C20.2502 8.92157 19.5787 8.25 18.7502 8.25ZM15.7502 9.75C15.7502 8.09315 17.0934 6.75 18.7502 6.75C20.4071 6.75 21.7502 8.09315 21.7502 9.75C21.7502 11.4069 20.4071 12.75 18.7502 12.75C17.0934 12.75 15.7502 11.4069 15.7502 9.75ZM12.0002 13.5C10.1415 13.5 8.50772 14.4654 7.57376 15.9257C7.05698 16.7337 6.75548 17.6923 6.75031 18.723L6.75024 18.75C6.75024 18.8186 6.75155 18.8868 6.75415 18.9547C8.31985 19.7816 10.1044 20.25 12.0002 20.25C13.8961 20.25 15.6806 19.7816 17.2463 18.9547C17.2489 18.8868 17.2502 18.8186 17.2502 18.75L17.2502 18.7229C17.245 17.6924 16.9436 16.7341 16.4271 15.9262C15.4932 14.4656 13.8592 13.5 12.0002 13.5ZM18.709 19.4999C18.6822 19.7371 18.5441 19.9473 18.337 20.0662C16.4697 21.1376 14.3053 21.75 12.0002 21.75C9.69516 21.75 7.53083 21.1376 5.66349 20.0662C5.45642 19.9473 5.31832 19.7371 5.2915 19.4999C5.278 19.5 5.26449 19.5 5.25098 19.5C4.11662 19.5 3.02597 19.306 2.0114 18.9487C1.73179 18.8502 1.53641 18.5963 1.5129 18.3007C1.50499 18.2014 1.50098 18.1011 1.50098 18C1.50098 15.9289 3.17991 14.25 5.25098 14.25C5.77072 14.25 6.26667 14.3561 6.71754 14.5478C7.95335 12.9963 9.86025 12 12.0002 12C14.1404 12 16.0475 12.9965 17.2833 14.5482C17.7344 14.3563 18.2307 14.25 18.7508 14.25C20.8219 14.25 22.5008 15.9289 22.5008 18C22.5008 18.1011 22.4968 18.2014 22.4889 18.3007C22.4654 18.5963 22.27 18.8502 21.9904 18.9487C20.9758 19.306 19.8852 19.5 18.7508 19.5C18.7369 19.5 18.7229 19.5 18.709 19.4999ZM18.0955 15.8467C18.4128 16.5118 18.6245 17.237 18.709 17.9999C18.7229 18 18.7369 18 18.7508 18C19.5243 18 20.2719 17.8938 20.9804 17.6954C20.8317 16.5968 19.8902 15.75 18.7508 15.75C18.5225 15.75 18.3026 15.7838 18.0955 15.8467ZM5.90515 15.8464C5.69842 15.7837 5.4789 15.75 5.25098 15.75C4.11164 15.75 3.1701 16.5968 3.02142 17.6954C3.7299 17.8938 4.47751 18 5.25098 18C5.2645 18 5.27801 18 5.29151 17.9999C5.37597 17.2369 5.58775 16.5116 5.90515 15.8464Z" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="home-what__label">Goal-Driven Partnerships</h3>
                                <div className="home-what__text">We don’t just work for you; we work with you. Your ambitions become our roadmap, ensuring every step aligns with your success.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="home-what__item">
                                <div className="home-what__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.75 3C11.7877 3 11.25 3.62591 11.25 4.125C11.25 4.31469 11.3145 4.50174 11.4455 4.67385C11.6828 4.98549 12 5.47438 12 6.08694C12 6.86423 11.3617 7.50202 10.5714 7.47925C9.46249 7.44731 8.36273 7.37833 7.27336 7.27348C7.40195 8.6098 7.47657 9.96176 7.49505 11.3271C7.50574 12.1178 6.86451 12.7499 6.08703 12.75L6.08694 11.999V12.75C5.47438 12.75 4.98549 12.4328 4.67384 12.1955L5.1282 11.5988L4.67384 12.1955C4.50174 12.0645 4.31469 12 4.125 12C3.62591 12 3 12.5377 3 13.5C3 14.4623 3.62591 15 4.125 15C4.31469 15 4.50174 14.9355 4.67384 14.8045C4.98549 14.5672 5.47438 14.25 6.08694 14.25C6.82607 14.25 7.42193 14.8752 7.36688 15.6241C7.25895 17.0925 7.08595 18.543 6.85074 19.9726C8.04785 20.1024 9.25849 20.1874 10.4809 20.226C10.4515 20.1321 10.3841 20.0058 10.2522 19.8326C9.94147 19.4245 9.75011 18.9234 9.75011 18.375C9.75011 16.8031 11.2271 15.75 12.7501 15.75C14.2731 15.75 15.7501 16.8031 15.7501 18.375C15.7501 18.9234 15.5588 19.4245 15.248 19.8326C15.1475 19.9646 15.0845 20.0694 15.0471 20.1533C16.5986 20.0546 18.1296 19.881 19.6366 19.6362C19.8405 18.3814 19.9949 17.11 20.0979 15.824C20.0244 15.8624 19.937 15.9185 19.8327 15.998L19.3783 15.4013L19.8327 15.998C19.4246 16.3087 18.9234 16.5 18.3751 16.5C16.8031 16.5 15.7501 15.0231 15.7501 13.5C15.7501 11.977 16.8031 10.5 18.3751 10.5C18.9234 10.5 19.4246 10.6914 19.8327 11.0021C20.0174 11.1428 20.1488 11.2101 20.2443 11.2362C20.2209 9.75684 20.1295 8.29409 19.9731 6.85104C18.3102 7.12461 16.619 7.31402 14.9043 7.41476C14.1349 7.45996 13.5 6.84498 13.5 6.08694C13.5 5.47438 13.8172 4.98549 14.0545 4.67385L14.6512 5.1282L14.0545 4.67385C14.1855 4.50174 14.25 4.31469 14.25 4.125C14.25 3.62591 13.7123 3 12.75 3ZM5.99355 11.236C5.96829 9.6421 5.86413 8.06756 5.68485 6.51609C5.65857 6.28861 5.73764 6.06158 5.89957 5.89966C6.0615 5.73774 6.28852 5.65866 6.51601 5.68496C7.82199 5.8359 9.14432 5.93361 10.4808 5.97583C10.4513 5.882 10.3839 5.75568 10.2521 5.58255C9.94136 5.17446 9.75 4.67331 9.75 4.125C9.75 2.55302 11.227 1.5 12.75 1.5C14.273 1.5 15.75 2.55302 15.75 4.125C15.75 4.67331 15.5586 5.17446 15.2479 5.58255C15.1474 5.71453 15.0844 5.81931 15.047 5.90323C16.8931 5.78579 18.7102 5.56237 20.4922 5.23902C20.695 5.20224 20.9039 5.25049 21.07 5.37245C21.2361 5.49442 21.3447 5.67935 21.3703 5.88381C21.5939 7.67004 21.7209 9.48616 21.7458 11.3266C21.7565 12.1176 21.1149 12.75 20.3371 12.75C19.7245 12.75 19.2356 12.4328 18.924 12.1956C18.7519 12.0645 18.5648 12 18.3751 12C17.876 12 17.2501 12.5378 17.2501 13.5C17.2501 14.4623 17.876 15 18.3751 15C18.5648 15 18.7519 14.9356 18.924 14.8045C19.2356 14.5672 19.7245 14.25 20.3371 14.25C21.0765 14.25 21.6727 14.8755 21.6176 15.6248C21.4985 17.245 21.3002 18.8433 21.0265 20.4158C20.9722 20.7276 20.728 20.9718 20.4162 21.0261C18.6109 21.3403 16.7717 21.5551 14.9045 21.6649C14.1351 21.7101 13.5001 21.0951 13.5001 20.337C13.5001 19.7244 13.8173 19.2355 14.0546 18.9239C14.1857 18.7518 14.2501 18.5647 14.2501 18.375C14.2501 17.876 13.7124 17.25 12.7501 17.25C11.7878 17.25 11.2501 17.876 11.2501 18.375C11.2501 18.5647 11.3146 18.7518 11.4456 18.9239C11.6829 19.2355 12.0001 19.7244 12.0001 20.337C12.0001 21.1143 11.3618 21.7522 10.5715 21.7294C8.98893 21.6838 7.42511 21.5628 5.8835 21.3698C5.67904 21.3442 5.49411 21.2356 5.37215 21.0695C5.25019 20.9034 5.20194 20.6945 5.23873 20.4917C5.51658 18.9605 5.72065 17.4034 5.8471 15.8243C5.77375 15.8627 5.68661 15.9187 5.58255 15.9979L5.1282 15.4012L5.58255 15.9979C5.17446 16.3086 4.67331 16.5 4.125 16.5C2.55302 16.5 1.5 15.023 1.5 13.5C1.5 11.977 2.55302 10.5 4.125 10.5C4.67331 10.5 5.17446 10.6914 5.58255 11.0021C5.76682 11.1424 5.89806 11.2097 5.99355 11.236Z" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="home-what__label">Impact-Focused Execution</h3>
                                <div className="home-what__text">From planning to implementation, we prioritise actionable strategies that deliver quantifiable results, driving meaningful progress for your business.</div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="home-what__row-02">
                        <div className="home-what__col-01">
                            <div className="home-what__blocks">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.1}
                                    className="home-what__block">
                                    <div className="home-what__number"><CountUpOnViewport targetNumber={5} />+</div>
                                    <div className="home-what__desk">industries served with <br /> tailored solutions.</div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.2}
                                    className="home-what__block">
                                    <div className="home-what__number"><CountUpOnViewport targetNumber={100} />%</div>
                                    <div className="home-what__desk">client satisfaction with <br /> our projects so far.</div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="home-what__block">
                                    <div className="home-what__number"><CountUpOnViewport targetNumber={8} /></div>
                                    <div className="home-what__desk">expert consultants <br /> specialising in strategy, <br /> operations, and growth.</div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.4}
                                    className="home-what__block">
                                    <div className="home-what__number"><CountUpOnViewport targetNumber={90} />%</div>
                                    <div className="home-what__desk">of clients report significant <br /> performance improvements <br /> within 6 months.</div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-what__col-02">
                            <h3 className="home-what__subtitle">By the <br /> Numbers</h3>
                            <Link href="/approach" className="home-what__link">Learn More About Our Expertise <ArrowRight /> </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhat;
