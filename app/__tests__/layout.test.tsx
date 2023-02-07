import { render } from "@testing-library/react";
import RootLayout from "../layout";

describe("Page", () => {
  it("renders the layout", () => {
    const { asFragment } = render(
      <RootLayout>
        <p>Content</p>
      </RootLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
