import React from "react";

import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";


const techLogo = [
  { logo: "mongo.png", name: "Mongo DB" },
  { logo: "express.png", name: "Express JS" },
  { logo: "react.png", name: "React JS" },
  { logo: "node.png", name: "Node JS" },
  { logo: "reactNative.png", name: "React Native" },
  { logo: "next.svg", name: "Next JS" },
  { logo: "javascript.png", name: "JavaScript" },
  { logo: "tailwind.png", name: "Tailwind CSS" },
  { logo: "bootstrap.png", name: "Bootstrap" },
  { logo: "firebase.png", name: "Firebase" },
  { logo: "aws.png", name: "AWS" },
  { logo: "vercel.svg", name: "Vercel " },
 
]
const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center  ">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={"/programming.png"}
                  alt="eCommerce"
                  className="max-w-[450px] h-[450px]  w-full mx-0 drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className=" gap-6 sm:pt-0  ">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Technologies We Leverage
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide mt-4 leading-6"
                >
                  At Lybley we believe in harnessing the power of cutting-edge technologies to craft innovative solutions tailored to meet your needs. Our team excels in utilizing a diverse range of tools and frameworks to deliver top-notch software solutions. Below are some of the key technologies we specialize in
                  <br />
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 mt-8 gap-4 items-center">
                  {techLogo?.map((item, i) =>
                    <div data-aos="zoom-in" className=" " key={i}>
                      <div className="space-y-6">
                        <div className=" ">
                          <div className="relative group ">
                            <div

                              className="text-4xl flex items-center justify-center cursor-pointer    shadow-md p-4 rounded-md bg-violet-100 dark:bg-violet-400"
                            >
                              <img src={item?.logo} alt="image" className="  h-[50px]  "/>
                              <p className="invisible group-hover:visible absolute  bottom-0 text-xl font-bold text-center text-primary">
                                {item?.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
