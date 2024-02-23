"use client";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";
import { Services } from "@/app/our-services/[service]/page";

interface DropdownMenuProps {
  closeMenu: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ closeMenu }) => {
  return (
    <div
      className={`${styles.dropdown_content} section`}
      style={{
        color: "black",
      }}
    >
      <p
        style={{
          paddingTop: "1rem",
          paddingBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "500",
        }}
      >
        Our Services
      </p>
      <div style={{ display: "flex", gap: "3rem" }}>
        {Services.map((service, key) => (
          <div key={key}>
            <ServiceCard
              title={service.title}
              subtitle={service.description}
              link={`/our-services/${service.id}`}
              style={{ flex: 1 }}
              onClick={closeMenu}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
