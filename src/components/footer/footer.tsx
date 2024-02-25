"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import { variables } from "@/app/variables";
import { Services } from "@/app/our-services/[service]/services";

const Footer: React.FC = () => {
  return (
    <div style={{ paddingTop: "4rem", paddingBottom: "1rem" }}>
      <div
        className="section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "21rem",
            }}
          >
            <Image
              src="/Logo_word_alt.svg"
              alt="Codevelop Icon Logo"
              width={200}
              height={200}
              style={{ filter: "invert(100%)" }}
            ></Image>
            <div
              style={{
                fontSize: "1rem",
                paddingRight: "2rem",
              }}
            >
              At Codevelop, we believe in bringing our customers vision to life
              through collaboration. We don&apos;t just develop{" "}
              <span style={{ color: variables.tertiaryColor }}>for</span> you,
              we develop{" "}
              <span style={{ color: variables.tertiaryColor }}>with</span> you.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <div className={styles.column_heading}>Browse</div>
              <Link className={styles.footer_link} href="/our-work">
                Our Work
              </Link>
              <Link className={styles.footer_link} href="/careers">
                Careers
              </Link>
              <Link className={styles.footer_link} href="/contact-us">
                Contact Us
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <div className={styles.column_heading}>Services</div>
              {Services.map((service, key) => (
                <Link
                  key={key}
                  className={styles.footer_link}
                  href={`/our-services/${service.id}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div className={styles.column_heading}>Contact</div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              >
                <Image
                  src="/email.svg"
                  alt="Email Icon"
                  width={25}
                  height={25}
                  style={{ filter: "invert(100%)" }}
                ></Image>
                <a
                  className={styles.footer_link}
                  href="mailto:contact@thecodevelop.com"
                >
                  contact@thecodevelop.com
                </a>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              >
                <Image
                  src="/telephone.svg"
                  alt="Phone Icon"
                  width={25}
                  height={25}
                  style={{ filter: "invert(100%)" }}
                ></Image>
                <a className={styles.footer_link} href="tel:+14072057254">
                  407-205-7254
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <Image
                  src="/location.svg"
                  alt="Location Icon"
                  width={25}
                  height={25}
                  style={{ filter: "invert(100%)" }}
                ></Image>
                <div>
                  255 S Orange Avenue<br></br>Suite 104 #1055<br></br>Orlando,
                  FL 32801
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid white",
            paddingTop: "1rem",
            marginTop: "4rem",
          }}
        >
          © 2024 Codevelop LLC. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

// Something on the left with the logo and a message, maybe a mission statement and then on the right
// columns, one of them can be "Our Services"
// Put some copyright bullshit all the way at the bottom
