"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import styles from "./homepage.module.scss";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="main-content">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <p
        className={`${styles.content} text-5xl font-semibold`}
        data-visible={isOpen}
      >
        We Code.
        <br></br>
        <br></br>
        You Develop your business.
        <br></br>
        <br></br>
        Together, we CoDevelop.
      </p>
      {/* <div className={styles.content} data-visible={isOpen}>
        Yo
      </div> */}
    </main>
  );
}
