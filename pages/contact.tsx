import * as React from "react";
import type { ReactElement } from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Breadcrumb name="contact" />
      <section className="contact-us container">
        <div className="row">
          <div className="col-lg-8">
            <h2>send us</h2>
            <h3>A message about your project</h3>
            <div className="row g-3 mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>contact</h2>
            <h3>Information</h3>
            <div className="row">
              <div className="col">
                <ul className="info d-flex flex-wrap">
                  <li className="mb-2 d-flex flex-row">
                    <FontAwesomeIcon icon={faPhone} className="me-3 col" />
                    <small>123 456 7890</small>
                  </li>
                  <li className="mb-2 d-flex flex-row">
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="me-3 py-2 col"
                    />
                    <small>
                      329 Queensberry Street, North Melbourne VIC 3051,
                      Australia.
                    </small>
                  </li>
                  <li className="mb-2 d-flex flex-row">
                    <FontAwesomeIcon icon={faEnvelope} className="me-3 col" />
                    <small>support@boxhouse.com</small>
                  </li>
                </ul>
                <div className="btn">read more</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <Image src={'/assets/images/map.png'} width={1920} height={720} alt="map" />
      </section>
    </>
  );
}
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
