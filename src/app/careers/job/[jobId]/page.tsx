import styles from "@/app/careers/careers.module.scss";
import Image from "next/image";
import { ApplicationForm } from "../../application-form";
import ButtonLink from "@/components/button-link";
import { variables } from "@/app/variables";
import { JobPosting, Jobs } from "./jobs";

function getJob(jobId: string): JobPosting {
  return Jobs.find((job) => job.id === jobId) as JobPosting;
}

export default function Page({ params }: { params: { jobId: string } }) {
  const jobData = getJob(params.jobId);
  return (
    <div
      style={{
        paddingTop: "5rem",
        // backgroundColor: variables.secondaryColor,
        // color: variables.primaryColor,
      }}
    >
      <div className="section">
        <div
          style={{
            paddingTop: "4rem",
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              {jobData.name}
            </div>
            <div
              style={{ display: "flex", gap: "1.25rem", marginBottom: "1rem" }}
            >
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Image
                  src="/suitcase.svg"
                  alt="Suitcase Icon"
                  width={20}
                  height={20}
                ></Image>
                <div>{jobData.fullTime ? "Full-Time" : "Part-Time"}</div>
              </div>
              <div>|</div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
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
          <ButtonLink
            text="Apply Now"
            href="#application-form"
            color="white"
            style={{ padding: "0.75rem 2rem" }}
          ></ButtonLink>
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
                paddingBottom: "1.25rem",
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
      <div
        className="section"
        style={{
          paddingTop: "6.25rem",
          paddingBottom: "12.5rem",
        }}
      >
        <ApplicationForm
          style={{
            width: "100%",
            border: `1px solid ${variables.primaryColor}`,
            scrollMarginTop: "4rem",
            maxWidth: "37.5rem",
          }}
          id="application-form"
        ></ApplicationForm>
      </div>
    </div>
  );
}
