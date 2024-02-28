"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState, useRef } from "react";
import throttle from "lodash/throttle";
import DropdownMenu from "./dropdown-menu";
import HeaderLogo from "./header-logo";
import ButtonLink from "../button-link";
import { variables } from "@/app/variables";
import { Services } from "@/app/our-services/[service]/services";

const Navbar: React.FC = () => {
  const [resizing, setResizing] = useState(false);
  const [isDDHovered, setisDDHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [closed, setClosed] = useState(true);
  const [isMobileDDOpen, setIsMobileDDOpen] = useState(false);
  const [isMobileDDDisplay, setIsMobileDDDisplay] = useState(false);
  const [isNearTop, setIsNearTop] = useState(true);

  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  useEffect(() => {
    // This entire block of code serves the purpose  of freezing the css opacity animation of the
    // navbar when the window is resizing by manipulating the value of the "data-resizing" attribute
    const resizeState = throttle(
      () => {
        setIsMobileDDOpen(false);
        setIsMobileDDDisplay(false);
        setResizing(true);
        setTimeout(() => {
          setResizing(false);
        }, 300);
      },
      301,
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
        ) {
          updateHidden(lastScrollY.current < currentScrollY);
        }

        lastScrollY.current = currentScrollY;
        if (currentScrollY <= 0) {
          setHidden(false);
          isHidden.current = false;
        }

        if (currentScrollY < 50) {
          setIsNearTop(true);
        } else {
          setIsNearTop(false);
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
          setClosed(true);
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
  }, [isDDHovered]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileDDDisplay(false);
    setIsMobileDDOpen(false);
    // Prevent or allow scrolling based on the menu state
    document.body.classList.toggle("no-scroll", !isOpen);
  };
  return (
    <>
      <header
        className={`${styles.navbar} ${hidden ? styles.hidden : ""}
    ${isDDHovered && !hidden ? styles.white_bg : ""} ${
      isNearTop ? styles.see_thru : ""
    }`}
      >
        <div className={styles.navbar_section}>
          <Link
            href="/"
            onClick={() => {
              if (isOpen) toggleMenu();
            }}
          >
            <HeaderLogo isDDHovered={isDDHovered && !hidden}></HeaderLogo>
          </Link>

          <button
            className={`${styles.mobile_nav_toggle}`}
            aria-controls="primary-navigation"
            onClick={() => {
              toggleMenu();
            }}
          >
            {isOpen ? (
              <Image
                src="/close_icon.svg"
                alt="Close Menu Icon"
                width="40"
                height="40"
              ></Image>
            ) : (
              <Image
                src="/menu_hamburger.svg"
                alt="Menu Icon"
                width="54"
                height="36"
              ></Image>
            )}

            <span className="sr-only">Menu</span>
          </button>
          <nav
            className={`${styles.primary_navigation}`}
            data-visible={isOpen}
            data-resizing={resizing}
          >
            <ul className={styles.navigation_items}>
              <li key={"our-work"}>
                <Link
                  className={`${styles.nav_link}`}
                  href="/our-work"
                  onClick={() => {
                    if (isOpen) toggleMenu();
                  }}
                  style={{
                    color: isDDHovered && !hidden ? "black" : "",
                  }}
                >
                  Our Work
                </Link>
              </li>
              <li
                key={"our-services"}
                onMouseEnter={() => {
                  if (!isOpen || window.innerWidth > variables.breakpoint) {
                    setClosed(false);
                    setisDDHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isOpen || window.innerWidth > variables.breakpoint) {
                    setClosed(true);
                    setisDDHovered(false);
                  }
                }}
                className={styles.pointer_hover}
              >
                <div
                  style={{ position: "relative" }}
                  className={`flex ${
                    isDDHovered && !hidden ? styles.dropdown_open : ""
                  }`}
                  onClick={() => {
                    if (
                      isOpen &&
                      window.innerWidth <= variables.breakpoint &&
                      isMobileDDDisplay
                    ) {
                      setIsMobileDDOpen(false);
                      setTimeout(() => {
                        setIsMobileDDDisplay(false);
                      }, 300);
                    } else if (
                      isOpen &&
                      window.innerWidth <= variables.breakpoint &&
                      !isMobileDDDisplay
                    ) {
                      setIsMobileDDOpen(true);
                      setIsMobileDDDisplay(true);
                    }
                  }}
                >
                  <p className={styles.nav_link}>Our Services</p>
                  <Image
                    src="/down_arrow.svg"
                    alt="dropdown_arrow"
                    width="25"
                    height="25"
                    style={{
                      filter: isDDHovered && !hidden ? "" : "invert(100%)",
                    }}
                    className={styles.nav_arrow}
                  />
                </div>
                <div
                  style={{
                    display: isMobileDDDisplay ? "flex" : "none",
                  }}
                  data-clicked={isMobileDDOpen}
                  className={styles.mobile_menu}
                >
                  {Services.map((service, key) => (
                    <Link
                      key={key}
                      href={`/our-services/${service.id}`}
                      className={styles.mobile_menu_item}
                      onClick={() => {
                        if (isOpen) toggleMenu();
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <div
                  data-hovered={isDDHovered}
                  style={{
                    display: closed ? "none" : "block",
                  }}
                  className={`${styles.dropdown_menu}`}
                >
                  <DropdownMenu
                    closeMenu={() => {
                      setisDDHovered(false);
                      setClosed(true);
                    }}
                  />
                </div>
              </li>
              <li key={"careers"}>
                <Link
                  className={`${styles.nav_link}`}
                  href="/careers"
                  onClick={() => {
                    if (isOpen) toggleMenu();
                  }}
                  style={{
                    color: isDDHovered && !hidden ? "black" : "",
                  }}
                >
                  Careers
                </Link>
              </li>
              <li
                key={"contact-us"}
                onClick={() => {
                  if (isOpen) toggleMenu();
                }}
              >
                <ButtonLink
                  color={isDDHovered && !hidden ? "black" : "white"}
                  text="Contact Us"
                  href="/contact-us"
                  style={{ padding: "0.75rem", fontSize: "1.375rem" }}
                  onClick={() => {
                    if (isOpen) toggleMenu();
                  }}
                ></ButtonLink>
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
