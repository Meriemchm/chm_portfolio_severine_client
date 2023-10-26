import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formItem } from "../Data/Data";
const MeetingContainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const client = "https://getform.io/f/96dc7a6f-74c5-444c-87bf-ed40cd40cedb";
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const endElemnt = inputItem.slice(-1)[0];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedDateTime(selectedTime); // Step 2
  };

  const generateMessage = () => {
    const formattedDate = selectedDate.toLocaleDateString("fr-FR");
    return `Rendez-vous programmé pour le ${formattedDate} a ${selectedDateTime}`;
  };

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start"
    >
      <div>
        <h1>
          Réservez un rendez-vous sur <span className="text-primary">Zoom</span>{" "}
        </h1>
        <Calendar onChange={handleDateChange} value={selectedDate} required />
      </div>
      <div className="p-5 flex backdrop-blur-lg bg-white/30 rounded-lg lg:w-1/3">
        <form
          action={client}
          method="POST"
          className="flex flex-col w-full justify-center mt-5 gap-4"
        >
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

          <input
            type="time"
            onChange={handleTimeChange}
            required
            className="p-2 bg-transparent border-[1px] border-black rounded-md text-black placeholder-black focus:outline-none"
          />
          <textarea
            name="Message"
            placeholder="Message"
            rows="10"
            autoComplete="off"
            required
            className="p-2 h-20 bg-transparent border-[1px] border-black rounded-md text-black placeholder-black focus:outline-none resize-none"
          ></textarea>

          <div className="message">
            {selectedDateTime && (
              <textarea
                name="Rendez-vous"
                rows="10"
                autoComplete="off"
                className="resize-none h-6 w-full bg-transparent  border-black rounded-md text-black placeholder-black focus:outline-none"
                required
                value={generateMessage()} // Step 3
              ></textarea>
            )}
          </div>

          <button className="text-white bg-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Réserver
          </button>
          <p>Remarque : un email vous sera envoyé pour le meeting zoom</p>
        </form>
      </div>
    </div>
  );
};

export default MeetingContainer;
