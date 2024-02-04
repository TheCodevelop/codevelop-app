import { getImageProps } from "next/image";
type HeaderLogoProps = {
  isDDHovered: boolean;
};

export default function HeaderLogo({ isDDHovered }: HeaderLogoProps) {
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    alt: "desktop",
    width: 500,
    height: 160,
    src: "/Logo_Word_alt.svg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    alt: "mobile",
    width: 97.5,
    height: 80,
    src: "/Logo_alt.svg",
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img
        {...rest}
        alt="other"
        style={{
          filter: isDDHovered ? "" : "invert(100%)",
          height: "100%",
          width: "100%",
          minHeight: 80,
          minWidth: "auto",
        }}
      />
    </picture>
  );
}
