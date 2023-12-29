"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import styles from "./homepage.module.scss";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="main-content">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.content} data-visible={isOpen}>
        Yo
      </div>
    </main>
  );
}
