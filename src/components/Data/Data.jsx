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
    link: "a propos",
  },
  {
    id: 7,
    link: "compétences",
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
    src: "bookimg.JPG",
    title: "Booki",
    description:
      "L'objectif était d'intégrer la maquette d'un site de planification de vacances nommé 'Booki', en respectant les spécifications fonctionnelles et techniques.",
    hcode: "https://github.com/dalsantosev/gitproject-3",
    hdemo: "https://dalsantosev.github.io/gitproject-3/",
    pdf: "booki.pdf",
  },
  {
    id: 2,
    src: "sofie.JPG",
    title: "Sophie Bluel",
    description:
      "L’objectif était de concevoir le site portfolio d'une architecte d'intérieur et de le rendre dynamique en utilisant JavaScript. Le site devait permettre de faire un tri des projets par catégorie dans la galerie, mais aussi de reprendre dynamiquement les données des travaux de l’architecte via une API. Il devait également permettre à l'architecte de se connecter pour éditer son site. Pour finir, ce site devait être constitué d'une modale lui permettant de gérer ses projets : ajout, suppression de projet,...",
    hcode: "https://github.com/dalsantosev/Projet-6---Sophie-Bluel",
    hdemo: "",
    pdf: "SophieBluel.pdf",
  },

  {
    id: 3,
    src: "kasaimg.JPG",
    title: "Kasa",
    description:
      "Ce projet captivant a consisté à créer la plateforme web pour Kasa, une entreprise spécialisée dans la location d'appartements entre particuliers. J'ai développé la plateforme en concevant le routeur et les différentes pages, grâce à React. J'ai créé un carrousel, utilisé des composants réutilisables, et mis en place une gestion des tests...",
    hcode: "https://github.com/dalsantosev/Projet-8",
    hdemo: "",
    pdf: "Kasa.pdf",
  },
  {
    id: 4,
    src: "qwentaimg.JPG",
    title: "Qwenta",
    description:
      "Je devais mettre en place une veille informationnelle avec un outil prévu à cet effet (voir Demo), mais aussi mettre en place les spécifications techniques à partir des spécifications fonctionnelles, de la maquette ainsi que des user stories. Je devais également mettre en place un kanban pour la mission avec l'outil de mon choix.",
    hcode: "https://github.com/dalsantosev/Projet-7",
    hdemo: "https://trello.com/b/K1fX2qDh/kanban",
    pdf: "Qwenta.pdf",
  },
];

export const services = [
  {
    id: 1,
    src: "icons8-pen-100.png",
    title: "Création de logo",
    description:
      "Création de logo et d’identité visuelle et supports imprimés ( cartes de visites, plaquettes, affiches)",
    style: "border-second",
  },
  {
    id: 2,
    src: "icons8-web-64.png",
    title: "Création de site web",
    description: "Création de sites internet",
    style: "border-second",
  },
  {
    id: 3,
    src: "icons8-lecture-64.png",
    title: "Conseil en développement des Campagnes",
    description:
      "Des campagnes de communication coordonnées avec la gestion des réseaux sociaux",
    style: "border-second",
  },
  {
    id: 4,
    src: "communication-blue.png",
    title: "Conseil en communication",
    description: "Conseil en communication et marketing",
    style: "border-second",
  },
];

export const menuItemSolution = [
  {
    id: 1,
    path: "/TPE/PME",
    title: "TPE/PME",
    icon: "icons8-combo-chart-100.png",
  },
  {
    id: 2,
    path: "/CréateursEntreprise",
    title: "Créateurs d’entreprise",
    icon: "icons8-business-group-100.png",
  },

  {
    id: 3,
    path: "/RepreneursEntreprisese",
    title: "Repreneurs d’entreprise",
    icon: "repreneur-entreprise.png",
  },

  {
    id: 4,
    path: "/GrandsComptes",
    title: "Grands comptes",
    icon: "icons8-business-report-96.png",
  },
];

export const ServiceSolution = [
  {
    id: 1,
    src: "advice-red.png",
    title: "Conseil en communication",
    description:
      "Avant de créer tout support de communication, j’essaye de penser à son impact. En communication, celui qui s’adapte et anticipe le mieux, obtient la meilleure des réputations.J'essaye toujours de trouver des solutions sur mesure et adaptées à vos besoins, budgets, et enjeux.... ",
    style: "border-primary",
  },
  {
    id: 2,
    src: "creation-de-sites-web.png",
    title: "Conseil en communication digitale ",
    description:
      "Je pourrais créer pour vous des sites internet responsives, et des applications mobiles... Je saurai vous conseiller et réaliser des outils adaptés à vos projets...",
    style: "border-primary",
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
