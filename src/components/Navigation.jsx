import React from "react";
import "./navigation.css";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <div className="container navigation">
      <img className="toggle" src="assets/images/icon-menu.svg" alt="toggle" />
      <div>
        <img className="logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <nav>
        <ul className="menu-links">
          <NavLink className="link" text="Collection" />
          <NavLink text="Men" />
          <NavLink text="Women" />
          <NavLink text="About" />
          <NavLink text="Contact" />
        </ul>
        <div>
          <img className="cart" src="assets/images/icon-cart.svg" alt="cart" />
        </div>
        <div>
          <img className="avatar" src="assets/images/image-avatar.png" alt="avatar" />
        </div>
        
      </nav>
    </div>
  );
}

export default Navigation;
