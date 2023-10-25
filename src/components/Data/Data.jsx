import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { BiLogoGit, BiPodcast } from "react-icons/bi";
import { MdPersonalVideo } from "react-icons/md";

export const techs = [
  {
    id: 1,
    child: <FaReact color="white" size={40} />,
    title: "React",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "frontend",
  },
  {
    id: 2,
    child: <SiTailwindcss className="text-four" size={40} />,
    title: "tailwindcss",
    style: "",
    type: "frontend",
  },
  {
    id: 3,
    child: <FaFigma className="text-four" size={40} />,
    title: "Figma",
    style: "",
    type: "design",
  },
  {
    id: 4,
    child: <BiLogoGit className="text-four" size={40} />,
    title: "Git & Github",
    style: "",
    type: "others",
  },
];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/dalsantosev/",
  },
  {
    id: 3,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:severinedalsanto@gmail.com",
  },
  // {
  //   id: 4,
  //   mobile: (
  //     <>
  //       <BsFillPersonLinesFill size={30} />
  //     </>
  //   ),
  //   style: "rounded-br-md",
  //   href: "/resume.pdf",
  //   download: true,
  // },
];

export const Navlink = [
  {
    id: 1,
    link: "accueil",
  },
  {
    id: 2,
    link: "apropos",
  },
  {
    id: 3,
    link: "savoir-faire",
  },
  {
    id: 4,
    link: "solutions",
  },
  {
    id: 5,
    link: "projets",
  },
  {
    id: 6,
    link: "contact",
  },
];

export const projects = [
  {
    id: 1,
    src: "portfolio.jpg",
    title: "portfolio",
    description: "lorem",
    hcode: "https://github.com/Meriemchm/ch-react-portfolio-ilyes",
    hdemo: "",
  },
  {
    id: 2,
    src: "podcast.jpg",
    title: "podcast",
    description: "lorem",
    hcode: "hcode",
    hdemo: "",
  },
];

export const menuItem = [
  {
    id: 1,
    path: "/portfolio",
    title: "portfolio",
    icon: <MdPersonalVideo size={25} className="text-white" />,
  },
  {
    id: 2,
    path: "/podcast",
    title: "podcast",
    icon: <BiPodcast size={25} className="text-white" />,
  },
];

export const formItem = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 3,
    name: "message",
    placeholder: "Enter your message",
    categorie: "textarea",
  },
];
