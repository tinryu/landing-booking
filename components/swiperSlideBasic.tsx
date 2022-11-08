import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade } from "swiper";
import SearchRoom from "./searchRoom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function SwiperSlideBasic() {
    return (
        <section className="home-slide">
            <Swiper
                modules={[EffectFade]}
                className="swiper-home"
                rewind={true}
                effect={"fade"}
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
                
            </Swiper>
            <SearchRoom page="home" />
        </section>
    );
}