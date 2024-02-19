import Card from "@/components/Card";
import React from "react";


const serviceData = [
  {
    id: 5,
    image: "appliances.png",
    title: "Commercial   Service",
    link:"/",
    description: "Unlock the full potential of your commercial appliances with our comprehensive service solutions"

  },
  {
    id: 5,
    image: "appliances.png",
    title: "Residential   Service",
    link:"/",
    description: "From residential to commercial and industrial, our appliance services cater to every setting's needs"

  },
  // {
  //   id: 5,
  //   image: "appliances.png",
  //   title: "Industrial   Service",
  //   link:"/",
  //   description: "From industrial complexes to residential properties, our appliance services deliver excellence across all sectors."

  // },
  
  {
    id: 1,
    image: "acImage1.jpg",
    title: "A C Repair",
    link:"/",
    description: "AC Service is a comprehensive maintenance program meticulously crafted to cater to the unique needs of air conditioning units  establishments"
  },
  {
    id: 2,
    image: "microWave1.jpg",
    title: "Microwave Repair",
    link:"/",
    description: "Experience seamless cooking again with our specialized microwave repair services, tailored for both residential and commercial kitchens."

  },
 
  {
    id: 4,
    image: "tv1.jpg",
    title: "T V Repair",
    link:"/",
    description: "Restore your TV's brilliance with our expert repair services, ensuring uninterrupted entertainment at home or in your business."
  },
 
  {
    id: 3,
    image: "services.svg",
    title: "All Repairing services",
    link:"/",
    description: "From plumbing to electrical, and everything in between, our home services cover all your household needs."

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
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   items-center justify-between">
                <div>
                  <h1 className=" mt-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                    Our Services
                  </h1>
                  <p className="ms-5 text-justify w-[full] md:w-[500px]">Fostering businesses with comprehensive IT solutions. Our services encompass cutting-edge development, tailored software solutions, and innovative technologies. We're dedicated to crafting scalable, efficient, and future-ready solutions that drive growth and success in today's dynamic digital landscape.</p>
                  <button className="ms-5 mt-3 bg-black text-white px-3 py-1  " onClick={handleScroll}>
                    Explore More
                  </button>
                </div>
                <div className="mt-5">
                  <img src="services.svg" className="mx-auto h-[200px]  md:h-[400px]" alt="image" />
                </div>
              </div>
              <h3 className="text-center font-bold py-3  text-2xl text-secondary">Discover the key features</h3>
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
