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
    child: "html_1051277.png",
    title: "HTML",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "frontend",
  },
  {
    id: 2,
    child: "css-3_732190.png",
    title: "CSS",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "frontend",
  },
  {
    id: 3,
    child: "js_5968292.png",
    title: "JavaScript",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "frontend",
  },
  {
    id: 4,
    child: "photoshop.png",
    title: "PhotoShop",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "design",
  },
  {
    id: 5,
    child: "logo192.png",
    title: "React",
    style: " bg-gradient-to-r from-yellow-500 to-four",
    type: "frontend",
  },
  {
    id: 6,
    child: "nodejs.png",
    title: "Node.js",
    style: "",
    type: "frontend",
  },
  {
    id: 7,
    child: "sass.png",
    title: "SASS",
    style: "",
    type: "frontend",
  },
  {
    id: 8,
    child: "git.png",
    title: "Git",
    style: "",
    type: "others",
  },
  {
    id: 9,
    child: "github.png",
    title: "Github",
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

export const services = [
  {
    id: 1,
    src: "programmation-web.png",
    title: "La conception graphique",
    description:
      "création de logo et d’identité visuelle et supports imprimés ( cartes de visites, plaquettes, affiches)",
  },
  {
    id: 2,
    src: "programmation-web.png",
    title: "La communication digitale",
    description: "création de sites internet",
  },
  {
    id: 3,
    src: "programmation-web.png",
    title: "Le conseil en développement d’audience",
    description:
      "des campagnes de communication coordonnées avec la gestion des réseaux sociaux",
  },
  {
    id: 4,
    src: "programmation-web.png",
    title: "La stratégie de communication",
    description: "conseil en communication et marketing",
  },
];

export const menuItemSolution = [
  {
    id: 1,
    path: "/TPE/PME",
    title: "TPE/PME",
    icon: <MdPersonalVideo size={25} className="text-white" />,
  },
  {
    id: 2,
    path: "/CréateursEntreprise",
    title: "Créateurs d’entreprise",
    icon: <BiPodcast size={25} className="text-white" />,
  },

  {
    id: 3,
    path: "/RepreneursEntreprisese",
    title: "Repreneurs d’entreprise",
    icon: <BiPodcast size={25} className="text-white" />,
  },

  {
    id: 4,
    path: "/GrandsComptes",
    title: "Grands comptes",
    icon: <BiPodcast size={25} className="text-white" />,
  },
];

export const ServiceSolution = [
  {
    id: 1,
    src: "portfolio.jpg",
    title: "Conseil en communication",
    description:
      "Avant de créer tout support de communication, j’essaye de penser à son impact. En communication, celui qui s’adapte et anticipe le mieux, obtient la meilleure des réputations. ",
    service: "TPE/PME",
  },
  {
    id: 2,
    src: "podcast.jpg",
    title: "Conseil en communication digitale ",
    description:
      "Je pourrais créer pour vous des sites internet responsives, et des applications mobiles... Je saurai vous conseiller et réaliser des outils adaptés à vos projets...",
    service: "TPE/PME",
  },
  {
    id: 3,
    src: "podcast.jpg",
    title: "Conseil en communication",
    description:
      "Avant de créer tout support de communication, j’essaye de penser à sonimpact. En communication, celui qui s’adapte et anticipe le mieux, obtient la meilleure des réputations. Essayant toujours de trouver des solutions sur mesure et adaptées à vos besoins, budgets, et enjeux.",
    service: "Créateurs d’entreprise",
  },
  {
    id: 4,
    src: "podcast.jpg",
    title: "Conseil en communication digitale",
    description:
      " pour vous des sites internet responsives, et des applications mobiles... Je saurai vous conseiller et réaliser des outils adaptés à vos projets...",
    service: "Créateurs d’entreprise",
  },
];

export const formItem = [
  {
    id: 1,
    name: "nom",
    type: "text",
    placeholder: "Nom",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "prenom",
    type: "text",
    placeholder: "Prenom",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 4,
    name: "message",
    placeholder: "Message",
    categorie: "textarea",
  },
];
