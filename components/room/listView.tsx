import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [{
  image: {
    src: '/assets/images/room-pic.png',
    width: 320,
    height: 180,
    link: '/room/1'
  },
  title: 'Premier Room: Premier Room King',
  des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
  service: {
    title: 'City or Park View. Free WiFi',
    lists: [{
      className: 'cable-tv',
      text: 'Cable and satellite TV'
    }, {
      className: 'working-desk',
      text: 'Working desk'
    }, {
      className: 'free-water',
      text: 'Free bottled water'
    }, {
      className: 'mini-bar',
      text: 'Mini-bar'
    }, {
      className: 'iron',
      text: 'Iron and ironing board'
    }, {
      className: 'blackout',
      text: 'Blackout curtains'
    }, {
      className: 'air-con',
      text: 'Air conditioning'
    }, {
      className: 'house-keeping',
      text: 'Housekeeping'
    }, {
      className: 'coffee-tea',
      text: 'Coffee / Tea maker'
    }]
  },
  price: '178'
}, {
  image: {
    src: '/assets/images/room-pic.png',
    width: 320,
    height: 180,
    link: '/room/1'
  },
  title: 'Premier Room: Premier Room King',
  des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
  service: {
    title: 'City or Park View. Free WiFi',
    lists: [{
      className: 'cable-tv',
      text: 'Cable and satellite TV'
    }, {
      className: 'working-desk',
      text: 'Working desk'
    }, {
      className: 'free-water',
      text: 'Free bottled water'
    }, {
      className: 'mini-bar',
      text: 'Mini-bar'
    }, {
      className: 'iron',
      text: 'Iron and ironing board'
    }, {
      className: 'blackout',
      text: 'Blackout curtains'
    }, {
      className: 'air-con',
      text: 'Air conditioning'
    }, {
      className: 'house-keeping',
      text: 'Housekeeping'
    }, {
      className: 'coffee-tea',
      text: 'Coffee / Tea maker'
    }]
  },
  price: '178'
},
{
  image: {
    src: '/assets/images/room-pic.png',
    width: 320,
    height: 180,
    link: '/room/1'
  },
  title: 'Premier Room: Premier Room King',
  des: 'Sleeps 2 | 2 Twin | 19 to 20m2',
  service: {
    title: 'City or Park View. Free WiFi',
    lists: [{
      className: 'cable-tv',
      text: 'Cable and satellite TV'
    }, {
      className: 'working-desk',
      text: 'Working desk'
    }, {
      className: 'free-water',
      text: 'Free bottled water'
    }, {
      className: 'mini-bar',
      text: 'Mini-bar'
    }, {
      className: 'iron',
      text: 'Iron and ironing board'
    }, {
      className: 'blackout',
      text: 'Blackout curtains'
    }, {
      className: 'air-con',
      text: 'Air conditioning'
    }, {
      className: 'house-keeping',
      text: 'Housekeeping'
    }, {
      className: 'coffee-tea',
      text: 'Coffee / Tea maker'
    }]
  },
  price: '178'
}
];

export default function ListView() {
  return (
    <div className="col-lg-9 wrapper list-view">
      {data.map((item, index) => (
        <div className="row mb-5" key={item.title+index}>
          <div className="col-lg-4 col-md-4 image">
            <Link href={item.image.link} passHref>
              <Image alt={item.title} src={item.image.src} width={item.image.width} height={item.image.height} layout="responsive" priority={true} />
            </Link>
          </div>
          <div className="col-lg-6 col-md-5 info">
            <h5 className="title">{item.title}</h5>
            <div className="des">{item.des}</div>
            <div className="services">
              <span>{item.service.title}</span>
              <ul className="list d-flex flex-wrap">
                {item.service.lists.map((list, index) => (
                  <li className="col-lg-6 col-md-1" key={list.className + index}>
                    <div className={`icon me-2 ${list.className}`}></div>
                    <div className="text">{list.text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 price">
            only <span className="number ms-2">${item.price}</span>
            <span className="text">Per night</span>
            <a href={item.image.link} className="btn btn-booking">
              Booking now
            </a>
          </div>
        </div>
      ))}
      <div className="paginations d-flex flex-wrap">
        <div className="col prev text-start">
          <Link href="#" passHref>Previous</Link>
        </div>
        <ul className="col pagin">
          <li className="active">
            <Link href="#" passHref>01</Link>
          </li>
          <li>
            <Link href="#" passHref>02</Link>
          </li>
          <li>
            <Link href="#" passHref>03</Link>
          </li>
          <li>
            <Link href="#" passHref>04</Link>
          </li>
        </ul>
        <div className="col next text-end">
          <Link href="#" passHref>Next</Link>
        </div>
      </div>
    </div>
  );
}
