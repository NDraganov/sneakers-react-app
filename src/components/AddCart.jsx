import React, {useState} from "react";
import "./add-cart.css";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import basket from '../images/icon-cart.svg'

function AddCart() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  {/* Local storage info - https://blog.logrocket.com/using-localstorage-react-hooks/ */}
  function addCount() {
    const get = JSON.parse(localStorage.getItem('data')) || null;
    localStorage.setItem('data', JSON.stringify(get + count));
    window.location.reload();
  }

  return (
    <div className="container add">
      <div className="row">
        <div className="col-lg-3 col-md-12 count-buttons">
          <button className="btn" onClick={decrease} disabled={count === 0 || (count < 0 && true)}><RemoveOutlinedIcon /></button>
            <span className="number">{count}</span>
          <button className="btn" onClick={increase}><AddOutlinedIcon /></button>
        </div>
        <div className="col-lg-6 col-md-12 add-to-cart">
          <button className="add-btn" onClick={addCount} disabled={count === 0 || (count < 0 && true)}>
            <img className="cart" src={basket} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCart;