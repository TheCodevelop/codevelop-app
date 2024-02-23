import styles from "./homepage.module.scss";
import ButtonLink from "@/components/button-link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div
        className={`section`}
        style={{ height: "500px", position: "relative" }}
      >
        <Image
          src="/mobile-banner.jpg"
          alt="Mobile App Development Process Picture"
          width={1920}
          height={1080}
          style={{
            position: "absolute",
            top: "0",
            left: "0",

            zIndex: -1,
            opacity: 0.2,
          }}
        ></Image>
        <div style={{ fontSize: "4rem", fontWeight: "500", maxWidth: "500px" }}>
          Developing <br></br>Your <br></br> Digital Future
        </div>
      </div>
      <div
        style={{
          height: "600px",
          backgroundColor: "white",
          color: "black",
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
