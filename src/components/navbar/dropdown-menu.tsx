"use client";
import { variables } from "@/app/variables";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";
import { Services } from "@/app/our-services/[service]/page";

interface DropdownMenuProps {
  closeMenu: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ closeMenu }) => {
  return (
    <div
      style={{
        color: variables.primaryColor,
      }}
    >
      <p
        style={{
          paddingTop: "1rem",
          paddingBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "500",
        }}
        className="section"
      >
        Our Services
      </p>
      <div style={{ display: "flex" }} className={`${styles.dropdown_content}`}>
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
