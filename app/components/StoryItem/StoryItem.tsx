import { Story } from "@/utils/api";
import { ListItem } from "../ListItem/ListItem";
import styles from "./storyitem.module.scss";

export const StoryItem = ({ story }: { story: Story }) => {
  return (
    <a
      className={styles.container}
      href={story.url}
      target="_blank"
      rel="noreferrer"
    >
      <ListItem>
        <>
          <h3>{story.title}</h3>
          <p>
            {story.score} votes | {story.by}
          </p>
        </>
      </ListItem>
    </a>
  );
};
