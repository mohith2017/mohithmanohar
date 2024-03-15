import React from "react";
import { CgGames, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import githuborgImg from "@/public/githuborg.png";
import fintechappImg from "@/public/fintechapp.png";
import portfolioImg from "@/public/portfolio.png";
import llmevalImg from "@/public/llmeval.png";
import anomolydetectionImg from "@/public/anomolydetection.png";


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
    company: "Simply Fixable Inc.",
    logo: "https://i.postimg.cc/9wPfGJx8/simplyfixable-logo.jpg",
    title: "Founding Software Engineer",
    location: "New York, NY",
    description:
      "Worked on AI product end to end, using Backend, Frontend and AI/LLM skills",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jan 2024",
    tags: ["Chatbot", "LLM", "NLP", "Python", "LangChain", "RAG", "Pinecone", "Next.js", "Typescript", "Javascript", "AWS", "HTML", "Tailwind", "HuggingFace", "DataBricks", "OpenPipe", "JSON", "CI/CD", "REST API", "Nginx", "PostGreSQL", "ML", "OpenAI GPT"],
    bullets: ["Built Open AI LLM - GPT-3.5 based LangChain powered Chatbot with Next.js using >15 Custom Tools & Agents \n for automated appointment scheduling & Lead generation of customers increasing customer traffic by 30%", 
    "Enhanced the accuracy of the Large Language model by fine tuning it with HuggingFace Transformers & integrated\n with 3+ Retrieval Augmented Generation chains improving user output by 40%", 
    "Programmed Vector embeddings based RAG chains using Pinecone database and AWS S3 improving accuracy 30%", 
    " Built and setup the AWS Architecture, developed the Database initial schema and developed relevant APIs\n documenting using Swagger & updating using a CI/CD pipeline to AWS RDS(SQL), S3 improving efficiency 20%",
    "Developed and deployed the AI chatbot using AWS EC2 automating it using a PM2 CI/CD pipeline and Nginx web\n server. Built the internal Javascript/Typescript REST APIs, integrated with the Pinecone vector database"
  ],
  },

  {
    company: "FinTech Startup Project",
    logo: "https://i.postimg.cc/BLbx5qvz/delta-rating-logo.jpg",
    title: "ML and Full-Stack Software Engineer",
    location: "New York, NY",
    description:
      "Built a custom ML & DL model, Data Engineered and experimented with Cool Full Stack stuff for FinTech",
    icon: React.createElement(CgGames),
    date: "March 2023 - May 2023",
    tags: ["ML Model", "NLP", "Clustering", "Data ETL", "Jupyter", "Python", "Big Data", "OpenAI", "DL", "React", "React Native", "Redux", "Javascript", "Typescript", "MUI", "Tailwind", "Square Payments SDK", "Firebase", "MongoDB", "REST API", "GraphQL API", "SQL", "CI/CD Pipeline"],
    bullets: ["Created a Hybrid machine learning & Deep learning algorithm to forecast student loan ratings on scale of 10 using\naggregated student financial data >100k records increasing 80% chances of students getting approved for a loan",
      "Enhanced the Machine learning model performance using 100GB of additional historical aggregated student data and\nperformed hyper parameter tuning for 100+ financial features eliminating the non-essential ones",
      "Developed React Native with Redux powered web application using Material UI with Secure payment portal using\nSquare payments REST API integrating FireBase Cloud Database using SQL increasing user traffic by 30%",
      "Built the Local Backend architecture with the scalability to AWS improving latency and throughput of API requests\nand CI/CD pipeline by 20% to handle computation of the Machine Learning Model infrastructure",
  ],
  },
  {
    company: "Corestack.io",
    logo: "https://i.postimg.cc/z3pFsgnh/corestack-logo.jpg",
    title: "ML and Full-Stack Software Engineer",
    location: "New York, NY",
    description:
      "Built a REST API(Custom Spacy), ML model in a heavy Backend focussed role",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Dec 2022",
    tags: ["Data", "ETL", "Chatbot", "Spacy", "ML", "Clustering", "Custom API Dev", "Linux", "RASA", "Next.js", "JavaScript", "Typescript", "AWS", "Tailwind", "Prisma"],
    bullets: ["Developed a custom Spacy Machine learning model for a RASA powered AI Chatbot integrated with external &\n internal APIs to give custom set of suggestions on input improving user efficiency with 90% accurate keywords",
    "Collaborated with a team of Machine learning and Software engineers to build the Machine learning model powered\n Custom Chatbot improving user experience and customer retention rate by 20%",
    "Developed a RASA powered AI chatbot using React.js with HTML5 ,CSS3 and TypeScript integrated with custom\nexternal API functions and internal RESTful APIs to generate cloud costs, forecasts filtered based on the user input",
    "Integrated custom Spacy Machine learning Model and ETL pipeline into chatbot to give a set of relevant keyword\nsuggestions seamlessly improving user traffic by 30% using Linux serverless architecture",
  ],
  },
  
  {
    company: "Columbia Build Lab",
    logo: "https://i.postimg.cc/s22zM14g/columbia-build-lab.jpg",
    title: "Full-Stack Software Engineer Intern",
    location: "New York, NY",
    description:
      "Building a Stock and Cryptocurrency/Web3 based Backend and Frontend application using React.js",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - May 2022",
    tags: ["React", "Web3", "JS", "TS", "AWS", "PostgreSQL", "Figma", "MongoDB", "GraphQL", "REST", "API", "Git", "CI/CD"],
    bullets: ["Developed a Cryptocurrency React.js web3 payments app with AWS CloudWatch, DynamoDB and PostgreSQL with\nMongoDB Atlas Database to improve latency of >10 custom built integrated JavaScript API real-time requests",
      "Designed Figma wireframes & constructed Java web app using HTML & CSS powered with MongoDB Atlas, AWS\narchitecture & GitHub based collaboration and CI/CD pipeline improving customer engagement by 10%",
  ],

  },
  {
    company: "WIT Legal",
    logo: "https://i.postimg.cc/GmLtjLxZ/wit-legal-llc.png",
    title: "ML Software Engineer Intern",
    location: "New York, NY",
    description:
      "Built a Machine learning model helping optimize the Database Search Engine",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - Feb 2022",
    tags: ["Python", "ML", "Big Data", "Data Engineering", "ETL", "NLP", "Clustering", "Database", "Legal Tech"],
    bullets: ["Implemented OpenAI API based custom Machine Learning model using Python on Big Data Resume Database\n(>10,000 records) for Keyword Search Optimization & Generation with a team of Engineers achieving 80% accuracy",
      "Built a Custom Machine learning pipeline with Natural Language Processing of the 10000+ Resumes and a\nkeyword clustering Machine learning model to increasing 50% Legal work efficiency with an enhanced Database\nsearch algorithm",
  ],
  },
  {
    company: "Allure Security",
    logo: "https://i.postimg.cc/xdX1yLdZ/allure-security.png",
    title: "Full Stack Software Engineer Intern",
    location: "New York, NY",
    description:
      "Built an Android application end to end in the to preveny Cybersecurity attacks",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Sep 2021",
    tags: ["Java", "Android", "Phishing", "HTML", "CSS", "REST API", "Real-time API request & logging", "Native"],
    bullets: [ "Created ScamSlayer, Android App with a team of 10 Senior Developers to protect users from Phishing/Scam websites\nAnalyzed Chrome Browsing URLs in real-time to prevents users from browsing websites with Scam score(SS) > 70",
    "Integrated URLs into Background thread based real-time Allure PIE API requests to obtain Phishing/Scam scores from Server\nDevised Anti-Phishing/Scam techniques for Chrome URLs based API data to improve SS accuracy through previous user activity",
  ],
  },
  {
    company: "Columbia University",
    logo: "https://i.postimg.cc/X7sDkGXM/columbia-university.webp",
    title: "Software Engineer Intern - AI/ML and Full Stack",
    location: "New York, NY",
    description: 
      "Researched AI/ML techniques, Developed a Chrome Browser Extension",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Jul 2021",
    tags: ["Python", "ML", "Silhouette", "SSL", "Decryption", "Big data", "Chrome Browser Extension", "Javascript", "HTML", "CSS", "GCP", "REST API", "Data engineering"],
    bullets: ["Created Machine Learning & Silhouette algorithms on 10000+ SSL encrypted pcap files to classify video streams\nin python achieving 70% efficiency in detection of video streaming packets", 
      "Enhanced the performance of the Machine learning model by 20% using hyper parameter tuning of the relevant\nnetwork packet features collected using Automated crone job Python scripts and data processing pipelines",
      "Constructed JavaScript ES6, HTML5 & CSS3 Chrome browser extension integrated with Google Cloud Platform\nand internal Machine learning REST API to prevent financial data phishing on >100 domain websites",
      "Detected malicious payloads from websites, generated & sent fake data using JavaScript RESTful API server\nrequests"
  ],
  },
  
  {
    company: "Columbia University",
    logo: "https://i.postimg.cc/X7sDkGXM/columbia-university.webp",
    title: "Masters in Computer Science",
    location: "New York, NY",
    description:
      "Majored in AI and Cybersecurity",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2021 - May 2022",
    tags: ["Adv. Software Engineering", "Intrusion Detection Systems", "ML Research", "Chrome Browser Extension Project", "UI Design", "Python", "GCP", "Ruby on Rails", "HTML", "CSS"],
    bullets: [ "Advanced AI/ML and Cybersecurity Software Engineering skills"],
  },

  {
    company: "Cognizant",
    logo: "https://i.postimg.cc/L5NkCJPW/cognizant.jpg",
    title: "Software Engineer",
    location: "Bangalore, India",
    description:
      "Worked as a Security Engineer building Python Scripts for automation, GRC",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Jan 2021",
    tags: ["GRC", "Python", "Scripts", "Big Data", "Automation", "RSA Suite", "Docker", "IAM", "Okta", "Java", "CyberArk", "YAML", "SailPoint", "IdentityIQ", "JavaScript", "CyberSecurity"],
    bullets: [
      "Examined and reviewed Big Data for Governance, Risk & Compliance utilizing RSA Archer Suite & automation\nusing python scripts deployed on containerized(Docker) business web applications securing 10000+ IAM roles",
       "Deployed Okta's Java Software Development Kit, CyberArk - YAML & SailPoint IdentityIQ - JavaScript for\n privileged Identity and Access Management in cloud applications enhancing security by 80%"
  ],
  },

  {
    company: "Ramaiah Institute of Technology",
    logo: "https://i.postimg.cc/Dz3Ty0WH/ramaiah.png",
    title: "Bachelors in Information Science and Engineering",
    location: "Bangalore, India",
    description:
      "Majored in Computer Science related Practical application topics",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2016 - Sep 2020",
    tags: ["OOPS", "Java", "Databases", "Python", "J2EE", "Software engineering"],
    bullets: ["Basics of Software Engineering"],
  },
 
 

] as const;

export const projectsData = [
  {
    title: "Github Org History",
    description:
      "Full Stack and FinTech Project with ForeCasting API",
    tags: ["Vue.js", "Vite", "Typescript", "Go", "JavaScript", "Git", "Vercel", "Tailwind", "Docker", "CSS", "GraphQL", "REST", "API", "Python"],
    imageUrl: githuborgImg,
    githubUrl: "https://github.com/mohith2017/github-org-history",
  },
  {
    title: "Spark - Fintech App & Payments",
    description:
      "A sophisticated form with payments and FinTech capability",
    tags: ["ML", "ETL", "Python", "Big Data", "DL", "React", "Redux", "JS/TS", "MUI", "Tailwind", "Square Payments SDK", "Firebase", "REST & GraphQL API", "SQL", "CI/CD"],
    imageUrl: fintechappImg,
    githubUrl: "https://github.com/mohith2017/spark_application",
  },
  {
    title: "Anomaly Detection using ML",
    description:
      "Open Source ETL, Data Processing and Anomaly detection of a Log based dataset using Machine Learning",
    tags: [
      "Data",
      "ETL",
      "ML",
      "Anomaly detection",
      "IsolationForest",
      "Python",
      "Jupyter Notebook",
      "Shap",
      "ScikitLearn",
      "Ensemble Learning"
     ],
    imageUrl: anomolydetectionImg,
    githubUrl: "https://github.com/mohith2017/anomaly-detection-machine-learning",
  },
] as const;

export const addnProjectsData = [
  {
    title: "My PortFolio",
    description:
      "My Awesome Portfolio as a Full Stack and AI Developer ;)",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Framer Motion",
      "Resend Email API"
     ],     
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/mohith2017/mohithmanohar",
  },
  {
    title: "LLM Eval AI Application",
    description: 
      "My LLM Eval AI Developer Tool to structure LLM Pipeline responses from GPT-4",
    tags: [
      "Flask",
      "Python",
      "HTML",
      "CSS",
      "Parallel computation",
      "OpenAI's GPT-3.5",
      "LLM",
      "HuggingFace",
      "DataBricks",
      "MLFlow",
      "Benchmark Evaluation"
     ]
     ,
    imageUrl: llmevalImg,
    githubUrl: "https://github.com/mohith2017/llm-eval-ai-app",
  },
  {
    title: "Medical History Report Generation",
    description:
      "Web app simulation to display Patient medical records through a JSON(API request) input",
    tags: ["Next.js", "Typescript", "JavaScript", "CSS", "HTML", "CSS", "REST API", "Nginx", "Vercel", "Jo"],
    imageUrl: githuborgImg,
    githubUrl: "https://github.com/mohith2017/nextjs-report-frontend-medical",
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
    "Figma",
    "PyTorch"
   
] as const;
