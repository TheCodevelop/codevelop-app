"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { NextPage } from "next";
import styles from "./homepage.module.scss";

const Home: NextPage<{ isOpen: boolean; setIsOpen: Function }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="main-content">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.content} data-visible={isOpen}>
        Yo
      </div>
    </main>
  );
};

export default Home;
