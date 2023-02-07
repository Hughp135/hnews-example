import { render } from "@testing-library/react";
import Head from "../head";

describe("Page", () => {
  it("renders the head", () => {
    const { asFragment } = render(<Head />);

    expect(asFragment()).toMatchSnapshot();
  });
});
