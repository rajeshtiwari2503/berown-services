import React from 'react'

const mediaMarketing = () => {
  return (
    <div className='container mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='mt-8 md:mt-16'>
          <h1 className='font-bold text-8xl'>Social Media </h1>
          <h2 className='font-bold text-5xl md:text-6xl text-secondary'>MARKETING</h2>
          <div className='mt-4 italic text-justify'>Embracing the dynamic landscape of social engagement, our Social Media Marketing services epitomize a strategic blend of creativity and data-driven methodologies. At the heart of our offerings lies a fusion of innovative strategies and in-depth audience insights, empowering brands to not just exist but thrive amidst the diverse social media ecosystem. Our social media services encompass an extensive spectrum</div>
        </div>
        <div>
          <img src="mediaMarketing.png" alt="web" className='mx-auto h-[250px] md:h-[500px]' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='hidden  md:block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px] py-4' />
        </div>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Holistic Social Media Strategy & Consultation</h2>
          <div className='text-justify mt-2'>Crafting comprehensive social media strategies aligned intricately with your brand's vision. We delve into audience demographics, behaviors, and market dynamics to architect a roadmap for sustained and impactful social media presence.


          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div>
          <h2 className='font-bold text-2xl text-secondary'>Content-Centric Campaign Development</h2>
          <div className='text-justify mt-2'>We don't just post; we create experiences. Our campaigns revolve around captivating and engaging content tailored to resonate with your audience. From visually stunning visuals to compelling narratives, we craft content that sparks conversations and drives meaningful engagements.


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
          <h2 className='font-bold text-2xl text-secondary'>Community Building & Engagement</h2>
          <div className='text-justify mt-2'>We foster communities, not just followers. Our strategies focus on building genuine connections, encouraging conversations, and nurturing relationships. We prioritize engagement, actively responding to comments, messages, and feedback, ensuring an interactive and responsive brand presence.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Influencer Partnerships & Collaborations</h2>
          <div className='text-justify mt-2'>Harnessing the power of influencers, we forge strategic partnerships to amplify brand reach and credibility. We identify, engage, and collaborate with influencers who align with your brand values, driving authentic advocacy and expanding your audience.
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
          <h2 className='font-bold text-2xl text-secondary'>Data-Driven Campaign Optimization</h2>
          <div className='text-justify mt-2'>We thrive on insights. Our approach is anchored in data analytics, enabling us to refine and optimize campaigns in real-time. By dissecting metrics and performance indicators, we ensure agility and adaptability, maximizing campaign effectiveness.
          </div>
        </div>
        <div className='md:hidden  block'>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px] py-4' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>

        <div>
          <h2 className='font-bold text-2xl text-secondary'>Ad Campaign Management</h2>
          <div className='text-justify mt-2'>Precision-targeted ad campaigns are our forte. We design and execute strategic ad placements across social channels, ensuring optimal reach, conversions, and return on ad spend (ROAS).
          </div>
        </div>
        <div>
          <img src="mobileApp.png" alt="web" className='mx-auto h-[300px] py-4' />
        </div>
      </div>
    </div>
  )
}

export default mediaMarketing