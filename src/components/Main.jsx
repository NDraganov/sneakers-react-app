import React from 'react';
import bootstrap from 'bootstrap';
import './main.css';
import Description from './Description';
import Gallery from './Gallery';

function Main() {
  const galleryImagesSmall = [
    { img: "assets/images/image-product-1-thumbnail.jpg" },
    { img: "assets/images/image-product-2-thumbnail.jpg" },
    { img: "assets/images/image-product-3-thumbnail.jpg" },
    { img: "assets/images/image-product-4-thumbnail.jpg" },
  ];
  const galleryImagesBig = [
    { img: "assets/images/image-product-1.jpg" },
    { img: "assets/images/image-product-2.jpg" },
    { img: "assets/images/image-product-3.jpg" },
    { img: "assets/images/image-product-4.jpg" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Gallery
            galleryImagesSmall={galleryImagesSmall}
            galleryImagesBig={galleryImagesBig}
          />
        </div>
        <div className="col-lg-6">
          <Description />
        </div>
      </div>
    </div>
  );
}

export default Main;
