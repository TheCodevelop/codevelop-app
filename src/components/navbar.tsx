"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    // This entire block of code serves the purpose  of freezing the css opacity animation of the
    // navbar when the window is resizing by manipulating the value of the "data-resizing" attribute
    const resizeState = throttle(() => {
      setResizing(true);
      setTimeout(() => {
        setResizing(false);
      }, 300);
    }, 301);
    window.addEventListener("resize", resizeState);
    return () => window.removeEventListener("resize", resizeState);
  }, []);
  return (
    <header className="py-24 text-2xl flex justify-between">
      <Link href="/">
        <Image
          src="/Logo_Word_alt.svg"
          alt="Codevelop Logo"
          width="250"
          height="80"
          style={{ filter: "invert(100%)", minHeight: 80, minWidth: 250 }}
        />
      </Link>
      <button
        className={`${styles.mobile_nav_toggle}`}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className={`${styles.primary_navigation} flex gap-8 self-end`}
        data-visible={isOpen}
        data-resizing={resizing}
      >
        <Link className={`${styles.nav_link}`} href="/">
          Our Work
        </Link>
        <Link className={`${styles.nav_link}`} href="/about">
          Our Services
        </Link>
        <Link className={`${styles.nav_link}`} href="/contact">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
