import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiFastapi,
  SiOpenaigym,
  SiGooglegemini,
} from "react-icons/si";

export const projects = [
  {
    id: 1,

    title: "AI Study Buddy",

    category: "AI Learning Platform",

    image: "/projects/ai-study-buddy.png",

    logo: "/projects/logo-ai.png",

    description:
      "AI powered learning platform that generates summaries, flashcards, quizzes and notes from uploaded PDFs using modern LLMs.",

    github: "https://github.com/yourusername/ai-study-buddy",

    live: "https://your-demo.com",

    technologies: [
      FaReact,
      SiTypescript,
      SiTailwindcss,
      FaNodeJs,
      SiExpress,
      SiMysql,
    ],
  },

  {
    id: 2,

    title: "Portfolio Website",

    category: "Personal Portfolio",

    image: "/projects/portfolio.png",

    logo: "/projects/logo-portfolio.png",

    description:
      "Modern animated portfolio built using React, TypeScript, TailwindCSS and Framer Motion with smooth UI interactions.",

    github: "https://github.com/yourusername/portfolio",

    live: "https://portfolio-demo.com",

    technologies: [
      FaReact,
      SiTypescript,
      SiTailwindcss,
      SiNextdotjs,
    ],
  },

  {
    id: 3,

    title: "ReplyGenie",

    category: "AI SaaS",

    image: "/projects/replygenie.png",

    logo: "/projects/logo-reply.png",

    description:
      "AI assistant for generating smart email replies using OpenAI APIs, authentication and conversation history.",

    github: "https://github.com/yourusername/replygenie",

    live: "https://reply-demo.com",

    technologies: [
      FaReact,
      FaNodeJs,
      SiExpress,
      SiPostgresql,
      SiOpenaigym,
      SiGooglegemini,
    ],
  },

  {
    id: 4,

    title: "Expenses AI",

    category: "Full Stack App",

    image: "/projects/expenses.png",

    logo: "/projects/logo-expenses.png",

    description:
      "Expense tracking application with analytics dashboard, charts, authentication and monthly reports.",

    github: "https://github.com/dharmendra-solanki/expense_ai",

    live: "https://expense-trackers-ai.netlify.app/",

    technologies: [
      FaReact,
      SiTypescript,
      FaNodeJs,
      SiPostgresql,
      SiTailwindcss,
      SiGooglegemini,
    ],
  },

  {
    id: 5,

    title: "DevOps Dashboard",

    category: "Monitoring System",

    image: "/projects/devops.png",

    logo: "/projects/logo-devops.png",

    description:
      "Real-time DevOps monitoring dashboard integrating Docker containers, deployment status and server metrics.",

    github: "https://github.com/yourusername/devops-dashboard",

    live: "https://devops-demo.com",

    technologies: [
      FaDocker,
      FaAws,
      FaNodeJs,
      FaGitAlt,
    ],
  },

  {
    id: 6,

    title: "AI Resume Builder",

    category: "Resume Generator",

    image: "/projects/resume.png",

    logo: "/projects/logo-resume.png",

    description:
      "Resume builder powered by AI with ATS optimization, multiple templates and instant PDF generation.",

    github: "https://github.com/yourusername/resume-builder",

    live: "https://resume-demo.com",

    technologies: [
      FaReact,
      FaPython,
      SiFastapi,
      SiMysql,
    ],
  },
];