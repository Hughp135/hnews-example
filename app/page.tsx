import { getStory, getTopStoryIDs } from "@/utils/api";
import { InfiniteLoader } from "./components/InfiniteLoader/InifiniteLoader";
import { Spinner } from "./components/Spinner/Spinner";
import { StoryItem } from "./components/StoryItem/StoryItem";
import styles from "./page.module.scss";

export default async function Home() {
  const storyIds = await getTopStoryIDs();

  const initialStoryIds = storyIds.slice(0, 15);

  const initialStories = await Promise.all(
    initialStoryIds.map((storyId) => getStory(storyId))
  );

  const otherStories = storyIds.slice(8);

  return (
    <main className={styles.main}>
      {initialStories.map((story) => (
        <StoryItem key={story.time} story={story} />
      ))}
      <InfiniteLoader storyIds={otherStories} />
    </main>
  );
}
