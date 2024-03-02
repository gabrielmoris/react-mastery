import { createStore } from "redux";
import { rootReducer } from "../../store/root-reducer";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export function renderWithProviders(ui, { preloadedState = {}, store = createStore(rootReducer, preloadedState), ...renderOptions } = {}) {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
