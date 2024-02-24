export interface ServicePage {
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
