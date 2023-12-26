import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
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
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav className={`${styles.primary_navigation} flex gap-8 self-end`}>
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
