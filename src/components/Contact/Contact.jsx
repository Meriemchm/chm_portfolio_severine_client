import React from "react";
import { formItem } from "../Data/Data";
import { Link as Links } from "react-router-dom";
const Contact = () => {
  const client = "https://getform.io/f/96dc7a6f-74c5-444c-87bf-ed40cd40cedb";
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  const endElemnt = inputItem.slice(-1)[0];
  return (
    <div data-aos="fade-up" name="contact" className="h-full py-20  ">
      <div className="pb-8 md:px-20">
        <div className="flex items-center">
          <p className="text-2xl md:text-4xl text-second font-bold p-2 inline">
            Contact
          </p>

          <div className="h-0.5 w-full bg-second"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start md:gap-20 md:w-full">
        <div className="px-5">
          <h2 className="text-bold text-2xl ">
            Collaborons ensemble et creons votre succès
          </h2>
          <p className="py-5">
            Envoyez moi un Email ou vous pouvez prendre rendez vous sur zoom en
            cliquant la dessus
          </p>
          <button className="text-second  px-5 py-2 rounded-md border-[1px] border-second text-bold duration-200 hover:scale-105 ">
            {" "}
            <Links to="/Rendez-vous" duration={500}>
              Rendez-vous
            </Links>
          </button>
        </div>

        <div className="p-5 flex backdrop-blur-lg bg-white/30 rounded-lg lg:w-1/3">
          <form
            action={client}
            method="POST"
            className="flex flex-col w-full justify-center mt-5 gap-4"
          >
            <p className="py-3 text-2xl md:text-4xl text-center">
              FORMULAIRE DE CONTACT
            </p>

            <div className="flex gap-1  ">
              {inputItem.slice(0, 2).map((item, id) => {
                return (
                  <input
                    key={id}
                    type={item.type}
                    name={item.name}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    required
                    className="w-1/2 p-2 md:px-5 bg-transparent border-[1px] border-black rounded-md text-black placeholder-black focus:outline-none"
                  />
                );
              })}
            </div>

            <input
              key={endElemnt.id}
              type={endElemnt.type}
              name={endElemnt.name}
              autoComplete="off"
              placeholder={endElemnt.placeholder}
              required
              className="p-2 bg-transparent border-[1px] border-black rounded-md text-black placeholder-black focus:outline-none"
            />

            {areaItem.map((item, id) => {
              return (
                <textarea
                  key={id}
                  name={item.name}
                  placeholder={item.placeholder}
                  rows="10"
                  autoComplete="off"
                  required
                  className="p-2 bg-transparent border-[1px] border-black rounded-md text-black placeholder-black focus:outline-none"
                ></textarea>
              );
            })}

            <button className="text-white bg-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
