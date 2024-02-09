"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";

interface ButtonProps {
  text: string;
  href: string;
  variant: string;
  style?: React.CSSProperties; // This allows passing inline styles
}

const Button: React.FC<ButtonProps> = ({ text, href, variant, style }) => {
  return (
    <button
      className={
        variant === "primary" ? styles.button_white : styles.button_black
      }
      style={style}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
