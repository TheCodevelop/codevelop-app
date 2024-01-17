"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import styles from "./homepage.module.scss";
import Button from "@/components/button";
import Image from "next/image";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <p
        className={`${styles.section} py-48 text-5xl font-semibold`}
        data-visible={!isOpen}
      >
        We Code.
        <br></br>
        <br></br>
        You Develop.
        <br></br>
        <br></br>
        Together, we CoDevelop.
      </p>
      <div
        style={{
          height: "600px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "750px",
            right: "10px",
            zIndex: 900,
          }}
        >
          <Image
            src="/laptop.png"
            alt="Laptop image"
            width="600"
            height="450"
          ></Image>
        </div>
      </div>
      <div className={`${styles.section} pt-24 pb-48`}>
        <p data-visible={isOpen} className={styles.responsive_title}>
          Our Mission
        </p>
        <p className={styles.responsive_text}>
          Codevelop specializes in custom digital solutions, combining strategy,
          design, and advanced technology to deliver transformative experiences.
          Our mission is on empowering businesses with cutting-edge software,
          driven by a commitment to innovation and excellence. We aim to exceed
          expectations and ensure client success.
        </p>
        <Button href="/" text="View Our Work"></Button>
      </div>
      <div className={styles.dim_overlay}></div>
    </main>
  );
}
