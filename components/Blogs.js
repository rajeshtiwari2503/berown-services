import React, { useEffect, useState } from "react";

import Card from "./Card";
import axios from "axios";


const Blogs = (props) => {

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = async () => {
    try {
      let response = await axios.get("https://lybleybackend-production.up.railway.app/getAllBlogs")
      let {data} = response 
      setBlogs(data)
    }
    catch (err) {
      console.log(err);
    }
  }
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
