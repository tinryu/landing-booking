import React from 'react'
import Image from "next/image";

const menus = [
    { src: '/assets/images/menu1.png', title: 'Cable and satellite 1'},
    { src: '/assets/images/menu2.png', title: 'Cable and satellite 2'},
    { src: '/assets/images/menu3.png', title: 'Cable and satellite 3'},
    { src: '/assets/images/menu4.png', title: 'Cable and satellite 4'},
    { src: '/assets/images/menu5.png', title: 'Cable and satellite 5'},
    { src: '/assets/images/menu6.png', title: 'Cable and satellite 6'},
    { src: '/assets/images/menu7.png', title: 'Cable and satellite 7'},
    { src: '/assets/images/menu8.png', title: 'Cable and satellite 8'},
    { src: '/assets/images/menu9.png', title: 'Cable and satellite 9'},
    { src: '/assets/images/menu10.png', title: 'Cable and satellite 10'},
    { src: '/assets/images/menu11.png', title: 'Cable and satellite 11'},
    { src: '/assets/images/menu12.png', title: 'Cable and satellite 12'},
    { src: '/assets/images/menu13.png', title: 'Cable and satellite 13'},
    { src: '/assets/images/menu13.png', title: 'Cable and satellite 14'},
    { src: '/assets/images/menu13.png', title: 'Cable and satellite 15'},
    { src: '/assets/images/menu13.png', title: 'Cable and satellite 16'},
]
export default function foods() {
  return (
    <div className="food-beverage">
        <div className="row our-food">
            <div className="col-lg-6">
                <Image alt="food" src="/assets/images/food-service.png" layout="responsive" width={648} height={342} />
            </div>
            <div className="col-lg-6">
                <h2 className="title">Our Food</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            </div>
        </div>
        <div className="row our-beverage">
            <div className="col-lg-6">
                <h2 className="title">Our Beverage</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            </div>
            <div className="col-lg-6">
                <Image alt="food" src="/assets/images/food-service2.png" layout="responsive" width={648} height={342} />
            </div>
        </div>
        <div className="our-menu">
            <h2 className='title'>Our Menu</h2>
            <div className="list-menu">
                {menus.map((item, index) => {
                    return (
                        <div className="item" key={item.title + index}>
                            <Image alt="food" src={item.src} layout="raw" width={112} height={77} />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
