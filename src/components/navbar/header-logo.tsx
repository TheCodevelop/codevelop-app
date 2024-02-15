import styles from "./navbar.module.scss";
import Image from "next/image";

type HeaderLogoProps = {
  isDDHovered: boolean;
};

export default function HeaderLogo({ isDDHovered }: HeaderLogoProps) {
  return (
    <div>
      <div className={styles.mobile_image}>
        <Image
          src="/Logo_alt.svg"
          alt="Header Logo 1"
          width={80}
          height={70}
          style={{ filter: isDDHovered ? "" : "invert(100%)" }}
          priority={true}
        />
      </div>
      <div className={styles.desktop_image}>
        <Image
          src="/Logo_Word_alt.svg"
          alt="Header Logo 2"
          width={230}
          height={70}
          style={{ filter: isDDHovered ? "" : "invert(100%)" }}
          priority={true}
        />
      </div>
    </div>
  );
}
