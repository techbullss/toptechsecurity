
import Image from "next/image"
import Link from "next/link"
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 right-0 left-0 w-[88.2%] mx-auto md:z-0  md:h-[75%] md:fixed md:bottom-0">
      <div className="container  px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg text-gray-400 font-semibold mb-1">About Us</h3>
            <div className='w-80% mx-auto pt-4'>
                    <Image 
                    src="/logoweb.png"  
                    alt="My Image"
                    width={400}   
                    height={500}  
                    
                  />
                    </div>
            <p className="text-[14px] pt-2 text-gray-400">
            TopTech Security has committed her energy and resources to policy of teamwork reciprocal
             understanding and growth in the long-term business relationships 
             with our esteemed clients and royal staff alike. While the company continues to implement a policy of measured and steady growth we shall never degrade the quality of our service to our customers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 pl-5 text-[14px]">
  <li className="relative border-b border-gray-600 pt-4 before:content-['>'] before:text-green-500 before:absolute before:-left-5">
   
    <Link href="/" className="text-xl text-gray-400 hover:text-white transition duration-300">
     Home 
    </Link>
  </li>
  <li className="relative border-b border-gray-600 pb-2 before:content-['>'] before:text-green-500 before:absolute before:-left-6">
    <Link href="AboutUs" className="text-xl text-gray-400 hover:text-white transition duration-300">
      About Us
    </Link>
  </li>
  <li className="relative border-b border-gray-600 pb-2 before:content-['>'] before:text-green-500 before:absolute before:-left-5">
    <Link href="Services" className="text-xl text-gray-400 hover:text-white transition duration-300">
      Services
    </Link>
  </li>
  <li className="relative border-b border-gray-600 pb-2 before:content-['>'] before:text-green-500 before:absolute before:-left-5">
    <Link href="ContactUs" className="text-xl text-gray-400 hover:text-white transition duration-300">
      Contact Us
    </Link>
  </li>
</ul>

          </div>
          <div className='w-full mx-auto pt-4'>
                    <Image 
                    src="/sec.jpg"  
                    alt="My Image"
                    width={400}   
                    height={500}  
                    
                  />
                    </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-400">CONTACT INFO</h3>

      {/* Phone Number */}
      <div className="flex items-center space-x-3">
        <FaPhone className="text-gray-400" />
        <p className="text-sm text-gray-400">0208 5345 645</p>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-3">
        <FaEnvelope className="text-gray-400" />
        <Link
          href="mailto:info@toptechsecurity.co.uk"
          className="text-sm text-gray-400 hover:text-blue-500 transition duration-300"
        >
          info@toptechsecurity.co.uk
        </Link>
      </div>

      {/* Website */}
      <div className="flex items-center space-x-3">
        <FaGlobe className="text-gray-400" />
        <Link
          href="https://www.toptechsecurity.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-blue-500 transition duration-300"
        >
          www.toptechsecurity.co.uk
        </Link>
      </div>

      {/* Address */}
      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-gray-400 mt-1" />
        <p className="text-sm text-gray-400">
          Toptech Security Ltd | Suite 2000, 16-18 Woodford Road, London, E7 0HA
        </p>
      </div>

      {/* Opening Hours */}
      <div className="flex items-center space-x-3">
        <FaClock className="text-gray-400" />
        <p className="text-sm text-gray-400">Open 24 hours a day / 7 days a week</p>
      </div>
    </div>

         
        </div>

        {/* Bottom Section */}
        <div className="border-t flex  border-gray-800   text-center">
          <div className="pt-8 px-12 flex items-end"><p className=" text-lg text-gray-400">
            &copy; {new Date().getFullYear()} TopTech Security. All rights reserved.
          </p>
          <p className='text-gray-400 px-2 text-lg' > Company Reg. Number: 7537218 | VAT Number: 194412700</p></div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;