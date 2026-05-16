import type { PersonalInfo, Stat } from "@/types";

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update all personal info across the site.
//
//  social icon values must match keys in SOCIAL_ICONS map
//  inside Footer.tsx and Navbar.tsx:
//    "GitHub" | "LinkedIn" | "Twitter" | "Email"
// ─────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Muhammad Ahmad",
  title: "Full-Stack Developer",
  tagline: "Building digital things that matter.",
  bio: [
    "I'm a Full Stack Developer with 2+ years of experience building scalable web applications using the MERN stack. I specialise in React.js for dynamic, responsive UIs and backend development with Node.js and MongoDB.",
    "Currently at RamsStacks, I build complex high-performance interfaces with React.js, TypeScript, and Redux, and handle real-time data with Supabase. I care deeply about clean, maintainable code and collaborative agile delivery.",
    "Outside of work, I'm exploring Web 3.0, AI/ML, and pushing my skills into new territory — always learning, always building.",
  ],
  location: "New Iqbal park Lahore, Pakistan",
  email: "pakmuhammadahmad8@gmail.com",
  phone:            '+92 340 6180448',
  availableForWork: true,
  avatar: "/images/avatar.jpg",
  resume: "./M_Ahmad_CV.pdf",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/ahmad-watoo",
      icon: "GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-ahmad-5192b6220/",
      icon: "LinkedIn",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100091976807098",
      icon: "Facebook",
    },
  ],
};

export const heroStats: Stat[] = [
  { label: "Years Experience", value: "2", suffix: "+" },
  { label: "Projects Shipped", value: "10", suffix: "+" },
  { label: "Happy Clients", value: "3", suffix: "" },
];
