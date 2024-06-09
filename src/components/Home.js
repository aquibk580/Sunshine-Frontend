import React from "react";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";

import VideoSlider from "./Home/VideoSlider";
import CardCarousel from "./Home/CardCarousel";
import { Testimonals } from "./Home/Testimonals";
import { FlagCarousel } from "./Home/FlagCarousel";
import { News } from "./Home/News";
import { CrossWorld } from "./Home/CrossWorld";
import LetsTravelNow from "./Home/LetsTravelNow";
import TravelPackages from "./Home/DomesticPackages";
import LetsExplore from "./Home/LetsExplore";
import InterrnationalPackages from "./Home/InterrnationalPackages";
import WhyChooseUs from "./Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <VideoSlider />
      <CardCarousel />
      <LetsTravelNow />
      <TravelPackages />
      <LetsExplore />
      <InterrnationalPackages />
      <WhyChooseUs/>
      <Testimonals />
      <FlagCarousel />
      <News />
      <CrossWorld />
    </>
  );
};
export default Home;
