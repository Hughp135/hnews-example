import { act, fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should have 'small' class when window is scrolled 120px", async () => {
    const { container } = render(<Header />);
    fireEvent.scroll(window, { target: { scrollY: 120 } });

    await act(() => new Promise((res) => setTimeout(res, 200)));

    const header = screen.getByRole("banner");

    expect(header).toHaveClass("small");
  });
  it("should not have 'small' class when window is scrolled < 120px", async () => {
    const { container } = render(<Header />);
    fireEvent.scroll(window, { target: { scrollY: 119 } });

    await act(() => new Promise((res) => setTimeout(res, 200)));

    const header = screen.getByRole("banner");

    expect(header).not.toHaveClass("small");
  });
  it("header should be big if window is scrolled up again", async () => {
    const { container } = render(<Header />);
    fireEvent.scroll(window, { target: { scrollY: 120 } });

    await act(() => new Promise((res) => setTimeout(res, 200)));

    const header = screen.getByRole("banner");

    expect(header).toHaveClass("small");

    fireEvent.scroll(window, { target: { scrollY: 0 } });

    await act(() => new Promise((res) => setTimeout(res, 200)));

    expect(header).not.toHaveClass("small");
  });
});
