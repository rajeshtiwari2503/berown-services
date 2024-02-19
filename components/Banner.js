import React from "react";

import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";


const techLogo = [
  { logo: "ac.svg", name: "AC" },
  { logo: "fridge.svg", name: "Fridge" },
  { logo: "microwave.svg", name: "Microwave" },
  { logo: "washingM.svg", name: "Washing Machine" },
  { logo: "cctv.png", name: "C C TV  " },
  { logo: "ro.png", name: "R O" },
  { logo: "6749976.png", name: "Geyser " },
   
  { logo: "services.svg", name: "All services" },

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
                  src={"/appliances.png"}
                  alt="appliances"
                  className="max-w-[450px] h-[450px]  w-full mx-0 drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className=" gap-6 sm:pt-0  ">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Solutions for an every repair problem
                </h1>
                <h3  className="text-1xl sm:text-2xl font-bold mt-5">   What is HVAC?</h3>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide mt-4 leading-6"
                >

                  HVAC is short for Heating, Ventilation and Air Conditioning. HVAC is most often used to depict the whole heating and cooling system consisting of the duct work, air filters, humidification controls, and registers.
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
                               <p className="  mb-2  absolute   top-0  text-sm font-bold text-center text-primary">
                                {item?.name}
                              </p>
                              <img src={item?.logo} alt="image" className="  h-[50px]  mt-2 " />
                              {/* <p className="invisible group-hover:visible absolute  bottom-0 text-xl font-bold text-center text-primary">
                                {item?.name}
                              </p> */}
                             
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
