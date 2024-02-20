import Link from 'next/link'
import React, { useRef, useState } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';

const contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  
   
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_Fqwwace', 'template_ocqbg2i', form.current, {
        publicKey: '_CfyK7qSpPtYygV9T',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
           
        },
      );
  };
  return (
    <>
      <div className='  bg-cover bg-center  h-[370px]' style={{ backgroundImage: "url(contactUs.jpg)", marginTop: "72px" }}>

      </div>
      <div className=' flex justify-center items-center  '>
        <div className='flex justify-center items-center p-4 bg-gradient-to-r from-[#f7bab7] to-[#c7eae4] w-[280px] rounded-b-lg text-black font-bold text-5xl '>
          Contact us
        </div>
      </div>
      <div className='container  sm:py-0 '>
        <div className='   py-10'>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   py-4'>
            <div>
              <div className="font-bold text-4xl  text-center mb-8">ONLINE INQUIRY</div>
              <div className="max-w-md mx-auto bg-gray-200  p-4 rounded-md shadow-md  ">

                <div className=''>
                  <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1  gap-6'>
                    <input type='text' name="user_name" className='col-span-2   focus:outline-none w-full   rounded-lg bg-white p-4' placeholder='Name' />

                    {/* <input type='number' name="contact" className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-white p-4' placeholder='Phone Number' onChange={handleInputChange} /> */}

                    <input type='email' name="user_email" className='col-span-2 focus:outline-none w-full   rounded-lg bg-white p-4' placeholder='Email' />

                    <textarea className='col-span-2 focus:outline-none w-full   rounded-lg bg-white p-4' name="message" placeholder='Message' />
                    <button type="submit" value="Send" className='bg-blue-400 text-xl w-full text-white font-bold  rounded-lg   p-4' disabled={isLoading}  >{isLoading ? "Submitting" : "Submit"}</button>
                  </form>
                  <div className='text-center text-green-500 font-bold text-2xl pt-4'>{msg} </div>
                </div>
              </div>

            </div>
            <div>
              <div className=' mb-8 md:mt-0 mt-16 text-center font-bold text-4xl'>
                GET IN TOUCH
              </div>
              <div className='mt-4'>
                <div>Have a question, feedback, or just want to say hello? We'd love to hear from you! Use the following methods to get in touch with us:</div>
                <div className='mt-2 font-bold text-3xl'>Contact Information</div>
                <div className='mt-4'>
                  <div className='p-4 bg-black/20 text-primary rounded-lg font-bold w-full'>BEROWN SERVICES</div>
                </div>
                <div className='mt-2 font-bold text-2xl'>Address:</div>

                <div>
                  <div className='mt-3 p-4 bg-black/20 text-primary rounded-lg font-bold w-full'>G 134 sec 63 noida 201301</div>
                </div>
                <div className='mt-2 font-bold text-2xl'>Email :</div>
                <div className='mt-3 p-4 bg-black/20 text-primary rounded-lg font-bold w-full'> berownservices@gmail.com.com</div>
                <div className='mt-2 font-bold text-2xl'>Contact No. :</div>
                <div className='mt-3 p-4 bg-black/20 text-primary rounded-lg font-bold w-full'>7065647525</div>
                <div className='mt-2 font-bold text-2xl'>Social Media</div>
                <div>Connect with us on social media for updates, news, and more:</div>
                <div className="flex items-center gap-3 mt-4 p-4 bg-black/20 text-primary rounded-lg font-bold w-full">
                  <Link href="#">
                    <FaInstagram className="text-3xl text-primary" />
                  </Link>
                  <Link href="#">
                    <FaFacebook className="text-3xl text-primary" />
                  </Link>
                  <Link href="#">
                    <FaLinkedin className="text-3xl text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact