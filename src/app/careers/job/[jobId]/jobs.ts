export interface JobPosting {
  name: string;
  id: string;
  location: string;
  fullTime: boolean;
  overview: string;
  responsibilities: string[];
  qualifications: JobQualifications;
  benefits: string[];
}

export interface JobQualifications {
  required: string[];
  preferred: string[];
}

export const Jobs: JobPosting[] = [
  {
    name: "Software Engineer",
    id: "software-engineer",
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
  },
  {
    name: "Associate UI/UX Designer",
    id: "associate-ui-ux-designer",
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
  },
  {
    name: "Android Developer",
    id: "android-developer",
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
  },
  {
    name: "Senior iOS Developer",
    id: "senior-ios-developer",
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
  },
  {
    name: "iOS Developer",
    id: "ios-developer",
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
  },
];
