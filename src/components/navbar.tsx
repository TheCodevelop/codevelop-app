import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="py-24 text-2xl flex justify-between">
      <Link href="/">
        <Image
          src="/Logo_Word_alt.svg"
          alt="Codevelop Logo"
          width="250"
          height="80"
          style={{ filter: "invert(100%)", minHeight: 80, minWidth: 250 }}
        />
      </Link>
      <div className="flex gap-8">
        <Link className={`self-end ${styles.nav_link}`} href="/">
          Our Work
        </Link>
        <Link className={`self-end ${styles.nav_link}`} href="/about">
          Our Services
        </Link>
        <Link className={`self-end ${styles.nav_link}`} href="/contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
