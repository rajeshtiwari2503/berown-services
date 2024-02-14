import React from 'react'

const eCommerce = () => {
  return (
    <div className='container mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-16 mt-8'>
          <h1 className='font-bold text-5xl md:text-8xl'>E-commerce </h1>
          <h2 className='font-bold text-5xl text-secondary'>SOLUTIONS</h2>
          <div className='mt-4 italic text-justify'>Embracing the dynamic realm of online commerce, our e-commerce solutions epitomize a strategic fusion of innovative technology and customer-centric methodologies. At the nucleus of our offerings lies a synergy of technical expertise and visionary approaches, empowering brands to not just navigate but thrive in the ever-evolving e-commerce landscape. Our e-commerce services encompass a comprehensive array</div>
        </div>
        <div>
          <img src="eCommerse.png" alt="web" className='mx-auto h-[250px] md:h-[500px]' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='hidden  md:block'>
          <img src="e-commerceStrategy.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Tailored E-commerce Strategy & Consultation</h2>
          <div className='text-justify mt-2'>Crafting bespoke e-commerce strategies aligned precisely with your brand's objectives. We analyze market trends, consumer behaviors, and your unique selling proposition to architect a roadmap for sustained growth and dominance in the competitive online marketplace.


          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="e-commerceStrategy.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Customized Online Store Development</h2>
          <div className='text-justify mt-2'>We go beyond conventional templates, crafting online stores tailored to mirror your brand identity and optimize user experiences. Our development process prioritizes functionality, user-friendliness, and aesthetics to ensure a seamless browsing and purchasing journey for your customers.


          </div>
        </div>
        <div>
          <img src="onlineStore.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden  md:block'>
          <img src="paymentGateway.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Secure Payment Gateway Integration</h2>
          <div className='text-justify mt-2'>We prioritize security and trust in every transaction. Our expertise in integrating secure payment gateways ensures a smooth and secure checkout process, instilling confidence in your customers and minimizing cart abandonment rates.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="paymentGateway.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Robust Inventory Management</h2>
          <div className='text-justify mt-2'>Efficient inventory management is the backbone of successful e-commerce. We implement robust systems to streamline inventory, ensuring accurate tracking, timely updates, and optimized stock levels to meet demand while minimizing overselling or stockouts.
          </div>
        </div>
        <div>
          <img src="inventoryManagement.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden  md:block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Omni-channel Selling Solutions</h2>
          <div className='text-justify mt-2'>In today's interconnected world, we facilitate seamless multi-channel selling. Our solutions are designed to synchronize inventory, orders, and customer data across various sales channels, enabling a cohesive and consistent customer experience.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px] py-4' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Performance Optimization & Scalability</h2>
          <div className='text-justify mt-2'>Our commitment doesn't end at launch. We continuously optimize and fine-tune your e-commerce platform for performance, scalability, and user experience enhancements, ensuring it evolves with your business needs and technological advancements.
          </div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px] py-4' />
        </div>
      </div>
    </div>
  )
}

export default eCommerce