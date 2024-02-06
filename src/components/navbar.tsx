"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import DropdownMenu from "./dropdown-menu";
import NavButton from "./nav-button";
import HeaderLogo from "./header-logo";

const Navbar: React.FC = () => {
  const [resizing, setResizing] = useState(false);
  const [isDDHovered, setisDDHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // This entire block of code serves the purpose  of freezing the css opacity animation of the
    // navbar when the window is resizing by manipulating the value of the "data-resizing" attribute
    const resizeState = throttle(() => {
      setResizing(true);
      setTimeout(() => {
        setResizing(false);
      }, 300);
    }, 301);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;
      setHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", resizeState);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Prevent or allow scrolling based on the menu state
    document.body.classList.toggle("no-scroll", !isOpen);
  };
  return (
    <>
      <header
        className={`${styles.navbar} ${hidden ? styles.hidden : ""}
    ${isDDHovered && !hidden ? styles.white_bg : ""}`}
      >
        <div
          className={`${styles.navbar_section} pt-12 pb-6 text-xl flex justify-between`}
        >
          <Link href="/">
            <HeaderLogo isDDHovered={isDDHovered && !hidden}></HeaderLogo>
          </Link>
          <button
            className={`${styles.mobile_nav_toggle}`}
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={() => {
              toggleMenu();
            }}
          >
            <span className="sr-only">Menu</span>
          </button>
          <nav
            className={`${styles.primary_navigation} self-end`}
            data-visible={isOpen}
            data-resizing={resizing}
          >
            <ul
              className={`${styles.navigation_items} gap-8`}
              data-visible={isOpen}
              data-resizing={resizing}
            >
              <li>
                <Link
                  className={`${styles.nav_link} ${
                    isDDHovered && !hidden ? "text-black" : ""
                  }`}
                  href="/our-work"
                >
                  Our Work
                </Link>
              </li>
              <li
                onMouseEnter={() =>
                  !isOpen || window.innerWidth > 769 ? setisDDHovered(true) : ""
                }
                onMouseLeave={() =>
                  !isOpen || window.innerWidth > 769
                    ? setisDDHovered(false)
                    : ""
                }
                className={styles.nav_link_with_dropdown}
              >
                <div
                  style={{ position: "relative" }}
                  className={`flex ${
                    isDDHovered && !hidden ? styles.dropdown_open : ""
                  }`}
                >
                  <p className={styles.nav_link}>Our Services</p>
                  <Image
                    priority={true}
                    src="/down_arrow.svg"
                    alt="dropdown_arrow"
                    width="25"
                    height="25"
                    style={{
                      filter: isDDHovered && !hidden ? "" : "invert(100%)",
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
                <div className={`${styles.overlay}`}>
                  <div>hi</div>
                </div>
              </li>
              <li>
                <Link
                  className={`${styles.nav_link} ${
                    isDDHovered && !hidden ? "text-black" : ""
                  }`}
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <NavButton
                  href="/contact-us"
                  text="Contact Us"
                  hovered={`${isDDHovered && !hidden}`}
                ></NavButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
