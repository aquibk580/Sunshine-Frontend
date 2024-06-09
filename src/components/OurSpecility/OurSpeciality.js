import React from "react";
import TopReasons from "../Reuse/TopReasons";
import banner from "../Images/OurSpecility/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import passport from "../Images/OurSpecility/Passport.png";
import Insurance from "../Images/OurSpecility/Insurance.png";
import Booking from "../Images/OurSpecility/Booking.png";
import Visa from "../Images/OurSpecility/Visa.png";

const OurSpeciality = () => {
  const ourSpeciality = [
    {
      para: "All international Airline Tickets including Visa fare and special fares.",
    },
    {
      para: "Domestic ticket of Jet airways, Jet Lite, Indian Airlines, MDLR, paramount, Air India Express, Indigo, Spice Jet, Go Airways.",
    },
    {
      para: "Hotel Booking in India and abroad.",
    },
    {
      para: "Foreign Exchange services. Authorised agent: Western Union Money Transfer, Money Gram - International Money Transfer & Xpress Money.",
    },
  ];
  const ourSpecialityData = [
    {
      img: passport,
      head:"Passport",
      text: "Dedicated to providing superb customer service and personal attention to your Passport and Visa expediting needs.",
    },
    {
      img: Insurance,
      head:"Overseas Insurance",
      text: "With Insurance Policy you get covered for the entire duration of your travel . Besides, you can also select the best type of cover to suit your requirement -individual, family or multiple trips.",
    },
    {
      img: Booking,
      head:"Air Tickets Booking",
      text: "Online International Payments is the secure, easy way to send money abroad from your current account using Internet Banking. Whether you’re sending money to family or paying an overseas supplier",
    },
    {
      img: Visa,
      head:"Visa",
      text: "Dedicated to providing superb customer service and personal attention to your Passport and Visa expediting needs.",
    },
  ];
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Our Speciality
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className=" flex flex-row my-20 sm:flex-nowrap flex-wrap sm:px-20 justify-center">
        <div className=" flex flex-col">
          <div className=" flex flex-col px-7 sm:space-y-6 space-y-4">
            <h1 className="sm:text-6xl text-3xl font-bold opacity-80 mb-4">
              Our Specialiity
            </h1>
            <h2 className="sm:text-lg text-base font-semibold text-gray-600">
              Sunshine Travels provides all types of services related to
              travel field which includes:
            </h2>
            {ourSpeciality.map((item, index) => {
              return (
                <div className="flex flex-row space-x-4">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    className="text-green-500"
                    size="lg"
                  />
                  <p className="sm:text-[16.5px] text-gray-500">{item.para}</p>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-row flex-wrap px-2 my-10">
            {ourSpecialityData.map((item,index)=>{
                return(
                    <div className=" flex flex-col items-center sm:items-start max-w-fit mx-5 sm:my-0 my-5" key={index}>
                        <img src={item.img} className="w-[60px]" alt="" />
                        <h1 className="text-2xl font-[650] opacity-85">{item.head}</h1>
                        <p className="text-gray-600 text-[16.5px] sm:w-[400px] my-5">{item.text}</p>
                    </div>
                )
            })}
          </div>
        </div>
        <div className="">
          <TopReasons />
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
