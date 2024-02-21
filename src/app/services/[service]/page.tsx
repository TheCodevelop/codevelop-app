import styles from "@/app/careers/careers.module.scss";
import Image from "next/image";

function getService(serviceName: string): ServicePage {
  return Services.find((service) => service.id === serviceName) as ServicePage;
}

export default function Page({ params }: { params: { jobName: string } }) {
  const serviceData = getService(params.jobName);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="section"></div>
    </div>
  );
}

interface ServicePage {
  title: string;
  id: string;
  subtitle: string;
}

export const Services: ServicePage[] = [
  {
    title: "Website Development",
    id: "website-development",
    subtitle: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "App Development",
    id: "app-development",
    subtitle: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Security",
    id: "security",
    subtitle: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "AI Consulting",
    id: "ai-consulting",
    subtitle: "We build websites that are fast, secure, and easy to manage.",
  },
];
