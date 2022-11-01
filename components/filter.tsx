import React, { useState } from "react";
import MultiRangeSlider from "./multiRangeSlider";

const filters = [
  {
    title: 'Display',
    lists: ['view by room','view by rate' ]
  },
  {
    title: 'View',
    lists: ['City view', 'Part view', 'River view', 'Orther view']
  },
  {
    title: 'Feature',
    lists: ['Bathroom Amenities', 'Bathub only', 'Free Local Calls', 'Flat Panel TV', 'Mini Bar', 'Meal inclued - Breakfast', 'Separate Bathtub and Shower']
  },
  {
    title: 'Bed type',
    lists: ['King', 'Twin']
  },
  {
    title: 'Room Catetory',
    lists: ['Primier room', 'Residence club', 'Premier Room', 'Excutive Suite', 'Directors Suite']
  },
]
const min = 100;
const max = 500;

export default function Filter() {
  return (
    <section className="filter col-lg-3 mb-md-5">
      <h4 className="title">
        Filter
        <div className="g-btn">
          <a className="btn m-filter" data-bs-toggle="offcanvas" href="#filter-left" role="button" aria-controls="filter-left"></a>
          <a href="#">clear</a>
        </div>
      </h4>
      <div className="content offcanvas-lg offcanvas-start" id="filter-left" aria-labelledby="filter-left">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
        </div>
        <div className="offcanvas-body">
          <div className="list">
            {filters.map((filter, index) => (
              <div key={filter.title + index}>
                <h5>{filter.title}</h5>
                <ul>
                  {filter.lists.map((item, index) => (
                    <li key={item + index}>
                      <input type="checkbox" name="display" value="1" />
                      <label>{item}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <h5>Price</h5>
            <MultiRangeSlider min={min} max={max} onChange={(event) => { }} />
          </div>
        </div>
      </div>
    </section>
  );
}
