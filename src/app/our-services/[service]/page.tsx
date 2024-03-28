import Image from "next/image";
import { variables } from "@/app/variables";
import { Services, ServicePage } from "./services";
import Stepper from "@/components/stepper/stepper";

function getService(serviceName: string): ServicePage {
  return Services.find((service) => service.id === serviceName) as ServicePage;
}

export default function Page({ params }: { params: { service: string } }) {
  const serviceData = getService(params.service);
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "30rem",
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
              marginBottom: "1.5rem",
            }}
          >
            {serviceData.title}
          </div>
          <div style={{ fontSize: "1.5rem", fontWeight: "350" }}>
            {serviceData.subtitle}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div className="section">
          <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                }}
              >
                Beyond the Limits of Website Builders
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  marginBottom: "1.25rem",
                }}
              >
                In the world of digital development, choosing between custom
                coding and website builders like WordPress is an important
                decision. At Codevelop, we advocate for manual coding due to
                several key advantages:
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "500",
              marginTop: "3rem",
              marginBottom: "1rem",
            }}
          >
            How We Do It
          </div>
          <Stepper></Stepper>
        </div>
      </div>
    </div>
  );
}
