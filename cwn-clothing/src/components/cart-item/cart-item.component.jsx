import { memo } from "react";
import "./cart-item.styles.scss";

export const CartItem = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} {quantity > 1 ? "units" : "unit"} {quantity * price}€
        </span>
      </div>
    </div>
  );
});
