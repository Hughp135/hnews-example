"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import headerBgImage from "../../../public/headerbg.jpg";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

export const Header = () => {
  const [smallHeader, setSmallHeader] = useState(false);
  const toggleHeader = useCallback(
    debounce((isSmall: boolean) => {
      setSmallHeader(isSmall);
    }, 50),
    []
  );

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.scrollY === 0) {
        toggleHeader(false);
      }

      if (window.scrollY >= 120) {
        toggleHeader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleHeader]);

  return (
    <header className={`${styles.header} ${smallHeader ? styles.small : ""}`}>
      <Image
        className={styles.bgImage}
        alt="Hacker News Top 100"
        src={headerBgImage}
        fill
      />
      <div>
        <h1>Hacker News</h1>
        <h2>Top 100 Stories</h2>
      </div>
    </header>
  );
};
