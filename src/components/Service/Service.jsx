import React from "react";

const Service = ({ data, Title }) => {
  let NewData = null;
  if (Title) {
    NewData = data.filter((item) => item.service === Title);
  } else {
    NewData = data;
  }

  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center ">
        <h2 className="text-2xl text-bold text-second py-4">Mes Services</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 text-center py-8 px-0 justify-center items-center ">
          {NewData.map(({ id, title, description, src }) => (
            <div
              key={id}
              className="rounded-lg flex flex-col justify-center items-center p-5 border-[1px] border-second hover:scale-105 duration-500 xl:w-2/3 w-full h-full mx-auto"
            >
              <div className="border-[1px] border-black flex  shadow-md  backdrop-blur-sm rounded-full w-24 h-24 ">
                <div
                  className={`m-auto rounded-full w-20 h-24 flex justify-center items-center `}
                >
                  <img className="rounded-full" src={src} alt="skill" />
                </div>
              </div>
              <p className="py-5 mt-4 text-bold text-xl text-black">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
