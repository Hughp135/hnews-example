import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Page", () => {
  it("renders the homepage", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
