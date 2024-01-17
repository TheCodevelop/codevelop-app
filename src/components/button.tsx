"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <button className={styles.button}>
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
