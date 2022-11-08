import type { ReactElement } from "react";
// import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Image from "next/image";
import Link from 'next/link'

export default function DetailNews() {
  // const router = useRouter();
  // const { pid } = router.query;

  return (
    <>
      <Breadcrumb
        name="news"
        level="Integer quis sapien neceli ultrices euismod."
      />
      <div className="news-wrapper detail">
        <section className="container">
          <div className="row">
            <h4 className="text-center">
              Integer quis sapien neceli ultrices euismod.
            </h4>
            <Image src="/assets/images/detail.png" layout="responsive" width={1290} height={631} alt="home"/>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
              Malorum (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, Lorem
              ipsum dolor sit amet.., comes from a line in section 1.10.32
            </p>
            <ul>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
            </ul>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
              Malorum (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, Lorem
              ipsum dolor sit amet.., comes from a line in section 1.10.32
            </p>
          </div>
          <div className="pagination">
            <div className="prev">
              Previous
              <Link href="#" passHref>
                <span className="subtitle">
                  Pellentesque vel dui nec libero auctor pretium id sed.
                </span>
              </Link>
            </div>
            <div className="next">
              Next
              <Link href="#" passHref>
                <span className="subtitle">
                  Pellentesque vel dui nec libero auctor pretium id sed.
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="container news-recomment">
          <div className="horizontal"></div>
          <h4 className="title-recoment">You may also like</h4>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card mb-4 box-shadow">
                <Image
                  className="card-img-top"
                  src="/assets/images/news1.png"
                  width={300}
                  height={320}
                  layout="intrinsic"
                  alt="news-detail"
                />
                <div className="card-body">
                  <div className="title">
                    Curabitur id lectus eget purus finibus laoreet.
                  </div>
                  <div className="date">April 10, 2022</div>
                  <p className="card-text">
                    Celebrate Labor Day with an unforgettable escape. Indulge in
                    our tantalising dining offers...
                  </p>
                </div>
                <Link href="#" passHref>
                  <span className="btn btn-more">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card mb-4 box-shadow">
                <Image
                  className="card-img-top"
                  src="/assets/images/news1.png"
                  width={300}
                  height={320}
                  layout="intrinsic"
                  alt="news-detail"
                />
                <div className="card-body">
                  <div className="title">
                    Curabitur id lectus eget purus finibus laoreet.
                  </div>
                  <div className="date">April 10, 2022</div>
                  <p className="card-text">
                    Celebrate Labor Day with an unforgettable escape. Indulge in
                    our tantalising dining offers...
                  </p>
                </div>
                <Link href="#" passHref>
                  <span className="btn btn-more">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card mb-4 box-shadow">
                <Image
                  className="card-img-top"
                  src="/assets/images/news1.png"
                  width={300}
                  height={320}
                  layout="intrinsic"
                  alt="news-detail"
                />
                <div className="card-body">
                  <div className="title">
                    Curabitur id lectus eget purus finibus laoreet.
                  </div>
                  <div className="date">April 10, 2022</div>
                  <p className="card-text">
                    Celebrate Labor Day with an unforgettable escape. Indulge in
                    our tantalising dining offers...
                  </p>
                </div>
                <Link href="#" passHref>
                  <span className="btn btn-more">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card mb-4 box-shadow">
                <Image
                  className="card-img-top"
                  src="/assets/images/news1.png"
                  width={300}
                  height={320}
                  layout="intrinsic"
                  alt="news-detail"
                />
                <div className="card-body">
                  <div className="title">
                    Curabitur id lectus eget purus finibus laoreet.
                  </div>
                  <div className="date">April 10, 2022</div>
                  <p className="card-text">
                    Celebrate Labor Day with an unforgettable escape. Indulge in
                    our tantalising dining offers...
                  </p>
                </div>
                <Link href="#" passHref>
                  <span className="btn btn-more">
                    see more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
DetailNews.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
