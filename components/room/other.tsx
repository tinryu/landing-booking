import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <a className="button swiper-next" onClick={() => swiper.slideNext()}>{children}</a>;
};
const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <a className="button swiper-prev" onClick={() => swiper.slidePrev()}>{children}</a>;
};

const data = [{
    src: '/assets/images/other1.png',
    width: 648,
    height: 320,
    title: 'Premier room king',
    des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
    link: '/room/1'
},{
    src: '/assets/images/other1.png',
    width: 648,
    height: 320,
    title: 'Premier room king',
    des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
    link: '/room/2'
},{
    src: '/assets/images/other1.png',
    width: 648,
    height: 320,
    title: 'Premier room king',
    des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
    link: '/room/3'
},{
    src: '/assets/images/other1.png',
    width: 648,
    height: 320,
    title: 'Premier room king',
    des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
    link: '/room/4'
}]

export default function App() {
    return (
        <Swiper
            modules={[Pagination, EffectFade]}
            className="swiper-other"
          
            rewind={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide className="item" key={item.title + index}>
                    <Link href={item.link} passHref>
                        <>
                        <Image alt="other" src={item.src} width={item.width} height={item.height} className="img" />
                        <div className="title">
                            <h4 className="text">{item.title}</h4>
                            <div className="des">{item.des}</div>
                        </div>
                        </>
                    </Link>
                </SwiperSlide>
            ))}
            <div className="navigation">
                <div className="d-flex justify-content-between col-lg-7 mb-4">
                    <SwiperButtonPrev>Previous</SwiperButtonPrev>
                    <SwiperButtonNext>Next</SwiperButtonNext>
                </div>
                <div className="line-bottom"></div>
            </div>
        </Swiper>
    );
}