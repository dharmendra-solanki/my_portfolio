import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenaigym,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiPython,
  SiRender,
  SiLinux,
  SiNetlify,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const navItems = ["Home", "About", "Skills", "Education", "Projects", "Contact"];

export const particles = [
  { left: "5%", top: "18%", delay: "0s" },
  { left: "22%", top: "68%", delay: ".8s" },
  { left: "38%", top: "24%", delay: "1.4s" },
  { left: "54%", top: "72%", delay: ".3s" },
  { left: "72%", top: "18%", delay: "1s" },
  { left: "88%", top: "60%", delay: ".5s" },
  { left: "14%", top: "42%", delay: "1.8s" },
  { left: "67%", top: "82%", delay: "1.2s" },
];

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", icon: FaNodeJs, color: "#5fa04e" },
  { name: "Express.js", icon: SiExpress, color: "#111827" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "REST API", icon: SiPostman, color: "#ff6c37" },
  { name: "Redux", icon: SiRedux, color: "#764abc" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Figma", icon: FaFigma, color: "#f24e1e" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "MySQL", icon: SiMysql, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#0c344b" },
  { name: "OpenAI Gym", icon: SiOpenaigym, color: "#00a67e" },
  { name: "CPP", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Render", icon: SiRender, color: "#000000" },
  { name: "Linux", icon: SiLinux, color: "#FCC624"},
  { name: "Netlify",icon: SiNetlify, color: "#00C7B7" },
  { name: "Docker" , icon:SiDocker, color: "#646cff"}
];

export const projects = [
  {
    title: "AI Resume Builder",
    type: "React + TypeScript",
    summary: "A clean resume creation flow with responsive preview cards and export-ready layouts.",
  },
  {
    title: "Study Buddy App",
    type: "MERN Stack",
    summary: "Dashboard-style learning planner with tasks, progress states, and useful study flows.",
  },
  {
    title: "Food Web",
    type: "Frontend UI",
    summary: "Modern food ordering interface with menu cards, filters, and mobile-first browsing.",
  },
  {
    title: "Health Assistant",
    type: "Full Stack",
    summary: "Helpful health support interface focused on simple inputs and clear recommendations.",
  },
];
