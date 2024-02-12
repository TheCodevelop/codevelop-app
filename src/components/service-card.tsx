"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";

interface ServiceCardProps {
  name: string;
  description: string;
  link: string;
  style?: React.CSSProperties;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  link,
  style,
}) => {
  return (
    <Link href={link} style={style}>
      <p
        style={{ borderBottom: "5px", borderColor: "black" }}
        className="text-xl font-semibold pb-3 "
      >
        {name}
      </p>
      <p style={{ whiteSpace: "break-spaces", fontSize: "0.875rem" }}>
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
