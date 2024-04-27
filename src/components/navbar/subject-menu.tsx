"use client";
import { variables } from "@/app/variables";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";
import { Services } from "@/app/our-services/[service]/services";

interface SubjectMenuProps {
  closeMenu: () => void;
}

const SubjectMenu: React.FC<SubjectMenuProps> = ({ closeMenu }) => {
  return (
    <div
      style={{
        color: variables.primaryColor,
        cursor: "default",
      }}
    >
      <p
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontSize: "2rem",
          fontWeight: "500",
        }}
        className="section"
      >
        Subjects
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Services.length}, 1fr)`,
        }}
        className={`${styles.dropdown_content}`}
      >
        {Services.map((service, key) => (
          <div key={key}>
            <ServiceCard
              title={service.title}
              subtitle={service.description}
              link={`/sujects/${service.id}`}
              // style={{ flex: 1 }}
              onClick={closeMenu}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectMenu;
