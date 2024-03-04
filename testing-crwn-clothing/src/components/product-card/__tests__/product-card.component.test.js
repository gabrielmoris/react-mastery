import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card Tests", () => {
  test("It should add product Item when PRoduct Card Button is clicked", async () => {
    const mockedProduct = {
      id: 1,
      imageUrl: "test",
      name: "item A",
      price: 10,
    };
    const { store } = renderWithProviders(<ProductCard product={mockedProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });
    const addToCartButton = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButton);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
