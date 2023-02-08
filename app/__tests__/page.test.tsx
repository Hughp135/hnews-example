import { render } from "@testing-library/react";
import Home from "../page";

import { getStory, getTopStoryIDs, Story } from "@/utils/api";

jest.mock("@/utils/api");

describe("Page", () => {
  const exampleStory: Story = {
    by: "test",
    score: 1,
    time: 201312,
    title: "A story is here",
    type: "story",
    url: "http://test.url",
  };

  beforeEach(() => {
    (getStory as jest.Mock).mockResolvedValue(exampleStory);
    (getTopStoryIDs as jest.Mock).mockResolvedValue([]);
  });

  it("renders the homepage", async () => {
    const homepageSync = await Home();
    const { asFragment } = render(homepageSync);

    expect(asFragment()).toMatchSnapshot();
  });
});
