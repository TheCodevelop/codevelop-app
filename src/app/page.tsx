"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import styles from "./homepage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <p
        className={`${styles.content} py-48 text-5xl font-semibold`}
        data-visible={isOpen}
      >
        We Code.
        <br></br>
        <br></br>
        You Develop.
        <br></br>
        <br></br>
        Together, we CoDevelop.
      </p>
      <div style={{ height: "30px" }}></div>
      <div
        style={{
          height: "600px",
          backgroundColor: "grey",
        }}
      >
        <div style={{ position: "absolute", top: "750px", right: "10px" }}>
          <Image
            src="/laptop.png"
            alt="Laptop image"
            width="1200"
            height="900"
          ></Image>
        </div>
      </div>

      <div style={{ height: "30px" }}></div>
      <div className={`${styles.content} pt-24 pb-48`}>
        <p data-visible={isOpen} className="pb-8 text-5xl font-semibold">
          Our Mission
        </p>
        <p className="pb-8 text-2xl">
          At Codevelop, we are a forward-thinking software development company,
          specializing in crafting custom digital solutions for the modern
          business. Our mission is to empower the world’s most ambitious
          companies and brands with cutting-edge technology and innovative
          software. Our expertise lies in blending strategy, design, and
          advanced technology to deliver not just software, but transformative
          digital experiences. Through a commitment to excellence and a passion
          for digital innovation, we at Codevelop strive to exceed expectations,
          ensuring that our clients and their customers benefit from the
          exceptional results we deliver.
        </p>
        <button className={styles.button}>
          <Link href="/">View Our Work</Link>
        </button>
      </div>

      <div className={styles.dim_overlay}></div>
    </main>
  );
}
