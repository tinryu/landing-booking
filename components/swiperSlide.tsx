import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import SearchRoom from "./searchRoom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <a className="button swiper-next" onClick={() => swiper.slideNext()}>{children}</a>;
};
const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <a className="button swiper-prev" onClick={() => swiper.slidePrev()}>{children}</a>;
};

export default function App() {
    return (
        <section className="home-slide">
            <Swiper
                modules={[Pagination, EffectFade]}
                className="swiper-home"
                rewind={true}
                effect={"fade"}
                pagination={{
                    type: "fraction",
                    el: ".swiper-paging",
                }}
            >
                <SwiperSlide>
                    <div className="swiper-item">
                        <div className="swiper-slide-inner container">
                        <div className="slide-content">
                            <div className="info">
                            <div className="text">
                                Fresh, quiet <br /> <span>and</span> peaceful
                            </div>
                            <div className="description">
                                Feel the sensation of staying in a hotel cabinn! Besides
                                being comfortablee, this hotel cabin prioritizes technology
                                and securites
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide-block row">
                        <div className="swiper-slide-block__blank col-lg-7"></div>
                        <div
                            className="swiper-slide-block__image col-lg-5"
                            style={{ backgroundImage: "url(/assets/images/maskslide.png)" }}
                        ></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <div className="swiper-slide-inner container">
                        <div className="slide-content">
                            <div className="info">
                            <div className="text">
                                Fresh, quiet <br /> <span>and</span> peaceful
                            </div>
                            <div className="description">
                                Feel the sensation of staying in a hotel cabinn! Besides
                                being comfortablee, this hotel cabin prioritizes technology
                                and securites
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide-block row">
                        <div className="swiper-slide-block__blank col-lg-7"></div>
                        <div
                            className="swiper-slide-block__image col-lg-5"
                            style={{ backgroundImage: "url(/assets/images/gallery1.png)" }}
                        ></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <div className="swiper-slide-inner container">
                        <div className="slide-content">
                            <div className="info">
                            <div className="text">
                                Fresh, quiet <br /> <span>and</span> peaceful
                            </div>
                            <div className="description">
                                Feel the sensation of staying in a hotel cabinn! Besides
                                being comfortablee, this hotel cabin prioritizes technology
                                and securites
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide-block row">
                        <div className="swiper-slide-block__blank col-lg-7"></div>
                        <div
                            className="swiper-slide-block__image col-lg-5"
                            style={{ backgroundImage: "url(/assets/images/maskslide.png)" }}
                        ></div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="navigation container">
                    <div className="d-flex justify-content-between col-lg-7 mb-4">
                    <SwiperButtonPrev>Previous</SwiperButtonPrev>
                    <div className="swiper-paging"></div>
                    <SwiperButtonNext>Next</SwiperButtonNext>
                    </div>
                </div>
            </Swiper>
            <SearchRoom page="home" />
        </section>
    );
}