import regxiBrand from "../assets/brands/regxi.webp";
import contolloBrand from "../assets/brands/contollo.webp";
import tiHouseBrand from "../assets/brands/ti_house.webp";

export interface WorkExperience {
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string;
  brand: string;
  page_url: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company_name: "REGXI S.A",
    position: "Full Stack Software Engineer",
    description:
      "Led the development of an ERP system from scratch, optimizing logistics processes by 40%. Collaborated with design and marketing teams to align digital products with business goals. Implemented CI/CD practices, reducing the time to launch new features by 50%.",
    start_date: "04.2023",
    end_date: "08.2024",
    brand: regxiBrand,
    page_url: "https://regxi.com/en/",
  },
  {
    company_name: "Contollo Consulting",
    position: "Full Stack Software Engineer",
    description:
      "Designed a conversational AI bot based on ChatGPT with 3D avatar rendering and real-time voice processing using Azure Speech. Also developed an API Key authentication system in NestJS for secure cross-platform integrations.",
    start_date: "10.2024",
    end_date: "02.2025",
    brand: contolloBrand,
    page_url: "https://www.contollo.net",
  },
  {
    company_name: "Ti House",
    position: "Full Stack Software Engineer",
    description:
      "Improved web system performance by 23% through a real-time order tracking system using Socket.io and NoSQL. Helped reduce page load times by 15%, and decreased ERP errors by implementing NestJS Pipes to enhance security and HTTP request handling.",
    start_date: "03.2021",
    end_date: "12.2022",
    brand: tiHouseBrand,
    page_url: "https://tihouseni.com",
  },
];
