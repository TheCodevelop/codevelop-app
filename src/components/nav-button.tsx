"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";

interface NavButtonProps {
  text: string;
  href: string;
  hovered: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, href, hovered }) => {
  return (
    <button>
      <Link
        data-nav-hovered={hovered}
        className={styles.nav_button}
        href={href}
      >
        {text}
      </Link>
    </button>
  );
};

export default NavButton;
