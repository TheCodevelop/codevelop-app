"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";
import { useState } from "react";

interface DropdownMenuProps {
  isHovered: boolean;
  closed: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isHovered, closed }) => {
  return (
    <div
      className={`${styles.dropdown_content} ${styles.section}`}
      style={{
        color: "black",
        // transform: isHovered ? "translateY(0px)" : "translateY(20%)",
        // opacity: isHovered ? "100%" : "0%",
        // display: closed ? "none" : "block",
      }}
    >
      <p className="text-3xl font-semibold pt-4 pb-8">Our Services</p>
      <div className="flex gap-12">
        <ServiceCard
          name="Website Development"
          description="Give us a design that we can bring to life, or let us take care of crafting a beautiful design tailored to your speciifc needs"
          link="/services/web-dev"
          style={{ flex: 1 }}
        />
        <ServiceCard
          name="Mobile App Development"
          description="Specializing in iOS and Android, we transform your vision into user-friendly, high-performance apps tailored to your needs. Ideal for startups or established businesses."
          link="/services/mobile-app"
          style={{ flex: 1 }}
        />
        <ServiceCard
          name="Expert Advisor"
          description="Have a Forex strategy you want to automate? We can create an expert advisor (EA) that runs your strategy automatically"
          link="/services/ea"
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
