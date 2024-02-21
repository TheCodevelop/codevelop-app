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
  const serviceData = getService(params.jobName);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="section"></div>
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
