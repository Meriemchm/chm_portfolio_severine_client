import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import SavoirFaire from '../SavoirFaire/SavoirFaire'
import Solutions from '../Solutions/Solutions'
// import Projects from '../Projects/Projects'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
      <About />
      <Skills/>
      <SavoirFaire/>
      <Solutions/>
      <Contact />

      {/* <div>
        <Link to="/Rendez-vous">Aller à la page 2</Link>
      </div> */}
    </div>
  );
};

export default Home;
