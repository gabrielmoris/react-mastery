import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toHaveStyle("background-color: black");
    expect(btn).not.toBeDisabled();
  });

  test("should render google button when passed google type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Test</Button>);
    const googleButton = screen.getByRole("button");
    expect(googleButton).toHaveStyle("background-color: #4285f4");
  });

  test("should render inverted button when passed inverted type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);

    const invertedBtn = screen.getByRole("button");
    expect(invertedBtn).toHaveStyle("background-color: white");
  });

  test("should be disabled if isLoading is true", () => {
    render(<Button isLoading={true}>Test</Button>);
    const loadingBtn = screen.getByRole("button");
    expect(loadingBtn).toBeDisabled();
  });
});
