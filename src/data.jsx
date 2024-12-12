import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/ecom.png";
import Work3 from "./assets/ev.png";
import Work4 from "./assets/pf.png";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/quiz.png";
import NoImg from "./assets/noImg.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Preetiranjan",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Sahoo",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Banglore",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91-8917579373",
  },

  {
    id: 8,
    title: "Email : ",
    description: "preetiranjansahoo388@mail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Preetiranjan Sahoo",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Hindi, English, Odia",
  },
];

export const stats = [
  {
    id: 1,
    no: "Fresher",
    title: "No <br /> Experience",
  },

  {
    id: 2,
    no: "15+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "81+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - PRESENT",
    title: "Technical Support Executive <span> eSSL </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023-2024",
    title: "Full-Stack Web Devlopement <span> Seeree Services </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Frontend Web Devlopement <span> OASYS Infobyte </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "B.Tech Degree <span> EATM </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Diploma <span> SVSE&T </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "10th <span> NKH High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "30",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "60",
  },

  {
    id: 3,
    title: "Css",
    percentage: "45",
  },

  {
    id: 4,
    title: "Java",
    percentage: "66",
  },

  {
    id: 5,
    title: "Spring-Boot",
    percentage: "30",
  },

  {
    id: 6,
    title: "React.js",
    percentage: "45",
  },

  {
    id: 7,
    title: "Redux",
    percentage: "25",
  },

  {
    id: 8,
    title: "Bootstrap",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: NoImg,
    title: "Smart Attendance System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Smart Attendance System",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "Spring Boot",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "E-Commerce Site",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-Commerce Site",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://preetiranjan-sahoo.github.io/ecommerce-site/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "EV-Landing Page",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://preetiranjan-sahoo.github.io/EV-Landing-Page/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Theme Customize Site",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Theme Customize Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "This site",
      },
    ],
  },

  {
    id: 5,
    img: NoImg,
    title: "Interactive Dashboard",
    details: [
      {
        title: "Project : ",
        desc: "Interactive Dashboard",
      },
      {
        title: "Framework : ",
        desc: "React",
      },
      {
        title: "Language : ",
        desc: "JS",
      },
      {
        title: "Preview : ",
        desc: "N/A",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Quiz App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Quiz App",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "React",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://preetiranjan-sahoo.github.io/Quiz-App/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
