import React, { useState } from "react";
import "./mobile-slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function MobileSlider({ galleryImagesBig }) {
  const [slideNumber, setSlideNumber] = useState(0);

  function prevSlide() {
    slideNumber === 0
      ? setSlideNumber(galleryImagesBig.length - 1)
      : setSlideNumber(slideNumber - 1);
  }
  function nextSlide() {
    slideNumber + 1 === galleryImagesBig.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }

  return (
    <div className="mobile-slider">
      <button className="btn-prev" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </button>
      <button className="btn-next" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
      <div className="mobile-image">
        <img src={galleryImagesBig[slideNumber].img} alt="large-lightbox" />
      </div>
    </div>
  );
}

export default MobileSlider;
