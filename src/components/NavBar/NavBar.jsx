import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";
import { Link as Links } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`bg-white flex justify-between items-center w-full h-20  px-4 md:px-20 fixed z-10`}
    >
      <div>
        <h1 className=" font-extrabold  text-4xl ml-2 md:text-5xl ">Logo</h1>
      </div>

      <ul className="hidden 2xl:flex items-center">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer hover:scale-105 duration-200 uppercase"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
        <button className="bg-primary text-white px-5 py-2 rounded-lg duration-200 hover:scale-105 lg:hidden hidden 2xl:block ml-5">
          {" "}
          <Links to="/Rendez-vous" duration={500}>
            Rendez-vous
          </Links>
        </button>
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10  2xl:hidden"
      >
        {show ? (
          <FaTimes size={30} className="text-white" />
        ) : (
          <FaBars size={30} className="text-gray-500" />
        )}
      </div>
      {show && (
        <ul
          data-aos="fade-left"
          className={`bg-second text-white flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen transition-transform transform ${
            show ? "translate-x-0" : "translate-x-full"
          } duration-300 ease-in-out`}
        >
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-xl hover:scale-105 duration-200 uppercase"
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
          <button className="bg-transparent border-[1px] border-white text-white px-5 py-2 rounded-lg text-xl duration-200 hover:scale-105 2xl:block mt-5">
            {" "}
            <Links to="/Rendez-vous" duration={500}>
              Rendez-vous
            </Links>
          </button>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
