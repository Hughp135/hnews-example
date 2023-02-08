import Image from "next/image";
import styles from "./header.module.scss";
import headerBgImage from "../../../public/headerbg.jpg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.bgImage}
        alt="Hacker News Top 100"
        src={headerBgImage}
        fill
      />
      <h1>Hacker News</h1>
      <h2>Top 100 Stories</h2>
    </header>
  );
};
