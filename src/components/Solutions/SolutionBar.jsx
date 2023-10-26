import React, { useState } from "react";
import Service from "../Service/Service";
import { menuItemSolution } from "../Data/Data";
import { ServiceSolution } from "../Data/Data";
const SolutionBar = () => {
  return (
    <>
      <div className="mx-auto rounded-lg grid grid-cols-2 sm:grid-cols-4 lg:gap-20 select-none bg-second justify-center items-center ">
        {menuItemSolution.map((item, id) => {
          return (
            <div key={id}>
              <li
                className={`flex flex-col md:py-5 px-3 py-3 items-center md:gap-5 gap-2 cursor-pointer 
                  `}
              >
                <div
                  className={`m-auto flex justify-center items-center
                    
                      `}
                >
                  {item.icon}
                </div>
                <p className={`text-center capitalize text-white`}>
                  {" "}
                  {item.title}
                </p>
              </li>
            </div>
          );
        })}
      </div>

      <>
        <div className="md:px-36">
          <Service Title="" data={ServiceSolution} />
        </div>
      </>
    </>
  );
};

export default SolutionBar;
