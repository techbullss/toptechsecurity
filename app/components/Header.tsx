import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Image from "next/image"
import Navbar from './Navbar'
function Header() {
  return (
    <div className='flex  flex-col z[10]'>
        <div className="bg-[rgb(14,181,22)]  py-2 px-4 md:flex  items-center gap-6">
      {/* Left side: Call us text and phone number */}
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center space-y-2 sm:space-y-2 md:space-x-2 lg:space-x-2">
  {/* Phone icon */}
  <FaPhoneAlt className="text-white text-sm" />
  {/* Text */}
  <span className="text-white text-sm">Call us now! 0208 5345 645</span>
</div>

      {/* Right side: Email */}
      <div className="flex items-center space-x-2">
        {/* Email icon */}
        <FaEnvelope className="w-5 h-5 text-white" />
        {/* Email text */}
        <a
          href="mailto:info@toptechsecurity.co.uk"
          className="text-white font-medium hover:underline"
        >
          info@toptechsecurity.co.uk
        </a>
      </div>
      
    </div>
    <div className='flex items-center h-32 w-full bg-gray-100'>
        <div className='w-80% mx-auto'>
        <Image 
        src="/logo3.jpg"  
        alt="My Image"
        width={800}   
        height={300}  
        
      />
        </div>
      
      </div>
      <Navbar />
    </div>
  )
}

export default Header
