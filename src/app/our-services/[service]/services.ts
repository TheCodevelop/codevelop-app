export interface ServicePage {
  title: string;
  subtitle: string;
  id: string;
  description: string;
  homepageDescription: string;
  homepageImage: string;
}

export const Services: ServicePage[] = [
  {
    title: "Website Development",
    subtitle:
      "Shape your online identity with unique, engaging, and impactful website designs.",
    id: "website-development",
    description:
      "Craft custom, responsive, and user-friendly websites tailored to your business needs. Elevate your online presence with our end-to-end web development services.",
    homepageDescription:
      "Craft the digital face of your business with our Website Development service. We specialize in creating stunning, user-friendly websites that are not only visually appealing but also mobile-friendly, ensuring an optimal browsing experience on any device. Let us help you make that first impression count with a site that speaks volumes of your brand.",
    homepageImage: "/blank_desktop_mobile.png",
  },
  {
    title: "App Development",
    subtitle:
      "Crafting your next-generation mobile experience with tailored app solutions.",
    id: "app-development",
    description:
      "Bring your app idea to life with our comprehensive app development services. From design to deployment, we create seamless, innovative mobile applications for all platforms.",
    homepageDescription:
      "Turn your app idea into a reality with our comprehensive App Development service. From initial concept to final implementation, our team works closely with you to develop intuitive, high-performance mobile applications tailored to your specific needs. Empower your business with an app that engages your audience and drives results.",
    homepageImage: "/dating_app.png",
  },
  {
    title: "Security Consulting",
    subtitle:
      "Fortify your digital landscape with cutting-edge security measures.",
    id: "security",
    description:
      "Protect your digital assets with our advanced security solutions. Offering risk assessments, compliance, and cyber defense strategies to safeguard your business information.",
    homepageDescription:
      "Secure your digital assets and protect your company's sensitive information with our expert Security Consulting service. We provide thorough security assessments, implement robust protection strategies, and help set up advanced user authentication experiences to safeguard your business against evolving cyber threats. Trust us to fortify your digital presence.",
    homepageImage: "/security_lock.png",
  },
  {
    title: "AI Consulting",
    subtitle:
      "Unlock the potential of AI to revolutionize your business strategies and operations.",
    id: "ai-consulting",
    description:
      "Empower your business with AI. Get expert advice on implementing artificial intelligence to optimize operations, drive innovation, and create smarter, data-driven decisions.",
    homepageDescription:
      "Transform your business with the power of artificial intelligence through our AI Consulting service. Our team of AI specialists collaborates with you to develop and integrate smart, AI-driven solutions that optimize operations, enhance decision-making, and deliver personalized customer experiences. Step into the future and unlock new potentials with AI.",
    homepageImage: "/artificial_intelligence.png",
  },
];
