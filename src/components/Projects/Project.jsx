import React from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
const Project = () => {
  return (
    <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 text-center py-8 px-0 justify-center items-center ">
      {projects.map(({ id, src, title, description, hdemo, hcode }) => {
        return (
          <div
            key={id}
            className="mx-auto md:flex shadow-md shadow-gray-600 bg-white rounded-lg"
          >
            <img
              src={src}
              alt=""
              className="rounded-md h-52 w-full md:h-64 md:w-64 object-cover duration-200 hover:scale-[0.99]"
            />

            <div className="flex flex-col  text-gray-800 mx-5 my-4 justify-between">
              <h2 className="text-bold text-2xl capitalize mb-2 self-start">{title}</h2>
              <p className="text-start text-sm">{description}</p>
              <div className="flex justify-end items-end gap-3 mt-4">
                <button className="flex w1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={hcode} target="_blank" className="flex">
                    Code{" "}
                    <span>
                      <AiFillGithub size={25} className="ml-2" />
                    </span>
                  </a>
                </button>
                <button className="flex w1/2 px-6 py-3 rounded-lg border-[2px] border-gray-200  duration-200 hover:scale-105">
                  <a href={hdemo} target="_blank" className="flex">
                    Demo{" "}
                    <span>
                      <CiShare1 size={20} className="ml-2 mt-1" />
                    </span>{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
