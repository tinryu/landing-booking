import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoFooter from "../public/assets/images/logofooter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid question">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col py-5">
              <h3 className="pb-3">Got a question?</h3>
              <p>
                We re here to help. Check out our FAQs, send us an email or call
                us at 2 600 7777 9999
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link href="/" passHref>
              <span className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <Image src={LogoFooter} alt="logo" />
              </span>
            </Link>
            <ul className="info list-unstyled">
              <li>
                <p>Call us</p>
                <p>123 456 7890</p>
              </li>
              <li>
                <p>329 Queensberry Street, North Melbourne VIC</p>
                <p>3051, Australia.</p>
              </li>
              <li>support@boxhouse.com</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="pb-4 mb-0">Quick links</h4>
            <div className="row">
              <ul className="q-link col list-unstyled">
                <Link href="/" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      Home
                    </span>
                  </li>
                </Link>
                <Link href="/about" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      About
                    </span>
                  </li>
                </Link>
                <Link href="/services" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      Services
                    </span>
                  </li>
                </Link>
                <Link href="/room" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      Room
                    </span>
                  </li>
                </Link>
              </ul>
              <ul className="q-link col list-unstyled">
                <Link href="/gallery" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      Gallery
                    </span>
                  </li>
                </Link>
                <Link href="/news" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      News
                    </span>
                  </li>
                </Link>
                <Link href="/contact" passHref>
                  <li className="pb-2">
                    <span className="p-0 text-muted">
                      Contact
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 form-subscribe">
            <h4 className="pb-4 mb-0">Subscribe to newsletter</h4>
            <p>We dont send spam so dont worry.</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
              <button className="btn">Subscribe</button>
            </div>

            <span>
              (if you do not wish to recevice newsletters in the future, please
              click <a>here</a>)
            </span>
            <ul className="nav col list-unstyled d-flex pt-3">
              <li className="me-4">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="me-4">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="me-4">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="me-4">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top"></div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-5">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">
              © 2022 Boxhouse. All Right Reserved.
            </span>
          </div>
          <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <span className="text-muted">Designed by HuSa Themes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
