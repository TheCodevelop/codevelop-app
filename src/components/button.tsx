"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";

interface ButtonProps {
  id?: string;
  text: string;
  href?: string;
  color?: "black" | "white" | "grey";
  style?: React.CSSProperties; // This allows passing inline styles
  onClick?: () => void; // Define onClick prop as an optional function
}

const Button: React.FC<ButtonProps> = ({
  id,
  text,
  href = "",
  color = "black",
  style,
  onClick,
}) => {
  return (
    <button
      className={styles[`button_${color}`]}
      style={style}
      onClick={onClick}
      id={id}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
