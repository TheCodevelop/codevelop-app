"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import DropdownMenu from "./dropdown-menu";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const [resizing, setResizing] = useState(false);
  const [isDDHovered, setisDDHovered] = useState(false);

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
    <header className={`${isDDHovered ? styles.white_bg : ""}`}>
      <div
        className={`${styles.section} pt-24 pb-6 text-2xl flex justify-between`}
      >
        <Link href="/">
          <Image
            src="/Logo_Word_alt.svg"
            alt="Codevelop Logo"
            width="250"
            height="80"
            style={{
              filter: isDDHovered ? "" : "invert(100%)",
              minHeight: 80,
              minWidth: 250,
            }}
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
          className={`${styles.primary_navigation} self-end`}
          data-visible={isOpen}
          data-resizing={resizing}
          style={{ zIndex: "99999" }}
        >
          <ul
            className={`${styles.navigation_items} gap-8`}
            data-visible={isOpen}
            data-resizing={resizing}
          >
            <li>
              <Link
                className={`${styles.nav_link} ${
                  isDDHovered ? "text-black" : ""
                }`}
                href="/"
              >
                Our Work
              </Link>
            </li>
            <li
              onMouseEnter={() => (!isOpen ? setisDDHovered(true) : "")}
              onMouseLeave={() => (!isOpen ? setisDDHovered(false) : "")}
              className={styles.nav_link_with_dropdown}
            >
              <div
                style={{ position: "relative" }}
                className={`flex ${isDDHovered ? styles.dropdown_open : ""}`}
              >
                <Link className={styles.nav_link} href="/about">
                  Our Services
                </Link>
                <Image
                  src="/down_arrow.svg"
                  alt="dropdown_arrow"
                  width="25"
                  height="25"
                  style={{
                    filter: isDDHovered ? "" : "invert(100%)",
                    minHeight: 25,
                    minWidth: 25,
                    maxHeight: 25,
                    maxWidth: 25,
                  }}
                  className={styles.nav_arrow}
                />
              </div>
              <div className={`${styles.dropdown_menu}`}>
                <DropdownMenu />
              </div>
            </li>
            <li>
              <Link
                className={`${styles.nav_link} ${
                  isDDHovered ? "text-black" : ""
                }`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
