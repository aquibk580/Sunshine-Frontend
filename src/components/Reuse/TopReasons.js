import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { PiCalendarCheckLight } from "react-icons/pi";

const TopReasons = () => {
  const topReasonData = [
    {
      tag: <RiMoneyDollarBoxLine />,
      text: "Cheapest Price",
    },
    {
      tag: <IoShieldCheckmarkOutline />,
      text: "Safe & Secure booking and easy payment.",
    },
    {
      tag: <SlLocationPin />,
      text: "Great location and best value for price.",
    },
    {
      tag: <PiCalendarCheckLight />,
      text: "Manage your booking online.",
    },
  ];
  return (
    <div className=" flex flex-col items-center mx-auto">
      <div className=" flex flex-col py-10 bg-[#eff4f3] rounded-xl sm:px-10 px-5 space-y-10 max-w-fit">
        <div className="">
          <h2 className="text-lg font-bold text-orange-500 mb-2 max-w-fit">
            Get help
          </h2>
          <h1 className="font-bold text-[25px] sm:text-[34px] opacity-80 mb-6  max-w-fit">
            Need Help To Book?
          </h1>
          <p className="text-[16.5px] text-gray-600 sm:w-[320px] w-[260px] ">
            We are here to assist you with the booking process and provide any
            necessary guidance for your travel arrangements.
          </p>
        </div>
        <div className=" flex flex-row space-x-4 max-w-fit">
          <FontAwesomeIcon
            icon="fa-solid fa-phone"
            size="lg"
            className="text-white bg-orange-500 px-[18px] py-[18px] rounded-full"
          />
          <span>
            <section className="font-semibold">Call Us</section>
            <section className="font-bold text-lg">+91 9321445232</section>
          </span>
        </div>
      </div>
      <div className=" flex flex-col sm:px-9 px-6 py-10 border-2 rounded-xl space-y-10 border-gray-300 my-10 max-w-fit">
        <h1 className="font-bold sm:text-3xl text-[20px] opacity-80 max-w-fit">
          Top Reasons To Choose
        </h1>
        <div className=" flex flex-col space-y-5">
          {topReasonData.map((item, index) => {
            return (
              <div
                className=" flex flex-row space-x-5 max-w-fit"
                key={index}
              >
                <span className="border-2 rounded-full px-3 py-3 text-3xl sm:text-4xl text-gray-700">
                  {item.tag}
                </span>
                <h1 className="text-gray-500 font-[400] text-base sm:w-[240px] w-[170px]">
                  {item.text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopReasons;
