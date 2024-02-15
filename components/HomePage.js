import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Slider from "react-slick";
import Link from 'next/link';
const testimonialData = [
  {
    id: 1,
    image: "webDevelopment.png",
    title: "Web Development",
    link: "webDevelopment",
    description: "Empowering your digital presence. We specialize in bespoke web development, creating standout websites that blend innovation and functionality, ensuring your online success"
  },
  {
    id: 2,
    image: "mobileApp.png",
    title: "Mobile App Development",
    link: "mobileAppDevelopment",
    description: "Transforming ideas into dynamic apps. Our mobile app development crafts innovative solutions for your digital needs, ensuring seamless user experiences that resonate and captivate your audience"

  },
  {
    id: 3,
    image: "digitalMarketing.png",
    title: "Digital Marketing",
    link: "digitalMarketing",
    description: "Our digital marketing strategies are designed to propel your brand forward, leveraging targeted approaches that maximize visibility and engagement, ensuring your success in the digital sphere."

  },
  {
    id: 4,
    image: "uiUx.png",
    title: "UI/UX Design",
    link: "uiUxDesign",
    description: "Crafting captivating experiences. Our UI/UX design expertise creates intuitive interfaces that blend creativity and functionality, ensuring memorable digital experiences."
  },
  {
    id: 5,
    image: "eCommerse.png",
    title: "E-Commerce Solution",
    link: "eCommerseSolution",
    description: "Transforming online retail experiences. Our tailored e-commerce solutions seamlessly merge intuitive design and robust functionality, elevating your customers' shopping journey"

  },
  {
    id: 6,
    image: "mediaMarketing.png",
    title: "Social Media Marketing",
    link: "mediaMarketing",
    description: "Boosting your online presence. Our social media strategies craft engaging campaigns, amplifying your brand's voice to authentically connect with your audience"
  },
];
const HomePage = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleScroll = () => {
    // Scrolls down 100 pixels vertically on button click
    window.scrollTo({
      top: window.pageYOffset + 700,
      behavior: 'smooth', // Optional: Smooth scrolling animation
    });
  };

  //https://sparetrade-bucket.s3.ap-south-1.amazonaws.com/videoHome.mp4-1704869755703-333177367

  return (
    <div className=''>
          <div className="  sm:h-[980px] md:h-[680px]  relative bg-black bg-opacity-30">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          {/* <source src={"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/N_-wj6-wx/videoblocks-air-conditioner-fixing-cleanning-anual-check-with-technical-mechanic_sorigmnjc__df7085981155c93d7c4c05358730cbf2__P360.mp4"} /> */}
          <source src={"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/47Fj2US_gijjhliil/videoblocks-repair-air-conditioner_rxa2qmgyz__ddddd1b28dd1a2740556c85ed38db5e2__P360.mp4"} type="video/mp4" />

        </video>
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 h-full">
          <div className="h-full flex justify-center items-center p-4  ">
            <div className="container grid grid-cols-1 gap-2  ">
              <div className='animatedLeft text-secondary font-bold text-xl mt-8'>We are creative </div>
              <div className='animatedLeft text-white font-bold text-3xl'>Solutions for an every repair problem </div>
 
              <div className='animatedLeft mt-3 text-white text-sm md:text-xl'>

                <TypeAnimation sequence={[
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Air Condition", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Washing Machine", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Microwave", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Geyser", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Fan", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. Dishwasher", 1000,
                 "Welcome to BEROWN SERVICES ,for complex or potentially hazardous repairs, it's advisable to consult a professional technician. Additionally, always refer to the appliance's user manual for specific troubleshooting steps and safety guidelines. Safety should always be the top priority when dealing with home appliance repairs. All Home Applinces", 1000,

                ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
              <div className='animatedLeft mt-4'>
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1"
                  onClick={handleScroll}
                >
                  Explore More
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
       
    
    
  )
}

export default HomePage