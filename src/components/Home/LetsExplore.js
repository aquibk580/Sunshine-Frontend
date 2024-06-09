import React from "react";
import featured4 from "../Images/Featured/featured-4.jpg";
import { useNavigate } from "react-router-dom";
const LetsExplore = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex flex-row sm:flex-nowrap flex-wrap sm:mx-[80px]  max-w-fit sm:space-x-60 px-[18px] py-10 sm:py-20 mb-20">
        <div className=" flex sm:order-1 order-2 w-[330px] sm:w-[430px] sm:my-0 my-8">
          <img className="rounded-lg" src={featured4} alt="" />
        </div>
        <div className=" flex flex-col sm:order-2 order-1 max-w-fit">
          <h1
            className="text-4xl max-w-fit my-2"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Let's Explore the World
          </h1>
          <h1 className="sm:text-5xl font-bold opacity-85 sm:w-[670px] max-w-fit">
            We Can Make Your Tour Most Enjoyable Ever
          </h1>
          <p className="text-md text-gray-500 font-semibold my-8 sm:w-[670px] w-[320px] leading-7 sm:text-left text-center">
            Today Sunshine Travels™ is a formidable force in Thane's TRAVEL
            Market. For Sunshine Travels, there is a Rags to Riches story,
            possible only due to hard work, patience and adapting to change.
            During 1988, package tours to the Far East were very popular. By
            caring this opportunity Sunshine Travels started their own tours
            to Thailand, Singapore, Hongkong and so on. This went very well and
            soon the company started getting a foothold in the Thane Travel
            Market. By 1991, as the business increased, the office shifted to
            its current premises.
          </p>
          <div className=" flex sm:flex-row flex-col flex-wrap sm:flex-nowrap opacity-85 sm:space-x-10 sm:space-y-0 space-y-10 max-w-fi">
            <div className="text-6xl font-bold flex flex-row">
              2K
              <span className="text-lg mx-5 my-[6px]">
                <section>Total</section>
                <section>Location</section>
              </span>
            </div>
            <div className="text-6xl font-bold flex flex-row">
              5K
              <span className="text-lg mx-5 my-[6px]">
                <section>Travel</section>
                <section>Activity</section>
              </span>
            </div>
            <div className="text-6xl font-bold flex flex-row">
              8K
              <span className="text-lg mx-5 my-[6px]">
                <section>Tour</section>
                <section>Packages</section>
              </span>
            </div>
          </div>
          <div className=" my-16">
            <button onClick={()=> navigate('/about')} className="absolute bg-orange-600 hover:bg-transparent sm:px-6 px-6 py-[12px] sm:py-[8px]  font-bold rounded-md border-2 border-orange-600 hover:text-orange-600  transition-colors text-white text-sm sm:text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsExplore;
