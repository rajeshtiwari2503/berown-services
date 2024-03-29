import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt, FaEnvelope
} from "react-icons/fa";


const FooterLinks = [
  {
    title: "Services",
    link: "services",
  },
  // {
  //   title: "Insights",
  //   link: "/insights",
  // },
  {
    title: "About",
    link: "about",
  },

  {
    title: "Blogs",
    link: "blogs",
  },

  {
    title: "Contact us",
    link: "contact",
  },
];

const ourServices = [
  {
    title: "A C  ",
    link: "/services",
  },
  {
    title: "Fridge",
    link: "/services",
  },
  {
    title: "Microwave",
    link: "/services",
  },
  {
    title: "Washing Machine",
    link: "/services",
  },
  {
    title: "C C TV ",
    link: "/services",
  },
  {
    title: "R O ",
    link: "/services",
  },

  {
    title: "Geyser",
    link: "/services",
  }
  ,
  // {

  //   title: "All services",
  //   link: "/services",
  // },
]

// bg-gradient-to-r from-[#a7a7a9] to-[#FFFFFF] 
const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950     ">
        <div className="bg-black text-white ">
          <div className="container">
            {/* <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl"> */}
            <div className="grid md:grid-cols-3 py-5   rounded-t-xl">
              <div className="py-8 ">
                <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                  <Link href={"/"}> <img src={"/Logo.png"} alt="" className="h-[50px] rounded-lg" /></Link>
                  {/* TravelloGo */}
                </h1>
                <p className="text-sm mt-4">
                  At my company, we offer popular AC repair services that cater to a wide range of customers. Our team of experienced technicians are well-versed in diagnosing AC issues and providing efficient solutions to restore optimal functionality.
                </p>
                <br />
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p className="text-sm">
                    G 134 sec 63 noida 201301</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope />
                  <p> berownservices@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91-706-564-7525</p>
                </div>
                {/* social handles */}

              </div>
              <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="    md:pl-10">
                  <div>
                    <div className="py-8 px-4">
                      <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                        Important Links
                      </h1>
                      <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link, index) => (
                          <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white dark:text-gray-200" key={index}>
                            <Link
                              href={link.link}
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              <span>&#11162;</span>
                              <span>{link.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="py-8 px-4">
                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                      Social Media
                    </h1>
                    <div className="flex flex-col text-white mt-8 gap-6">

                      <Link href="https://www.instagram.com/berown.services?igsh=MWQxam90bGZpdjVrZg==" target="_blank">
                        <FaInstagram className="text-3xl" />
                      </Link>
                      <Link href="https://www.facebook.com/profile.php?id=61556244007676&mibextid=LQQJ4d" target="_blank">
                        <FaFacebook className="text-3xl" />
                      </Link>
                      <Link href="https://youtube.com/@BerownServices?si=7H8mYg4sVQIGxWGf" target="_blank">
                        <FaYoutube className="text-3xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="py-8 px-4 col-span-6">
                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                      Our Services
                    </h1>
                    <ul className=" gap-3 grid grid-cols-2">
                      {ourServices.map((link, index) => (
                        <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white dark:text-gray-200" key={index}>
                          <Link
                            href={link.link}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <span>&#11162;</span>
                            <span>{link.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* <div className="">
                  <div className="py-8 px-4">
                    <div className="rounded-xl  ">
                      <iframe
                        src="https://maps.google.com/maps?q=Berown%20Services%2C%2011%2C%20Samrath%20Chock%2C%20Ghaziabad%20NCR%20Region%2C%20Uttar%20Pradesh%20201009&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                        height="260"
                        width={"100%"}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ borderRadius: "20px" }}
                      ></iframe>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="flex justify-between items-center  border-t-2 border-gray-300/50 ">
              <div className="text-center py-5 text-primary  ">
                @copyright 2024 All rights reserved || Made  by Lybley India Pvt Ltd.
              </div>
              <div className="md:block hidden">
                <div className="flex items-center gap-6  ">
                  <Link href="https://www.instagram.com/berown.services?igsh=MWQxam90bGZpdjVrZg==" target="_blank">
                    <FaInstagram className="text-3xl" />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61556244007676&mibextid=LQQJ4d" target="_blank">
                    <FaFacebook className="text-3xl" />
                  </Link>
                  <Link href="https://youtube.com/@BerownServices?si=7H8mYg4sVQIGxWGf" target="_blank">
                    <FaYoutube className="text-3xl" />
                  </Link>
                  {/* <Link href={"https://m.facebook.com/lybley/photos/a.361705534523649/702715043756028/?type=3&_rdrs"} target="_blank"><img    src="https://static.vecteezy.com/system/resources/previews/022/227/316/non_2x/facebook-logo-icon-free-png.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2FRLybley"} target="_blank"><img className=" rounded-circle" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px"  /></Link>  
                   <Link   href={"https://in.linkedin.com/company/lybley"} target="_blank"><img className="  rounded-circle" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
