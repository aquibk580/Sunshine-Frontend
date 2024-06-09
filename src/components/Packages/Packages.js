import React from "react";
import { Link } from "react-router-dom";
import packages from "../Images/Packages/Packages.jpg";
import packageImage1 from "../Images/Packages/PackageImages/packageImage1.jpg";
import packageImage2 from "../Images/Packages/PackageImages/packageImage2.jpg";
import TopReasons from "../Reuse/TopReasons";

const Packages = () => {
  const packageData = [
    {
      img: packageImage1,
      head: "Domestic Tours",
      text: "Domestic tours involve exploring and experiencing various destinations and attractions within one's own country, offering an opportunity to discover local cultures and landscapes without crossing international borders.",
      path: "/packages/domestic",
    },
    {
      img: packageImage2,
      head: "International Tours",
      text: "International tours entail traveling to different countries and experiencing diverse cultures, cuisines, landscapes, and attractions beyond the borders of one's homeland.",
      path: "/packages/international",
    },
  ];
  return (
    <div className="">
      <div className=" flex items-center justify-center">
      <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
        Travel Packages
      </h1>
      <div
        className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
        style={{
          backgroundImage: `url(${packages})`,
          backgroundSize: "cover",
        }}
      ></div>
      </div>
      <div className=" flex flex-row sm:my-20 my-10 sm:mx-20 max-w-fit sm:flex-nowrap flex-wrap sm:space-x-14">
        <div className=" flex flex-row sm:flex-nowrap flex-wrap sm:space-x-7 sm:mx-0 justify-center">
          {packageData.map((item, index) => {
            return (
              <div
                style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
                className="max-w-fit sm:pb-0 pb-[25px] sm:h-[530px] mx-2 bg-white rounded-xl dark:border-white shadow-md sm:my-0 my-10"
                key={index}
              >
                <Link to={item.path}>
                  <img
                    style={{ transition: " transform 0.3s ease-in-out" }}
                    className="hover:scale-[1.03] rounded-t-lg bg-transparent sm:w-[418px] w-[300px] cursor-pointer"
                    src={item.img}
                    alt=""
                  />
                </Link>
                <div className=" sm:mx-5 mx-5 space-y-4 mt-7 max-w-fit">
                  <h2 className="font-bold text-orange-500">Travel Packages</h2>
                  <Link to={item.path}>
                    <h2 className="text-2xl font-bold max-w-fit cursor-pointer list-animation-nav">
                      {item.head}
                    </h2>
                  </Link>
                  <p className=" text-base font-semibold sm:w-[380px] w-[260px] text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
       <TopReasons/>
      </div>
    </div>
  );
};

export default Packages;
