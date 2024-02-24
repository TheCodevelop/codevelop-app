import styles from "./homepage.module.scss";
import ButtonLink from "@/components/button-link";
import Image from "next/image";
import { variables } from "./variables";

export default function Page() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src="/creative-process.jpg"
          alt="Mobile App Development Process Picture"
          fill
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            opacity: 0.2,
            zIndex: -1,
          }}
          objectFit="cover"
        ></Image>
        <div className="section">
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            Developing Your Digital Future, <br></br>{" "}
            <span style={{ color: variables.tertiaryColor }}>Together</span>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            Comprehensive Web Solutions Tailored to Elevate Your Business Online
          </div>
        </div>
      </div>

      <div
        style={{
          height: "600px",
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div className="section" style={{ paddingTop: "2rem" }}>
          <div style={{ fontSize: "3rem", fontWeight: "400" }}>
            What it means to Codevelop
          </div>
        </div>
      </div>
      <div className={`section pt-24 pb-48`}>
        <p className={styles.responsive_title}>Our Mission</p>
        <p className={styles.responsive_text}>
          Codevelop specializes in custom digital solutions, combining strategy,
          design, and advanced technology to deliver transformative experiences.
          Our mission is on empowering businesses with cutting-edge software,
          driven by a commitment to innovation and excellence. We aim to exceed
          expectations and ensure client success.
        </p>
        <ButtonLink
          href="/our-work"
          text="View Our Work"
          color="white"
        ></ButtonLink>
      </div>
      <div className={styles.dim_overlay}></div>
    </>
  );
}
