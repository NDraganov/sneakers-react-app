import React, { useState, useEffect } from "react";
import "./navigation.css";
import toggle from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import basket from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import bin from "../images/icon-delete.svg";
import CloseIcon from "@mui/icons-material/Close";

function Navigation() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const offcanvasBackground = document.getElementById("offcanvas-background");

  {
    /* useEffect info taken from - https://www.youtube.com/watch?v=Dorf8i6lCuk */
  }
  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("data")) || null;
    setData(get);
  }, [data]);

  function handleCart() {
    setCart(!cart);
  }

  function removeData() {
    localStorage.removeItem("data");
    window.location.reload();
  }

  function handleOpenOffcanvas() {
    setSideNav(true);
    offcanvasBackground.classList.add("offcanvas-background");
  }
  function handleCloseOffcanvas() {
    setSideNav(false);
    offcanvasBackground.classList.remove("offcanvas-background");
  }

  return (
    <div className="navigation">
      {/* Main navigation */}
      <header>
        <div>
          <img
            className="toggle"
            src={toggle}
            alt="toggle"
            onClick={handleOpenOffcanvas}
          />
          <img className="logo" src={logo} alt="logo" />
          <nav>
            <ul>
              <li>
                <p title="Collections">Collections</p>
              </li>
              <li>
                <p title="Men">Men</p>
              </li>
              <li>
                <p title="Woman">Women</p>{" "}
              </li>
              <li>
                <p title="About">About</p>
              </li>
              <li>
                <p title="Contact">Contact</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className="cart-container">
            <img
              className="cart"
              src={basket}
              title="Cart"
              alt="cart"
              onClick={handleCart}
            />
            <p className={data > 0 ? `count-cart` : undefined}>{data}</p>
          </div>
          <img
            className="avatar"
            src={avatar}
            title="Avatar"
            alt="avatar"
            onClick={handleCart}
          />
        </div>
      </header>
      <hr />

      {/* offcanvas */}
      <div className={`side-nav ${sideNav === false && `hidden`}`}>
        <button className="close-btn" onClick={handleCloseOffcanvas}>
          <CloseIcon fontSize="medium" />
        </button>
        <div>
          <p title="Collections">Collections</p>
          <p title="Men">Men</p>
          <p title="Woman">Women</p>
          <p title="About">About</p>
          <p title="Contact">Contact</p>
        </div>
      </div>
      <div id="offcanvas-background"></div>
      {/* Checkout modal */}
      <div className={`container modul ${cart === false && `hidden`}`}>
        <h5>Cart</h5>
        <hr />
        {data === null ? (
          <div className="empty-cart">
            <p className="empty-info">Your cart is empty</p>
          </div>
        ) : (
          <div className="cart-info">
            <div className="content">
              <img
                className="thumbnail"
                src={require("../images/image-product-1-thumbnail.jpg")}
                alt=""
              />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {data} &nbsp;
                  <span>${125 * data}.00</span>
                </p>
              </div>
              <button className="bin" onClick={removeData}>
                <img src={bin} alt="bin" />
              </button>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
