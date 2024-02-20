import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container mt-2 ">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl mt-4  ">
            <iframe
                        src="https://maps.google.com/maps?q=Berown%20Services%2C%2011%2C%20Samrath%20Chock%2C%20Ghaziabad%20NCR%20Region%2C%20Uttar%20Pradesh%20201009&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
              
              width={"100%"}
              height={"300px"}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Location;
