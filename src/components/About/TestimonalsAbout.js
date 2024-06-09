import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import men from "../Images/men.jpg";
import women from "../Images/women.jpg";

const TestimonalsAbout = () => {
  const reviewData = [
    {
      text: "Thank you for your mail. I have been meaning to call you or message you for the wonderful itinerary that you made for us and all the comfortable arrangements for stay and travel We thoroughly enjoyed our time. Thanks from both of us for making these moments so memorable and hassle-free for us Thank you once again",
      name: "Mr. Sushant Bhagwat",
      img: men,
      location: "Himachal Tour",
    },
    {
      text: "Dear Prajakta, We had very good time as per itinerary plan on Uttaranchal tour.",
      name: "Mr. G.N.Sreedhar",
      img: men,
      location: "Utranchal Tour",
    },
    {
      text: "The tour to himachal was fantastic. We enjoyed it a lot. All the hotels were good except the one in Amritsar. The location of the hotel is is extremely good but the rooms , food and ambience is not up to the mark. Suggest not to recommend this hotel to your customers.Taxi service that was provided was also good.Over all we enjoyed our trip. Thanks a lot for making all arrangements for us.",
      name: "Mr. Mukul Abhyankar",
      img: men,
      location: "Himachal with Amritsar Tour",
    },
    {
      text: "Of course you had wonderfully organised the tour. I wanted to come personally to thank you.",
      name: "Adv. Vijay Agashe",
      img: men,
      location: "Rajasthan Tour",
    },
    {
      text: "In regards to the above mentioned subject line I would like to share my Udaipur Trip feedback with the Sunshine team.Firstly i would like to thank Prajakta ( my organizer) for making this trip most comfortable and user friendly.With lot of ifs and but still she managed to accommodate all our requirements and that too in our desired cost budget. That was very creditable..",
      name: "Ms. Natasha Vaidya",
      img: women,
      location: "Udaipur Tour",
    },
    {
      text: "Our tour is going great, All of you have done a great job so far. The tour guides,have been great and the Driver, Mr. Narendra is just wonderful.",
      name: "Ms. Alka Jog",
      img: women,
      location: "Delhi, Agra, Jaipur, Mumbai Tour",
    },
    {
      text: "Hi Prajakta, Thank you for the arrangements made for our Singapore trip.",
      name: "Ms. Shalaka Jadhav",
      img: women,
      location: "Singapore Tour",
    },
    {
      text: "I am very pleased with your services. Firstly the visit went very well. Secondly whenever we had some question your staff handled it promptly and efficiently. Great job!.",
      name: "Dibyendu Halder",
      img: men,
      location: "Delhi, Agra, Haridwar Tour",
    },
    {
      text: "Over n all we rate the trip as an execellent one since whole family made their holidays fruitfull n wish to avail your services in near future.Once again wish you a very happy n prosperous new year.Thanking you!.",
      name: "Capt. Prakash Tiwari",
      img: men,
      location: "Thailand Tour",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  return (
    <div className=" flex flex-col bg-[#fff8f3]">
      <div className=" flex flex-col items-center my-20">
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
      </div>
      <div className=" mb-20">
        <Carousel
          className="sm:px-14 px-7"
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          partialVisbile={false}
          customTransition={"all 1000ms"}
          showDots={true}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          autoPlay={true}
        >
          {reviewData.map((item, index) => {
            return (
              <div
                className=" sm:w-[420px] w-[300px] flex flex-col items-center bg-white border border-gray-200 shadow dark:bg-white dark:border-white rounded-lg"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                key={index}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-quote-left"
                  className="text-orange-600 sm:text-6xl text-4xl my-14"
                />
                <p className="sm:text-lg text-base text-gray-600 sm:w-[350px] w-[250px] sm:leading-7 text-center">
                  {item.text}
                </p>
                <div className=" flex flex-row my-8 mb-16 items-center justify-center max-w-fit space-x-6">
                  <img src={item.img} alt="" />
                  <div className=" flex flex-col justify-center items-start space-y-2">
                    <section>
                      {" "}
                      <div className=" flex flex-row justify-end">
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="text-yellow-400 sm:text-lg"
                        />
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="text-yellow-400 sm:text-lg"
                        />
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="text-yellow-400 sm:text-lg"
                        />
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="text-yellow-400 sm:text-lg"
                        />
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="text-yellow-400 sm:text-lg"
                        />
                      </div>
                    </section>
                    <section className="font-bold opacity-80 sm:text-lg">
                      {item.name}
                    </section>
                    <section className="text-gray-500 sm:max-w-fit w-[100px]">{item.location}</section>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonalsAbout;
