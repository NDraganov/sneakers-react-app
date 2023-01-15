import React, {useState, useEffect} from 'react';
import bootstrap from 'bootstrap';
import "./navigation.css";

function Navigation() {
  const [data, setData] = useState(null);
  const [sideNav, setSideNav] = useState(false);

  {/* useEffect info taken from - https://www.youtube.com/watch?v=Dorf8i6lCuk */}
  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("data")) || null;
    setData(get);
  }, [data])

  function handleOpenOffCanvas() {
    setSideNav(true)
  }

  return (
    <div className="navigation">
      <header>
        <img className="toggle" src="assets/images/icon-menu.svg" alt="toggle" onClick={handleOpenOffCanvas}/>
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
            <p className={data > 0 && `count-cart`}>{data}</p>
          </div>
            <img className="avatar" src="assets/images/image-avatar.png" alt="avatar"/>
        </div>
      </header>
      <hr />

      {/* offcanvas */}
      <div className={`side-nav ${sideNav === false && `hidden`}`}>
        <img className='close-btn' src="assets/images/icon-close.svg" alt="" onClick={() => setSideNav(false)} />
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>    
  );
}

export default Navigation;