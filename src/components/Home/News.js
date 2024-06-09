import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import News1 from "../Images/NewsImages/News1.jpg";
import News2 from "../Images/NewsImages/News2.jpg";
import News3 from "../Images/NewsImages/News3.jpg";
import { Link } from "react-router-dom";

export const News = () => {
  const articlesData = [
    {
      id: 1,
      image: News1,
      date: "March 2024",
      text: "Explore the 11 Most Incredible Places to Visit in Switzerland Part 1",
    },
    {
      id: 2,
      image: News2,
      date: "March 2024",
      text: "Your Definitive Manual for Booking Air Tickets in Thane: Tips and Deceives",
    },
    {
      id: 3,
      image: News3,
      date: "February 2024",
      text: "Experience the Marvels of Japan: Unforgettable Japan tours from Mumbai",
    },
  ];
  const newsData = [
    {
      id: 1,
      text: "Dubai, Thailand, Bali, Singapore: Where are Indian tourists headed to in 2024?",
      date: "December 9th 2023",
    },
    {
      id: 2,
      text: "Indians emerge big globetrotters in 2023, fueled by competitive fares and free visas",
      date: "December 8th 2023",
    },
    {
      id: 3,
      text: "Indonesia eyes visa waivers for 20 countries, including India",
      date: "December 8th 2023",
    },
  ];
  return (
    <div className=" flex flex-col mt-32 mb-20 ">
      <div className=" flex flex-col justify-center items-center">
        <h1
          className="text-3xl sm:text-4xl max-w-fit my-2"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          Blog
        </h1>
        <h1 className="sm:text-5xl text-3xl font-bold opacity-85">
          Latest Articles
        </h1>
      </div>
      <div className=" flex flex-row sm:flex-nowrap flex-wrap my-20 sm:pl-[108px] sm:px-16 sm:space-x-7 px-5">
        {articlesData.map((item) => {
          return (
            <div className=" flex flex-col" key={item.id}>
              <Link to="/resources/blogs">
                <img
                  src={item.image}
                  className="cursor-pointer rounded-xl w-[424px] transition-all duration-500 ease-in-out hover:brightness-[1.2] hover:scale-[1.05] hover:filter:invert-[15%] hover:sepia-[100%] hover:saturate-[200%] hover:hue-rotate-[20deg]"
                  alt=""
                />
              </Link>
              <div className="flex flex-row space-x-5 mt-5">
                <section className="text-gray-500 text-lg">
                  <FontAwesomeIcon
                    icon="fa-solid fa-folder"
                    className="text-orange-600"
                  />{" "}
                  Adventure
                </section>
                <section className="text-gray-500 text-lg">
                  <FontAwesomeIcon
                    icon="fa-solid fa-clock"
                    className="text-orange-600"
                  />{" "}
                  {item.date}
                </section>
              </div>
              <Link
                to="/resources/blogs
              "
              >
                <p className="cursor-pointer sm:text-2xl text-xl font-bold my-2 opacity-85 hover:text-orange-600 transition-all duration-500 max-w-fit sm:w-[420px]">
                  {item.text}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <hr />
      <div className=" flex flex-col justify-center items-center mt-5">
        <h1
          className="text-3xl sm:text-4xl max-w-fit my-2"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          News
        </h1>
        <h1 className="sm:text-5xl text-3xl font-bold opacity-85">
          Latest News
        </h1>
      </div>
      <div className=" flex flex-row sm:pl-[108px] sm:px-16 sm:space-x-8 px-5 my-10 space-y-8 sm:flex-nowrap flex-wrap">
        {newsData.map((item) => {
          return (
            <div
              className={` flex flex-col ${
                item.id === 1 ? "sm:py-[31px]" : ""
              }`}
              key={item.id}
            >
              <Link to="/resources/news">
                <p className="cursor-pointer sm:text-2xl text-xl font-bold my-2 opacity-85 hover:text-orange-600 transition-all duration-500 max-w-fit sm:w-[420px]">
                  {item.text}
                </p>
              </Link>
              <span className="sm:text-xl text-lg font-bold sm:my-4 my-3 opacity-85">
                Listen To This News
              </span>
              <span className="text-gray-600 font-medium">
                <FontAwesomeIcon
                  icon="fa-solid fa-clock"
                  className="text-orange-600"
                />{" "}
                {item.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
