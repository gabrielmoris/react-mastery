import { fireEvent, screen } from "@testing-library/react";
import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";
import * as reactRedux from "react-redux";
import { signOutStart } from "../../../store/user/user.action";

describe("navigation tests", () => {
  test("It should render a Sign in link and not a sign Out link if there is no user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    // The difference between queryByTest and getByText is that queryByTest doesnt show an error if it doesnt find the text
    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test("It should render a Sign out and not sign in link if there is user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    // The difference between queryByTest and getByText is that queryByTest doesnt show an error if it doesnt find the text
    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();
  });

  test("it should not render a cart dropdown if isOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: { isCartOpen: false, cartItems: [] },
      },
    });
    const dropdownText = screen.queryByText(/your cart is empty/i);
    expect(dropdownText).toBeNull();
  });
  test("it should render a cart dropdown if isOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: { isCartOpen: true, cartItems: [] },
      },
    });
    const dropdownText = screen.getByText(/your cart is empty/i);
    expect(dropdownText).toBeInTheDocument();
  });

  test("It should dispatch signOutStart action when clicking on the sign out link", async () => {
    //1. Here I mock the useDispatch function from React Redux
    const mockDispatch = jest.fn();
    //2. Here I spy this function from Redux and return the mocked Function
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);

    //3. Here I check if it was called
    expect(mockDispatch).toHaveBeenCalled();
    //4. Here I check If the right action was called
    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);
  });
});
