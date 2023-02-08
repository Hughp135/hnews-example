import { Story } from "@/utils/api";
import { render } from "@testing-library/react";
import { StoryItem } from "../StoryItem";

describe("StoryItem", () => {
  const exampleStory: Story = {
    by: "test",
    score: 1,
    time: 201312,
    title: "A story is here",
    type: "story",
    url: "http://test.url",
  };
  it("should render the story", () => {
    const { asFragment } = render(<StoryItem story={exampleStory} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
