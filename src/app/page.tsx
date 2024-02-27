import styles from "./homepage.module.scss";
import Image from "next/image";
import { variables } from "./variables";
import Stepper from "@/components/stepper/stepper";
import ButtonLink from "@/components/button-link";

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
            Developing Your Digital Future, <br></br>{" "}
            <span style={{ color: variables.tertiaryColor }}>Together</span>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            Comprehensive Web Services Tailored to Elevate Your Business Online
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
            }}
          >
            Our Services
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div
              style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>Website Development</div>
              <div style={{ fontSize: "1.25rem" }}>
                Craft the digital face of your business with our Website
                Development service. We specialize in creating stunning,
                user-friendly websites that are not only visually appealing but
                also mobile-friendly, ensuring an optimal browsing experience on
                any device. Let us help you make that first impression count
                with a site that speaks volumes of your brand.
              </div>
              <ButtonLink
                href="/our-services/website-development"
                text="Get Started"
                color="black"
                style={{ fontWeight: "300", maxWidth: "300px" }}
              ></ButtonLink>
            </div>

            <div>
              <Image
                src="/blank_desktop_mobile.png"
                alt="smart phone with website"
                width={3000}
                height={3000}
                style={{ height: "300px", width: "auto" }}
              ></Image>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div
              style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>App Development</div>
              <div style={{ fontSize: "1.25rem" }}>
                Turn your app idea into a reality with our comprehensive App
                Development service. From initial concept to final
                implementation, our team works closely with you to develop
                intuitive, high-performance mobile applications tailored to your
                specific needs. Empower your business with an app that engages
                your audience and drives results.
              </div>
              <ButtonLink
                href="/our-services/app-development"
                text="Get Started"
                color="black"
                style={{ fontWeight: "300", maxWidth: "300px" }}
              ></ButtonLink>
            </div>
            <div>
              <Image
                src="/dating_app.png"
                alt="laptop with website"
                width={3000}
                height={3000}
                style={{ height: "300px", width: "auto" }}
              ></Image>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div
              style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>Security Consulting</div>
              <div style={{ fontSize: "1.25rem" }}>
                Secure your digital assets and protect your company&apos;s
                sensitive information with our expert Security Consulting
                service. We provide thorough security assessments, implement
                robust protection strategies, and help set up advanced user
                authentication experiences to safeguard your business against
                evolving cyber threats. Trust us to fortify your digital
                presence.
              </div>
              <ButtonLink
                href="/our-services/website-development"
                text="Get Started"
                color="black"
                style={{ fontWeight: "300", maxWidth: "300px" }}
              ></ButtonLink>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Image
                  src="/security_lock.png"
                  alt="laptop with website"
                  width={300}
                  height={300}
                  style={{ height: "300px", width: "auto" }}
                ></Image>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div
              style={{
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>AI Consulting</div>
              <div style={{ fontSize: "1.25rem" }}>
                Transform your business with the power of artificial
                intelligence through our AI Consulting service. Our team of AI
                specialists collaborates with you to develop and integrate
                smart, AI-driven solutions that optimize operations, enhance
                decision-making, and deliver personalized customer experiences.
                Step into the future and unlock new potentials with AI.
              </div>
              <ButtonLink
                href="/our-services/ai-consulting"
                text="Get Started"
                color="black"
                style={{ fontWeight: "300", maxWidth: "300px" }}
              ></ButtonLink>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Image
                  src="/artificial_intelligence.png"
                  alt="laptop with website"
                  height={300}
                  width={3000}
                  style={{ height: "300px", width: "auto" }}
                ></Image>
              </div>
            </div>
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
            At Codevelop, we believe in developing{" "}
            <span style={{ color: variables.tertiaryColor }}>with</span> you,
            not just for you. Our collaborative process ensures that your vision
            is at the heart of everything we do, from initial concept to final
            execution.
          </div>
          <Stepper></Stepper>
        </div>
      </div>

      <div
        style={{
          height: "600px",
          // backgroundColor: variables.secondaryColor,
          // color: variables.primaryColor,
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
          height: "600px",
          // backgroundColor: variables.secondaryColor,
          // color: variables.primaryColor,
        }}
      >
        <div className="section" style={{ paddingTop: "2rem" }}>
          <div style={{ fontSize: "3rem", fontWeight: "400" }}>Contact Us</div>
        </div>
      </div>
      <div className={styles.dim_overlay}></div>
    </>
  );
}
