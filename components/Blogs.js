import React, { useEffect, useState } from "react";

import Card from "./Card";
 

const blogs=[
  {
    id:1,
    image:"services.svg",  
    title:"Electrical",  
     description:"Lighting up your life with safe and efficient wiring solutions.",
  },
  {
    id:1,
    image:"services.svg",  
    title:"HVAC",  
     description:"Keeping your home cozy in winter and cool in summer.",
  },
  {
    id:1,
    image:"services.svg",  
    title:"Appliance Repair",  
     description:"Bringing your malfunctioning appliances back to life for seamless daily living.",
  },
  {
    id:1,
    image:"services.svg",  
    title:"Renovations",  
     description:"Breathing new life into your home with expert remodeling and renovations",
  },
  
]
const Blogs = (props) => {

  
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          {blogs.length>0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {  blogs?.map((item) => (
              <Card key={item.id} {...item} />
              
            ))}
          </div>
          :<div className="text-center font-bold text-red-600">No Blogs</div>
            }
        </section>
      </div>
    </>
  );
};

export default Blogs;
