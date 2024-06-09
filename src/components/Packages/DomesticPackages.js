import React from "react";
import { Link } from "react-router-dom";
import DomesticImage from "../Images/Packages/DomesticPackages.jpg";
import package1 from "../Images/Packages/DomesticImages/Kashmir.jpg";
import package2 from "../Images/Packages/DomesticImages/Rajasthan.jpg";
import package3 from "../Images/Packages/DomesticImages/Sikkim.jpg";
import package4 from "../Images/Packages/DomesticImages/WildlifeHolidays.jpg";
import package5 from "../Images/Packages/DomesticImages/Himachal.jpg";
import package6 from "../Images/Packages/DomesticImages/Utrakhand.jpg";
import package7 from "../Images/Packages/DomesticImages/Kerala.jpg";
import package8 from "../Images/Packages/DomesticImages/Karnataka.jpg";
import package9 from "../Images/Packages/DomesticImages/Andaman.jpg";
import package10 from "../Images/Packages/DomesticImages/Arunachal.jpg";
import package11 from "../Images/Packages/DomesticImages/MadhyaPardesh.jpg";
import package12 from "../Images/Packages/DomesticImages/Punjab.jpg";
import package13 from "../Images/Packages/DomesticImages/Telangana.jpg";
import package14 from "../Images/Packages/DomesticImages/TamilNadu.jpg";
import package15 from "../Images/Packages/DomesticImages/Maharashtra.jpg";
import package16 from "../Images/Packages/DomesticImages/GoldenTraingle.jpg";

const DomesticPackages = () => {
  const domesticData = [
    {
      img: package1,
      head: "Kashmir",
      text: "Kashmir is also known as paradise on earth",
      path: "/packages/domestic/kashmir",
    },
    {
      img: package2,
      head: "Rajasthan",
      text: "Explore Rich heritage,exciting dessert.",
      path: "/packages/domestic/rajasthan",
    },
    {
      img: package3,
      head: "Sikkim",
      text: "Located in Himalaya foot hills",
      path: "/packages/domestic/sikkim",
    },
    {
      img: package4,
      head: "Wildlife Holidays",
      text: "Explore Rich heritage,exciting dessert.",
      path: "/packages/domestic/wildLifeHolidays",
    },
    {
      img: package5,
      head: "Himachal",
      text: "Famous for its abundant natural beauty",
      path: "/packages/domestic/himachal",
    },
    {
      img: package6,
      head: "Utrakhand",
      text: 'Referred to as the Devbhumi "Land of the Gods"',
      path: "/packages/domestic/utrakhand",
    },
    {
      img: package7,
      head: "Kerala",
      text: "Enjoys unique geographical features",
      path: "/packages/domestic/kerala",
    },
    {
      img: package8,
      head: "Karnataka",
      text: "Discover tapestry of colours, cultures, flavours",
      path: "/packages/domestic/karnataka",
    },
    {
      img: package9,
      head: "Andaman",
      text: "The Islands are shrouded in the mystery",
      path: "/packages/domestic/andaman",
    },
    {
      img: package10,
      head: "Arunachal Pradesh",
      text: "unrivalled aesthetics and diverse cultural..",
      path: "/packages/domestic/arunachal",
    },
    {
      img: package11,
      head: "Madhya Pradesh",
      text: "known as the heart of India",
      path: "/packages/domestic/madhyaPradesh",
    },
    {
      img: package12,
      head: "Punjab",
      text: "Explore historic palaces, battle sites",
      path: "/packages/domestic/punjab",
    },
    {
      img: package13,
      head: "Telangana",
      text: "it a popular ecotourism destination",
      path: "/packages/domestic/telangana",
    },
    {
      img: package14,
      head: "Tamil Nadu",
      text: "Famed for its Dravidian-style Hindu temples",
      path: "/packages/domestic/tamilNadu",
    },
    {
      img: package15,
      head: "Maharashtra",
      text: "Discover diverse and colourful cultures",
      path: "/packages/domestic/maharashtra",
    },
    {
      img: package16,
      head: "Golden Triangle",
      text: "Explore Indian with Golden Triangle Packages",
      path: "/packages/domestic/goldenTriangle",
    },
  ];
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Domestic
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${DomesticImage})`,
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
          Domestic Packages
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

export default DomesticPackages;
