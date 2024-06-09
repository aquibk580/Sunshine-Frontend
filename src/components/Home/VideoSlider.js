import React, { useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import video1 from "../Videos/Nature-video-1.mp4";
import video2 from "../Videos/Nature-video-2.mp4";
import video3 from "../Videos/Nature-video-3.mp4";
import { useNavigate } from "react-router-dom";

const VideoSlider = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const videoPlay = () => {
    new Promise((resolve, reject) => {
      if (videoRef) {
        resolve(videoRef.current.play());
      }
    })
      .then((value) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    //eslint-disable-next-line
    videoPlay();
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <div className="video-  relative sm:max-h-fit overflow-x-hidden">
        <div className=" flex flex-col">
          <div className="sm:text-5xl font-bold text-white z-10 absolute sm:top-[230px] sm:left-[350px] top-20 left-10">
            Get Exciting Packages with best Offers
            <br />
            Explore the world in your own Way
          </div>
          <div className="z-10 relative sm:top-[460px] sm:left-[550px] top-36 flex flex-row justify-center text-white w-[450px]">
            <button onClick={()=> navigate('/packages')} className=" absolute sm:left-0 left-[55px] bg-orange-600 hover:bg-transparent sm:px-12 px-5 py-[6px] sm:py-[14px]  font-bold rounded-md border-2 border-orange-600 hover:text-orange-600  transition-colors text-sm sm:text-lg">
              Know More
            </button>
            <button onClick={()=> navigate('/contact')} className="absolute sm:left-56 left-[200px] hover:bg-orange-600 sm:px-12 px-[18px] sm:py-[14px] py-[5px] font-bold rounded-md border-white hover:border-orange-600 border-2 transition-colors text-sm sm:text-lg">
              Contact Us
            </button>
          </div>
        </div>
        <Carousel
          showArrows={isMobile === true?false:true}
          autoPlay
          interval="5000"
          transitionTime="1000"
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          showIndicators={false}
        >
          <div className="sm:h-[620px]">
            <video
              ref={videoRef}
              muted="muted"
              loop
              src={video1}
              autoPlay
            ></video>
          </div>
          <div className="sm:h-[620px]">
            <video
              ref={videoRef}
              muted="muted"
              loop
              src={video2}
              autoPlay
            ></video>
          </div>
          <div className="sm:h-[620px]">
            <video
              ref={videoRef}
              muted="muted"
              loop
              src={video3}
              autoPlay
            ></video>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default VideoSlider;
