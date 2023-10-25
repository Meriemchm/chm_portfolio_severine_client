import React, { useState } from "react";
import Service from "../Service/Service";
import { menuItemSolution } from "../Data/Data";
import { ServiceSolution } from "../Data/Data";
const SolutionBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(
    menuItemSolution.map((index) => index === 0)
  );

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuItemSolution.map((i) => i === index);
    setActive(newActive);
  };
  return (
    <>
      <div className="rounded-md overflow-x-scroll w-full">
        <div className="flex flex-row gap-8 lg:gap-20 select-none bg-second justify-center px-100">
          {menuItemSolution.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex flex-col md:py-5 px-3 py-3 w-full items-center md:gap-5 gap-2 cursor-pointer 
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
      </div>
      <>
      <div className="md:px-36">
        <Service
          Title={menuItemSolution[activeTab].title}
          data={ServiceSolution}
        />
        </div>
      </>
    </>
  );
};

export default SolutionBar;
