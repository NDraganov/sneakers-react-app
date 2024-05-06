import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addItems } from "../redux/cartSlice";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import basket from "../images/icon-cart.svg";
import "./add-cart.css";

function AddCart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="add-to-cart">
      <div className="count-buttons">
        <button
          className="btn"
          onClick={() => dispatch(decrement())}
          disabled={items === 0 || (items < 0 && true)}
        >
          <RemoveOutlinedIcon />
        </button>
        <span className="count">{items}</span>
        <button className="btn" onClick={() => dispatch(increment())}>
          <AddOutlinedIcon />
        </button>
      </div>
      <button
        className="add-btn"
        onClick={() => dispatch(addItems())}
        title="Add to cart"
        disabled={items === 0 || (items < 0 && true)}
      >
        <img className="cart" src={basket} alt="basket" />
        Add to cart
      </button>
    </div>
  );
}

export default AddCart;
