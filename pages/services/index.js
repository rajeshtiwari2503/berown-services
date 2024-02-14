import Card from "@/components/Card";
import React from "react";


const serviceData = [
  {
    id: 1,
    image: "webDevelopment.png",
    title: "Web Development",
    link:"webDevelopment",
    description: "Empowering your digital presence. We specialize in bespoke web development, creating standout websites that blend innovation and functionality, ensuring your online success"
  },
  {
    id: 2,
    image: "mobileApp.png",
    title: "Mobile App Development",
    link:"mobileAppDevelopment",
    description: "Transforming ideas into dynamic apps. Our mobile app development crafts innovative solutions for your digital needs, ensuring seamless user experiences that resonate and captivate your audience"

  },
  {
    id: 3,
    image: "digitalMarketing.png",
    title: "Digital Marketing",
    link:"digitalMarketing",
    description: "Our digital marketing strategies are designed to propel your brand forward, leveraging targeted approaches that maximize visibility and engagement, ensuring your success in the digital sphere"

  },
  {
    id: 4,
    image: "uiUx.png",
    title: "UI/UX Design",
    link:"uiUxDesign",
    description: "Crafting captivating experiences. Our UI/UX design expertise creates intuitive interfaces that blend creativity and functionality, ensuring memorable digital experiences"
  },
  {
    id: 5,
    image: "eCommerse.png",
    title: "E-Commerce Solution",
    link:"eCommerceSolution",
    description: "Transforming online retail experiences. Our tailored e-commerce solutions seamlessly merge intuitive design and robust functionality, elevating your customers' shopping journey"

  },
  {
    id: 6,
    image: "mediaMarketing.png",
    title: "Social Media Marketing",
    link:"mediaMarketing",
    description: "Boosting your online presence. Our social media strategies craft engaging campaigns, amplifying your brand's voice to authentically connect with your audience"
  },
];

const Services = ({ home }) => {

  const handleScroll = () => {
    // Scrolls down 100 pixels vertically on button click
    window.scrollTo({
      top: window.pageYOffset + 430,
      behavior: 'smooth', // Optional: Smooth scrolling animation
    });
  };
  return (
    <>
      <div className={`dark:bg-gray-900 dark:text-white py-10 ${home ? "" : "mt-14"}`}>
        <section data-aos="fade-up" className="container ">
          {home ? <><h3 className={`text-center font-bold py-3 mb-6 text-3xl  text-black`}>Discover the key features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {serviceData.map((item, index) => (
                <Card isServices={true} key={item.id} index={index} {...item} />
              ))}
            </div> </>
            : <>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 flex items-center justify-between">
                <div>
                  <h1 className=" mt-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                    Our Services
                  </h1>
                  <p className="ms-5 text-justify w-[full] md:w-[500px]">Fostering businesses with comprehensive IT solutions. Our services encompass cutting-edge development, tailored software solutions, and innovative technologies. We're dedicated to crafting scalable, efficient, and future-ready solutions that drive growth and success in today's dynamic digital landscape.</p>
                  <button className="ms-5 mt-3 bg-black text-white px-3 py-1  " onClick={handleScroll}>
                    Explore More
                  </button>
                </div>
                <div>
                  <img src="services.png" className="mx-auto h-[200px]  md:h-[400px]" alt="image" />
                </div>
              </div>
              <h3 className="text-center font-bold py-3 mt-8 text-2xl text-secondary">Discover the key features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                {serviceData.map((item, index) => (
                  <Card isServices={true} key={item.id} index={index} {...item} />
                ))}
              </div></>}
        </section>
      </div>
    </>
  );
};

export default Services;
