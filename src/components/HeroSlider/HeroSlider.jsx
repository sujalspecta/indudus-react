import React, { useState } from "react";
import { Pagination, A11y, Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from "../ModalVideo/VideoModal";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

import hero1 from '../../images/slider/slide-1.jpg';
import hero2 from '../../images/slider/slide-3.jpg';
import hero3 from '../../images/slider/slide-2.jpg';

const HeroSlider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Forces Swiper to completely recalculate layout positions once initialized
    const handleSwiperInit = (swiper) => {
        setSwiperInstance(swiper);
        setTimeout(() => {
            if (swiper && !swiper.destroyed) {
                swiper.update();
            }
        }, 150);
    };

    return (
        <section className="wpo-hero-slider wpo-hero-slider-s1" style={{ minHeight: "100vh", position: "relative" }}>
            <Swiper
                modules={[A11y, Pagination, Navigation, Parallax]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation={true}
                pagination={{ clickable: true }}
                
                /* FORCED INTERACTION ASSURANCE PARAMETERS */
                observer={true}
                observeParents={true}
                onSwiper={handleSwiperInit}
                style={{ width: "100%", height: "100vh" }} // Direct inline structural height fallback
            >
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})`, height: "100%", width: "100%" }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})`, height: "100%", width: "100%" }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})`, height: "100%", width: "100%" }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSlider;
