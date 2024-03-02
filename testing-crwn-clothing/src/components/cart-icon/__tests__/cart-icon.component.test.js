import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon Tests", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "item A", imageURl: "test", price: 10, quantity: 1 },
      { id: 2, name: "item A", imageURl: "test", price: 10, quantity: 2 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByText("3");
    expect(cartIconElement).toBeInTheDocument();
  });
});
