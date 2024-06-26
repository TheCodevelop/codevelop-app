import styles from "./navbar.module.scss";
import Image from "next/image";

type ResponsiveLogoProps = {
  isDDHovered: boolean;
};

export default function ResponsiveLogo({ isDDHovered }: ResponsiveLogoProps) {
  return (
    <div>
      <Image
        src="/Logo_alt.svg"
        alt="Header Logo 1"
        width={80}
        height={70}
        style={{ filter: isDDHovered ? "" : "invert(100%)" }}
        priority={true}
        className={styles.mobile_image}
      />
      <Image
        src="/Logo_Word_alt.svg"
        alt="Header Logo 2"
        width={230}
        height={70}
        style={{ filter: isDDHovered ? "" : "invert(100%)" }}
        priority={true}
        className={styles.desktop_image}
      />
    </div>
  );
}
