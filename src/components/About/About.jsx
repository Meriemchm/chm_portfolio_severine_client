import React from "react";
import { links } from "../Data/Data";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div data-aos="fade-up" name="a propos" className="flex w-full pb-10 ">
      <div className="mx-auto flex flex-col-reverse justify-center items-center px-8 my-16 gap-5 xl:gap-0 xl:flex-row xl:my-0 xl:w-full ">
        <div className="flex flex-col xl:justify-center md:px-8 xl:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bol">
            Je suis <span className="text-second">Séverine</span>{" "}
          </h2>
          <p className="text-primary">communication et developpement web</p>
          <div className="flex my-2">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="py-8 lg:pr-10 md:w-full">
            Je m’appelle Allagui Séverine. Diplômée d'une école de commerce
            (bac+5), j’ai pu étudier{" "}
            <span className="text-primary">
              la communication, le marketing, et les systèmes d’information
            </span>{" "}
            . J’ai également étudié{" "}
            <span className="text-primary">les neurosciences</span> lors d’une
            formation universitaire de niveau licence...
            <br />
            <br />
            Suite à une formation chez OpenClassrooms en{" "}
            <span className="text-primary">développement web</span> , j’ai pu
            approfondir les langages de développement web, et le
            référencement...
            <br />
            <br />
            Développeur web{" "}
            <span className="text-primary">passionnée et créative</span> , je
            suis sans cesse à la recherche d’opportunités nouvelles. En effet,
            je suis <span className="text-primary">compétente</span> en{" "}
            <span className="text-primary"> communication </span>,{" "}
            <span className="text-primary">création de site web</span>,{" "}
            <span className="style_R">création graphique</span>,{" "}
            <span className="style_R">stratégie digitale</span> et{" "}
            <span className="text-primary">développement d’audience</span> .
            <br />
            <br />
            Constamment{" "}
            <span className="style_R">
              à l’affut des dernières tendances en matière de développement web
            </span>
            , je suis également capable de{" "}
            <span className="text-primary ">
              comprendre les clients et leurs différents enjeux
            </span>
            , ce qui me différencie des autres prestataires proposant des
            services identiques. <span className="text-primary">Créative</span>,
            et <span className="text-primary">adaptative</span>, je saurai
            parfaitement m’intégrer à une équipe, pour fournir des produits et
            services de qualité.
            <br />
            <br />
            <span className="text-primary">Passionnée</span>,{" "}
            <span className="text-primary">polyvalente</span>,{" "}
            <span className="text-primary">
              et ayant le goût de la nouveauté
            </span>
            , je suis constamment à l'affût de nouveaux projets pour enrichir
            mes expériences. Si vous avez de nouveaux projets, n’hésitez pas à
            me contacter ; afin de développer ensemble un produit ou un service
            intelligible....
          </p>
          <div className="flex gap-5">
            <button className="bg-second  border-[1px] border-second text-white px-5 py-2 rounded-md   text-bold duration-200 hover:scale-105  ">
              {" "}
              <Link to="contact" smooth={true} duration={500}>
                Me contacter
              </Link>
            </button>
            <button className="bg-tansparent  border-[1px] border-second text-second px-5 py-2 rounded-md text-bold duration-200 hover:scale-105  ">
              {" "}
              <a href="/CV_allagui_severine.pdf" target="_blank">
                Voir mon cv
              </a>
            </button>
          </div>
        </div>
        <div className="bg-primary rounded-lg md:flex items-center justify-center p-2 md:w-[20rem] h-[20rem] w-[15rem]  md:h-[23rem] relative mb-16">
          <img
            src="profile.png"
            alt="MyProfile"
            className="rounded-lg mx-auto md:w-[20rem] h-[20rem] w-[15rem] md:h-[23rem] object-cover  absolute -top-8 -left-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
