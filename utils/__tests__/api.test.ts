import { getTopStoryIDs, getStory, Story } from "../api";

describe("api", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  describe("getTopStoryIDs", () => {
    it("should return an array of story IDs", async () => {
      global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: async () => [1, 2, 3],
        })
      );

      const result = await getTopStoryIDs();

      expect(result).toEqual([1, 2, 3]);
    });

    it("should throw an error if the API request fails", async () => {
      global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
        })
      );

      await expect(getTopStoryIDs()).rejects.toThrow(
        "Failed to fetch top stories"
      );
    });
  });

  describe("getStory", () => {
    it("should return a story object with expected properties", async () => {
      const story: Story = {
        by: "hugh",
        score: 12345,
        time: 1231111,
        title: "A example title",
        url: "http://someurl.test",
        type: "story",
      };

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: async () => story,
        })
      );

      const result = await getStory(1);

      expect(result).toEqual(story);
    });

    it("should throw an error if the API request fails", async () => {
      const originalFetch = global.fetch;
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
        })
      );

      await expect(getStory(1)).rejects.toThrow("Failed to fetch story data");

      global.fetch = originalFetch;
    });
  });
});
