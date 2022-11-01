import type { ReactElement } from "react";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Breadcrumb name="about" />
      <div className="about-wrapper">
        <section className="content-about">
          <div className="container">
            <div className="row gr-content">
              <div className="col-lg-6">
                <p className="text">
                  Fresh, quiet <br /> <span>and</span> peaceful
                </p>
              </div>
              <div className="col-lg-6 pt-4">
                <p className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, doloribus fuga. Deserunt culpa perspiciatis deleniti
                  eligendi autem explicabo voluptate repellat iure eaque
                  quisquam cum iusto magnam sint, praesentium fugiat inventore.
                </p>
              </div>
            </div>
            <div className="row gr-img">
              <div className="col-lg-5 text-end mb-md-4">
                <div className="img img-1">
                  <Image
                    src="/assets/images/about1.png"
                    width={401}
                    height={499}
                    layout="raw"
                    alt="about"
                  />
                </div>
                <div className="img img-3">
                  <Image
                    src="/assets/images/about3.png"
                    width={277}
                    height={244}
                    layout="raw"
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img img-2">
                  <Image
                    src="/assets/images/about2.png"
                    width={421}
                    height={275}
                    layout="raw"
                    alt="about"
                  />
                </div>
                <div className="img img-4">
                  <Image
                    src="/assets/images/about4.png"
                    width={663}
                    height={344}
                    layout="raw"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-about">
          <div className="container">
            <div className="text-center">
              <h5 className="title">The Story</h5>
            </div>
            <ul className="row flex-xs-column">
              <li className="col-lg-3 items text-lg-center">
                <div className="year col">
                  2016
                  <div className="icon"></div>
                </div>
                <div className="des col">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing eli.
                </div>
              </li>
              <li className="col-lg-3 items text-lg-center">
                <div className="year">
                  2018
                  <div className="icon"></div>
                </div>
                <div className="des">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing eli.
                </div>
              </li>
              <li className="col-lg-3 items text-lg-center">
                <div className="year">
                  2020
                  <div className="icon"></div>
                </div>
                <div className="des">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing eli.
                </div>
              </li>
              <li className="col-lg-3 items text-lg-center active">
                <div className="year">
                  2022
                  <div className="icon"></div>
                </div>
                <div className="des">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing eli.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="end-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-lg-end">
                <h3>The Story</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  dolore voluptate, minus mollitia debitis impedit minima
                  asperiores! Velit cupiditate nam voluptatibus voluptatem odio
                  inventore ipsa, dolor magnam nostrum quia ipsum!
                </p>
              </div>
              <div className="col-lg-6">
                <Image
                  src="/assets/images/bedpic.png"
                  layout="responsive"
                  width={633}
                  height={318}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
