"use client";

import styles from "./navbar.module.scss";
import Image from "next/image";

type HeaderLogoProps = {
  isDDHovered: boolean;
};

export default function HeaderLogo({ isDDHovered }: HeaderLogoProps) {
  return (
    <div className={styles.image_container}>
      <Image
        src="/Logo_alt.svg"
        alt="Header Logo 1"
        width={80}
        height={10}
        className={styles.mobile_image}
        style={{ filter: isDDHovered ? "" : "invert(100%)" }}
      />
      <Image
        src="/Logo_Word_alt.svg"
        alt="Header Logo 1"
        width={230}
        height={10}
        className={styles.desktop_image}
        style={{ filter: isDDHovered ? "" : "invert(100%)" }}
      />
    </div>
  );
}
