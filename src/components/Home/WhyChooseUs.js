import React from "react";
import calender from "../Images/calender.png";
import map from "../Images/map.png";
import moneyTag from "../Images/MoneyTag.png";
import historyImage from "../Images/historyImage.jpg";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
    const historyData = [
        {
          id: 1,
          image: calender,
          heading: "Amazing Tour Plans",
          para: "Creating unforgettable travel experiences through Amazing Tour Plans' expertly crafted itineraries.",
        },
        {
          id: 2,
          image: map,
          heading: "Best Travel Guides",
          para: "Your ultimate companions for seamless exploration, offering the finest insights and tips through the Best Travel Guides.",
        },
        {
          id: 3,
          image: moneyTag,
          heading: "Affordable Pricing Plans",
          para: "Experience top-notch quality without breaking the bank with our Affordable Pricing Plans.",
        },
      ];
  return (
    <div>
      <div className=" flex flex-row mx-8 my-10 sm:mx-24 sm:my-20 sm:space-x-[200px] max-w-fit flex-wrap sm:flex-nowrap">
        <div className=" flex flex-col max-w-fit">
          <div className=" sm:mx-0 max-w-fit my-4 mx-[10px]">
            <h1
              className="text-3xl sm:text-4xl max-w-fit my-2 sm:mx-0 mx-[50px]"
              style={{
                textTransform: "none",
                fontFamily: "'Reey_Regular',cursive",
                color: "#ff5622",
              }}
            >
              Why Choose Us
            </h1>
            <h1 className="text-2xl sm:text-5xl font-bold opacity-85 sm:mx-0 sm:px-0 px-5 sm:w-[500px] w-[300px] sm:space-y-3 max-w-fit sm:text-left text-center">
              <p> We Arrange the Best</p>
              <p>Tour Ever Possible</p>
            </h1>
            <p className="text-md text-gray-500 font-semibold my-4 sm:my-8 sm:w-[510px] w-[280px] leading-7 sm:text-left text-center">
              Sunshine Travels™ was started by Mr Aquib Khan in the year 1988 in
              a small godown on rental basis admeasuring about 45 Sq. Ft. in
              Thane.
            </p>
          </div>
          <div className=" space-y-14">
            {historyData.map((item) => {
              return (
                <div
                  className=" flex flex-row sm:flex-nowrap flex-wrap max-w-fit"
                  key={item.id}
                >
                  <img
                    className="w-[70px] h-[70px] sm:my-0 mb-8 sm:mx-0 mx-[110px] flipImage cursor-pointer"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col mx-2 space-y-3 max-w-fit">
                    <h1
                      className={`sm:text-2xl text-xl font-bold opacity-85 max-w-fit text-center ${
                        item.id === 2 ? "sm:mx-8 mx-[55px]" : "mx-8"
                      } ${item.id === 1 ? "sm:mx-8 mx-[50px]" : "mx-8"}`}
                    >
                      {item.heading}
                    </h1>
                    <p className="text-md text-gray-500 font-semibold sm:mx-8 sm:w-[510px] w-[280px] leading-7 max-h-fit max-w-fit text-center sm:text-left">
                      {item.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" rounded-lg mx-0 my-10 relative">
          <img
            src={historyImage}
            className="rounded-xl w-[300px] sm:w-[600px]"
            alt=""
          />
          <div className=" opacity-85 absolute sm:top-20 top-16 sm:right-[-90px] right-[40px] sm:pl-8 sm:px-0 px-4 py-4 sm:py-6 max-w-fit rounded-lg bg-white flex flex-row">
            <div className="text-3xl sm:pt-0 pt-2 sm:text-6xl font-bold max-w-fit opacity-85">
              5K
            </div>
            <span className="sm:text-lg text-sm mx-5 my-[6px] font-bold max-w-fit opacity-85">
              <section>Total</section>
              <section>Travellers</section>
            </span>
          </div>
          <div className=" opacity-85 absolute sm:bottom-[105px] bottom-[60px] sm:left-[-55px] left-[20px] sm:px-0 px-4 py-4 sm:py-6 max-w-fit rounded-lg bg-white flex flex-row">
            <div className="text-3xl sm:pt-0 pt-2 sm:text-6xl font-bold">
              20K
            </div>
            <span className="sm:text-lg text-sm mx-5 my-[6px] font-bold">
              <section>Tours</section>
              <section>Organized</section>
            </span>
          </div>
        </div>
      </div>
      <div className=" sm:my-[100px] relative bg-[#4a6660] text-white sm:w-[88%] w-[300px] sm:mx-24 mx-8 rounded-xl sm:px-16 px-10 pt-[60px] pb-[150px] sm:py-16">
        <div className=" flex flex-row">
          <div className=" flex flex-col">
            <h1
              className="sm:text-5xl text-2xl sm:text-left text-center"
              style={{
                textTransform: "none",
                fontFamily: "'Reey_Regular',cursive",
                color: "white",
              }}
            >
              Confused? Get Help
            </h1>
            <h1 className="sm:text-5xl sm:max-w-fit text-2xl font-bold text-center sm:text-left">
              Get Help from Our Travel Agent
            </h1>
          </div>
          <button onClick={()=>navigate("/contact")} className="absolute sm:right-[210px] right-[80px] bottom-10 sm:bottom-14 z-10 bg-orange-600 hover:bg-transparent sm:px-6 px-6 py-[12px] sm:py-[8px]  font-semibold rounded-md border-2 border-orange-600 hover:text-orange-600  transition-colors text-white text-sm sm:text-lg">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
