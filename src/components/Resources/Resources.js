import React from "react";
import banner from "../Images/Resources/banner.jpg";
import blog from "../Images/Resources/blogs.jpg";
import news from "../Images/Resources/news.jpg";
import { Link } from "react-router-dom";
import TopReasons from "../Reuse/TopReasons";

const Resources = () => {
  const resourceData = [
    {
       img:blog,
       head:"Blogs",
       path:"/resources/blogs"
    },
    {
        img:news,
        head:"News",
        path:"/resources/news"
     },
  ] 
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Resources
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className=" flex flex-row sm:my-20 my-10 sm:mx-20 max-w-fit sm:flex-nowrap flex-wrap sm:space-x-14">
        <div className=" flex flex-row sm:flex-nowrap flex-wrap sm:space-x-7 sm:mx-0 justify-center">
          {resourceData.map((item, index) => {
            return (
              <div
                style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
                className="max-w-fit sm:pb-0 pb-[25px] sm:h-[370px] mx-2 bg-white rounded-xl dark:border-white shadow-md sm:my-0 my-10"
                key={index}
              >
                <Link to={item.path}>
                  <img
                    style={{ transition: " transform 0.3s ease-in-out" }}
                    className="hover:scale-[1.01] rounded-t-lg sm:w-[418px] w-[300px] cursor-pointer"
                    src={item.img}
                    alt=""
                  />
                </Link>
                <div className=" sm:mx-5 mx-5 space-y-4 mt-7 max-w-fit">
                  <Link to={item.path}>
                    <h2 className="text-2xl font-bold max-w-fit cursor-pointer list-animation-nav opacity-85">
                      {item.head}
                    </h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default Resources;
