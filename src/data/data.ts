import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { BlogData } from "../interfaces/blogs";
import { Link } from "../interfaces/interfaces";

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
