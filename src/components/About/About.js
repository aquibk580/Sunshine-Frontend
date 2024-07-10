import React from "react";
import LetsTravelNowAbout from "./LetsTravelNowAbout";
import mainImage from "../Images/About/AboutMain.jpg";
import LetsExploreAbout from "./LetsExploreAbout";
import TestimonalsAbout from "./TestimonalsAbout";
import OurSpeciality from "./OurSpeciality";

const About = () => {
 
  const AboutDetails = [
    {
      number: "120K",
      section1: "Total",
      section2: "Destination",
    },
    {
      number: "500K",
      section1: "Travel",
      section2: "Packages",
    },
    {
      number: "12K",
      section1: "Total",
      section2: "Travelers",
    },
    {
      number: "7K",
      section1: "Positive",
      section2: "Reviews",
    },
  ];
  return (
    <div className="">
       <div className=" flex items-center justify-center">
      <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
        About Us
      </h1>
      <div
        className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      </div>
      <LetsExploreAbout />
      <LetsTravelNowAbout />
      <div className=" flex flex-row bg-[#496560] text-white sm:py-20 py-10 my-20 flex-wrap sm:flex-nowrap justify-center">
        {AboutDetails.map((item, index) => {
          return (
            <div className=" flex flex-row mx-20 sm:my-0 my-7 sm:w-fit" key={index}>
              <h1
                className="sm:text-6xl text-5xl font-bold"
              >
                {item.number}
              </h1>
              <span className="sm:text-3xl text-2xl font-extrabold mx-1">+</span>
              <div className="font-bold my-2 sm:text-base text-sm">
                <section>{item.section1}</section>
                <section>{item.section2}</section>
              </div>
            </div>
          );
        })}
      </div>
      <OurSpeciality/>
      <TestimonalsAbout/>
    </div>
  );
};

export default About;
