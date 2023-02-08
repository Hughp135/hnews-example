import { getStory, Story } from "@/utils/api";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { InfiniteLoader } from "../InifiniteLoader";

jest.mock("@/utils/api");

describe("InfiniteLoader", () => {
  const exampleStory: Story = {
    by: "test",
    score: 1,
    time: 201312,
    title: "A story is here",
    type: "story",
    url: "http://test.url",
  };

  beforeEach(() => {
    (getStory as jest.Mock).mockImplementation(async (storyId: number) => ({
      ...exampleStory,
      time: storyId,
    }));
  });

  it("should render no stories", () => {
    const { asFragment } = render(<InfiniteLoader storyIds={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the loading state", () => {
    const ids = Array.from({ length: 100 }).map((_, idx) => idx);
    const { asFragment } = render(<InfiniteLoader storyIds={ids} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the first 16 stories after a scroll event occurs", async () => {
    const ids = Array.from({ length: 100 }).map((_, idx) => idx);
    const { asFragment } = render(<InfiniteLoader storyIds={ids} />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Wait for new stories to be rendered
    await waitFor(
      async () =>
        expect(screen.queryAllByText("A story is here")).toHaveLength(16),
      {
        timeout: 100,
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render 32 stories if scrolled twice", async () => {
    const ids = Array.from({ length: 100 }).map((_, idx) => idx);
    const { asFragment } = render(<InfiniteLoader storyIds={ids} />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Wait for stories to be rendered
    await waitFor(
      () => expect(screen.queryAllByText("A story is here")).toHaveLength(16),
      {
        timeout: 500,
      }
    );

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Wait for next stories to be rendered
    await waitFor(
      () => expect(screen.queryAllByText("A story is here")).toHaveLength(32),
      {
        timeout: 500,
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
