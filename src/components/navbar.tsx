"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState, useRef } from "react";
import throttle from "lodash/throttle";
import DropdownMenu from "./dropdown-menu";
import NavButton from "./nav-button";
import HeaderLogo from "./header-logo";
import Button from "./button";

const Navbar: React.FC = () => {
  const [resizing, setResizing] = useState(false);
  const [isDDHovered, setisDDHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  useEffect(() => {
    // This entire block of code serves the purpose  of freezing the css opacity animation of the
    // navbar when the window is resizing by manipulating the value of the "data-resizing" attribute
    const resizeState = throttle(
      () => {
        setResizing(true);
        setTimeout(() => {
          setResizing(false);
        }, 1000);
      },
      1001,
      {
        trailing: false,
      },
    );

    const updateScrolls = throttle(
      () => {
        const currentScrollY = window.scrollY;

        if (
          isHidden.current !== lastScrollY.current < currentScrollY &&
          lastScrollY.current > 0
        )
          updateHidden(lastScrollY.current < currentScrollY);

        lastScrollY.current = currentScrollY;
        if (currentScrollY <= 0) {
          setHidden(false);
          isHidden.current = false;
        }
      },
      200,
      { trailing: true },
    );

    const updateHidden = throttle(
      (status: boolean) => {
        setHidden(status);
        isHidden.current = status;
        if (isHidden.current === true) {
          setisDDHovered(false);
        }
      },
      500,
      {
        trailing: false,
      },
    );

    window.addEventListener("resize", resizeState);
    window.addEventListener("scroll", updateScrolls);

    return () => {
      window.removeEventListener("resize", resizeState);
      window.removeEventListener("scroll", updateScrolls);
    };
  }, []);

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
                style={{ gap: "5px", whiteSpace: "nowrap" }}
              >
                <div
                  style={{ position: "relative" }}
                  className={`flex ${
                    isDDHovered && !hidden ? styles.dropdown_open : ""
                  }`}
                >
                  <p className={styles.nav_link}>Our Services</p>
                  <Image
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
                <div
                  style={{
                    visibility: isDDHovered && !hidden ? "visible" : "hidden",
                    opacity: isDDHovered && !hidden ? "100%" : "0%",
                  }}
                  className={`${styles.dropdown_menu}`}
                >
                  <DropdownMenu hidden={!isDDHovered} />
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
                <Button
                  variant={isDDHovered && !hidden ? "primary" : "secondary"}
                  text="Contact Us"
                  href="/contact-us"
                ></Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        data-visible={!hidden && isDDHovered}
        className={`${styles.overlay}`}
      ></div>
    </>
  );
};

export default Navbar;
