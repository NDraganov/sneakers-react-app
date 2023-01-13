import React from "react";
import "./add-cart.css";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function AddCart() {
  return (
    <div className="container add">
      <div className="row">
        <div className="col-lg-3 col-md-12 count-buttons">
          <button className="btn"><RemoveOutlinedIcon /></button>
            <span className="number"></span>
          <button className="btn"><AddOutlinedIcon /></button>
        </div>
        <div className="col-lg-6 col-md-12 add-to-cart">
          <button className="add-btn">
            <img className="cart" src="assets/images/icon-cart.svg" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCart;