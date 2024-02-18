import styles from "@/app/careers/careers.module.scss";
import Image from "next/image";

function getService(serviceName: string): ServicePage {
  switch (serviceName) {
    case "website-development":
      return websiteDevelopment;
    case "associate-ui-ux-designer":
      return websiteDevelopment;
    case "android-developer":
      return websiteDevelopment;
    default:
      return websiteDevelopment;
  }
}

export default function Page({ params }: { params: { jobName: string } }) {
  const jobData = getService(params.jobName);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="section">
        <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            {jobData.name}
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "1rem" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Image
                src="/suitcase.svg"
                alt="Suitcase Icon"
                width={20}
                height={20}
              ></Image>
              <div>{jobData.fullTime ? "Full-Time" : "Part-Time"}</div>
            </div>
            <div>|</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Image
                src="/location.svg"
                alt="Location Icon"
                width={20}
                height={20}
              ></Image>
              <div>{jobData.location}</div>
            </div>
          </div>
        </div>

        <div className={styles.job_layout}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  marginBottom: "1rem",
                }}
              >
                Overview
              </div>
              <div>{jobData.overview}</div>
            </div>

            <div>
              <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                Responsibilities:
              </div>
              <ul className={styles.bullet_list}>
                {jobData.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontSize: "2rem" }}>Benefits:</div>
              <ul className={styles.bullet_list}>
                {jobData.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.qualifications_section}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                paddingBottom: "20px",
              }}
            >
              Qualifications
            </div>
            <div>
              <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                Required
              </div>
              <ul className={styles.bullet_list}>
                {jobData.qualifications.required.map((qualification, i) => (
                  <li key={i}>{qualification}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                Preferred
              </div>
              <ul className={styles.bullet_list}>
                {jobData.qualifications.preferred.map((qualification, i) => (
                  <li key={i}>{qualification}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServicePage {
  title: string;
  subtitle: string;
}

const websiteDevelopment: ServicePage = {
  title: "Website Development",
  subtitle: "We build websites that are fast, secure, and easy to manage.",
};
