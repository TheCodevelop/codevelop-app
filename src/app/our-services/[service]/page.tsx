import Image from "next/image";
import { variables } from "@/app/variables";

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
            opacity: 0.1,
            zIndex: -1,
          }}
          objectFit="cover"
        ></Image>
        <div className={`section`}>
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
      <div style={{ backgroundColor: "white", color: variables.primaryColor }}>
        <div className="section">
          <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "500",
                    marginBottom: "1.5rem",
                  }}
                >
                  Quality Matters
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    marginBottom: "1.25rem",
                  }}
                >
                  In today's digital age, your website is the cornerstone of
                  your online identity, serving as the virtual face of your
                  business. At Codevelop, we understand the significance of a
                  well-crafted website. Our website development services are
                  designed to deliver not just a site, but a comprehensive
                  online experience that is custom-tailored to meet your
                  business needs.
                </div>
              </div>

              <Image
                src="/website-review.svg"
                alt="Website Review"
                width={500}
                height={500}
              ></Image>
            </div>
            <div
              style={{
                paddingTop: "4rem",
                paddingBottom: "4rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "500",
                    marginBottom: "1.5rem",
                  }}
                >
                  How We Do It
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    marginBottom: "1.25rem",
                  }}
                >
                  In today's digital age, your website is the cornerstone of
                  your online identity, serving as the virtual face of your
                  business. At Codevelop, we understand the significance of a
                  well-crafted website. Our website development services are
                  designed to deliver not just a site, but a comprehensive
                  online experience that is custom-tailored to meet your
                  business needs.
                </div>
              </div>
              <Image
                src="/website-development.svg"
                alt="Website Development"
                width={500}
                height={500}
              />
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
  id: string;
  description: string;
}

export const Services: ServicePage[] = [
  {
    title: "Website Development",
    subtitle:
      "Shape your online identity with unique, engaging, and impactful website designs.",
    id: "website-development",
    description:
      "Craft custom, responsive, and user-friendly websites tailored to your business needs. Elevate your online presence with our end-to-end web development services.",
  },
  {
    title: "App Development",
    subtitle:
      "Crafting your next-generation mobile experience with tailored app solutions.",
    id: "app-development",
    description:
      "Bring your app idea to life with our comprehensive app development services. From design to deployment, we create seamless, innovative mobile applications for all platforms.",
  },
  {
    title: "Security",
    subtitle:
      "Fortify your digital landscape with cutting-edge security measures.",
    id: "security",
    description:
      "Protect your digital assets with our advanced security solutions. Offering risk assessments, compliance, and cyber defense strategies to safeguard your business information.",
  },
  {
    title: "AI Consulting",
    subtitle:
      "Unlock the potential of AI to revolutionize your business strategies and operations.",
    id: "ai-consulting",
    description:
      "Empower your business with AI. Get expert advice on implementing artificial intelligence to optimize operations, drive innovation, and create smarter, data-driven decisions.",
  },
];
