import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

// shallow will render the component but not the subcomponents. Mount will render the component in the DOM and subcomponents as well. Reder will render a static HTML but will use cheerio as library
it("renders without crashing", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
