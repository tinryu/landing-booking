import React from "react";
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
    link: '/room/2'
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
    link: '/room/3'
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

export default function GridView() {
  return (
    <div className="col-lg-9">
      <div className="row wrapper grid-view">
      {data.map((item, index) => (
        <div className="col-lg-4" key={item.title + index}>
          <div className="item mb-4">
          <Link href={item.image.link} passHref>
            <span>
            <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                className="image"
                alt="grid"
            />
            </span>
          </Link>
            <div className="info">
              <h5 className="title">{item.title}</h5>
              <div className="des my-3">{item.des}</div>
              <div className="services">
                <span>{item.service.title}</span>
                <ul className="list d-flex flex-wrap">
                  {item.service.lists.map((list,index) => (
                    <li className="col" key={list.className + index}>
                      <div className={`icon me-2 ${list.className}`}></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="price">
              <div className="d-flex mx-3 mb-4">
                <span className="number">${item.price}</span>
                <span className="text ps-2">Per night</span>
              </div>
              <Link href={item.image.link} passHref>
                <span className="btn btn-booking">
                  Booking now
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
        


        <div className="paginations d-flex flex-wrap mt-4">
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
    </div>
  );
}
