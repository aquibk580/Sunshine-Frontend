import React from "react";
import banner from "../Images/PrivacyPolicy/Cancellation.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cancellation = () => {
  const cancellationData = [
    {
      text: "Sunshine Travels classifies this as a Non-Refundable fare",
    },
    {
      text: "Cancellation Charges",
    },
    {
      text: "Adult: only Rs. 3000.0 will be deducted or 106.0% of base fare will be deducted. Whichever is Lower",
    },
    {
      text: "Adult: only Rs. 3000.0 will be deducted or 106.0% of base fare will be deducted. Whichever is Lower",
    },
    {
      text: "Adult: only Rs. 3000.0 will be deducted or 106.0% of base fare will be deducted. Whichever is Lower",
    },
    {
      text: "Amendment in Higher Class Charges",
    },
    {
      text: "Adult Rebooking In Higher Class: only Rs. 2250.0 will be deducted",
    },
    {
      text: "Child Rebooking In Higher Class: only Rs. 2250.0 will be deducted",
    },
    {
      text: "Infant Rebooking In Higher Class: only Rs. 0.0 will be deducted",
    },
    {
      text: "Amendment in Same Class Charges",
    },
    {
      text: "Adult Rebooking In Same Class: only Rs. 2250.0 will be deducted",
    },
    {
      text: "Child Rebooking In Same Class: only Rs. 2250.0 will be deducted",
    },
    {
      text: "Infant Rebooking In Same Class: only Rs. 0.0 will be deducted",
    },
    {
      text: "Incase of Special round trip fare, no refund for partial (one sector) cancellation",
    },
    {
      text: "Sunshine Travels shall refund your cancellation only after the respective Airline/Service Provider processes to us your eligible refund.",
    },
    {
      text: "If Cancellation is done through the customer support executives assistance, we will levy Rs. 500 per passenger per flight.",
    },
    {
      text: "If amendment is done through the customer support executives assistance, we will levy Rs. 300 per passenger per flight.",
    },
    {
      text: "The rebooking/cancellation charges given above are levied on a per-passenger per-flight basis.",
    },
    {
      text: "Rebooking charges plus the difference of fare will be charged incase rebooked on higher RBD.",
    },
    {
      text: "In case you cancel within two hour prior to departure NO SHOW charges will be applicable.",
    },
    {
      text: "We do not accept cancellations / Amendments over email.",
    },
    {
      text: "Photo id required at check in",
    },
    {
      text: "Over and above the airline cancellation charges, We will levy Rs. 250 per passenger per flight if you cancel it online from your Sunshine Travels account.",
    },
    {
      text: "Over and above the airline amendment charges, We will levy Rs. 200 per passenger per flight if you amend it online from your Sunshine Travels account.",
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Cancellation Detailes
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-row my-24 justify-around sm:mx-24 sm:flex-nowrap flex-wrap">
        <div className="flex flex-col space-y-7 items-center sm:items-start sm:mb-0 mb-10 sm:w-[870px] w-[300px]">
          <h1 className="font-bold opacity-80 sm:text-6xl text-2xl">
            Cancellation Detailes
          </h1>
          <h2 className="font-[650] text-xl opacity-85 ">
            Cancellation details for Domestic
          </h2>
          <h2 className="font-[650] text-xl opacity-85 ">
            Fare rules for your flight
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            Each fare you book carries its own set of rules & restrictions. For
            the purposes of your booking the most restrictive set of rules apply
            to every flight that is part of your trip.
          </p>
          {cancellationData.map((item, index) => {
            return (
              <div className="flex flex-row space-x-4 " key={index}>
                <FontAwesomeIcon
                  icon="fa-solid fa-check"
                  className="text-green-500"
                  size="lg"
                />
                <p className="sm:text-[16.5px] text-gray-500">{item.text}</p>
              </div>
            );
          })}
          <p className="text-gray-500 text-[16.5px] ">
            We have tried our best to collate this data for you in attempt to
            make it easier to understand. In case you still have doubts please
            don't hesitate to call our flight experts (+91)22 40384747 local
            call from any phone between 10.30 am and 7 pm Indian time
          </p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default Cancellation;
