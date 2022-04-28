import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { JobData, Link } from "../interfaces/interfaces";
import CompanyImg from "../assets/img/company.png";
import { BlogData } from "../interfaces/blogs";
import { SkillData } from "../interfaces/skills";
import NestLogo from "../assets/img/nestjs-logo.svg";
import ReactLogo from "../assets/img/react-js.svg";
import NodeLogo from "../assets/img/nodejs-logo.svg";
import TSLogo from "../assets/img/ts-logo.svg";
import SpringLogo from "../assets/img/spring-logo.svg";
import SqlLogo from "../assets/img/sql.svg";

export const ResumeURL: string = `
https://drive.google.com/file/d/1KgEFasjmb4j_ojjdqAQtFVzdevJRnsr1/view?usp=sharing
`;

export const SocialLinks: Link[] = [
  {
    title: "Instagram",
    link: "https://instagram.com/jdavellaneda.dev",
    img: BsInstagram,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jdavellanedag/",
    img: BsLinkedin,
  },
  {
    title: "Github",
    link: "https://github.com/jdavellanedag",
    img: BsGithub,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/TheZadock",
    img: BsTwitter,
  },
];

export const Data: JobData = {
  jobs: [
    {
      id: 1,
      title: "Accenture",
      year: "2018 - 2021",
      img: CompanyImg,
      description: `
      I worked as a Developer for projects within some telco companies in Colombia.
      I mostly worked as a backend developer with C#, Java and Node, but I also supported some
      projects working with forntend technologies like Angular.
      `,
      tags: [
        {
          name: "Java",
        },
        {
          name: "C#",
        },
        {
          name: "Javascript",
        },
        {
          name: "No SQL",
        },
      ],
    },
    {
      id: 2,
      title: "Zemsania",
      year: "2018",
      img: CompanyImg,
      description: `
      I worked as a Developer for projects within Accenture. I mostly used Java, SOA and Linux.
      `,
      tags: [
        {
          name: "Backend",
        },
        {
          name: "DB",
        },
        {
          name: "Java",
        },
      ],
    },
    {
      id: 3,
      title: "TIS",
      year: "2017",
      img: CompanyImg,
      description: `
      I worked as an IT consultant for projects within Telefonica Colombia. The main project was to support the
      OIM application (Oracle Identity Manager), this implies using Java, Oracle, Weblogic, SOA and Linux.`,
      tags: [
        {
          name: "Backend",
        },
        {
          name: "DB",
        },
        {
          name: "Java",
        },
      ],
    },
  ],
};

export const Blog: BlogData = {
  blogs: [
    {
      id: 1,
      title: "There isn't title yet",
      subtitle: "Pending",
      date: "19-04-2022",
      description: "I'll write something cool soon, I'm just thinking",
    },
    {
      id: 2,
      title: "There isn't title yet",
      subtitle: "Pending",
      date: "19-04-2022",
      description: "I'll write something cool soon, I'm just thinking",
    },
  ],
};

export const Skills: SkillData = {
  skills: [
    {
      id: 1,
      name: "Nest Js",
      img: NestLogo,
      stars: 3,
    },
    {
      id: 2,
      name: "React",
      img: ReactLogo,
      stars: 2,
    },
    {
      id: 3,
      name: "Node",
      img: NodeLogo,
      stars: 3,
    },
    {
      id: 4,
      name: "TS",
      img: TSLogo,
      stars: 3,
    },
    {
      id: 5,
      name: "Java/Spring",
      img: SpringLogo,
      stars: 4,
    },
    {
      id: 6,
      name: "SQL",
      img: SqlLogo,
      stars: 4,
    },
  ],
};
