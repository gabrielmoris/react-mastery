import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

export const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your cart is empty.</EmptyMessage>}
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
