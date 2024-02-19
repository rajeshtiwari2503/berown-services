import React from "react";
import Slider from "react-slick";

const testimonialData = [
 
  {
    id: 1,
    name: "Ankit Singh",
    text: "Berown Services completely transformed my backyard! Their landscaping team did an amazing job designing and implementing a beautiful garden. The attention to detail and professionalism were top-notch. I highly recommend their services.",
    img: "afterPassout.png",
  }, {
    id: 1,
    name: "Vivek Sharma",
    text: "I recently hired Berown Services for a home renovation project. Overall, I'm quite satisfied with the results. The construction team was skilled, and the project was completed within the estimated timeframe. There were a few minor communication hiccups along the way, but they were quickly resolved.",
    img: "https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg",
  },
  {
    id: 1,
    name: "Rahul Gupta",
    text: "Berown Services has been my go-to for HVAC maintenance and repairs. Their technicians are always punctual and knowledgeable. I appreciate their transparency in explaining the issues and providing cost-effective solutions. Excellent service!",
    img: "https://t3.ftcdn.net/jpg/02/69/98/98/360_F_269989865_mMfRFRN4mtDOtnHA0RFXcURX4n761zwd.jpg",
  },
  {
    id: 1,
    name: "Simmy",
    text: "We used Berown Services for a plumbing emergency, and they responded quickly. The plumber fixed the issue promptly and was polite throughout the process. I deducted one star due to the slightly higher than expected cost.",
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/aarti-sixteen_nine_1.jpg?size=948:533",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10 mt-12">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-4xl font-bold">What our client say.</h1>
            <p className="text-xs text-gray-400 mt-3">
              {" "}
              We prioritize customer satisfaction and strive to deliver prompt, reliable service with minimal disruption to your business operations.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-4">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                     <div className="flex justify-center items-center h-[120px] w-[120px]">
                      <img
                        src={img}
                        alt=""
                        className="    mx-auto "
                      />
                      </div>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm h-40 md:h-32">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
