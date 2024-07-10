import React from "react";
import car from "../Images/About/car.png";
import flag from "../Images/About/flag.png";
import calender from "../Images/About/calender.png";
import bag from "../Images/About/bag.png";
import cardbg from "../Images/cardImages/cardheading-bg.png";

const OurSpeciality = () => {
  const featureData = [
    {
      img: car,
      heading: "Innvative Tour Plans",
      text: "Innovative tour plans offer fresh and imaginative ways to discover destinations, delivering unique and memorable travel experiences.",
    },
    {
      img: flag,
      heading: "Expert Travel Guide",
      text: "An expert travel guide offers valuable insights and advice for a well-informed and enriching travel experience.",
    },
    {
      img: calender,
      heading: "Affordable Pricing Plans",
      text: "Experience top-notch quality without breaking the bank with our Affordable Pricing Plans..",
    },
    {
      img: bag,
      heading: "High Quality Management",
      text: "Effective high-quality management optimizes resources, processes, and leadership to achieve organizational excellence.",
    },
  ];
  return (
    <div
      className="flex flex-row flex-wrap sm:flex-nowrap sm:space-x-[150px]"
      style={{ backgroundImage: `url(${cardbg})` }}
    >
      <div className=" flex flex-col space-y-2 sm:pl-24 items-center sm:items-start">
        <h1
          className="text-3xl sm:text-4xl max-w-fit my-2 sm:mx-0"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          Our Speciality
        </h1>
        <p className="sm:text-5xl text-3xl font-bold opacity-85 max-w-fit sm:w-[500px] sm:mx-0 mx-12">
          Your Trusted Travel Partner
        </p>
        <p className="text-lg text-gray-500 sm:w-[550px] w-[320px] sm:text-left text-center sm:pt-6 pt-4">
          Since the acquisition of the new premises in 1991, the company has
          never looked back. After obtaining IATA approval in 1993 the company
          has emerged as one of the largest selling travel in this part of
          Mumbai. Sunshine Travels™ can issue tickets of all domestic and
          international airlines namely Indian Airlines, Jet Airways,Sahara
          Airlines and International Airlines namely K.L.M Royal Dutch Airways,
          Lufthansa, Gulf Air, Oman Air, Qantas, Japan Airlines, El Al Israel
          Airlines, British Airways, Cathay Pacific, Air France, South African
          Airways, Indian Airlines, Kenya Airways, Sabena, Saidia, United
          Airlines, Emirates and Swissair in its premises itself with best
          available fares. <br /> Sunshine Travels™ is a one stop shop for all
          the travel needs ranging from Ticketing, Passports, Visas, Overseas
          Mediclaim Insurance, Foreign Exchange, Hotel Reservations as well as
          Eurail, Greyhound, Amtrac, Japanrail, Swissrail and Britrail Passes.
        </p>
      </div>
      <div className=" flex flex-row flex-wrap sm:my-5 justify-center sm:justify-start">
        {featureData.map((item, index) => {
          return (
            <div className=" flex flex-col space-y-6 max-w-fit sm:mr-5 sm:my-7 my-10 items-center sm:items-start" key={index}>
              <img src={item.img} className="h-[60px] w-[57px]" alt="" />
              <h1 className="text-2xl font-bold opacity-85 max-w-fit">{item.heading}</h1>
              <p className="w-[300px] text-center sm:text-left text-[17px] text-gray-500">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSpeciality;
