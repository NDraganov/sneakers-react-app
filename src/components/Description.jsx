import React from "react";
import "./description.css";

function Description() {
  return (
    <div className="description">
      <p className="sneaker-company">SNEAKER COMPANY</p>
      <h2 className="description-title">Fall Limited Edition Sneakers</h2>
      <p className="sneakers-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="sale-section">
          <p className="sale-price">$125.00</p>
          <div className="transbox">
            <p className="sale">50%</p>
          </div>
        </div>
        <p className="regular-price">$250.00</p>
      </div>
    </div>
  );
}
export default Description;