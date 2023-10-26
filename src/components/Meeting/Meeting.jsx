import React from "react";
import MeetingContainer from "./MeetingContainer";

const Meeting = () => {
  return (
    <div
    
      className="md:px-20 mx-auto p-4 flex flex-col  h-full w-full"
    >
      <div className="flex items-center mb-10">
        <p className="text-xl md:text-2xl text-second font-bold p-2 inline ">
          PRENEZ RENDEZ-VOUS
        </p>
        <div className="h-0.5 w-full bg-second md:ml-10"></div>
      </div>

      <MeetingContainer />
    </div>
  );
};

export default Meeting;
