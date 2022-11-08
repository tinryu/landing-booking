import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <a className="button swiper-next" onClick={() => swiper.slideNext()}>{children}</a>;
};
const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <a className="button swiper-prev" onClick={() => swiper.slidePrev()}>{children}</a>;
};

export default function cover() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{
            type: "fraction",
            el: ".swiper-paging",
        }}
        modules={[Pagination]}
        className="swiper-cover"
      >
        <SwiperSlide>
          <Image src="/assets/images/cover1.png" alt="logo" layout="raw" width={962} height={488} priority={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/cover1.png" alt="logo" layout="raw" width={962} height={488} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/cover1.png" alt="logo" layout="raw" width={962} height={488} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/cover1.png" alt="logo" layout="raw" width={962} height={488} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/cover1.png" alt="logo" layout="raw" width={962} height={488} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/room.png" alt="logo" layout="raw" width={1170} height={588} priority={true}/>
        </SwiperSlide>
        <div className="navigation d-flex mt-3">
            <div className="d-flex flex-wrap justify-content-between">
              <SwiperButtonPrev>Previous</SwiperButtonPrev>
              <div className="swiper-paging"></div>
              <SwiperButtonNext>Next</SwiperButtonNext>
            </div>
        </div>
      </Swiper>
    </>
  );
}
