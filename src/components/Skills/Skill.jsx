import React from "react";

const Skill = ({ data }) => {
  return (
    <>
      {/* <h2 className="text-2xl text-gray-500 py-4">{Title}</h2> */}
      <div data-aos="fade-up"  className="p-4 ">
        <div  className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0 justify-center rounded-2xl">
          {data.map(({ id, title, child }) => (
            <div
            
              key={id}
              className="flex flex-col justify-center items-center hover:scale-105 duration-500"
            >
              <div className="border-[1px] border-black flex  shadow-md  backdrop-blur-sm rounded-full w-24 h-24 ">
                <div
                  className={`m-auto rounded-full w-20 h-24 flex justify-center items-center `}
                >
                  <img className="rounded-full" src={child} alt="skill" />
                </div>
              </div>
              <p className="mt-4 text-bold text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skill;
