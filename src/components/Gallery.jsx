import React, { useState } from "react";
import "./gallery.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

function Gallery({ galleryImagesSmall, galleryImagesBig }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal(index) {
    setSlideNumber(index);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  function prevSlide() {
    slideNumber === 0
      ? setSlideNumber(galleryImagesSmall.length - 1)
      : setSlideNumber(slideNumber - 1);
  }
  function nextSlide() {
    slideNumber + 1 === galleryImagesSmall.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }
  return (
    <div className="gallery">
      {openModal && (
        <div className="lightbox">
          <button className="btnClose" onClick={handleCloseModal}>
            <CloseIcon fontSize="large" />
          </button>
          <div className="middle">
            <button className="btnPrev" onClick={prevSlide}>
              <ArrowBackIosIcon />
            </button>
            <div className="large-image-lightbox">
              <img
                src={galleryImagesBig[slideNumber].img}
                alt="large-lightbox"
              />
            </div>
            <button className="btnNext" onClick={nextSlide}>
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="small-images-lightbox">
            {galleryImagesSmall &&
              galleryImagesSmall.map((slide, index) => {
                return (
                  <div key={index} onClick={() => handleOpenModal(index)}>
                    <img src={slide.img} alt="thumb-lighbox" />
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className="page-gallery">
        <img
          className="large-image"
          src={galleryImagesBig[0].img}
          alt="large"
        />
        {/* Map method used from - https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/17039130#overview */}
        <div className="galleryWrap">
          {galleryImagesSmall &&
            galleryImagesSmall.map((slide, index) => {
              return (
                <div key={index} onClick={() => handleOpenModal(index)}>
                  <img className="thumb" src={slide.img} alt="thumbnail" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
