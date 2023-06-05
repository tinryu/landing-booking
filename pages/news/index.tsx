import type { ReactElement } from "react";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Image from "next/image";
import Link from "next/link";

const news = [{
  images: {
    src: '/assets/images/news1.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news2.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news3.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news4.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news1.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news2.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news3.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
},{
  images: {
    src: '/assets/images/news4.png',
    width: 300,
    height: 320,
  },
  title: 'Curabitur id lectus eget purus finibus laoreet.',
  date: 'April 10, 2022',
  des: 'Celebrate Labor Day with an unforgettable escape. Indulge in our tantalising dining offers...',
  link: '/news/1'
}];
export default function News() {
  return (
    <>
      <Breadcrumb name="news" />
      <div className="news-wrapper">
        <section className="container feature-news">
          <div className="row">
            <div className="col-lg-7 left-g pb-3">
              <div className="item">
                <Image
                  src="/assets/images/news1.png"
                  width={745}
                  height={444}
                  alt="news"
                />
                <div className="cover">
                  <Link href="/news/1" passHref>
                    <span className="g-title">
                      <div className="title mb-2">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text
                      </div>
                      <div className="date">April 10, 2022</div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 right-g">
              <div className="row">
                <div className="col">
                  <div className="card d-flex flex-row">
                    <Link href="/news/1" passHref>
                      <Image
                        className="card-img-left flex-auto d-md-block"
                        src="/assets/images/pic2.png"
                        width={128}
                        height={128}
                        alt="news"
                      />
                    </Link>
                    <div className="card-body flex-column align-items-start ps-3">
                      <div className="title">
                        <Link href="/news/1" passHref>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </Link>
                      </div>
                      <div className="date my-3 text-muted">April 10, 2022</div>
                      <p className="des card-text mb-auto">
                        Celebrate Labor Day with an unforgettabl Celebrate Labor
                        Day with an unforgettabl
                      </p>
                    </div>
                  </div>
                  <div className="card d-flex flex-row">
                    <Link href="/news/1" passHref>
                      <Image
                        className="card-img-left flex-auto d-md-block"
                        src="/assets/images/pic2.png"
                        width={128}
                        height={128}
                        alt="news"
                      />
                    </Link>
                    <div className="card-body flex-column align-items-start ps-3">
                      <div className="title">
                        <Link href="/news/1" passHref>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </Link>
                      </div>
                      <div className="date my-3 text-muted">April 10, 2022</div>
                      <p className="des card-text mb-auto">
                        Celebrate Labor Day with an unforgettabl Celebrate Labor
                        Day with an unforgettabl
                      </p>
                    </div>
                  </div>
                  <div className="card d-flex flex-row">
                    <Link href="/news/1" passHref>
                      <Image
                        className="card-img-left flex-auto d-md-block"
                        src="/assets/images/pic3.png"
                        width={128}
                        height={128}
                        alt="news"
                      />
                    </Link>
                    <div className="card-body flex-column align-items-start ps-3">
                      <div className="title">
                        <Link href="/news/1" passHref>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </Link>
                      </div>
                      <div className="date my-3 text-muted">April 10, 2022</div>
                      <p className="des card-text mb-auto">
                        Celebrate Labor Day with an unforgettabl Celebrate Labor
                        Day with an unforgettabl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container news-gird">
          <div className="row">
          {news.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={item.title + index}>
              <div className="card mb-4 box-shadow">
                <Image
                  className="card-img-top"
                  src={item.images.src}
                  width={item.images.width}
                  height={item.images.height}
                  alt="news"
                />
                <div className="card-body">
                  <div className="title">
                    {item.title}
                  </div>
                  <div className="date">{item.date}</div>
                  <p className="card-text">
                    {item.des}
                  </p>
                </div>
                <Link href={item.link} passHref>
                  <span className="btn btn-more">
                    see more
                  </span>
                </Link>
              </div>
            </div>
          ))}
          </div>
          <div className="paginations d-flex flex-wrap">
            <div className="col prev text-start">
              <Link href="#">Previous</Link>
            </div>
            <ul className="col pagin">
              <li className="active">
                <Link href="#">01</Link>
              </li>
              <li>
                <Link href="#">02</Link>
              </li>
              <li>
                <Link href="#">03</Link>
              </li>
              <li>
                <Link href="#">04</Link>
              </li>
            </ul>
            <div className="col next text-end">
              <Link href="#">Next</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
News.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
