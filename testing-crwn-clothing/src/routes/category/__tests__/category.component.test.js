import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Category from "../category.component";

// I mock the Library with a callback that returns whatever I want to get. So I use jest to get all the actual data from this library and overWrite the useParams
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ category: "mens" }),
}));

describe("Category Tests", () => {
  it("should render a Spinner if Loading is True", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });
    // data-testid="spinner" was added previosly in the spinner component to retrieve it in this way
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("should render Categories and no Spinner if Loading is False and there are items", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "product 1" },
                { id: 2, name: "product 2" },
              ],
            },
          ],
        },
      },
    });
    // data-testid="spinner" was added previosly in the spinner component to retrieve it in this way
    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const productElement = screen.getByText(/product 1/);
    expect(productElement).toBeInTheDocument();
  });
});
