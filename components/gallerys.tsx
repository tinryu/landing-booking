import React from "react";
import { GalleryMeasurer } from 'react-images-grid';
import 'react-images-grid/src/styles.css';

const arrImg = [
  {src: "/assets/images/gallery1.png", thumbnail: "/assets/images/gallery1.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery2.png", thumbnail: "/assets/images/gallery2.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery3.png", thumbnail: "/assets/images/gallery3.png", width: 500, height: 500, title: ''},
  {src: "/assets/images/gallery4.png", thumbnail: "/assets/images/gallery4.png", width: 500, height: 500, title: ''},
  {src: "/assets/images/gallery5.png", thumbnail: "/assets/images/gallery5.png", width: 500, height: 500, title: ''},
  {src: "/assets/images/gallery6.png",thumbnail: "/assets/images/gallery6.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery1.png", thumbnail: "/assets/images/gallery1.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery2.png", thumbnail: "/assets/images/gallery2.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery3.png", thumbnail: "/assets/images/gallery3.png", width: 500, height: 500, title: ''},
  {src: "/assets/images/gallery1.png", thumbnail: "/assets/images/gallery1.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery2.png", thumbnail: "/assets/images/gallery2.png",width: 500,height: 500, title: ''},
  {src: "/assets/images/gallery3.png", thumbnail: "/assets/images/gallery3.png", width: 500, height: 500, title: ''},
];
export default class Gallerys extends React.Component {
  render() {
    return (
      <GalleryMeasurer
          images={arrImg}
          onSelect={index => console.log('Selected', index)}
      />
    );
  }
}
