import React from "react";
import banner from "../Images/Resources/sub-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newsbg from "../Images/cardImages/cardheading-bg.png";

//Audio

import audio1 from "../Images/Resources/News/Audio/audio1.mp3";
import audio2 from "../Images/Resources/News/Audio/audio2.mp3";
import audio3 from "../Images/Resources/News/Audio/audio3.mp3";
import audio4 from "../Images/Resources/News/Audio/audio4.mp3";
import audio5 from "../Images/Resources/News/Audio/audio5.mp3";
import audio6 from "../Images/Resources/News/Audio/audio6.mp3";
import audio7 from "../Images/Resources/News/Audio/audio7.mp3";
import audio8 from "../Images/Resources/News/Audio/audio8.mp3";

const News = () => {
  const newsData = [
    {
      text: "Dubai, Thailand, Bali, Singapore: Where are Indian tourists headed to in 2024?",
      date: "December 9th 2023",
      audio: audio1,
    },
    {
      text: "Indians emerge big globetrotters in 2023, fueled by competitive fares and free visas",
      date: "December 8th 2023",
      audio: audio2,
    },
    {
      text: "Indonesia eyes visa waivers for 20 countries, including India",
      date: "December 8th 2023",
      audio: audio3,
    },
    {
      text: "Winter Travel Trends: Indians preferring domestic getaways; searches for Malaysia & Thailand skyrocket",
      date: "December 8th 2023",
      audio: audio4,
    },
    {
      text: "Mumbai, Delhi, Hyderabad to soon get direct flights to Medina",
      date: "December 7th 2023",
      audio: audio5,
    },
    {
      text: "Domestic Leisure Spots Are a Favorite for Year-End Travel: India Report",
      date: "December 5th 2023",
      audio: audio6,
    },
    {
      text: "Saudi Arabia announces greater travel access for Indian pilgrims",
      date: "December 5th 2023",
      audio: audio7,
    },
    {
      text: "Over 40% of Indians to increase spending on travel in 2024: Report",
      date: "December 4th 2023",
      audio: audio8,
    },
  ];
  return (
    <div style={{ backgroundImage: `url(${newsbg})`,backgroundSize:"Cover"}}>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Blogs
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-col my-24">
        <div className=" flex flex-col justify-center items-center">
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
            Latest Resources
          </h1>
        </div>
        <div
          className=" flex flex-row flex-wrap my-20 justify-center px-5"
          
        >
          {newsData.map((item, index) => {
            return (
              <div
                className={`${
                  index === 7 ? "sm:pr-[456px]" : ""
                } flex flex-col sm:mx-4 mx-5 sm:py-8 py-6`}
                key={index}
              >
                <img
                  src={item.img}
                  className="rounded-xl w-[424px] transition-all duration-500 ease-in-out hover:brightness-[1.2] hover:scale-[1.05] hover:filter:invert-[15%] hover:sepia-[100%] hover:saturate-[200%] hover:hue-rotate-[20deg]"
                  alt=""
                />
                <p className="sm:text-2xl text-xl font-bold my-2 cursor-pointer opacity-80 hover:text-orange-600 transition-all duration-500 max-w-fit sm:w-[420px]">
                  {item.text}
                </p>
                <p className="text-lg font-bold opacity-80 my-5">
                  Listen to this News
                </p>
                <span className="text-gray-500 text-[16.5px]">
                  <FontAwesomeIcon
                    icon="fa-solid fa-clock"
                    className="text-orange-600"
                  />{" "}
                  {item.date}
                </span>
                <audio className="mt-3" src={item.audio} controls></audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
