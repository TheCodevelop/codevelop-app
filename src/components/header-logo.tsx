import { getImageProps } from "next/image";
type HeaderLogoProps = {
  isDDHovered: boolean;
};
import styles from "./navbar.module.scss";

export default function HeaderLogo({ isDDHovered }: HeaderLogoProps) {
  const common = { sizes: "50vw" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    alt: "desktop",
    width: 230,
    height: 100,
    src: "/Logo_Word_alt.svg",
    priority: true,
  });
  const {
    props: {
      srcSet: mobile,

      ...rest
    },
  } = getImageProps({
    ...common,
    alt: "mobile",
    width: 80,
    height: 80,
    src: "/Logo_alt.svg",
    priority: true,
  });

  return (
    <div className={styles.logo_wrapper}>
      <picture>
        <source media="(min-width: 800px)" srcSet={desktop} />
        <source media="(max-width: 799px)" srcSet={mobile} />
        <img
          {...rest}
          srcSet={mobile}
          style={{
            filter: isDDHovered ? "" : "invert(100%)",
            height: "100%",
            width: "auto",
          }}
        />
      </picture>
    </div>
  );
}
