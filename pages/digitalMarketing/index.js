import React from 'react'

const digitalMarketing = () => {
  return (
    <div className='container mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-16 mt-8'>
          <h1 className='font-bold text-8xl'>Digital </h1>
          <h2 className='font-bold text-5xl md:text-6xl text-secondary'>MARKETING</h2>
          <div className='mt-4 italic text-justify'>Unleashing the full spectrum of digital possibilities through strategic mastery and innovative techniques, our comprehensive suite of digital marketing services is a catalyst for unparalleled online success. At the core of our offerings lies a synergy of expertise and cutting-edge methodologies, empowering brands to thrive in the digital landscape. Our services encompass:</div>
        </div>
        <div>
          <img src="digitalMarketing.png" alt="web" className='mx-auto md:h-[500px] h-[250px' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='hidden  md:block'>
          <img src="seo.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Search Engine Optimization (SEO)</h2>
          <div className='text-justify mt-2'>Our SEO strategies are meticulously crafted to not just boost online visibility and organic traffic, but to also establish your brand as a standout authority in search engine results. Through a meticulous analysis of keywords, competitor landscapes, and user behaviors, we ensure that your online presence not only garners attention but maintains a prominent position, driving sustained traffic growth and brand recognition.


          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="seo.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Content Marketing</h2>
          <div className='text-justify mt-2'>Crafting content isn't just about creating material; it's about crafting narratives that captivate and resonate with your audience. Our content marketing strategies go beyond the ordinary, focusing on delivering valuable, engaging, and compelling content. By aligning content with audience needs and preferences, we cultivate trust, authority, and long-term relationships, ensuring your brand remains at the forefront of your industry.
          </div>
        </div>
        <div>
          <img src="contentMarketing.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='hidden  md:block'>
          <img src="socialMediaAmplication.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Social Media Amplification</h2>
          <div className='text-justify mt-2'>Our Social Media Amplification strategy combines strategic foresight with creative innovation. We go beyond utilizing social platforms—we craft digital experiences. By deeply understanding your brand and audience, we engineer campaigns that surpass mere engagement metrics. Our goal is to create captivating experiences that resonate and drive conversions.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="socialMediaAmplication.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Pay-Per-Click (PPC) Advertising</h2>
          <div className='text-justify mt-2'>Maximizing Return on Investment (ROI) is at the core of our PPC campaigns. We don't just aim for clicks; we aim for conversions. Our targeted PPC campaigns are meticulously designed to ensure optimal ad placement and drive high conversion rates. By utilizing precise targeting, compelling ad copy, and strategic bidding, we maximize the impact of your advertising budget, delivering tangible results and a significant return on your investment.
          </div>
        </div>
        <div>
          <img src="payPerClick.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className=' hidden  md:block py-4'>
          <img src="analysis&Reporting.png" alt="web" className='mx-auto h-[300px]' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Analytics & Reporting</h2>
          <div className='text-justify mt-2'>Data is the backbone of our operations. We don't just gather numbers; we derive insights. Through robust analytics and reporting mechanisms, we delve deep into the data to refine strategies, identify opportunities, and drive continual improvement. By translating complex data into actionable insights, we empower informed decision-making, ensuring your digital strategies are agile, responsive, and consistently optimized for success.
          </div>
        </div>
        <div className='md:hidden  block py-4'>
          <img src="analysis&Reporting.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default digitalMarketing