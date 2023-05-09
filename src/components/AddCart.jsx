import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/couterSlice";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import basket from "../images/icon-cart.svg";
import "./add-cart.css";

function AddCart() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  {
    /* Local storage info - https://blog.logrocket.com/using-localstorage-react-hooks/ */
  }
  function addCount(e) {
    const get = JSON.parse(localStorage.getItem("data")) || null;
    localStorage.setItem("data", JSON.stringify(get + count));
    window.location.reload();
  }

  return (
    <div className="add-to-cart">
      <div className="count-buttons">
        <button
          className="btn"
          onClick={() => dispatch(decrement())}
          disabled={count === 0 || (count < 0 && true)}
        >
          <RemoveOutlinedIcon />
        </button>
        <span className="count">{count}</span>
        <button className="btn" onClick={() => dispatch(increment())}>
          <AddOutlinedIcon />
        </button>
      </div>
      <button
        className="add-btn"
        onClick={addCount}
        title="Add to cart"
        disabled={count === 0 || (count < 0 && true)}
      >
        <img className="cart" src={basket} alt="basket" />
        Add to cart
      </button>
    </div>
  );
}

export default AddCart;
