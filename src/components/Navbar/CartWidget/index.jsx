import Cart from "../../../assets/icons/Cart.png";
import "./cartStyle.css"

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={Cart} alt="cart" className="cart-icon" />
      <p>{1}</p>
    </div>
  );
}
export default CartWidget;