import styles from "./listitem.module.scss";

export const ListItem = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.container}>{children}</div>;
};
