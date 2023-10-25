import React, { useState } from "react";
import Service from "../Service/Service";
import { menuItemSolution } from "../Data/Data";
import { ServiceSolution } from "../Data/Data";
const SolutionBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(
    menuItemSolution.map((item, index) => index === 0)
  );

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuItemSolution.map((item, i) => i === index);
    setActive(newActive);
  };
  return (
    <>
      <div className="md:w-1/3 md:h-96 shadow-md overflow-y-scroll ">
        <div className="flex flex-row md:flex-col gap-5 p-2 select-none ">
          {menuItemSolution.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex md:py-5 px-3 py-3 w-full md:px-5 justify-start items-center md:gap-5 gap-2 bg-gray-100/50 shadow-2xl lg:w-5/6 rounded-lg cursor-pointer hover:shadow-primary/30
                  `}
                >
                  <div
                    className={`flex  shadow-md shadow-white/50 backdrop-blur-sm rounded-lg w-12 h-12
                   
                    `}
                  >
                    <div
                      className={`m-auto rounded-md w-10 h-10   flex justify-center items-center
                    
                      `}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <p className={` text-bold capitalize `}> {item.title}</p>
                </li>
              </div>
            );
          })}
        </div>
      </div>
      <>
        <Service
          Title={menuItemSolution[activeTab].title}
          data={ServiceSolution}
        />
      </>
    </>
  );
};

export default SolutionBar;
