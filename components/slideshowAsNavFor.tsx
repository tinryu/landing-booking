import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Previous
    </div>
  );
}
function CustomSlide(props) {
  const { index, img, total } = props;
  return (
    <div className="item">
      <Image alt="slide" src={img} width={100} height={100} />
    </div>
  );
}
interface Navstate {
  nav1: any;
  nav2: any;
}
export default class AsNavFor extends Component<{}, Navstate> {
  slider1: any;
  slider2: any;
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="slide-navfor">
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className="main-slide"
          fade={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          <div className="items">
            <Image src="/assets/images/service1.png" alt="slide" width={707} height={685}/>
            <h4>Food1 & Beverage</h4>
            <div className="pagin">01/04</div>
          </div>
          <div className="items">
            <Image src="/assets/images/service2.png" alt="slide" width={707} height={685}/>
            <h4>Food2 & Beverage</h4>
            <div className="pagin">02/04</div>
          </div>
          <div className="items">
            <Image src="/assets/images/service3.png" alt="slide" width={707} height={685}/>
            <h4>Food3 & Beverage</h4>
            <div className="pagin">03/04</div>
          </div>
          <div className="items">
            <Image src="/assets/images/service4.png" alt="slide" width={707} height={685}/>
            <h4>Food4 & Beverage</h4>
            <div className="pagin">04/04</div>
          </div>
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          className="child-slide"
          arrows={false}
        >
          <CustomSlide
            index={"01"}
            img={"/assets/images/service1.png"}
            total={"04"}
          />
          <CustomSlide
            index={"02"}
            img={"/assets/images/service1.png"}
            total={"04"}
          />
          <CustomSlide
            index={"03"}
            img={"/assets/images/service1.png"}
            total={"04"}
          />
          <CustomSlide
            index={"04"}
            img={"/assets/images/service1.png"}
            total={"04"}
          />
        </Slider>
      </div>
    );
  }
}
