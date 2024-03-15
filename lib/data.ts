import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Mohith",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Founding Software Engineer",
    location: "New York, NY",
    description:
      "Worked on AI product end to end, using Backend, Frontend and AI/LLM skills",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jan 2024",
    tags: ["LLM", "Next.js", "LangChain", "AWS", "Tailwind", "Prisma"],
    bullets: ["Built Open AI LLM - GPT-3.5 based LangChain powered Chatbot with Next.js using >15 Custom Tools & Agents \n for automated appointment scheduling & Lead generation of customers increasing customer traffic by 30%", 
    "Enhanced the accuracy of the Large Language model by fine tuning it with HuggingFace Transformers & integrated\n with 3+ Retrieval Augmented Generation chains improving user output by 40%", 
    "Programmed Vector embeddings based RAG chains using Pinecone database and AWS S3 improving accuracy 30%", 
    " Built and setup the AWS Architecture, developed the Database initial schema and developed relevant APIs\n documenting using Swagger & updating using a CI/CD pipeline to AWS RDS(SQL), S3 improving efficiency 20%",
    "Developed and deployed the AI chatbot using AWS EC2 automating it using a PM2 CI/CD pipeline and Nginx web\n server. Built the internal Javascript/Typescript REST APIs, integrated with the Pinecone vector database"
  ],
  },
  {
    title: "Front-End Developer",
    location: "New York, NY",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    bullets: ["Built Open AI LLM - GPT-3.5 based LangChain powered Chatbot with Next.js using >15 Custom Tools & Agents \n for automated appointment scheduling & Lead generation of customers increasing customer traffic by 30%", 
    "Enhanced the accuracy of the Large Language model by fine tuning it with HuggingFace Transformers & integrated\n with 3+ Retrieval Augmented Generation chains improving user output by 40%", 
    "Programmed Vector embeddings based RAG chains using Pinecone database and AWS S3 improving accuracy 30%", 
    " Built and setup the AWS Architecture, developed the Database initial schema and developed relevant APIs\n documenting using Swagger & updating using a CI/CD pipeline to AWS RDS(SQL), S3 improving efficiency 20%",
    "Developed and deployed the AI chatbot using AWS EC2 automating it using a PM2 CI/CD pipeline and Nginx web\n server. Built the internal Javascript/Typescript REST APIs, integrated with the Pinecone vector database"
  ],
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
    tags: [],
    bullets: ["Built Open AI LLM - GPT-3.5 based LangChain powered Chatbot with Next.js using >15 Custom Tools & Agents \n for automated appointment scheduling & Lead generation of customers increasing customer traffic by 30%", 
    "Enhanced the accuracy of the Large Language model by fine tuning it with HuggingFace Transformers & integrated\n with 3+ Retrieval Augmented Generation chains improving user output by 40%", 
    "Programmed Vector embeddings based RAG chains using Pinecone database and AWS S3 improving accuracy 30%", 
    " Built and setup the AWS Architecture, developed the Database initial schema and developed relevant APIs\n documenting using Swagger & updating using a CI/CD pipeline to AWS RDS(SQL), S3 improving efficiency 20%",
    "Developed and deployed the AI chatbot using AWS EC2 automating it using a PM2 CI/CD pipeline and Nginx web\n server. Built the internal Javascript/Typescript REST APIs, integrated with the Pinecone vector database"
  ],
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Word 4",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Word 5",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  
    "Python",
    "Swift",
    "Java",
    "J2EE",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Angular",
    "JSON",
    "MySQL",
    "PL/SQL",
    "PHP",
    "HTML",
    "CSS",
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Django",
    "Framer Motion",
    "AWS",
    "SciKit-Learn",
    "Keras",
    "TensorFlow",
    "LangChain",
    "VSCode",
    "Pinecone",
    "Apache Spark",
    "Pytorch",
    "Generative AI",
    "GCloud",
    "Firebase",
    "Git",
    "Ionic",
    "Next.js",
    "Node.js",
    "Angular.js",
    "Flask",
    "Android Studio",
    "XCode",
    "TensorFlow",
    "Figma"
   
] as const;
