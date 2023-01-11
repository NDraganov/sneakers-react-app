import React from 'react';
import './gallery.css';

function Gallery({galleryImagesSmall}) {
  return (
    <div>
    {/* Map method used from - https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/17039130#overview */}
      <div className="galleryWrap">
        {galleryImagesSmall &&
          galleryImagesSmall.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Gallery;