import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, removeItems, toggleCart } from "../redux/cartSlice";
import { closeMenu, openMenu } from "../redux/sideNavSlice";
import "./navigation.css";
import toggle from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import basket from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import bin from "../images/icon-delete.svg";
import CloseIcon from "@mui/icons-material/Close";

function Navigation() {
  const { cart, cartItems } = useSelector((state) => state.cart);
  const { sideNav } = useSelector((state) => state.sideNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, cartItems]);

  return (
    <div className="navigation">
      {/* Main navigation */}
      <header>
        <div>
          <img
            className="toggle"
            src={toggle}
            alt="toggle"
            onClick={() => dispatch(openMenu())}
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
        <div>
          <div>
            <img
              className="cart"
              src={basket}
              title="Cart"
              alt="cart"
              onClick={() => dispatch(toggleCart())}
            />
            <p className={cartItems !== null ? `count-cart` : undefined}>
              {cartItems}
            </p>
          </div>
          <img
            className="avatar"
            src={avatar}
            title="Avatar"
            alt="avatar"
            onClick={() => dispatch(toggleCart())}
          />
        </div>
      </header>
      <hr />

      {/* offcanvas */}
      <div className={`side-nav ${sideNav === false && `hidden`}`}>
        <button className="close-btn" onClick={() => dispatch(closeMenu())}>
          <CloseIcon fontSize="medium" title="Close" />
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
      <div className={`modal ${cart === false && "hidden"}`}>
        <h5>Cart</h5>
        <hr />
        {cartItems === null ? (
          <div className="empty-cart">
            <p className="empty-info">Your cart is empty</p>
          </div>
        ) : (
          <div className="cart-info">
            <div className="content">
              <img
                className="thumbnail"
                src={require("../images/image-product-1-thumbnail.jpg")}
                alt="Shoes"
              />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartItems} &nbsp;
                  <span>${125 * cartItems}.00</span>
                </p>
              </div>
              <button
                className="bin"
                title="Delete"
                onClick={() => dispatch(removeItems())}
              >
                <img src={bin} alt="bin" />
              </button>
            </div>
            <button className="checkout-btn" title="Checkout">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
