"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { StoryItem } from "../StoryItem/StoryItem";
import { getStory, Story } from "@/utils/api";
import { Spinner } from "../Spinner/Spinner";

const ITEMS_PER_PAGE = 16;

export const InfiniteLoader = ({ storyIds }: { storyIds: number[] }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [stories, setStories] = useState<Story[]>([]);

  const loadMore = async () => {
    const idsToFetch = storyIds.slice(
      numberOfItems,
      numberOfItems + ITEMS_PER_PAGE
    );

    setNumberOfItems(numberOfItems + 16);

    const newStories = await Promise.all(
      idsToFetch.map((storyId) => getStory(storyId))
    );

    setStories([...stories, ...newStories]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={stories.length}
        next={loadMore}
        hasMore={numberOfItems < storyIds.length}
        endMessage={<h4>No more stories to load</h4>}
        loader={<Spinner />}
        scrollThreshold={0.8}
      >
        {stories.map((story) => (
          <StoryItem key={story.time} story={story} />
        ))}
      </InfiniteScroll>
    </>
  );
};
