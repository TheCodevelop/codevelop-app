"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";

interface ServiceCardProps {
  name: string;
  description: string;
  link: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  link,
}) => {
  return (
    <Link href={link} className="max-w-xs">
      <p className="text-xl font-semibold pb-3">{name}</p>
      <p style={{ whiteSpace: "break-spaces" }} className={"text-lg"}>
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
