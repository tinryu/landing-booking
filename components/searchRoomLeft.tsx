import React, { useState } from "react";

export default function SearchRoomLeft() {
  const [checkIn, setCheckIn] = useState("2022-04-21");
  const [checkOut, setCheckOut] = useState("2022-04-30");
  let page: string;
  let button: string;
  let name: string;
  page = "search-room-left"
  button = "btn btn-booking"
  name = "Booking Now"

  return (
    <div className={page}>

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
      <span className="divide"></span>
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
      <div className={button}>{name}</div>
    </div>
  );
}
