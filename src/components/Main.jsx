import React from "react";
import "./main.css";
import Gallery from "./Gallery";
import MobileSlider from "./MobileSlider";
import Description from "./Description";
import AddCart from "./AddCart";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

function Main() {
  const galleryImagesSmall = [
    { img: thumb1 },
    { img: thumb2 },
    { img: thumb3 },
    { img: thumb4 },
  ];
  const galleryImagesBig = [
    { img: product1 },
    { img: product2 },
    { img: product3 },
    { img: product4 },
  ];
  return (
    <div className="main">
      <div>
        <Gallery
          galleryImagesSmall={galleryImagesSmall}
          galleryImagesBig={galleryImagesBig}
        />
        <MobileSlider galleryImagesBig={galleryImagesBig} />
      </div>
      <div>
        <Description />
        <AddCart />
      </div>
    </div>
  );
}

export default Main;
