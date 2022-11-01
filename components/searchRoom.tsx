import React, { useState } from "react";

export default function SearchRoom(props) {
  const [checkIn, setCheckIn] = useState("2022-04-21");
  const [checkOut, setCheckOut] = useState("2022-04-30");
  let page: string;
  let button: string;
  let name: string;
  if (props.page === "home") {
    page = "search-room container";
    button = "btn btn-booking";
    name = "Booking Now";
  } else {
    page = "search-room-child container";
    button = "btn btn-apply";
    name = "Apply";
  }

  return (
    <div className={page}>
      <div className="row">
        <div className="col-lg-4 col-sm-12 d-flex mb-3 mb-lg-0">
          <div className="col-lg-6 col-6 check-in">
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
          <div className="col-lg-6 col-6 check-out">
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
          <span className="divide"></span>
        </div>
        
        <div className="col-lg-6 col-sm-12 d-flex mb-3 mb-lg-0">
          <div className="col col-sm-3 room-sf">
            <label>
              <span className="room-icon"></span> Room
            </label>
            <select className="form-select" name="room" id="room">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col col-sm-3 adult-sf">
            <label>
              <span className="adult-icon"></span> Adults
            </label>
            <select className="form-select" name="adult" id="adult">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col col-sm-6 children-sf">
            <label>
              <span className="children-icon"></span> Children 0-11 years
            </label>
            <select className="form-select" name="children" id="children">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className={button}>{name}</div>
        </div>
      </div>
    </div>
  );
}
