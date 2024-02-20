import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

const sleep = (milliseconds) => {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start < milliseconds) {
      break;
    }
  }
};

export const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  // Example of UseMemo. This is a very expensive function that would freeze the app.
  const hundred = useMemo(() => {
    console.log("Start");
    sleep(2000);
    console.log("end");
    return 110 + count;
  }, [count]);

  // Example of use of UseCallback. It will only change the data on the memoized value if the data of the dependency changes
  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your cart is empty.</EmptyMessage>}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {hundred}
      <Button onClick={() => setCount(count + 1)}>TEST USEMEMO</Button>
    </CartDropdownContainer>
  );
};
