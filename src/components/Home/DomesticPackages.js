import React from "react";
import homebg1 from "../Images/homebg1.jpg";
import featured1 from "../Images/Featured/featured-1.jpg";
import mainCard1 from "../Images/MainCards/mainCard1.jpg";
import mainCard2 from "../Images/MainCards/mainCard2.jpg";
import mainCard3 from "../Images/MainCards/mainCard3.jpg";
import mainCard4 from "../Images/MainCards/mainCard4.jpg";
import mainCard5 from "../Images/MainCards/mainCard5.jpg";
import mainCard6 from "../Images/MainCards/mainCard6.jpg";
import featured2 from "../Images/Featured/featured-2.jpg";
import featured3 from "../Images/Featured/featured-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const TravelPackages = () => {
  const navigate = useNavigate();
  const nationalCardData = [
    {
      id: 1,
      tag: "FEATURED",
      cimage: mainCard1,
      ctitle: "Madhya Pradesh",
      cinfo: `Known as the heart of India A beautiful place`,
      crating: "4.8",
    },
    {
      id: 2,
      tag: "TOP RATED",
      cimage: mainCard2,
      ctitle: "Arunachal Pradesh",
      cinfo: "Unrivalled astethics and diverse culture",
      crating: "4.8",
    },
    {
      id: 3,
      tag: "",
      cimage: mainCard3,
      ctitle: "Kerala",
      cinfo: "Enjoys unique geographical features",
      crating: "4.8",
    },
    {
      id: 4,
      tag: "TOP RATED",
      cimage: mainCard4,
      ctitle: "Himachal",
      cinfo: "Famous for its abundant natural beauty.",
      crating: "4.8",
    },
    {
      id: 5,
      tag: "",
      cimage: mainCard5,
      ctitle: "Uttarakhand",
      cinfo: 'Referred to as the Devbhumi "Land of the Gods"',
      crating: "4.8",
    },
    {
      id: 6,
      tag: "FEATURED",
      cimage: mainCard6,
      ctitle: "Punjab",
      cinfo: "Explore historic palaces,battle sites",
      crating: "4.8",
    },
  ];
  const featuredData = [
    {
      id: 1,
      img: featured2,
      tag: "Recommended",
      heading: "Valley Of Kashmir",
      info: "08 Nights / 09 Days",
      btnName: "Book Now",
      path: "/packages/domestic/kashmir",
    },
    {
      id: 2,
      img: featured3,
      tag: "Special Deal",
      heading: "Royal Rajasthan",
      info: "06 Nights / 07 Days",
      btnName: "Explore Now",
      path: "/packages/domestic/rajasthan",
    },
  ];
  return (
    <div>
      <div
        className=" flex flex-col"
        style={{ backgroundImage: `url(${homebg1})` }}
      >
        <div className=" flex flex-col my-16 mb-5 sm:my-24 sm:mb-7 sm:mx-[100px] ml-11 max-w-fit">
          <div
            className="text-4xl max-w-fit"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Travel Packages
          </div>
          <div className="text-black sm:text-5xl text-3xl font-bold opacity-80 max-w-fit">
            Domestic Packages
          </div>
        </div>
        <div className=" flex flex-row flex-wrap justify-center">
          {nationalCardData.map((item) => {
            return (
              <div
                className="max-w-fit ml-[2px] sm:mx-3 my-10 relative bg-white border border-gray-200 shadow dark:bg-white dark:border-white rounded-md"
                key={item.id}
              >
                <div
                  className={`absolute top-5 left-5 z-30   ${
                    item.tag === "" ? "hidden" : ""
                  } ${
                    item.tag === "FEATURED"
                      ? "text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                      : "  text-white bg-orange-400 hover:bg-orange-500 focus:ring-orange-300 dark:focus:ring-orange-900"
                  } focus:ring-4 rounded-sm font-bold text-[10px] text-center w-[80px] py-[5px]`}
                >
                  {item.tag}
                </div>
                <FontAwesomeIcon
                  className="cursor-pointer text-white hover:text-orange-500 absolute right-5 top-5 z-30 text-2xl"
                  icon="fa-regular fa-heart"
                />
                <img
                  src={item.cimage}
                  className="sm:w-[425px] w-[300px] rounded-t-md hover:rounded-b-md cursor-pointer transition-all duration-500 hover:brightness-[1.2] hover:scale-[1.05] hover:filter:invert-[15%] hover:sepia-[100%] hover:saturate-[200%] hover:hue-rotate-[20deg]"
                  alt=""
                />
                <div className="text-orange-500 text-md font-bold my-5 mx-7 max-w-fit">
                  {item.ctitle}
                </div>
                <div className="text-black sm:text-xl text-md sm:mx-7 ml-7 font-bold sm:w-[300px] w-[250px] transition duration-500 cursor-pointer hover:text-orange-500">
                  {item.cinfo}
                </div>
                <div className="my-5 ml-7 sm:w-[370px] w-[270px]">
                  <hr />
                </div>
                <div className="mx-7 my-6 max-w-fit">
                  <FontAwesomeIcon
                    className="text-yellow-300 "
                    icon="fa-solid fa-star"
                  />
                  {item.crating}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" sm:my-[100px] sm:mx-16 my-5 flex flex-row sm:space-x-[52px] space-x-6 max-w-fit flex-wrap sm:flex-nowrap">
          <div className=" rounded-lg relative ml-[32px] sm:max-h-fit sm:w-[615px] max-w-fit">
            <img
              src={featured1}
              className="rounded-lg sm:h-[470px] h-[400px] sm:max-w-fit max-w-[300px]"
              alt=""
            />
            <div className="absolute top-14 sm:left-[50px] left-[110px] text-xs px-[10px] py-1 rounded-[4px]  font-semibold  text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900">
              FEATURED
            </div>
            <div className="absolute top-[88px] sm:left-[50px] left-[35px] text-3xl sm:text-4xl sm:w-[310px] font-bold text-white hover:text-orange-500 transition duration-500">
              Wildlife Holidays
            </div>
            <p className="absolute sm:text-left text-center top-[140px] text-sm sm:text-lg sm:left-[50px] left-[25px] text-white font-semibold w-[250px]">
              Wildlife holidays offer thrilling opportunities to observe
              majestic animals in their natural habitats.
              <br />
              <br /> 04 Nights / 05 Days
            </p>
            <button
              onClick={() => navigate("/packages/domestic/wildLifeHolidays")}
              className="bg-orange-600 z-30 text-white hover:bg-transparent sm:px-8 px-6 py-[10px] sm:py-[12px] absolute sm:left-[50px] left-[93px] sm:top-[340px] top-[290px] font-bold rounded-md border-2 border-orange-600 hover:text-orange-600 transition-colors text-sm sm:text-md"
            >
              Book Now
            </button>
          </div>
          <div className=" flex flex-row sm:space-x-11 max-w-fit flex-wrap sm:flex-nowrap relative sm:my-0 my-5">
            {featuredData.map((item,index) => {
              return (
                <div
                  className="featuredCard rounded-md relative sm:my-0 my-5 sm:max-w-fit w-[300px] mx-2"
                  key={index}
                >
                  <img
                    src={item.img}
                    className="rounded-lg bg-transparent"
                    style={{ opacity: "10.14" }}
                    alt=""
                  />
                  <div
                    className={`absolute top-8 sm:left-[45px] ${
                      item.id === 2 ? "left-[95px]" : "left-[80px]"
                    } text-white text-xl font-bold`}
                  >
                    {item.tag}
                  </div>
                  <div className="sm:text-left text-center absolute top-20 left-[65px] sm:left-[45px] text-white text-3xl sm:text-4xl font-bold w-[170px]">
                    {item.heading}
                  </div>
                  <div className="sm:text-left text-center absolute top-44 left-[85px] sm:left-[45px] text-white font-bold">
                    {item.info}
                  </div>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`${
                      item.id === 2
                        ? "bg-orange-600 text-white hover:bg-transparent sm:px-8 px-5 py-[10px] sm:py-[12px] absolute sm:left-[46px] left-[55px] sm:top-[240px] font-bold rounded-md border-2 border-orange-600 hover:text-orange-600 transition-colors text-sm sm:text-md"
                        : "hover:bg-orange-600 sm:px-8 px-7 sm:py-[12px] py-[10px] font-bold rounded-md border-white hover:border-orange-600 border-2 transition-colors text-sm sm:text-md"
                    } absolute top-60 left-[90px] sm:left-[45px] text-white`}
                  >
                    {item.btnName}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
