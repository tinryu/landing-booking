import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
const baseUrl = "/assets/images";
export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <Image alt="slide" src={`${baseUrl}/cover${i + 1}.png`} layout="raw" width={162} height={85}/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <Image alt="slide" src={baseUrl + "/cover1.png"} layout="responsive" width={647} height={342}/>
          </div>
          <div>
          <Image alt="slide" src={baseUrl + "/cover2.png"} layout="responsive" width={647} height={342}/>
          </div>
          <div>
          <Image alt="slide" src={baseUrl + "/cover3.png"} layout="responsive" width={647} height={342}/>
          </div>
          <div>
          <Image alt="slide" src={baseUrl + "/cover3.png"} layout="responsive" width={647} height={342}/>
          </div>
        </Slider>
      </div>
    );
  }
}