import React from "react";
import InternationalImage from "../Images/Packages/International.jpg";
import package1 from "../Images/Packages/InternationalImages/Japan.jpg";
import package2 from "../Images/Packages/InternationalImages/SouthAfrica.jpg";
import package3 from "../Images/Packages/InternationalImages/Mauritius.jpg";
import package4 from "../Images/Packages/InternationalImages/Switzerland.jpg";
import package5 from "../Images/Packages/InternationalImages/Singapore.jpg";
import package6 from "../Images/Packages/InternationalImages/Thailand.jpg";
import package7 from "../Images/Packages/InternationalImages/Malaysia.jpg";
import package8 from "../Images/Packages/InternationalImages/Australia.jpg";
import package9 from "../Images/Packages/InternationalImages/New Zealand.jpg";
import package10 from "../Images/Packages/InternationalImages/Egypt.jpg";
import package11 from "../Images/Packages/InternationalImages/Kenya.jpg";
import package12 from "../Images/Packages/InternationalImages/Italy.jpg";
import package13 from "../Images/Packages/InternationalImages/Dubai.jpg";
import package14 from "../Images/Packages/InternationalImages/France.jpg";
import package15 from "../Images/Packages/InternationalImages/Croatia.jpg";
import package16 from "../Images/Packages/InternationalImages/Turkey.jpg";
import package17 from "../Images/Packages/InternationalImages/Jordan.jpg";
import package18 from "../Images/Packages/InternationalImages/Vietnam.jpg";
import package19 from "../Images/Packages/InternationalImages/Sri Lanka.jpg";
import package20 from "../Images/Packages/InternationalImages/Hong Kong.jpg";
import { Link } from "react-router-dom";

const InternationalPackages = () => {
  const domesticData = [
    {
      img: package1,
      head: "Japan",
      text: 'It is often called the "Land of the Rising Sun"',
      path: "/packages/international/japan",
    },
    {
      img: package2,
      head: "South Africa",
      text: "Explore Water Sporta and Seanic View.",
      path: "/packages/international/southAfrica",
    },
    {
      img: package3,
      head: "Mauritius",
      text: "a sparkling crystal in the turquoise waters",
      path: "/packages/international/mauritius",
    },
    {
      img: package4,
      head: "Switzerland",
      text: "Switzerland is a mountainous Central European country",
      path: "/packages/international/switzerland",
    },
    {
      img: package5,
      head: "Singapore",
      text: "Explore tropical flora, parks and gardens",
      path: "/packages/international/singapore",
    },
    {
      img: package6,
      head: "Thailand",
      text: "visit the historical, natural, and cultural sights",
      path: "/packages/international/thailand",
    },
    {
      img: package7,
      head: "Malaysia",
      text: "famous tourism destination",
      path: "/packages/international/malaysia",
    },
    {
      img: package8,
      head: "Australia",
      text: "Explore Australia's aquatic and coastal experiences",
      path: "/packages/international/australia",
    },
    {
      img: package9,
      head: "New Zealand",
      text: "Discover fantastic things to do, places to go and more.",
      path: "/packages/international/newzealand",
    },
    {
      img: package10,
      head: "Egypt",
      text: "has one of the longest histories of any modern country",
      path: "egypt",
    },
    {
      img: package11,
      head: "Kenya",
      text: "Explore a diverse and expansive terrain",
      path: "/packages/international/kenya",
    },
    {
      img: package12,
      head: "Italy",
      text: "Rich history, art, and cuisine amidst stunning landscapes.",
      path: "/packages/international/italy",
    },
    {
      img: package13,
      head: "Dubai",
      text: "Gleaming skyscrapers define Dubai's iconic skyline.",
      path: "/packages/international/dubai",
    },
    {
      img: package14,
      head: "France",
      text: "France is renowned for its rich history, exquisite cuisine, and iconic landmarks",
      path: "/packages/international/france",
    },
    {
      img: package15,
      head: "Croatia",
      text: "Croatia's stunning Adriatic coastline and historic cities.",
      path: "/packages/international/croatia",
    },
    {
      img: package16,
      head: "Turkey",
      text: "where East meets West in culture and geography.",
      path: "/packages/international/turkey",
    },
    {
      img: package17,
      head: "Jordan",
      text: "Jordan boasts ancient wonders like Petra and the unique landscapes of Wadi Rum.",
      path: "/packages/international/jordan",
    },
    {
      img: package18,
      head: "Vietnam",
      text: "Vietnam's diverse culture, lush landscapes, and delicious cuisine captivate visitors.",
      path: "/packages/international/vietnam",
    },
    {
      img: package19,
      head: "Sri Lanka",
      text: "Sri Lanka's stunning beaches, lush tea plantations, and cultural heritage.",
      path: "/packages/international/sriLanka",
    },
    {
      img: package20,
      head: "Hong Kong",
      text: "Hong Kong's skyline, bustling markets, and vibrant culture.",
      path: "/packages/international/hongKong",
    },
  ];
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center justify-center">
      <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
        International
      </h1>
      <div
        className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
        style={{
          backgroundImage: `url(${InternationalImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      </div>
      <div className=" flex flex-col my-16 mb-5 sm:my-24 sm:mb-7  max-w-fit items-center sm:place-self-center">
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
          International Packages
        </div>
        <div className=" flex flex-row flex-wrap sm:my-16 my-8 ml-[24px] sm:ml-[75px] max-w-fit">
          {domesticData.map((item, index) => {
            return (
              <Link to={item.path}>
                <div
                  style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
                  className="max-w-fit sm:h-[383px] h-[385px] cursor-pointer sm:mx-4 my-5 bg-white max-h-fit rounded-xl dark:border-white border-[7px] text-white shadow-md"
                  key={index}
                >
                  <img
                    style={{ transition: " transform 0.3s ease-in-out" }}
                    className="hover:scale-[1.02] rounded-lg filter brightness-[.70]"
                    src={item.img}
                    alt=""
                  />
                  <h2 className="relative z-10 bottom-20 text-3xl font-bold mx-5 hover:underline">
                    {item.head}
                  </h2>
                  <p className="relative z-10 bottom-20 text-[13px] mx-5 w-[250px]">
                    {item.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InternationalPackages;
