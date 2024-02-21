import React from 'react'
import { IoIosCall } from "react-icons/io";

const Call = () => {
    const phoneNumber = '7065647525';
    const handleCopyPhoneNumber = () => {
        // Copy the phone number to the clipboard
        navigator.clipboard.writeText(phoneNumber)
          .then(() => alert('Phone number copied to clipboard'))
          .catch((error) => console.error('Failed to copy: ', error));
      };
      const handleCallPhoneNumber = () => {
        // Prompt user to call the phone number
        window.open(`tel:${phoneNumber}`, '_blank');
      };
  return (
    <div> 
    <IoIosCall className='whatsAppCssSize text-[#8381fa] cursor-pointer mb-3' onClick={handleCallPhoneNumber} />
    </div>
  )
}

export default Call