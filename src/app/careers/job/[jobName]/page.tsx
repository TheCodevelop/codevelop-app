import styles from "@/app/careers/careers.module.scss";
import Image from "next/image";
import { ApplicationForm } from "../../application-form";
import ButtonLink from "@/components/button-link";

function getJob(jobName: string): JobPosting {
  switch (jobName) {
    case "software-engineer":
      return softwareEngineer;
    case "associate-ui-ux-designer":
      return aUXDesigner;
    case "android-developer":
      return androidDeveloper;
    case "ios-developer":
      return iOSDeveloper;
    default:
      return softwareEngineer;
  }
}

export default function Page({ params }: { params: { jobName: string } }) {
  const jobData = getJob(params.jobName);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="section">
        <div
          style={{
            paddingTop: "4rem",
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
          <ButtonLink
            text="Apply Now"
            href="#application-form"
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
      <div
        className="section"
        style={{ paddingTop: "100px", paddingBottom: "200px" }}
      >
        <ApplicationForm
          style={{
            width: "100%",
            border: "1px solid black",
            scrollMarginTop: "4rem",
            maxWidth: "600px",
          }}
          id="application-form"
        ></ApplicationForm>
      </div>
    </div>
  );
}

interface JobPosting {
  name: string;
  location: string;
  fullTime: boolean;
  overview: string;
  responsibilities: string[];
  qualifications: JobQualifications;
  benefits: string[];
}

interface JobQualifications {
  required: string[];
  preferred: string[];
}

const softwareEngineer: JobPosting = {
  name: "Software Engineer",
  location: "Remote",
  fullTime: true,
  overview:
    "At Codevelop, we're seeking a skilled Software Engineer to join our dynamic team and contribute to our mission of delivering high-quality software solutions swiftly and at the most competitive rates in the industry. As a key player in a startup development agency, you'll be involved in the full software development lifecycle, from conceptual design through to deployment and maintenance. This role demands a mix of technical prowess, creativity, and a client-focused mindset to meet our ambitious project goals and exceed client expectations",
  responsibilities: [
    "Design, develop, and implement software solutions based on the agency's needs, client requirements, and project goals. This includes writing clean, efficient, and well-documented code in the appropriate languages",
    "Work closely with other team members, including designers, project managers, and other engineers, to plan and execute projects. Participate in brainstorming sessions, code reviews, and meetings to ensure alignment and promote a collaborative work environment",
    "Communicate with clients to understand their needs, gather requirements, and provide technical guidance. Act as a liaison between the technical team and clients to ensure project objectives are met and expectations are managed",
    "Stay abreast of the latest industry trends, technologies, and best practices. Continuously learn and adapt to new tools and technologies to improve development processes and deliver cutting-edge solutions.",
    "Identify, diagnose, and resolve software issues, bugs, and inefficiencies. Employ a proactive approach to problem-solving, leveraging critical thinking and innovative solutions to overcome challenges",
  ],
  qualifications: {
    required: [
      "Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python ",
    ],
    preferred: [
      "Bachelor's Degree in Computer Science or related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
      "OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
    ],
  },
  benefits: ["cool stuff", "more stuff", "even more stuff"],
};

const aUXDesigner: JobPosting = {
  name: "Associate UI/UX Designer",
  location: "Remote",
  fullTime: true,
  overview:
    "At Codevelop, we're seeking a skilled Software Engineer to join our dynamic team and contribute to our mission of delivering high-quality software solutions swiftly and at the most competitive rates in the industry. As a key player in a startup development agency, you'll be involved in the full software development lifecycle, from conceptual design through to deployment and maintenance. This role demands a mix of technical prowess, creativity, and a client-focused mindset to meet our ambitious project goals and exceed client expectations",
  responsibilities: [
    "Design, develop, and implement software solutions based on the agency's needs, client requirements, and project goals. This includes writing clean, efficient, and well-documented code in the appropriate languages",
    "Work closely with other team members, including designers, project managers, and other engineers, to plan and execute projects. Participate in brainstorming sessions, code reviews, and meetings to ensure alignment and promote a collaborative work environment",
    "Communicate with clients to understand their needs, gather requirements, and provide technical guidance. Act as a liaison between the technical team and clients to ensure project objectives are met and expectations are managed",
    "Stay abreast of the latest industry trends, technologies, and best practices. Continuously learn and adapt to new tools and technologies to improve development processes and deliver cutting-edge solutions.",
    "Identify, diagnose, and resolve software issues, bugs, and inefficiencies. Employ a proactive approach to problem-solving, leveraging critical thinking and innovative solutions to overcome challenges",
  ],
  qualifications: {
    required: [
      "Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python ",
    ],
    preferred: [
      "Bachelor's Degree in Computer Science or related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
      "OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
    ],
  },
  benefits: ["cool stuff", "more stuff", "even more stuff"],
};

const androidDeveloper: JobPosting = {
  name: "Android Developer",
  location: "Remote",
  fullTime: true,
  overview:
    "At Codevelop, we're seeking a skilled Software Engineer to join our dynamic team and contribute to our mission of delivering high-quality software solutions swiftly and at the most competitive rates in the industry. As a key player in a startup development agency, you'll be involved in the full software development lifecycle, from conceptual design through to deployment and maintenance. This role demands a mix of technical prowess, creativity, and a client-focused mindset to meet our ambitious project goals and exceed client expectations",
  responsibilities: [
    "Design, develop, and implement software solutions based on the agency's needs, client requirements, and project goals. This includes writing clean, efficient, and well-documented code in the appropriate languages",
    "Work closely with other team members, including designers, project managers, and other engineers, to plan and execute projects. Participate in brainstorming sessions, code reviews, and meetings to ensure alignment and promote a collaborative work environment",
    "Communicate with clients to understand their needs, gather requirements, and provide technical guidance. Act as a liaison between the technical team and clients to ensure project objectives are met and expectations are managed",
    "Stay abreast of the latest industry trends, technologies, and best practices. Continuously learn and adapt to new tools and technologies to improve development processes and deliver cutting-edge solutions.",
    "Identify, diagnose, and resolve software issues, bugs, and inefficiencies. Employ a proactive approach to problem-solving, leveraging critical thinking and innovative solutions to overcome challenges",
  ],
  qualifications: {
    required: [
      "Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python ",
    ],
    preferred: [
      "Bachelor's Degree in Computer Science or related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
      "OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
    ],
  },
  benefits: ["cool stuff", "more stuff", "even more stuff"],
};

const iOSDeveloper: JobPosting = {
  name: "iOS Developer",
  location: "Remote",
  fullTime: true,
  overview:
    "At Codevelop, we're seeking a skilled Software Engineer to join our dynamic team and contribute to our mission of delivering high-quality software solutions swiftly and at the most competitive rates in the industry. As a key player in a startup development agency, you'll be involved in the full software development lifecycle, from conceptual design through to deployment and maintenance. This role demands a mix of technical prowess, creativity, and a client-focused mindset to meet our ambitious project goals and exceed client expectations",
  responsibilities: [
    "Design, develop, and implement software solutions based on the agency's needs, client requirements, and project goals. This includes writing clean, efficient, and well-documented code in the appropriate languages",
    "Work closely with other team members, including designers, project managers, and other engineers, to plan and execute projects. Participate in brainstorming sessions, code reviews, and meetings to ensure alignment and promote a collaborative work environment",
    "Communicate with clients to understand their needs, gather requirements, and provide technical guidance. Act as a liaison between the technical team and clients to ensure project objectives are met and expectations are managed",
    "Stay abreast of the latest industry trends, technologies, and best practices. Continuously learn and adapt to new tools and technologies to improve development processes and deliver cutting-edge solutions.",
    "Identify, diagnose, and resolve software issues, bugs, and inefficiencies. Employ a proactive approach to problem-solving, leveraging critical thinking and innovative solutions to overcome challenges",
  ],
  qualifications: {
    required: [
      "Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python ",
    ],
    preferred: [
      "Bachelor's Degree in Computer Science or related technical field AND 1+ year(s) technical engineering experience with coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
      "OR Master's Degree in Computer Science or related technical field with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python",
    ],
  },
  benefits: ["cool stuff", "more stuff", "even more stuff"],
};
