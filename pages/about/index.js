import AchivementSection from "@/components/Achivement";
import Blogs from "@/components/Blogs";
import Location from "@/components/Location";
import React from "react";


const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10 ">

          <h1 className="mt-8 md:mt-16 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>

          <div className="grid   grid-cols-1 md:grid-cols-2 items-center">
            <div >
              <p>
                At Berown Services, we are dedicated to providing top-notch repair services for all your home needs. With a team of skilled professionals, we offer comprehensive solutions to keep your home running smoothly. From plumbing and electrical to HVAC and appliance repair, we're here to ensure your comfort and convenience. Trust us to deliver reliable, efficient, and affordable services that exceed your expectations. Your satisfaction is our priority, and we're committed to earning your trust with every job we do.
              </p>
            </div>
            <div  >
              <img className="mx-auto h-[200px]   object-cover transition duration-700 hover:skew-x-2 hover:scale-110" src="ceo.jpg" alt="ceoImage" />
              <div className="font-bold text-1xl text-center mt-5">Bhagwan Singh (CEO)</div>
            </div>


          </div>
          <h2 className=" text-2xl font-bold mt-2">Our Vision</h2>
          <p>
            Our vision at Berown Services is to be the trusted leader in repair services, known for our commitment to excellence, reliability, and customer satisfaction. We strive to exceed expectations by delivering innovative solutions, unparalleled expertise, and exceptional customer service. Through our dedication to quality and integrity, we aim to become the preferred choice for homeowners seeking reliable repairs and peace of mind. Together, we're building a brighter future, one repair at a time.
          </p>
          <h2 className=" text-2xl font-bold mt-12">Who We Are</h2>
          <p>
            At Berown Services, we are a team of dedicated professionals passionate about providing top-quality repair services for homes and businesses alike. With years of experience in the industry, we have built a reputation for excellence, reliability, and unmatched customer satisfaction. Our team is committed to delivering personalized solutions tailored to meet the unique needs of each client. From plumbing and electrical to HVAC and appliance repair, we have the expertise and resources to handle any job with precision and care. At [Your Company Name], we're not just repairing homes – we're building lasting relationships based on trust, integrity, and exceptional service
          </p>
        </div>
        <div className="mt-3  ">
          <h1 className=" text-2xl font-bold mt-2">Our Team</h1>
          <div data-aos="fade-up" className="grid   grid-cols-1 md:grid-cols-3">
            <div className={`p-4 mt-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg m-2`}>
              <div className="overflow-hidden">
                <img
                  src="https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/team-img-2.jpg"
                  alt="No image"
                  className="mx-auto h-[200px]   object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
              <div className="space-y-2 py-1 flex justify-center">
                <div>
                  <h1 className="line-clamp-1 text-center font-bold">Jeetu</h1>
                  <p className="text-center">Senior Technician</p>
                </div>
              </div>
            </div>
            <div className={`p-4 mt-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg m-2`}>
              <div className="overflow-hidden">
                <img
                  src="services.svg"
                  alt="No image"
                  className="mx-auto h-[200px]   object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
              <div className="space-y-2 py-1 flex justify-center">
                <div>
                  <h1 className="line-clamp-1 text-center font-bold">Rahul Kumar</h1>
                  <p className="text-center">Technician</p>
                </div>
              </div>
            </div>
            <div className={`p-4 mt-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg m-2`}>
              <div className="overflow-hidden">
                <img
                  src="https://bdevs.net/wp/airvice/wp-content/uploads/2021/08/team-img-7.jpg"
                  alt="No image"
                  className="mx-auto h-[200px]   object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
              <div className="space-y-2 py-1 flex justify-center">
                <div>
                  <h1 className="line-clamp-1 text-center font-bold">Janved Yadav</h1>
                  <p className="text-center">Support Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AchivementSection  margin={true}/>
      <Location />
      <Blogs />
    </>
  );
};

export default About;
