"use client";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";
import { Services } from "@/app/services/[service]/page";

const DropdownMenu = () => {
  return (
    <div
      className={`${styles.dropdown_content} section`}
      style={{
        color: "black",
      }}
    >
      <p className="text-3xl font-semibold pt-4 pb-8">Our Services</p>
      <div className="flex gap-12">
        {Services.map((service) => (
          <ServiceCard
            title={service.title}
            subtitle={service.subtitle}
            link={`/services/${service.id}`}
            style={{ flex: 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
