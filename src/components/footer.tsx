"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../app/homepage.module.scss";
import { variables } from "@/app/variables";

const Footer: React.FC = () => {
  return (
    <div style={{ backgroundColor: variables.secondaryColor, height: "400px" }}>
      <div className="section" style={{ color: variables.primaryColor }}>
        <div>Footer</div>
        <div>© 2024 Codevelop LLC. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;

// Something on the left with the logo and a message, maybe a mission statement and then on the right
// columns, one of them can be "Our Services"
// Put some copyright bullshit all the way at the bottom
