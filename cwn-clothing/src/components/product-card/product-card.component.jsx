import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name + "-img"} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};