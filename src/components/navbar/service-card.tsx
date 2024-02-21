"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  link: string;
  style?: React.CSSProperties;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  link,
  style,
}) => {
  return (
    <Link href={link} style={style}>
      <p
        style={{ borderBottom: "5px", borderColor: "black" }}
        className="text-xl font-semibold pb-3 "
      >
        {title}
      </p>
      <p style={{ whiteSpace: "break-spaces", fontSize: "1rem" }}>{subtitle}</p>
    </Link>
  );
};

export default ServiceCard;
