import styles from "./homepage.module.scss";
import Image from "next/image";
import { variables } from "./variables";
import Stepper from "@/components/stepper/stepper";
import ButtonLink from "@/components/button-link";
import { Services } from "./our-services/[service]/services";
import ServiceContent from "./service-content";
import { ContactForm } from "./contact-us/contact-form";

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
          priority={true}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            opacity: 0.2,
            zIndex: -1,
            objectFit: "cover",
          }}
        ></Image>
        <div className="section">
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            Empowering the Next Generation of Learners with Cutting-Edge
            Tutoring
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            From foundational K-8 education to advanced courses in college,
            experience personalized tutoring that goes beyond the classroom.{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div
          className="section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              textAlign: "center",
              borderBottom: "1.5px solid #e0e0e0",
              paddingBottom: "2rem",
            }}
          >
            Transforming the way students learn with tailored resources and
            expert guidance
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
              rowGap: "4rem",
              columnGap: "2rem",
            }}
          >
            {Services.map((service, key) => (
              <ServiceContent key={key} service={service}></ServiceContent>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          className="section"
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{ fontSize: "3rem", fontWeight: "400", alignSelf: "center" }}
          >
            How it Works
          </div>
          <div style={{ fontSize: "1.25rem" }}>
            Your Journey with InsightU in 4 Easy Steps
          </div>
          <Stepper></Stepper>
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
            Our Past Work
          </div>
        </div>
      </div>
      <div
        style={{
          // backgroundColor: variables.secondaryColor,
          // color: variables.primaryColor,
          paddingBottom: "4rem",
        }}
      >
        <div className="section" style={{ paddingTop: "2rem" }}>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              marginBottom: "2rem",
              paddingBottom: "0.5rem",
              borderBottom: "0.5px solid #e0e0e0",
            }}
          >
            Lets Codevelop
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
      <div className={styles.dim_overlay}></div>
    </>
  );
}
