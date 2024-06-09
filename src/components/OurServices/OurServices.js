import React from "react";
import banner from "../Images/OurServices/banner.jpg";
import image1 from "../Images/OurServices/EURail.png";
import image2 from "../Images/OurServices/HotelBooking.png";
import image3 from "../Images/OurServices/Pre-paid-mobile-sim.png";
import image4 from "../Images/OurServices/CruiseBooking.png";
import TopReasons from "../Reuse/TopReasons";

const OurServices = () => {
  const ourServiceData = [
    {
      img: image1,
      head: "EURail",
      text: "Sunshine Travels offer International Rail Ticket Booking Services. Book Train Tickets of Indian Luxurious Trains, European Trains, USA Trains, Japan Trains.",
    },
    {
      img: image2,
      head: "Cruise Booking",
      text: "Sunshine Travels offer Cruise Booking service. We do Booking in Star Cruises, Royal Carribbean Cruise, MSC Cruise line, Princess Cruise, Carnival Cruises.",
    },
    {
      img: image3,
      head: "Prepaid Mobile SIM",
      text: "Buy International Prepaid Mobile SIM while traveling abroad.",
    },
    {
      img: image4,
      head: "Hotel Booking",
      text: "Get deals on Hotel Booking - Book budget hotels, cheap hotels 5 star hotels in India and International destinations at Sunshine Travels.",
    },
  ];
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Our Services
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-row my-20 justify-around sm:mx-24 flex-wrap sm:flex-nowrap">
        <div className="flex flex-col sm:space-y-9">
          <div className="flex flex-col mx-5 space-y-8">
          <h1 className="sm:text-6xl text-3xl font-bold opacity-85">
            Our Services
          </h1>
          <p className="text-gray-500 text-[16.5px] font-semibold sm:px-1">
            Sunshine Travels provides all types of services related to travel
            field which includes:
          </p>
          </div>
          <div className=" flex flex-row flex-wrap px-2 my-10">
            {ourServiceData.map((item, index) => {
              return (
                <div
                  className=" flex flex-col items-center sm:items-start max-w-fit mx-5 sm:my-0 my-5"
                  key={index}
                >
                  <img src={item.img} className="w-[60px]" alt="" />
                  <h1 className="text-2xl font-[650] opacity-85">
                    {item.head}
                  </h1>
                  <p className="text-gray-600 text-[16.5px] sm:w-[400px] my-5">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default OurServices;
