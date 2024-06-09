import React from "react";
import pimage0 from "../Images/plane-design.png";
import pimage1 from "../Images/bag.png";
import pimage2 from "../Images/wood-pyrmaid.png";

const LetsTravelNowAbout = () => {
  const promotionData = [
    {
      id: 0,
      img: pimage0,
      heading: "Most Popular Destination",
      para: "Travel beyond boundaries and savor the world's finest destinations, all designed to fulfill your wanderlust dreams. Your next adventure starts here!",
    },
    {
      id: 1,
      img: pimage1,
      heading: "Budget Friendly Packages",
      para: "Our budget friendly packages offer you incredible experiences without compromising on quality. Embrace the thrill of travel while keeping your wallet happy.",
    },
    {
      id: 2,
      img: pimage2,
      heading: "Satisfaction Guarranted",
      para: "With our dedicated service and curated experiences, your travel dreams are transformed into unforgettable memories, satisfaction guaranteed.",
    },
  ];
  return (
    <div className="flex flex-col pt-20">
      <div className=" flex flex-col relative items-center">
        <div className=" flex flex-col items-center">
          <div
            className="text-4xl max-w-fit"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Lets Travel Now
          </div>
          <div className="text-black sm:text-5xl text-3xl font-bold opacity-80 max-w-fit">
            Explore The World
          </div>
        </div>
      </div>
      <div className=" flex flex-row my-10 sm:px-[80px] sm:flex-nowrap flex-wrap sm:justify-between justify-center">
        {promotionData.map((item) => {
          return (
            <div
              className=" flex flex-col items-center"
              key={item.id}
            >
              <img className="w-[14vh] opacity-95" src={item.img} alt="" />
              <div className="font-bold text-2xl opacity-95 my-8">
                {item.heading}
              </div>
              <div
                className="text-center sm:w-[400px] w-[300px] text-gray-700 opacity-85"
                style={{ lineHeight: "1.80em" }}
              >
                {item.para}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LetsTravelNowAbout;
