import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

const BlogDetail = () => {

    const [blog, setBlogs] = useState([])
   
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
      getAllBlogs()
    }, [])
  
    const getAllBlogs = async () => {
      try {
        let response = await axios.get(`https://lybleybackend-production.up.railway.app/getBlogById/${id}` )
        let {data} = response 
        setBlogs(data)
      }
      catch (err) {
        console.log(err);
      }
    }
  return (
    <>
     
  
    <div className='container'>
        <div className='mt-32'>
            <h2 className='text-3xl font-bold'>{blog?.title}</h2>
        </div>
        <div className='fs-12 d-flex mt-4'>
               <div className='ms-2 font-bold text-primary'>{new Date(blog?.createdAt).toDateString()}</div>
        </div>
         
        <div className='mt-5 flex items-center justify-center'>
           
            <img className={`img-fluid rounded`} src={blog?.image} alt={blog?.metaTitle} width="50%" />

        </div>

        <div>
             
            <div style={{whiteSpace: 'pre-wrap' ,fontSize:"16px",fontWeight:"400",color:"#1b1b28",fontFamily:"ColfaxAI, helvetica, sans-serif"}}  className=' mt-5 mb-12'>{blog?.description}</div>
        </div>
       
    </div>

 

</>
 
  )
}

export default BlogDetail