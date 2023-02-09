import { ListItem } from "../ListItem/ListItem";
import styles from "./storyitem.module.scss";

export const StoryItemSkeletonList = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <StoryItemSkeleton key={idx} />
      ))}
    </>
  );
};

export const StoryItemSkeleton = () => {
  return (
    <ListItem>
      <>
        <div className={styles["skeleton-text"]} />
        <div
          className={`${styles["skeleton-text"]} ${styles["skeleton-subtitle"]}`}
        />
      </>
    </ListItem>
  );
};
