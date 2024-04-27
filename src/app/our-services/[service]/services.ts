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
    title: "In Person Tutoring",
    subtitle: "Discover In-Person Learning",
    id: "in-person-tutoring",
    description:
      "Welcome to a world where learning is personal, engaging, chieve more by studying less. Step into our sessions, and step into a world where learning is not a chore, but a journey of discovery.",
    homepageDescription:
      "Welcome to a world where learning is personal, engaging, and tailored just for you. Our in-person tutoring sessions offer a warm, professional environment where complex subjects become approachable. Our tutors don’t just teach; they redefine how you approach studying, helping you achieve more by studying less. Step into our sessions, and step into a world where learning is not a chore, but a journey of discovery.",
    homepageImage: "/blank_desktop_mobile.png",
  },
  {
    title: "Online Tutoring",
    subtitle: "Your Gateway to Online Mastery",
    id: "online-tutoring",
    description:
      "Bring your app idea to life with our comprehensive app development services. From design to deployment, we create seamless, innovative mobile applications for all platforms.",
    homepageDescription:
      "Embrace the future of learning from wherever you are. Our online tutoring sessions blend professional expertise with the warmth of personal engagement. Imagine a learning experience where technology meets human insight, creating a platform where every lesson is not just taught, but experienced. Dive into our interactive sessions and find yourself mastering subjects with newfound confidence and ease.",
    homepageImage: "/dating_app.png",
  },
  {
    title: "Group Tutoring",
    subtitle:
      "Fortify your digital landscape with cutting-edge security measures.",
    id: "group-tutoring",
    description:
      "Protect your digital assets with our advanced security solutions. Offering risk assessments, compliance, and cyber defense strategies to safeguard your business information.",
    homepageDescription:
      "Join a vibrant learning community where every voice matters. Our group tutoring sessions offer a unique blend of professional guidance and collaborative learning. It's a place where ideas intersect, and complex topics are unraveled through shared insights. Be part of a group that learns together, grows together, and paves the way for academic success through mutual support and understanding.",
    homepageImage: "/security_lock.png",
  },
  {
    title: "Special Programs",
    subtitle:
      "Unlock the potential of AI to revolutionize your business strategies and operations.",
    id: "special-programs",
    description:
      "Empower your business with AI. Get expert advice on implementing artificial intelligence to optimize operations, drive innovation, and create smarter, data-driven decisions.",
    homepageDescription:
      "Prepare for Academic Excellence: Dive into our two-month summer success program, meticulously designed to ensure your child is ahead of the curve for the upcoming school year. Phase 1: Review and Reinforce - Engage in a structured review using tailored flashcards to master foundational concepts through effective rote memorization. Phase 2: Practice and Perfect - Tackle comprehensive practice questions that bridge knowledge gaps and connect concepts, setting the stage for a year of academic success. Enroll now to transform learning into achievement.",
    homepageImage: "/artificial_intelligence.png",
  },
];
