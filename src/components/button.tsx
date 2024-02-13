"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";

interface ButtonProps {
  text: string;
  href: string;
  variant: string;
  style?: React.CSSProperties; // This allows passing inline styles
  onClick?: () => void; // Define onClick prop as an optional function
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant,
  style,
  onClick,
}) => {
  return (
    <button
      className={
        variant === "primary" ? styles.button_white : styles.button_black
      }
      style={style}
      onClick={onClick}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
