import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {
  const { totalUnidades } = useContext(CartContext);
  const total = totalUnidades();

  if (total === 0) {
    return (
      <div>
        <span>
        <FaCartShopping /> 
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>
        <FaCartShopping />
        </span>
        <span>{total}</span>
      </div>
    );
  }
}

export default CartWidget;