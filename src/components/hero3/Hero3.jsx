import React, { useState } from "react"; // Added useState
import VideoModal from "../ModalVideo/VideoModal";
import { Navigation, A11y, Pagination, Parallax } from 'swiper/modules'; // Added Parallax module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'; // Added Parallax styles
import { Link } from 'react-router-dom';
import hero3 from '../../images/slider/slide-5.jpg';
import hero4 from '../../images/slider/slide-7.jpg';
import hero5 from '../../images/slider/slide-4.jpg';
import Ab2 from '../../images/about2.jpg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero3 = (props) => {
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
        <section className={"" + props.hclass} style={{ position: "relative" }}>
            <Swiper
                // Install Swiper modules
                modules={[Navigation, A11y, Pagination, Parallax]} // Added Parallax here
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
                style={{ width: "100%", height: "100vh" }} // Forces structural layout height
            >
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
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})`, height: "100%", width: "100%" }}>
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
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})`, height: "100%", width: "100%" }}>
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
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
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

            <div className="wpo-about-item">
                <div className="wpo-about-top">
                    <div className="wpo-about-thumb-img">
                        <img src={Ab2} alt="" />
                    </div>
                    <div className="wpo-about-info">
                        <div className="wpo-about-info-text">
                            <h2>Jenny Wilson</h2>
                            <span>CEO of BudyBay</span>
                        </div>
                        <div className="wpo-about-info-ratting">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wpo-about-content">
                    <p>“Consectetur adipiscing elited quam quis aliquam putate duisquis. Molestie ma
                        facilisis peltesque.”</p>
                </div>
            </div>
        </section>
    )
}

export default Hero3;
