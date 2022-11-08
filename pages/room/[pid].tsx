import React, { ReactElement, useState } from 'react';
import Layout from "../../components/layout";
import Cover from "../../components/room/cover";
import Other from "../../components/room/other";
import Image from "next/image";
// import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStart } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function DetailRoom() {
  // const router = useRouter();
  // const { pid } = router.query;
  const [checkIn, setCheckIn] = useState("2022-04-21");
  const [checkOut, setCheckOut] = useState("2022-04-30");
  // if (router.isFallback) {
    return (
      <div>
        <Cover />
        <div className="container">
          <div className="row detail">
            <div className="col-lg-9 col">
              <div className="heading-title">
                <h3 className="title">Premier Room King</h3>
                <div className="price">
                  <span className="number">$178</span>
                  <span className="text">Per night</span>
                </div>
              </div>
              <div className="descript">
                <span>Sleeps 2</span>|
                <span>2 Twin</span>|
                <span>19 to 20m2</span>
              </div>
              <div className="contents">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32
              </div>
              <div className="facilities">
                <h4 className="title">facilities</h4>
                <ul className="accessories row">
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/cable-tv.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Cable and satellite TV</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/mini-bar.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Mini-bar</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/house-keeping.png" width={20} height={20} layout="raw" className="icon" />
                      <label>HouseKeeping</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/cable-tv.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Cable and satellite TV</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/working-desk.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Working desk</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/iron.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Iron and ironing board</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/coffee-tea.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Coffee / Tea maker</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/cable-tv.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Cable and satellite TV</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/wine-bottle.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Free bottled water</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/blackout.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Blackout curtains</label>
                    </div>
                  </li>
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/air-condition.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Air conditioning</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="additional">
                <h4 className="title">Additional Services</h4>
                <ul className="accessories row">
                  <li className="col-lg-4 col-6">
                    <div className="item">
                      <Image alt="room" src="/assets/icon/air-condition.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Air conditioning</label>
                    </div>
                  </li>
                  <li className='col-lg-4 col-6'>
                    <div className="item">
                      <Image alt="room" src="/assets/icon/cable-tv.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Cable and satellite TV</label>
                    </div>
                  </li>
                  <li className='col-lg-4 col-6'>
                    <div className="item">
                      <Image alt="room" src="/assets/icon/wine-bottle.png" width={20} height={20} layout="raw" className="icon" />
                      <label>Free bottled water</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-booking mb-4">
                <div className="check-in">
                  <label>
                    <span className="date-icon"></span> Check in
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    defaultValue={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="check-out">
                  <label>
                    <span className="date-icon"></span> Check out
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    defaultValue={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
                <div className="room-sf">
                  <label>
                    <span className="room-icon"></span> Room
                  </label>
                  <select className="form-select" name="room" id="room">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="adult-sf">
                  <label>
                    <span className="adult-icon"></span> Adults
                  </label>
                  <select className="form-select" name="adult" id="adult">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="children-sf">
                  <label>
                    <span className="children-icon"></span> Children 0-11 years
                  </label>
                  <select className="form-select" name="children" id="children">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="btn btn-booking">Booking Now</div>
              </div>
            </div>
          </div>
          <div className="row other">
            <h5 className="title">Other rooms</h5>
            <div className="content">
              <Other />
            </div>
          </div>
          <div className="row review">
            <h5 className="title">Review</h5>
            <p>Your email address will not be published. Require fields are marked *</p>
            <div className="form-review">
              <div className="group-input row">
                <div className="col-lg-3 col"><input type="text" className="name form-control" placeholder="Your Name *" /></div>
                <div className="col-lg-3 col"><input type="text" className="email form-control" placeholder="Email Address *" /></div>
                <div className="col-lg-6 col"><textarea cols={10} rows={1} className="comment form-control" placeholder="Comment"></textarea></div>
              </div>
              <div className="ranking">
                <label>Location <span className="star"><FontAwesomeIcon icon={faStarHalfStroke} /><FontAwesomeIcon icon={regularStart} /><FontAwesomeIcon icon={regularStart} /><FontAwesomeIcon icon={regularStart} /><FontAwesomeIcon icon={regularStart} /></span></label>
                <label>Amenities <span className="star"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span></label>
                <label>Services <span className="star"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span></label>
                <label>Price <span className="star"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span></label>
                <label>Room <span className="star"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span></label>
              </div>

              <p className="mb-4 d-flex">
                <input type="checkbox" className="check" id="check-input" />
                <label htmlFor="check-input">Save your name, email in this broweser for the next time u comment</label>
              </p>

              <div className="btn btn-post">Post Comment <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
          </div>

        </div>
      </div>
    )
  // }
}

DetailRoom.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
