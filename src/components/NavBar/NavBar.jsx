import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";
import { Link as Links } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // seuil de défilement à partir duquel la couleur de fond est modifiée

    if (scrollY > threshold) {
      setBgColor('bg-gradient-to-r ');

    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div  className={`bg-white flex justify-between items-center w-full h-20  px-4 md:px-20 fixed z-10`}    >
      <div>
        <h1 className=" font-extrabold  text-4xl ml-2 md:text-5xl ">
          Logo
        </h1>
      </div>

      <ul className="hidden 2xl:flex ">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-8 cursor-pointer font-light text-lg hover:scale-105 duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10  2xl:hidden"
      >
        {show ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-gray-500" />}
      </div>
      {show && (
        <ul className={`bg-second text-white flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen transition-transform transform ${show ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}>
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-2xl hover:scale-105 duration-200 capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <button className="bg-primary text-white px-5 py-2 rounded-md border-4  text-bold duration-200 hover:scale-105 lg:hidden hidden 2xl:block">
        {" "}
        <Links to="/Rendez-vous" smooth duration={500}>
          Rendez-vous
        </Links>
      </button>
    </div>
  );
};

export default NavBar;