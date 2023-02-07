export const getTopStoryIDs = async (): Promise<number[]> => {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top stories");
  }

  return res.json();
};

export interface Story {
  by: string;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export const getStory = async (id: number): Promise<Story> => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch story data");
  }

  return res.json();
};
