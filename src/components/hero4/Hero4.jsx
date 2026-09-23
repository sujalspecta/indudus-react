import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';
import { Navigation, A11y, Pagination, Parallax } from 'swiper/modules'; // Added Parallax module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'; // Added Parallax styles

import hero5 from '../../images/slider/slide-8.jpg'
import hero6 from '../../images/slider/slide-9.jpg'
import hero7 from '../../images/slider/slide-10.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero4 = () => {
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
        <section className="wpo-box-style" style={{ position: "relative" }}>
            <div className="wpo-hero-slider wpo-hero-slider-s3" style={{ minHeight: "100vh", position: "relative" }}>
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})`, height: "100%", width: "100%" }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero6})`, height: "100%", width: "100%" }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero7})`, height: "100%", width: "100%" }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
            </div>
        </section >
    );
};

export default Hero4;
