import { StoryItemSkeletonList } from "./components/StoryItem/StoryItemSkeleton";
import styles from "./page.module.scss";

export default function Loading() {
  return (
    <main className={styles.main}>
      <StoryItemSkeletonList count={16} />
    </main>
  );
}
