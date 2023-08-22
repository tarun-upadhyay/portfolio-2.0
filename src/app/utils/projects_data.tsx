import Shephora from "./Images/Shephora.gif";
import Coshedule from "./Images/Coshedule.gif";
import Html from "./Images/logo/html.png";
import Css from "./Images/logo/css.jpg";
import js from "./Images/logo/js.png";
import React from "./Images/logo/react.png";
import Redux from "./Images/logo/redux.png";
import chakra from "./Images/logo/chakra.png";
import git from "./Images/logo/gthub.png";
import vs from "./Images/logo/Visual_Studio_Code_1.35_icon.svg.png";
import cyp from "./Images/logo/cypress.png";
import bootstrap from "./Images/logo/Bootstrap_logo.svg.png";
import exp from "./Images/logo/express.png";
import jest from "./Images/logo/jest.png";
import mong from "./Images/logo/mongo.png";
import moongose from "./Images/logo/mongoose.png";
import npm from "./Images/logo/npm.png";
import nextjs from "./Images/logo/nextjs.png";
import tailwind from "./Images/logo/taiwindCss.png";
import sql from "./Images/logo/sql.png";
import java from "./Images/logo/java.png";
import jQuery from "./Images/logo/jQuery.png";
import LinkDin from "./Images/clinkedin.png";
import Email from "./Images/email.png";
import jcrew from "./Images/jcrewclone.png"
import Trip from "./Images/Tripvillas.gif";
import Instagram from "./Images/logo/instagram-icon.jpg";
import NordJs from "./Images/logo/nodejs.png";
import Geekbuying from "./Images/geekbuying.png"


export let projectsData = [
  {
    id: 2,
    img: jcrew,
    alt: "Jcrew clone",
    name: "Jcrew Clone",
    github: "https://github.com/tarun-upadhyay/noiseless-cub-8646",
    deployed: "https://tarun-upadhyay.github.io/Jcrew-frontend/",
    detail:"An E-commerce web app the ultimate online hub for trendy fashion and exquisite cosmetics delivering a seamless shopping journey.",
    tech: ["React", "React-Redux", "Chakra-UI", "NodeJs", "ExpressJs", "Mongo DB","Styled-Components",],
    type: "Full Stack",
  },
  {
    id: 3,
    img: Geekbuying,
    alt: "Geek buying clone",
    name: "Geekbuying Clone",
    github: "https://github.com/tarun-upadhyay/sensitive-meat-4664",
    deployed: "https://geekbuyingsclone.netlify.app/",
    detail:"Geekbuying Clone is an e-commerce web application that allows you to buy tools & assc. online. It has a variety of categories, just visit the product listing page and you will see all the products, in just a few clicks you can buy any product from the website. This project is just for educational purposes.",
    tech: ["React", "React-Redux", "Chakra-UI", "Local-Stroage", "Json-Server"],
    type: "Frontend",
  },

  {
    id: 4,
    img: Trip,
    alt: "TripVilla clone",
    name: "Tripvillas Clone",
    github: "https://github.com/1301yashraj/fleet-lock-616",
    deployed: "https://polite-muffin-b118b2.netlify.app/",
    detail:
      "Largest holiday home rental portal in Asia. Browse your ideal vacation home from over 100000 holiday homes spread across destinations.",
    tech: ["HTML", "CSS", "Javascript"],
    type: "Frontend",
  },

  {
    id: 6,
    img: Coshedule,
    alt: "Coshedule",
    name: "Coshedule Clone",
    github: "https://github.com/akaushik509/WEB101_Project",
    deployed: "https://dynamic-lebkuchen-4099a2.netlify.app/#",
    detail:
      "This project is about clone of Shephora.com which is an e-com store & here  implemented some features like sorting, singing-up, add to cart etc.",
    tech: ["HTML", "CSS", "Javascript"],
    type: "Frontend",
  },
];
export let logo = [
  {
    id: 1,
    image: `https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png`,
    alt: "HTML",
    rounded: false,
    key: 1,
  },
  {
    id: 2,
    image: Css,
    alt: "CSS",
    rounded: false,
    key: 2,
  },
  {
    id: 3,
    image: js,
    alt: "JavaScript",
    rounded: false,
    key: 3,
  },
  {
    id: 4,
    image: jQuery,
    alt: "jQuery",
    rounded: false,
    key: 4,
  },
  {
    id: 5,
    image: React,
    rounded: false,
    alt: "React",
    key: 5,
  },

  {
    id: 6,
    image: Redux,
    alt: "Redux",
    rounded: false,
    key: 6,
  },
  {
    id: 7,
    image: bootstrap,
    alt: "Bootstrap",
    rounded: true,
    key: 7,
  },
  {
    id: 8,
    image: tailwind,
    alt: "Tailwind",
    rounded: true,
    key: 8,
  },

  {
    id: 9,
    image: chakra,
    alt: "Chakra UI",
    key: 9,
    rounded: true,
  },
  {
    id: 22,
    image: nextjs,
    alt: "Nextjs",
    rounded: false,
    key: 22,
  },
  {
    id: 10,
    image: NordJs,
    alt: "NodeJS",
    rounded: false,
    key: 10,
  },
  {
    id: 11,
    image: exp,
    alt: "Express.js",
    rounded: false,
    key: 11,
  },
  {
    id: 12,
    image: mong,
    alt: "MongoDB",
    rounded: false,
    key: 12,
  },

  {
    id: 13,
    image: java,
    alt: "Java",
    rounded: true,
    key: 13,
  },

  {
    id: 14,
    image: sql,
    alt: "SQL",
    rounded: true,
    key: 14,
  },
  {
    id: 15,
    image: vs,
    alt: "vs CODE",
    rounded: false,
    key: 15,
  },

  {
    id: 16,
    image: npm,
    alt: "NPM",
    rounded: true,
    key: 16,
  },
  {
    id: 17,
    image: git,
    alt: "GIT",
    rounded: true,
    key: 17,
  },
];

export let allSocialMediaLink = [
  {
    name: "GitHub",
    icon: git,
    link: "https://github.com/tarun-upadhyay",
  },
  {
    name: "LinkedIn",
    icon: LinkDin,
    link: "https://www.linkedin.com/in/tarun-kr-upadhyay/",
  },

  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/tarun_kr_upadhyay/",
  },
  {
    name: "Mail me",
    icon: Email,
    link: "mailto:tarunu88@gmail.com",
  },
];
