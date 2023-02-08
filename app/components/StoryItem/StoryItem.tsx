"use client";
import { Story } from "@/utils/api";
import styles from "./storyitem.module.scss";

export const StoryItem = ({ story }: { story: Story }) => {
  return (
    <div className={styles.container}>
      <a href={story.url} target="_blank" rel="noreferrer">
        <h3>{story.title}</h3>
      </a>
      <p>
        {story.score} votes | {story.by}
      </p>
    </div>
  );
};
