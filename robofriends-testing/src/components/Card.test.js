import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

// shallow will render the component but not the subcomponents. Mount will render the component in the DOM and subcomponents as well. Reder will render a static HTML but will use cheerio as library
it("renders without crashing", () => {
  // the snapshots are saved in the _snapshots_ folder. To update the snapshot i press w and then u. Any change in the coponent will make the snapshot to break
  expect(shallow(<Card />)).toMatchSnapshot();
});
