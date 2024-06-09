import React from "react";
import banner from "../Images/PrivacyPolicy/FlightBookingPolicy.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlightBooking = () => {
  const flightBookingData = [
    {
      text: "The total price displayed includes all applicable government taxes.",
    },
    {
      text: "The total price displayed includes all applicable government taxes.",
    },
    {
      text: "There will be no refund for 'no-shows' or any partially unused flights.",
    },
    {
      text: "To avail of infant fares, an infant must be under 24 months throughout the entire itinerary you are booking. This includes both onward and return journeys. If the infant is 24 months or above on the return journey, you'll need to make a separate booking using a child fare.",
    },
    {
      text: "Infants must be accompanied by an adult at least 18 years of age.",
    },
    {
      text: "All Tickets/Bookings issued to the customer shall additionally be governed under the terms and conditions as laid out by the respective Airlines / Supplier.",
    },
  ];
  const checkInData = [
    {
      text: "As per the airline rules, the standard check-in time begins 2 hours before departure for domestic flights.",
    },
    {
      text: "For International flights, the check-in time is 3 hours before departure.",
    },
    {
      text: "The passenger needs to check-in at least 2 hrs prior departure for Air India and Air India Express domestic flights, else will be considered as a no show.",
    },
    {
      text: "Infants must have valid proof-of-age documents showing that the infant is under two years old.",
    },
    {
      text: "Additional payment may be charged by the airline for seat allocations.",
    },
  ];
  const amendmentsData = [
    {
      text: "Sunshine Travels can assist you with amendments to most bookings. In some cases, though, you'll need to contact the airline directly.",
    },
    {
      text: "Every booking made on Sunshine Travels is subject to amendment charges levied by the airline, which may vary by flight and booking class. The charges levied by Airlines are Non-Refundable in case of cancellation post amendment.",
    },
    {
      text: "If you amend your booking, you will be charged the difference in fare, if any, applicable when the amendment is made. However if the new fare is lower than the Original fare, difference in the amount will not be refunded, but the rebooking charges as applicable will be collected. The charges levied by Airlines are Non-Refundable in case of cancellation post amendment.",
    },
    {
      text: "In addition to the airline's amendment charges, Sunshine Travels charges a Non-Refundable amendment handling fee of INR 200 per passenger per segment within India Domestic bookings.",
    },
    {
      text: "We'll collect these charges from you when we make the changes to your travel plans. We'll also collect the difference in fare, if any, applicable when the amendment is made.",
    },
    {
      text: "Depending on the airline's policy, some booked fares may not be amended.",
    },
    {
      text: "All bookings made through us, can also be amended by calling up the Airline Call Center directly.",
    },
    {
      text: "For within India Domestic bookings, if you amend your ticket offline through our call center a Non-Refundable fee of INR 300 per passenger per segment will be charged in addition to airline's amendment charges.",
    },
    {
      text: "For International bookings (Ex-India/To-India/ Anywhere to Anywhere in the world), if you amend your ticket offline through our call center a Non-Refundable fee of INR 400 per passenger per segment will be charged in addition to airline's amendment charges.",
    },
  ];
  const cancellationData = [
    {
      text: "Every booking made on Sunshine Travels is subject to cancellation charges levied by the airline, which may vary by flight and booking class.",
    },
    {
      text: "Some booked fares may be non-refundable per the specific airline's policy.",
    },
    {
      text: "Convenience fee is non-refundable in case of ticket cancellation by the user, or flight cancellation by the airline.",
    },
    {
      text: "Online cancellations: Cancellations can be made online by signing in to your Sunshine Travels Account.",
    },
    {
      text: "Offline cancellations: We also accept cancellation requests through phone. However Sunshine Travels cancellation charges for such offline cancellations may be higher",
    },
    {
      text: "In addition to the airline's cancellation charges, Sunshine Travels charges a Non-Refundable cancellation fee of INR 250 per passenger per segment within India Domestic bookings and INR 500 per passenger per ticket for International bookings (Ex-India/To-India/ Anywhere to Anywhere in the world)",
    },
    {
      text: "Only cancellation requests made online or telephonic through our customer support shall be entertained. Sunshine Travels shall not be liable to entertain any cancellation requests made through any other medium including but not limited to sms, e-mail",
    },
    {
      text: "For e-tickets, if your cancellation request is made less than 3 hours before departure, you'll need to contact the airline directly to get your reservation cancelled",
    },
    {
      text: "If you have done a 'Web/Tele Check-in' with the airline, get in touch with the airline for cancellation. Sunshine Travels will not be able to process the refund for the same and will not take any responsibility for the same.",
    },
    {
      text: "Convenience fee charged at the time of booking is non-refundable.",
    },
    {
      text: "For any cancellation made by you for which refund is already processed and if it is found that you have used/made changes to the ticket on the same PNR directly with the airline, Sunshine Travels reserves the right to debit your original mode of payment against the amount which has been refunded to you.",
    },
    {
      text: "For within India Domestic bookings, if you cancel your ticket offline through our call center a Non-Refundable fee of INR 500 per passenger per ticket will be charged in addition to airline's cancellation charges.",
    },
    {
      text: "For International bookings (Ex-India/To-India/ Anywhere to Anywhere in the world), if you cancel your ticket offline through our call center a Non-Refundable fee of INR 500 per passenger per ticket will be charged in addition to airline's cancellation charges.",
    },
  ];
  const refundsData = [
    {
      text:"It is mandatory to contact Sunshine Travels for all refunds, as the airline will not be able to refund your tickets booked at Sunshine Travels.com."
    },
    {
      text:"If you need a refund for paper tickets, please send them back to us. Your tickets must reach us within 48 hours of the time of cancellation so that we can get them endorsed by the airline for you."
    },
    {
      text:"If your paper ticket gets lost or damaged, the airline will not be able to process a refund request."
    },
    {
      text:"All cancellations made directly with the Airline need to be intimated to Sunshine Travels by Email or Phone in order to initiate the refunds process"
    },
    {
      text:"Processing times for cancellation and refund requests vary."
    },
    {
      text:"Sunshine Travels shall refund your cancellation only after the respective Airline/Service Provider processes to us your eligible refund. In case an airline ceases its flight operations, any refund owed by the airline to the passenger will be processed by Sunshine Travels only after receiving the same from the airline."
    },
  ]
  const noShowData = [
    {
      text:"The Airline reserves the right of admission or boarding for onward or return flight, in case the customer fails to board any segment of the travel for his itinerary. Sunshine Travels shall not be responsible or liable for such refusal of admission or boarding."
    },
  ]
  const gstData = [
    {
      text:"GSTIN cannot be updated once booking is completed."
    },
    {
      text:"Sunshine Travels will not be responsible for any flight reschedule/cancellations by the airline"
    },
    {
      text:"For complete flight booking terms and conditions Click Here (Airlines)."
    },
  ]
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Flight Booking Policy
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
            Flight Booking Policy
          </h1>
          <h2 className="font-[650] text-xl opacity-85 ">
            Sunshine Travels Flight Booking Policy
          </h2>
          {flightBookingData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">Check in:</h2>
          {checkInData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">Amendments:</h2>
          {amendmentsData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">
            Cancellation Policy:
          </h2>
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
          <h2 className="font-[650] text-xl opacity-85 ">
            Refunds:
          </h2>
          {refundsData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">
            No Show:
          </h2>
          {noShowData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">
            GST:
          </h2>
          {gstData.map((item, index) => {
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
          <p className="text-gray-500 text-[16.5px] ">For more info Please Contact Us or email us at sunshine@gmail.com</p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default FlightBooking;
