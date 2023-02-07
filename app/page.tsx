import { StoryItem } from "./components/StoryItem/StoryItem";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      Page here <a href="/">Link here</a>
      <StoryItem />
    </main>
  );
}
