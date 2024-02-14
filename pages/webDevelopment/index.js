import React from 'react'

const webDevelopment = () => {
  return (
    <div className='container mt-10 md:mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='mt-16'>

          <h1 className='font-bold text-8xl'>Web</h1>
          <h2 className='font-bold text-5xl md:text-6xl text-secondary'>DEVELOPMENT</h2>
          <div className='mt-4 italic text-justify'>At Lybley, we excel in specializing and delivering highly dynamic and versatile web development solutions that redefine the digital landscape while optimizing your business operations. Our adept team of skilled developers is driven by an unwavering commitment to engineering innovative, secure, and resilient web applications tailored specifically to meet the nuanced demands of diverse industries. Within our repertoire of services, we offer a comprehensive range that includes:</div>
        </div>
        <div className=''>
          <img src="webDevelopment.png" alt="web" className='mx-auto md:h-[500px] h-[25 0px] ' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='hidden md:block'>
          <img src="eCommerse.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>E-commerce Solutions</h2>
          <div className='text-justify mt-2'>We propel your online business forward by meticulously crafting tailored e-commerce solutions. Our focus extends beyond mere interfaces to building immersive and user-centric platforms. From seamless browsing experiences to robust and secure payment gateways, we engineer custom e-commerce platforms that not only elevate your customers' shopping experiences but also drive substantial growth in your sales and conversions.
          </div>
        </div>
        <div className='md:hidden block mt-4'>
          <img src="eCommerse.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>CRM (Customer Relationship Management)</h2>
          <div className='text-justify mt-2'>Transform your customer interactions into meaningful relationships with our meticulously designed CRM solutions. We go beyond just centralizing customer data; we architect intuitive systems that streamline communication channels and automate pivotal processes. By harnessing our CRM tools, your team gains the power to cultivate stronger client relationships, foster engagement, and drive tangible business expansion.
          </div>
        </div>
        <div>
          <img src="crm.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden md:block '>
          <img src="ticketBooking.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Ticket Booking Systems</h2>
          <div className='text-justify mt-2'>Our commitment to simplifying reservation processes is unwavering. Whether it's event bookings, travel arrangements, or service reservations, our efficient ticket booking systems redefine user experiences. Designed with a laser focus on usability, security, and scalability, our solutions ensure seamless transactions and deliver delightful experiences to your clientele, elevating your brand's reliability and efficiency.
          </div>
        </div>
        <div className='md:hidden block mt-4 '>
          <img src="ticketBooking.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Portfolio Websites</h2>
          <div className='text-justify mt-2'>We don't just build websites; we create captivating narratives that showcase your brand's journey and achievements. Our portfolio websites are meticulously crafted to be both visually stunning and functionally impeccable. By leveraging cutting-edge design and technology, we present your expertise, services, and past work in a compelling manner, leaving an indelible mark on your visitors and potential clients.
          </div>
        </div>
        <div>
          <img src="porfolioWebsite.png" alt="web" className='mx-auto h-[200px] md:h-[300px]' />
        </div>
      </div>

      <div className='mt-8 text-primary italic text-2xl'>
        At Lybley, we prioritize collaboration and tailor our services to align with your unique business goals. Our development process integrates the latest technologies and industry best practices to ensure high-quality, scalable, and future-proof solutions.
      </div>
      <div className='mt-2 mb-8 text-primary italic text-2xl'>
        Get in touch with us today to discuss how we can transform your vision into a powerful web presence that drives success.</div>
    </div>
  )
}

export default webDevelopment