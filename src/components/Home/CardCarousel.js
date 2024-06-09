import React from "react";
import { useContext, useMemo } from "react";
import MyContext from "../../myContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardImage1 from "../Images/cardImages/cardImage1.jpg";
import cardImage2 from "../Images/cardImages/cardImage2.jpg";
import cardImage3 from "../Images/cardImages/cardImage3.jpg";
import cardImage4 from "../Images/cardImages/cardImage4.jpg";
import cardImage5 from "../Images/cardImages/cardImage5.jpg";
import cardImage6 from "../Images/cardImages/cardImage6.jpg";
import cardbg from "../Images/cardImages/cardheading-bg.png";
import { Link } from "react-router-dom";

const CardCarousel = () => {
  const responsive = useContext(MyContext);
  const cardData = useMemo(
    () => [
      {
        cimage: cardImage1,
        ctitle: "Japan",
        cpara: "It is often called the land of rising sun",
        id: 0,
        path: "/packages/international/japan",
      },
      {
        cimage: cardImage2,
        ctitle: "Kashmir",
        cpara: "Kashmir is also known as 'Paradise on Earth'",
        id: 1,
        path: "/packages/domestic/kashmir",
      },
      {
        cimage: cardImage3,
        ctitle: "South Africa",
        cpara: "Explore the water Sporta and Seanic view.",
        id: 2,
        path: "/packages/international/southAfrica",
      },
      {
        cimage: cardImage4,
        ctitle: "Rajasthan",
        cpara: "Explore Rich heritage,exciting dessert.",
        id: 3,
        path: "/packages/domestic/rajasthan",
      },
      {
        cimage: cardImage5,
        ctitle: "Sikkim",
        cpara: "Located in Himalay and foot hills",
        id: 4,
        path: "/packages/domestic/sikkim",
      },
      {
        cimage: cardImage6,
        ctitle: "Mauritius",
        cpara: "A sparkling crystal in the turquoise water",
        id: 5,
        path: "/packages/international/mauritius",
      },
    ],
    []
  );
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="" style={{ backgroundImage: `url(${cardbg})` }}>
      <div className=" sm:my-20 sm:mx-20 mt-16 mx-12 sm:w-[400px] w-[290px]">
        <div
          className="subtitle relative sm:text-4xl text-4xl max-w-fit"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          Start Traveling Today
        </div>
        <div className="text-black sm:text-5xl text-3xl font-medium max-w-fit">
          Popular Locations
        </div>
      </div>
      <div className="h-[650px] relative grid grid-flow-row justify-center border-[4px">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          partialVisbile={false}
          customTransition={!isMobile ? "all 1500ms" : false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={!isMobile}
        >
          {cardData.map((item) => {
            return (
              <div
                style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
                className={`max-w-fit sm:h-[370px] h-[345px] mx-10 bg-white max-h-fit rounded-xl dark:border-white border-[5px] text-white shadow-md ${
                  item.id === 0 || item.id === 2 || item.id === 4
                    ? "sm:absolute sm:bottom-10"
                    : ""
                }`}
                key={item.id}
              >
                <Link to={item.path}>
                  <img
                    style={{ transition: " transform 0.3s ease-in-out" }}
                    className="hover:scale-[1.05] rounded-lg filter brightness-[.75]"
                    src={item.cimage}
                    alt=""
                  />

                  <h2 className="relative z-10 bottom-20 text-4xl font-bold mx-5 hover:underline">
                    {item.ctitle}
                  </h2>
                  <p className="relative z-10 bottom-20 text-xs font-semibold mx-5">
                    {item.cpara}
                  </p>
                </Link>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default CardCarousel;
