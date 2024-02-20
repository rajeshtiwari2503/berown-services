import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Location from './Location';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const [msg, setMsg] = useState("");
  
    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true)
    
      emailjs
        .sendForm('service_fqwwace', 'template_ocqbg2i', form.current, {
          publicKey: '_CfyK7qSpPtYygV9T',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setMsg("Your message send successfully")
          setIsLoading(false)

            
          },
          (error) => {
            console.log('FAILED...', error.text);
          setIsLoading(false)
             
          },
        );
    };
    return (
        <div>
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
                    <Location />
                </div>
            </div>
        </div>
    )
}

export default Contact