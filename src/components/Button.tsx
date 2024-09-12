import { FC } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  onClick?: () => void;
  children: string;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
