
export const siteConfig = {
  name: "Palak Wadel",
  title: "Senior Technology Consultant",
  description: "Portfolio website of Palak Wadel",
  accentColor: "#1d4ed8",
  social: {
    email: "wadelpalak@gmail.com",
    linkedin: "https://www.linkedin.com/in/pwad",
    github: "https://github.com/PalakWadel"
  },
  aboutMe: "I’m Palak Wadel — a data analytics and technology solutions professional passionate about bridging analytics, AI, and business strategy. I specialize in designing and delivering intelligent reporting systems that turn complex data into actionable insights. With experience across analytics engineering, customer success, and implementation delivery, I thrive at the intersection of data storytelling, automation, and applied AI.",
  skills: [
    "Power BI",
    "DAX & Power Query",
    "SQL",
    "Snowflake",
    "Python",
    "Azure DevOps",
    "ServiceNow",
    "Data Modeling",
    "Reporting Automation",
    "LLM & AI Enablement",
    "Requirements Gathering",
    "Stakeholder Management",
    "UX for Dashboards",
    "KPI Development",
    "Agile & Scrum"
  ],
  projects: [
    {
      name: "WolfGPT – Enterprise AI Assistant",
      description: "Collaborated on the rollout of WolfGPT, an internal AI assistant designed to enable business users to query enterprise data using natural language. Contributed to defining metadata mappings, testing query accuracy, and integrating LLM outputs with Snowflake datasets for contextual insights.",
      link: "#",
      skills: ["LLM Integration", "Snowflake", "Power BI", "Prompt Engineering"]
    },
    {
      name: "Diamond Analytics Dashboard",
      description: "Designed and implemented Power BI dashboards for Shivam Jewels to monitor gemstone inventory, sales, and supplier performance. Improved decision-making for procurement and merchandising through automated visibility into margins and demand trends.",
      link: "#",
      skills: ["Power BI", "SQL", "Data Modeling", "Inventory Analytics"]
    },
    {
      name: "Spotfire to Power BI Migration Accelerator",
      description: "Led analytics modernization by transitioning legacy Spotfire dashboards to Power BI. Improved report refresh time, unified data models, and introduced standardized design principles for financial and procurement analytics.",
      link: "#",
      skills: ["Power BI", "SQL Server", "Azure DevOps", "Data Governance"]
    },
    {
      name: "DoWhistle Freight Management System",
      description: "Delivered full software lifecycle for a freight management solution — from business analysis to deployment. Optimized SQL-based reports and streamlined workflows through UML-driven process redesign.",
      link: "#",
      skills: ["SQL", "UML", "Business Process Analysis"]
    }
  ],
  experience: [
    {
      company: "Shivam Jewels, Inc.",
      title: "Data Analyst",
      dateRange: "Aug 2025 – Present",
      bullets: [
        "Building foundational analytics for a growing diamond company to track sales, inventory, and procurement trends.",
        "Standardizing raw POS and supplier data into structured models for accurate business reporting.",
        "Developing dashboards that highlight pricing trends, demand shifts, and margin opportunities."
      ]
    },
    {
      company: "Wolfspeed, Inc.",
      title: "Analytics Systems Engineer",
      dateRange: "Jun 2023 – Jun 2025",
      bullets: [
        "Led end-to-end delivery of enterprise Power BI solutions supporting global finance and procurement.",
        "Collaborated with engineers to optimize Snowflake pipelines and metadata alignment.",
        "Participated in the rollout of WolfGPT, mapping natural language queries to accurate report results."
      ]
    },
    {
      company: "DoWhistle",
      title: "IT Business Analyst",
      dateRange: "Jul 2022 – Dec 2022",
      bullets: [
        "Delivered freight management system from concept to launch, ensuring on-time project delivery and workflow efficiency.",
        "Translated complex business requirements into database architecture and SQL automation.",
        "Improved data visibility for operational teams through streamlined reporting."
      ]
    },
    {
      company: "Fiserv, Inc.",
      title: "Execution Specialist – Professional Services Consulting",
      dateRange: "Mar 2022 – Jun 2022",
      bullets: [
        "Led enterprise-scale core banking implementation projects aligning data and process reengineering.",
        "Facilitated cross-functional communication across technical and executive teams.",
        "Delivered post-go-live hypercare and incident management for large financial clients."
      ]
    },
    {
      company: "Big Branch Capital, LLC",
      title: "Research Analyst",
      dateRange: "May 2021 – Dec 2021",
      bullets: [
        "Conducted qualitative and quantitative evaluations of target companies for investment strategy.",
        "Produced data-backed market briefs supporting leadership’s investment decisions.",
        "Analyzed industry and regulatory trends to identify high-growth opportunities."
      ]
    }
  ],
  education: [
    {
      school: "CUNY Baruch College, New York City",
      degree: "Master of Science in Information Systems with Cybersecurity",
      dateRange: "Graduated",
      achievements: ["President of Cybersecurity Club"]
    },
    {
      school: "LIM College, New York City",
      degree: "Bachelor of Business Administration, Business",
      dateRange: "Graduated",
      achievements: ["Graduated Magna Cum Laude with 3.8 GPA", "Dean's List all semesters"]
    }
  ],
  certifications: [
    "Microsoft Power BI Data Analyst Associate",
    "IBM Cybersecurity Analyst",
    "AWS Certified Cloud Practitioner",
    "Business Intelligence & Data Analysis – CFI",
    "PMP (Planned)"
  ]
};


Original src-pages
---
import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";
import About from "../components/About.astro";
import Projects from "../components/Projects.astro";
import Experience from "../components/Experience.astro";
import Education from "../components/Education.astro";
import Footer from "../components/Footer.astro";
import { siteConfig } from "../config.ts";
import "../styles/global.css";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <meta name="description" content={siteConfig.description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <title>{siteConfig.name} - {siteConfig.title}</title>
  </head>
  <body>
    <Header />
    <section>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
    </section>
    <Footer />
  </body>
</html>

