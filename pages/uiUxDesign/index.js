import React from 'react'

const uiuxDesign = () => {
  return (
    <div className='container mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-16 mt-8'>
          <h1 className='font-bold text-8xl'>UI/UX </h1>
          <h2 className='font-bold text-6xl text-secondary'>DESIGN</h2>
          <div className='mt-4 italic text-justify'>Exploring the boundless realm of digital innovation, our UI/UX design services epitomize a fusion of strategic acumen and inventive methodologies. At the heart of our offerings lies a synthesis of expertise and avant-garde approaches, empowering brands to excel in the digital landscape. Our UI/UX services comprise</div>
        </div>
        <div>
          <img src="uiUx.png" alt="web" className='mx-auto h-[250px] md:h-[500px] py-4' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className=' hidden  md:block'>
          <img src="stargicPlannigConsulting.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Strategic Design Planning & Consultation</h2>
          <div className='text-justify mt-2'>Our design strategies are bespoke blueprints crafted in perfect alignment with your brand's visionary goals. We delve deep into understanding your ethos, user personas, and market landscape, ensuring that every design facet contributes to a seamless user journey and fosters sustained digital growth.


          </div>
        </div>
        <div className='md:hidden  block '>
          <img src="stargicPlannigConsulting.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Intuitive User Interface (UI) Design</h2>
          <div className='text-justify mt-2'>We believe in creating more than just aesthetically pleasing interfaces; our UI designs are a gateway to captivating digital experiences. Each visual element and interaction is meticulously crafted to not only engage but also guide users effortlessly, ensuring a harmonious blend of form and function.


          </div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden  md:block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Engaging User Experience (UX) Design</h2>
          <div className='text-justify mt-2'>Our UX designs go beyond functionality; they evoke emotions and forge connections. We are dedicated to creating immersive experiences that resonate with your audience, fostering satisfaction, loyalty, and a profound emotional bond with your brand.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>User Research & Testing</h2>
          <div className='text-justify mt-2'>Our design process is anchored in extensive user research and testing methodologies. By understanding user behaviors, preferences, and pain points, we refine designs iteratively, ensuring optimal usability and a user-centric approach that resonates with your target audience.
          </div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden  md:block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Responsive Design & Accessibility</h2>
          <div className='text-justify mt-2'>We are committed to inclusivity and accessibility. Our designs transcend devices and platforms, ensuring a seamless and accessible experience for users across various devices, screen sizes, and abilities.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='mt-8 text-primary italic text-2xl'>
        At Lybley, collaboration is key, and we tailor our services to align with your unique business goals. Our development process integrates cutting-edge React Native technologies and industry best practices, ensuring high-quality, scalable, and future-proof app solutions.
      </div>
      <div className='mt-2 mb-8 text-primary italic text-2xl'>
        Reach out to us today, and let's transform your vision into a compelling mobile app presence that drives success.</div>
    </div>
  )
}

export default uiuxDesign