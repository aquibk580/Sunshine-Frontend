import React from "react";
import logo from "./Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;
  const footerData = [
    {
      heading: "Our Speciality",
      li: [
        { path: "/packages/domestic", lis: "Domestic" ,id:1 },
        { path: "/packages/international", lis: "International" ,id:2 },
        { path: "/ourspeciality", lis: "Passports" ,id:3 },
        { path: "/ourspeciality", lis: "Visas" ,id:4 },
        { path: "/ourspeciality", lis: "Air Tickets" ,id:5 },
        { path: "/ourspeciality", lis: "Overseas Insurance" ,id:6 },
      ],
    },
    {
      heading: "Other Services",
      li: [
        { path: "/cruise", lis: "Cruise" ,id:7 },
        { path: "/otherservices", lis: "Sunshine Forex" ,id:8 },
        { path: "/otherservices", lis: "Hotels" ,id:9 },
        { path: "/otherservices", lis: "Eurail" ,id:10 },
        { path: "/otherservices", lis: "PrePaid Sim" ,id:11 },
        { path: "/about", lis: "About Us" ,id:12 },
      ],
    },
  ];
  return (
    <div className=" bg-[#272d2e] flex flex-col">
      <div className=" flex flex-col items-center mt-24 mb-10">
        <h1
          className="text-4xl max-w-fit my-2"
          style={{
            textTransform: "none",
            fontFamily: "'Reey_Regular',cursive",
            color: "#ff5622",
          }}
        >
          Get Regular Updates
        </h1>
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">
          Subcribe to our Newsletter
        </h2>
        <div className=" flex flex-row sm:space-y-0 space-y-4 sm:flex-nowrap flex-wrap pt-10 justify-center">
          <div className=" bg-white pl-8 sm:pr-[260px] pr-[70px] rounded-l-md rounded-r-md sm:rounded-r-none py-5 max-w-fit">
            <input
              type="text"
              className="outline-0"
              placeholder="Your email here"
            />
          </div>
          <button className="bg-[#ff5622] px-[121px]  sm:px-12 py-[18px] sm:py-5 rounded-r-md sm:rounded-l-none rounded-l-md text-white text-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>
      <div className=" flex flex-row my-16 justify-around max-w-fit sm:mx-24 sm:flex-nowrap flex-wrap">
        <div className=" flex flex-col sm:items-start items-center">
          <img className="w-44 sm:my-0 mb-7" src={logo} alt="logo" />
          <p className="sm:text-[18px] text-[#a3adcc] line leading-8 sm:w-[450px] w-[320px] font-semibold">
            Sunshine Travels™ is a one stop shop for all the travel needs
            ranging from Ticketing, Passports, Visas, Overseas Mediclaim
            Insurance, Foreign Exchange, Hotel Reservations as well as Eurail,
            Greyhound, Amtrac, Japanrail, Swissrail and Britrail Passes.
          </p>
          <div className="space-y-3 my-[22px]">
            <p className="sm:text-[18px] font-semibold text-[#a3adcc] list-animation cursor-pointer">
              <FontAwesomeIcon
                className="text-orange-600 mr-3"
                icon="fa-solid fa-location-dot"
              />{" "}
              <Link to="/contact">
              Station Road Thane
              </Link>
            </p>
            <p className="sm:text-[18px] font-semibold text-[#a3adcc] list-animation cursor-pointer">
              <FontAwesomeIcon
                className="text-orange-600 mr-3"
                icon="fa-solid fa-phone"
              />{" "}
              <Link to="/conact">
              +91 9321445232
              </Link>
            </p>
            <p className="sm:text-[18px] font-semibold text-[#a3adcc] list-animation cursor-pointer">
              <FontAwesomeIcon
                className="text-orange-600 mr-3"
                icon="fa-solid fa-envelope"
              />{" "}
              <Link to="/contact">
              info@sunshinetravels.com
              </Link>
            </p>
          </div>
          <ul className="list-none flex flex-row space-x-8 sm:my-2 my-6 sm:max-w-fit">
            <li className="text-blue-700 list-animation">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
            <li className="text-pink-600 list-animation">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
            <li className="text-blue-500 list-animation">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
            <li className="text-red-600 list-animation">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-youtube"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
            <li className="text-white list-animation">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-wikipedia-w"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
            <li className="text-gray-950 hover:text-orange-600 transition-all duration-[450ms]">
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-brands fa-blogger-b"
                  size={`${!isMobile === true ? "2xl" : "xl"}`}
                />
              </Link>
            </li>
          </ul>
        </div>
        {footerData.map((item,index) => {
          return (
            <div
              className=" flex flex-col space-y-4 max-w-fit mx-12 sm:items-start items-center"
              key={index}
            >
              <h1 className="text-white font-bold text-2xl my-4">
                {item.heading}
              </h1>
              {item.li.map((list) => {
                return (
                  <Link to={list.path} key={list.id}>
                    <p
                      className=" sm:text-[18px] text-[#a3adcc] font-semibold cursor-pointer hover:underline list-animation"
                    >
                      {list.lis}
                    </p>
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div className=" flex flex-col max-w-fit space-y-6 sm:pl-14">
          <h1 className="text-2xl text-white font-bold my-4 sm:text-left text-center">
            Our Address
          </h1>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.093468821788!2d72.97447207498034!3d19.191119482037347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b927201b8a85%3A0xc4abadc833300e35!2sStation%20Rd%2C%20Jambli%20Naka%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715342740711!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className=" flex flex-row sm:text-[17px] sm:space-y-0 space-y-5 text-[#a3adcc] mb-10 sm:flex-nowrap flex-wrap justify-center sm:justify-start">
        <p className="sm:mx-24 sm:mr-32">
          All rights researved Sunshine © 2024
        </p>
        <ul className="list-none flex flex-row sm:space-y-0 space-y-1 space-x-11 sm:space-x-10 sm:flex-wrap flex-wrap ">
          <li className="list-animation sm:ml-0 ml-10 sm:mt-0 mt-1">
            <Link to="/policy/privacy">Privacy Policy</Link>
          </li>
          <li className="list-animation">
            <Link to="/policy/flightbooking">Flight Booking Policy</Link>
          </li>
          <li className="list-animation">
            <Link to="/policy/airlineterms">Airline Terms</Link>
          </li>
          <li className="list-animation">
            <Link to="/policy/Cancellation/">Cancellation Policy</Link>
          </li>
          <li className="list-animation">
            <Link to="/policy/termsofuse">Terms of Use</Link>
          </li>
          <li className="list-animation">
            <Link to="/policy/termsofservices">Terms of Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
