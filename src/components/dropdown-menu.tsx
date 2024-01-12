"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";

const DropdownMenu = () => {
  return (
    <div
      className={`${styles.dropdown_content} ${styles.section}`}
      style={{ color: "black" }}
    >
      <p className="text-4xl">Our Services</p>
    </div>
  );
};

export default DropdownMenu;
