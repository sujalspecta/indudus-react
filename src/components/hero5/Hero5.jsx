import React, { useState } from "react"; // Added useState
import { Navigation, A11y, Pagination, Parallax } from 'swiper/modules'; // Added Parallax
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'; // Added Parallax CSS
import { Link } from 'react-router-dom';
import hero11 from '../../images/slider/slide-11.jpg';
import hero12 from '../../images/slider/slide-12.jpg';
import hero13 from '../../images/slider/slide-13.jpg';

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
                // install Swiper modules
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero11})`, height: "100%", width: "100%" }}>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero12})`, height: "100%", width: "100%" }}>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero13})`, height: "100%", width: "100%" }}>
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

export default Hero3;
