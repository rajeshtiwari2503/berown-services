import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Call from './Call';
const WhatsApp = () => {
    const phoneNumber = '7065647525'; // Replace with the phone number you want to chat with
    const message = 'Hello, i am looking for Home Appliances Repaire!'; // Replace with the default message
  
    const handleClick = () => {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
    return (
        <div className='text-end'>
          <Call  />
      <FaWhatsapp   className='whatsAppCssSize text-[#2ab13f] cursor-pointer '   onClick={handleClick}/> 
      {/* <div className='fw-bold 'style={{fontSize:"12px",color:"#2e7d32"}} >Chat here for fast Order</div> */}
      </div>
    );
  };

export default WhatsApp