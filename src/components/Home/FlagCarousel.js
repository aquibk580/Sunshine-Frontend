import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TourismFlag1 from "../Images/TourismFlag1.jpg"
import TourismFlag2 from "../Images/TourismFlag2.jpg"
import TourismFlag3 from "../Images/TourismFlag3.jpg"
import TourismFlag4 from "../Images/TourismFlag4.jpg"

export const FlagCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
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
    <div className=' my-16 px-20 sm:pl-36'>
      <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={5000}
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
            <img src={TourismFlag1} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag2} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag3} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag4} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag1} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag2} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag3} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
            <img src={TourismFlag4} className='grayscale-[100] hover:grayscale-0 transition-all duration-1000 cursor-pointer' alt="" />
          </Carousel>
    </div>
  )
}