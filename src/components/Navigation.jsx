import React from 'react';
import bootstrap from 'bootstrap';
import "./navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <header>
        <img className="toggle" src="assets/images/icon-menu.svg" alt="toggle"/>
        <img className="logo" src="assets/images/logo.svg" alt="logo" />
        <ul className="menu-links">
          <li><a className="link">Collections</a></li>
          <li><a className="link">Men</a></li>
          <li><a className="link">Women</a> </li>
          <li><a className="link">About</a></li>
          <li><a className="link">Contact</a></li>
        </ul>
        <div className="right-nav">
          <div className="cart-container">
            <img className="cart" src="assets/images/icon-cart.svg" alt="cart"/>
          </div>
            <img className="avatar" src="assets/images/image-avatar.png" alt="avatar"/>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Navigation;