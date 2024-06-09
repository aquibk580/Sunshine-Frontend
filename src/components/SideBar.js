import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { PiPackageFill } from "react-icons/pi";
import { HiSparkles } from "react-icons/hi2";
import { GiShipBow } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";

export const SidebarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    id: 3,
    title: "Travel Packages",
    path: "/packages",
    icon: <PiPackageFill />,
  },
  {
    id: 4,
    title: "Our Speciality",
    path: "/ourspeciality",
    icon: <HiSparkles />,
  },
  {
    id: 5,
    title: "Cruise",
    path: "/cruise",
    icon: <GiShipBow />,
  },
  {
    id: 6,
    title: "Other Services",
    path: "/otherservices",
    icon: <GrServices />,
  },
  {
    id: 7,
    title: "Contact Us",
    path: "/contact",
    icon: <BiSolidContact />,
  },
  {
    id: 8,
    title: "Resources",
    path: "/resources",
    icon: <GrResources />,
  },
];
