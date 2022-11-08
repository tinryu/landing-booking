import type { ReactElement } from "react";
import Layout from "../components/layout";
// import SwiperSlide from "../components/swiperSlide";
import SwiperSlideBasic from "../components/swiperSlideBasic";
import SwiperPadding from "../components/swiperPadding";
import SlideshowAsNavFor from "../components/slideshowAsNavFor";
// import SlideSlick from "../components/slideSlick";
import Gallerys from "../components/gallerys";
import Image from "next/image";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <main>
      <SwiperSlideBasic />
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 left">
              <div className="col-6">
                <div className="img img-1">
                  <Image
                    src="/assets/images/pic1.png"
                    width={279}
                    height={348}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="img img-3">
                  <Image
                    src="/assets/images/pic3.png"
                    width={297}
                    height={254}
                    layout="responsive"
                    alt="home"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="img img-2">
                  <Image
                    src="/assets/images/pic2.png"
                    width={312}
                    height={298}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="img img-4">
                  <Image
                    src="/assets/images/pic4.png"
                    width={312}
                    height={254}
                    layout="responsive"
                    alt="home"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 right">
              <h2 className="heading-title">About</h2>
              <h4 className="sub-title">
                Fresh, quiet <br />
                <span>and</span> peaceful
              </h4>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                obcaecati nobis explicabo reiciendis ratione culpa molestias
                asperiores autem! Qui dolores illum veniam porro unde pariatur
                eaque veritatis! Quia, ipsum hic!
              </div>
              <Link href="" passHref>
                <span className="btn">booking now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <h2 className="heading-title">Service</h2>
              <ul className="lists">
                <li className="item">
                  <div className="icon">
                    <Image
                      src="/assets/icon/food24.png"
                      width={24}
                      height={24}
                      layout="intrinsic"
                      alt="home"
                    />
                  </div>
                  <Link href="#" passHref>
                    <span className="content">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow-right"
                      />
                      <h3>Food & Beverage</h3>
                      <p>
                        A culinary destination with a variety of restaurants
                        offering a satisfying array of fresh, delicious menu
                        choices, from casual to fine dining.
                      </p>
                    </span>
                  </Link>
                </li>
                <li className="item">
                  <div className="icon">
                    <Image
                      src="/assets/icon/room24.png"
                      width={24}
                      height={24}
                      layout="intrinsic"
                      alt="home"
                    />
                  </div>
                  <a href="#" className="content">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                    <h3>Room & Suties</h3>
                    <p>
                      Our guestrooms and suites offers luxury and elegance,
                      efficiency and comfort.
                    </p>
                  </a>
                </li>
                <li className="item">
                  <div className="icon">
                    <Image
                      src="/assets/icon/meeting24.png"
                      width={24}
                      height={24}
                      layout="intrinsic"
                      alt="home"
                    />
                  </div>
                  <a href="#" className="content">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                    <h3>Meetings</h3>
                    <p>
                      A variety of multi-functional venues are available,
                      complemented with personal service from hotel meeting
                      specialists.
                    </p>
                  </a>
                </li>
                <li className="item">
                  <div className="icon">
                    <Image
                      src="/assets/icon/wedding24.png"
                      width={24}
                      height={24}
                      layout="intrinsic"
                      alt="home"
                    />
                  </div>
                  <Link href="#" passHref>
                    <span className="content">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrow-right"
                      />
                      <h3>Weddings</h3>
                      <p>What you can imagine, we can make happen.</p>
                    </span>
                  </Link>
                </li>
              </ul>
              <Link href="#" passHref>
                <span className="btn">
                  Booking now
                </span>
              </Link>
            </div>
            <div className="col-lg-7 col-12">
              <SlideshowAsNavFor />
            </div>
          </div>
        </div>
      </section>
      <section className="room">
        <h3 className="heading-title text-center">Room</h3>
        <SwiperPadding />
      </section>
      <section className="gallery">
        <h3 className="heading-title text-center">Gallery</h3>
        <Gallerys />
      </section>
      <section className="news">
        <div className="container">
          <div className="row">
            <h3 className="heading-title text-center">News</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="items ">
                <div className="img">
                  <Image
                    src="/assets/images/news1.png"
                    width={300}
                    height={320}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="title">
                  Curabitur id lectus eget purus finibus laoreet.
                </div>
                <div className="datetime">April 10, 2022</div>
                <div className="content">
                  Celebrate Labor Day with an unforgettable escape. Indulge in
                  our tantalising dining offers...
                </div>
                <Link href="/news/1" passHref>
                  <span className="btn btn-more">see more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="img">
                  <Image
                    src="/assets/images/news2.png"
                    width={300}
                    height={320}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="title">
                  Integer quis sapien neceli ultrices euismod.
                </div>
                <div className="datetime">April 10, 2022</div>
                <div className="content">
                  Celebrate Labor Day with an unforgettable escape. Indulge in
                  our tantalising dining offers...
                </div>
                <Link href="/news/1" passHref>
                  <span className="btn btn-more">see more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="img">
                  <Image
                    src="/assets/images/news3.png"
                    width={300}
                    height={320}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="title">
                  Pellentesque vel dui nec libero auctor pretium id sed.
                </div>
                <div className="datetime">April 10, 2022</div>
                <div className="content">
                  Celebrate Labor Day with an unforgettable escape. Indulge in
                  our tantalising dining offers...
                </div>
                <Link href="/news/1" passHref>
                  <span className="btn btn-more">see more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="img">
                  <Image
                    src="/assets/images/news4.png"
                    width={300}
                    height={320}
                    layout="responsive"
                    alt="home"
                  />
                </div>
                <div className="title">
                  Etiam commodo diam dolor, at scelerisque .
                </div>
                <div className="datetime">April 10, 2022</div>
                <div className="content">
                  Celebrate Labor Day with an unforgettable escape. Indulge in
                  our tantalising dining offers...
                </div>
                <Link href="/news/1" passHref>
                  <span className="btn btn-more">see more</span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/news" passHref>
            <span className="btn-all">See All</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
