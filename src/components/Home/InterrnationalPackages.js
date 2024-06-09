import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import featured5 from "../Images/Featured/featured-5.jpg";
import featured6 from "../Images/Featured/featured-6.jpg";
import featured7 from "../Images/Featured/featured-7.jpg";
import featured8 from "../Images/Featured/featured-8.jpg";
import featured9 from "../Images/Featured/featured-9.jpg";
import featured10 from "../Images/Featured/featured-10.jpg";
import packagebg from "../Images/package-bg.png";

const InterrnationalPackages = () => {
    const InternationalCardData = [
        {
          id: 1,
          cimage: featured5,
          ctitle: "Malasiya",
          cinfo: "Culture fusion,vibrant Cities, lush nature, and tropical allure.",
          crating: "4.8",
          package: "06 Nights / 07 Days",
        },
        {
          id: 2,
          cimage: featured6,
          ctitle: "Japan",
          cinfo: 'It is often called as "Land of The Rising Sun".',
          crating: "4.8",
          package: "08 Nights / 09 Days",
        },
        {
          id: 3,
          cimage: featured7,
          ctitle: "Australi",
          cinfo: "Explore Australias aquatic and coastal experiences.",
          crating: "4.8",
          package: "12 Nights / 13 Days",
        },
        {
          id: 4,
          cimage: featured8,
          ctitle: "Kenya",
          cinfo: "Explore a Diverse and expansive Terrain.",
          crating: "4.8",
          package: "05 Nights / 06 Days",
        },
        {
          id: 5,
          cimage: featured9,
          ctitle: "Egypt",
          cinfo: "Has one of the longest Hsitories of any modern country.",
          crating: "4.8",
          package: "08 Nights / 09 Days",
        },
        {
          id: 6,
          cimage: featured10,
          ctitle: "Italy",
          cinfo: "Rich Histroy art, and cuisine amidst stunning landscapes.",
          crating: "4.8",
          package: "09 Nights / 10 Days",
        },
      ];
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    const isMobile = window.innerWidth <= 768;
  return (
    <div>
      <div
        className=" flex flex-col"
        style={{ backgroundImage: `url(${packagebg})` }}
      >
        <div className=" flex flex-col mx-10 my-10 sm:mx-24 sm:my-20 max-w-fit">
          <h1
            className="text-3xl sm:text-4xl max-w-fit my-2"
            style={{
              textTransform: "none",
              fontFamily: "'Reey_Regular',cursive",
              color: "#ff5622",
            }}
          >
            Travel Packages
          </h1>
          <h1 className="text-2xl sm:text-4xl font-bold opacity-85">
            International Packages
          </h1>
        </div>
        <div className="">
          <Carousel
            className="mx-7 sm:mx-20"
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={3000}
            partialVisbile={false}
            customTransition={!isMobile ? "all 1000ms" : false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            autoPlay={!isMobile}
          >
            {InternationalCardData.map((item) => {
              return (
                <div
                  className="max-w-fit ml-[2px] sm:mx-3 my-10 relative bg-white border border-gray-200 shadow dark:bg-white dark:border-white rounded-md"
                  key={item.id}
                >
                  <FontAwesomeIcon
                    className="cursor-pointer text-white hover:text-orange-500 absolute right-5 top-5 z-30 text-2xl"
                    icon="fa-regular fa-heart"
                  />
                  <img
                    src={item.cimage}
                    className="hover:brightness-[1.2] hover:scale-[1.05] hover:filter:invert-[15%] hover:sepia-[100%] hover:saturate-[200%] hover:hue-rotate-[20deg] sm:w-[425px] w-[300px] rounded-t-md cursor-pointer transition-all duration-500 ease-in-out"
                    alt=""
                  />
                  <div className="text-orange-500 text-md font-bold my-5 mx-7 max-w-fit">
                    {item.ctitle}
                  </div>
                  <div className="text-black sm:text-xl text-md sm:mx-7 ml-7 font-bold sm:w-[350px] w-[250px] transition duration-500 cursor-pointer hover:text-orange-500">
                    {item.cinfo}
                  </div>
                  <div className="mx-7 my-6 space-x-[10px] text-sm">
                    <FontAwesomeIcon
                      icon="fa-solid fa-clock"
                      className="text-orange-600"
                    />
                    <span className="text-gray-600">{item.package}</span>
                  </div>
                  <div className="my-5 ml-7 sm:w-[370px] w-[270px]">
                    <hr />
                  </div>
                  <div className="mx-7 my-5 max-w-fit">
                    <FontAwesomeIcon
                      className="text-yellow-300 "
                      icon="fa-solid fa-star"
                    />
                    {item.crating}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default InterrnationalPackages;
