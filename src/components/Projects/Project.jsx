import React, { useState } from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { FaTimes } from "react-icons/fa";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Project = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [pdfSrc, setPdfSrc] = useState("");
  const [hovered, setHovered] = useState(null);
  const newplugin = defaultLayoutPlugin();

  const togglePDF = (pdf) => {
    setShowPDF(!showPDF);
    setPdfSrc(pdf);
    if (!showPDF) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closePDF = () => {
    setShowPDF(false);
    setPdfSrc("");
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 text-center py-8 px-0 justify-center items-center ">
      {projects.map(({ id, src, title, description, hdemo, hcode, pdf }) => {
        return (
          <div
            key={id}
            className=" md:flex shadow-md shadow-gray-600 bg-white rounded-lg"
            style={{ width: "100%" }}
          >
            <div className="relative group w-full">
              <img
                src={src}
                alt="project-name"
                className="rounded-md h-52 w-full object-cover duration-200 "
                style={{ width: "100%" }}
              />
              <div
                onClick={() => togglePDF(pdf)}
                className="absolute inset-0  bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer select-none"
              >
                En savoir plus
              </div>
            </div>

            <div className="flex flex-col  text-gray-800 mx-5 my-4 justify-between">
              <h2 className="text-bold text-2xl capitalize mb-2 self-start">
                {title}
              </h2>
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
                {hdemo !== "" && (
                  <button className="flex w1/2 px-6 py-3 rounded-lg border-[2px] border-gray-200  duration-200 hover:scale-105">
                    <a href={hdemo} target="_blank" className="flex">
                      Demo{" "}
                      <span>
                        <CiShare1 size={20} className="ml-2 mt-1" />
                      </span>{" "}
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {showPDF && (
        <div className=" mt-10 fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="z-999999 bg-white w-2/3 h-5/6 p-4  overflow-y-auto rounded-md relative">
            <button
              onClick={closePDF}
              className="absolute top-1 left-3 z-10 text-xl font-bold text-gray-800"
            >
              <FaTimes size={30} className="text-black" />
            </button>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfSrc} />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
