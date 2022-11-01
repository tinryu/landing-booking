import React from "react";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        {props.level ? (
          <>
            <li className="breadcrumb-item">
              <a href="#">{props.name}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {props.level}
            </li>
          </>
        ) : (
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">{props.name}</a>
          </li>
        )}
      </ol>
    </nav>
  );
}
