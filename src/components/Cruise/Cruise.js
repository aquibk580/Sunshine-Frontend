import React from "react";
import banner from "../Images/Cruise/banner.jpg";
import { Link } from "react-router-dom";
import Cruise1 from "../Images/Cruise/Costa.jpg";
import Cruise2 from "../Images/Cruise/Celestyal.jpg";
import Cruise3 from "../Images/Cruise/Carnival.jpg";
import Cruise4 from "../Images/Cruise/Variety.jpg";
import Cruise5 from "../Images/Cruise/Star.jpg";
import Cruise6 from "../Images/Cruise/RoyalCarribbean.jpg";
import Cruise7 from "../Images/Cruise/MSCCruiseLine.jpg";
import Cruise8 from "../Images/Cruise/Princess.jpg";

const Cruise = () => {
  const cruiseData = [
    {
      path: "/cruise/costa",
      img: Cruise1,
      head: "Costa Cruise",
      text: "Are you ready to leave on your first Costa cruise",
    },
    {
      path: "/cruise/celestyal",
      img: Cruise2,
      head: "Celestyal Cruise",
      text: "Our cruises feature authentic, local experiences from each region.",
    },
    {
      path: "/cruise/carnival",
      img: Cruise3,
      head: "Carnival Cruise",
      text: "The Carnival Destiny boasts nearly 500 balcony staterooms and suites",
    },
    {
      path: "/cruise/variety",
      img: Cruise4,
      head: "Variety Cruise",
      text: "The Variety Cruises passion remains unchanged since 1968",
    },
    {
      path: "/cruise/star",
      img: Cruise5,
      head: "Star Cruise",
      text: "This prosperous, ultra-modern city-state still holds many surprises.",
    },
    {
      path: "/cruise/royal",
      img: Cruise6,
      head: "Royal Cruise",
      text: "Our new Oasis of the Seas and Allure of the Seas aren't just ships",
    },
    {
      path: "/cruise/mscline",
      img: Cruise7,
      head: "MSC Cruise Line",
      text: "The most modern cruise fleet in the world continues to grow",
    },
    {
      path: "/cruise/princess",
      img: Cruise8,
      head: "Princess Cruise",
      text: "Caribbean Princess is the Grand Daddy of our Princess fleet, with the largest carrying capacity.",
    },
  ];
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Cruise
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className=" flex flex-col">
        <div className=" flex flex-col my-16 mb-5 sm:mt-24 sm:mx-0 px-5 sm:px-0 items-center space-y-2">
          <div
            className="sm:text-4xl text-3xl max-w-fit"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Sailing on the open seas
          </div>
          <div className="text-black sm:text-5xl text-2xl font-bold opacity-80 sm:w-[750px] text-center">
            Sunshine Is Authorised Agent For Cruise Booking From Mumbai
          </div>
        </div>
        <div className=" flex flex-row flex-wrap sm:mb-32 my-8 ml-[24px] sm:ml-[75px] max-w-fit">
          {cruiseData.map((item, index) => {
            return (
              <Link to={item.path}>
                <div
                  style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
                  className="max-w-fit sm:h-[383px] h-[385px] cursor-pointer sm:mx-4 my-5 bg-white max-h-fit rounded-xl dark:border-white border-[7px] text-white shadow-md"
                  key={index}
                >
                  <img
                    style={{ transition: " transform 0.3s ease-in-out" }}
                    className="hover:scale-[1.02] rounded-lg filter brightness-[.70]"
                    src={item.img}
                    alt=""
                  />
                  <h2 className="relative z-10 bottom-28 sm:text-3xl text-2xl font-bold mx-5 mb-2 w-[250px]">
                    {item.head}
                  </h2>
                  <p className="relative z-10 bottom-28 text-[13px] mx-5 w-[250px]">
                    {item.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cruise;
