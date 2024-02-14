import React from 'react'
import { FaHandPointRight } from 'react-icons/fa'

const mobileApp = () => {
  return (
    <div className='container mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-16 mt-8'>
          <h1 className='font-bold text-8xl'>Mobile </h1>
          <h2 className='font-bold text-5xl mdtext-6xl text-secondary'>APP DEVELOPMENT</h2>
          <div className='mt-4 italic text-justify'>At Lybley, we specialize in delivering dynamic and versatile mobile app solutions using React Native, crafted to enhance your digital presence and streamline your operations. Our adept team of developers is dedicated to creating innovative and robust mobile applications that cater to diverse industries. Our services encompass:</div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[250px] md:h-[500px] py-4' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='hidden md:block'>
          <img src="mobileEcommerce.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>E-commerce Apps</h2>
          <div className='text-justify mt-2'>Propel your online business with our customized e-commerce apps. From intuitive user interfaces to robust payment gateways, we design and develop tailored solutions that elevate customer shopping experiences and maximize your sales potential.


          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileEcommerce.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>CRM Integration</h2>
          <div className='text-justify mt-2'>Optimize client interactions with our CRM-integrated mobile apps. We architect intuitive systems that centralize client data, streamline communications, and automate processes, empowering your team to nurture stronger client relationships and drive business growth.
          </div>
        </div>
        <div>
          <img src="crmIntegration.png" alt="web" className='mx-auto py-4 h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className=' hidden  md:block'>
          <img src="ticketBooking.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Ticket Booking Solutions</h2>
          <div className='text-justify mt-2'>Simplify reservations with our efficient ticket booking apps. Whether it's for events, travel, or services, our user-friendly, secure, and scalable solutions ensure seamless transactions and delightful user experiences.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="ticketBooking.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Portfolio Apps</h2>
          <div className='text-justify mt-2'>Showcase your brand and achievements with engaging portfolio apps. We craft visually appealing and functional applications that highlight your expertise, services, and past accomplishments, making a lasting impression on your users.
          </div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>

      <div className='mt-8 text-primary italic text-2xl'>
        <FaHandPointRight />At Lybley, collaboration is key, and we tailor our services to align with your unique business goals. Our development process integrates cutting-edge React Native technologies and industry best practices, ensuring high-quality, scalable, and future-proof app solutions.
      </div>
      <div className='mt-2 mb-8 text-primary italic text-2xl'>
        Reach out to us today, and let's transform your vision into a compelling mobile app presence that drives success.</div>
    </div>
  )
}

export default mobileApp