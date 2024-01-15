"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import styles from "./homepage.module.scss";

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
      <div className={styles.dim_overlay}></div>
    </main>
  );
}
