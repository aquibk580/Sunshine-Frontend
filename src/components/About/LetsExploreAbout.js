import React from "react";
import image1 from "../Images/About/image1.jpg";
import image2 from "../Images/About/image2.jpg";

const LetsExploreAbout = () => {
  return (
    <div className="">
      <div className=" flex flex-row sm:my-20 my-10 sm:mt-32 sm:flex-nowrap flex-wrap">
        <div className=" flex flex-col sm:mx-20 mt-10 sm:mt-0 sm:order-1 order-2">
          <img
            className="sm:h-[520px] sm:w-[450px] w-[300px] sm:mx-0 mx-[30px] rounded-lg relative sm:left-44 sm:rotate-[16deg]"
            src={image1}
            alt=""
          />
          <img
            className="hidden sm:block h-[402px] w-[348px] absolute top-[900px] left-[95px] rotate-[-12deg] border-r-[10px] border-t-[10px] border-white rounded-lg rounded-tl-2xl rounded-br-2xl rounded-tr-2xl"
            src={image2}
            alt=""
          />
        </div>
        <div className=" flex flex-col sm:pl-[220px] items-center sm:items-start sm:order-2 order-1 mx-auto">
          <h1
            className="sm:text-4xl text-3xl max-w-fit  my-2"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Let's Explore the World
          </h1>
          <h1 className="sm:text-4xl text-2xl font-bold opacity-85 sm:ml-0 w-[290px] sm:w-[600px]">
            We Can Make Your Travel More Enjoyable
          </h1>
          <p className="text-md text-gray-500 font-semibold sm:my-8 my-4 sm:w-[550px] w-[320px] leading-7 text-center sm:text-left">
            Sunshine Travels™ was started by Mr Sunil Ghanekar with his wife
            Mrs Sujata S. Ghanekar in the year 1988 in a small godown on rental
            basis admeasuring about 45 Sq. Ft. in Thane.<br/><br/> Today Sunshine
            Holidays™ is a formidable force in Thane's TRAVEL Market. For
            Sunshine Holidays, there is a Rags to Riches story, possible only
            due to hard work, patience and adapting to change. During 1988,
            package tours to the Far East were very popular. By caring this
            opportunity Sunshine Holidays started their own tours to Thailand,
            Singapore, Hongkong and so on. This went very well and soon the
            company started getting a foothold in the Thane Travel Market. By
            1991, as the business increased, the office shifted to its current
            premises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsExploreAbout;
