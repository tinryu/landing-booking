import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
const data = [{
  src: '/assets/images/service1.png',
  title: 'Food1 & Beverage',
}, {
  src: '/assets/images/service2.png',
  title: 'Food2 & Beverage',
}, {
  src: '/assets/images/service3.png',
  title: 'Food3 & Beverage',
}, {
  src: '/assets/images/service4.png',
  title: 'Food4 & Beverage',
}];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 0 }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 0 }}
      onClick={onClick}
    >
      Previous
    </div>
  );
}

function ImageChild(props) {
  let src = data[props.src] ? data[props.src].src : '';
  return (
    <Image alt="slide" src={src} width={50} height={50} />
  );
}

export default function SwipeToSlide() {
  const [slide, setSlide] = useState(1);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "main-slide",
    afterChange: function (index) {
      console.log('index' ,index);
      if(index === data.length - 1) { 
        setSlide(0) 
      } else {
        setSlide(index+1);
      }
    },
  };
  return (
    <div className="slide-navfor">
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div className="items" key={item.title + index}>
              <Image src={item.src} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          )
        })}
      </Slider>
      <ImageChild src={slide}/> 
      next {slide}
    </div>
  );
}