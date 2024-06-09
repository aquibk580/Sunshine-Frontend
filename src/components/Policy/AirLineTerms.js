import React from "react";
import banner from "../Images/PrivacyPolicy/AirlineTerms.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AirLineTerms = () => {
  const airLineData = [
    {
      text: "Cancellations are allowed upto one (1) hour prior to departure.",
    },
    {
      text: "Only taxes will be refunded if a guest is a No Show or if the booking is cancelled within one (1) hour to departure.",
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Airline Terms
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
            Airline Terms
          </h1>
          {airLineData.map((item, index) => {
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
            If you cancel a booking, Cleartrip levies a cancellation processing
            fee of Rs 250 per passenger per segment. Remember that this is in
            addition to the airline’s own cancellation charges. If you make an
            amendment to your booking, we charge an amendment processing fee of
            Rs 250 per passenger per sector. Cleartrip’s fees are standard
            across all airlines.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            All tickets issued to the customer shall additionally be governed
            under the terms and conditions as laid out
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">Baggage Allowance</h2>
          <table className="">
            <thead className="opacity-85 font-semibold text-gray-600">
              <tr className="space-x-3">
                <th className="sm:px-6 px-2 py-2">Class of travel</th>
                <th className="sm:px-6 px-2 py-2">Adult</th>
                <th className="sm:px-6 px-2 py-2">Child</th>
                <th className="sm:px-6 px-2 py-2">Infant</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="sm:px-6 px-2 py-2">First Class</td>
                <td className="sm:px-6 px-2 py-2">40 kg</td>
                <td className="sm:px-6 px-2 py-2">40 kg</td>
                <td className="sm:px-6 px-2 py-2">0 kg</td>
              </tr>
              <tr>
                <td className="sm:px-6 px-2 py-2">Executive Class</td>
                <td className="sm:px-6 px-2 py-2">35 kg</td>
                <td className="sm:px-6 px-2 py-2">35 kg</td>
                <td className="sm:px-6 px-2 py-2">0 kg</td>
              </tr>
              <tr>
                <td className="sm:px-6 px-2 py-2">Economy Class</td>
                <td className="sm:px-6 px-2 py-2">15 kg</td>
                <td className="sm:px-6 px-2 py-2">15 kg</td>
                <td className="sm:px-6 px-2 py-2">0 kg</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-500 text-[16.5px] ">
            Any excess baggage beyond the permissible Free Baggage Allowance
            will be charged at carriage rates that vary from sector to sector.
            These rates are available with the airline upon request.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">Please note:</h2>
          <p className="text-gray-500 text-[16.5px] ">
            To make amendments to your tickets, you’ll need to contact the
            airline directly. If you are holding e–tickets, you can cancel
            online on our website if the cancellation request is made more than
            3 hours prior to the scheduled time of your flight. If the
            cancellation request is submitted less than 3 hours, you need to
            contact the airlines to get your reservation cancelled. The above
            mentioned cancellation process and refund processing time may vary.
            In case of lost or damaged paper tickets, the refund process cannot
            be initiated with the airline.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
          For more info Please <Link to="/contact" className="text-orange-500">Contact Us</Link> or email us at sunshine@gmail.com
          </p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default AirLineTerms;
