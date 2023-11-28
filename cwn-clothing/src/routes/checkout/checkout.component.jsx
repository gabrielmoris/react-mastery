import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const { name, id, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
