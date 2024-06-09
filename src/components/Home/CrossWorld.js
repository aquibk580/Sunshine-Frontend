import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CrossWorld1 from "../Images/CrossWorld/CrossImage1.jpg";
import CrossWorld2 from "../Images/CrossWorld/CrossImage2.jpg";
import CrossWorld3 from "../Images/CrossWorld/CrossImage3.jpg";
import CrossWorld4 from "../Images/CrossWorld/CrossImage4.jpg";
import CrossWorld5 from "../Images/CrossWorld/CrossImage5.jpg";
import CrossWorld6 from "../Images/CrossWorld/CrossImage6.jpg";

export const CrossWorld = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className=" px-5 sm:px-0 sm:mb-0 mb-20">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={3000}
        partialVisbile={false}
        customTransition={"all 1000ms"}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        autoPlay={true}
      >
        <img src={CrossWorld1} alt="" />
        <img src={CrossWorld2} alt="" />
        <img src={CrossWorld3} alt="" />
        <img src={CrossWorld4} alt="" />
        <img src={CrossWorld5} alt="" />
        <img src={CrossWorld6} alt="" />
        <img src={CrossWorld1} alt="" />
        <img src={CrossWorld2} alt="" />
        <img src={CrossWorld3} alt="" />
        <img src={CrossWorld4} alt="" />
        <img src={CrossWorld5} alt="" />
        <img src={CrossWorld6} alt="" />
      </Carousel>
    </div>
  );
};
