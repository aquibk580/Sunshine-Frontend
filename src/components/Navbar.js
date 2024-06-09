import React, { useState } from "react";
import logo from "./Images/logo.png";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBar";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);
  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      <div
        className="flex flex-row items-center justify-around bg-white"
        style={{ width: "100%" }}
      >
        <img
          src={logo}
          className="w-[110px] sm:h-[110px] sm:mx-0 mx-10 sm:w-56 sm:justify-self-start order-1"
          alt=""
        />
        <ul className="hidden list-none sm:flex flex-row text-black space-x-12 text-xl  sm:order-3">
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/packages"}>Travel Packages</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/ourspeciality"}>Our Speciality</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/otherservices"}>Other Services</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/cruise"}>Cruise</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/resources"}>Resources</Link>
          </li>
          <li className="cursor-pointer list-animation-nav">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="Bars text-black mx-6 md:mx-0 md:hidden order-0">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className="h-6"
            onClick={showSidebar}
          />
          <div className={sidebar ? "nav-menu active" : "nav-menu bg-gray-800"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item) => {
                return (
                  <li key={item.id} className="nav-text">
                    <Link to={item.path}>
                      {item.icon}
                      <span className="sideTitle">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mobile-account text-black order-3 mx-12 block sm:hidden">
          <Link to="/contact">
          <FontAwesomeIcon
            className="cursor-pointer list-animation-nav sm:hidde text-2xl"
            icon="fa-solid fa-user"
          />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
