import React from "react";
import testimonalsImage from "../Images/testimonalsImage.png";
import men from "../Images/men2.png";
import women from "../Images/women2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Testimonals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const testimonalsData = [
    {
      id: 1,
      text: "Singapore trip was really amazing. I and Ravina loved it. We didn't feel coming back. We felt like home there. It is soo safe for girls and people are very friendly and helpful. It was surely a lovely and a memorable trip. Thank you for arranging such a beautiful trip for us. All the arrangements were done very well.",
      pfp: women,
      name: "Ms. Shreya Thakre",
      location: "Singapore Tour",
    },
    {
      id: 2,
      text: "Thank you for your mail. I have been meaning to call you or message you for the wonderful itinerary that you made for us and all the comfortable arrangements for stay and travel. We thoroughly enjoyed our time. Thanks from both of us for making these moments so memorable and hassle-free for us.",
      pfp: men,
      name: "Mr. Aquib",
      location: "Himachal Tour",
    },
    {
      id: 3,
      text: "In regards to the above mentioned subject line I would like to share my Udaipur Trip feedback with the Sunshine team. Firstly i would like to thank Prajakta ( my organizer) for making this trip most comfortable and user friendly.With lot of ifs and but still she managed to accommodate all our requirements and that too in our desired cost budget. That was very creditable.",
      pfp: men,
      name: "Mr. Aditya",
      location: "Udaipur Tour",
    },
  ];
  return (
    <div className="flex flex-row sm:flex-nowrap flex-wrap bg-[#eff4f3] sm:my-0 my-10 mx-0">
      <div className=" py-10 px-20">
        <img src={testimonalsImage} alt="" />
      </div>
      <div className=" flex flex-col my-0 sm:my-10 px-10">
        <h1
          className="text-3xl sm:text-4xl max-w-fit my-2 sm:mx-0"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          Testimonals
        </h1>
        <p className="sm:text-5xl text-3xl font-bold opacity-85">
          What People Say
        </p>
        <div className="sm:w-[700px] w-[260px]">
          <Carousel
            responsive={responsive}
            ssr={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            partialVisbile={false}
            customTransition={"all 1000ms"}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
          >
            {testimonalsData.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className=" flex flex-row my-10 items-center sm:space-x-[460px] space-x-[120px] max-w-fit">
                    <FontAwesomeIcon
                      icon="fa-solid fa-quote-left"
                      className="text-orange-600 sm:text-6xl text-3xl"
                    />
                    <div className="flex flex-row">
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-yellow-400 sm:text-2xl text-xl"
                      />
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-yellow-400 sm:text-2xl text-xl"
                      />
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-yellow-400 sm:text-2xl text-xl"
                      />
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-yellow-400 sm:text-2xl text-xl"
                      />
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        className="text-yellow-400 sm:text-2xl text-xl"
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="sm:text-2xl text-gray-600 sm:leading-10 max-w-fit">
                      {item.text}
                    </p>
                  </div>
                  <div className=" flex flex-row items-center space-x-5 my-10">
                    <img className="bg-blend-multiply w-[70px]" src={item.pfp} alt="" />
                    <section>
                      <h1 className="text-xl font-bold opacity-85">{item.name}</h1>
                      <h1 className="text-gray-600">{item.location}</h1>
                    </section>
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
