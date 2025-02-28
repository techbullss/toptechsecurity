import React from 'react'
import Image from "next/image"
import { FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link';
const HomeSec2 = () => {
    const services = [
        "Uniformed Manned Guarding",
        "Mobile Patrol",
        "Retail Security",
        "Ware Housing Guarding",
        "Key Holding and Alarm Response",
      ];
      const services2 = [
        "Static Guarding",
        "Canine Handling (Guard dog)",
        "Events Security/ Events stewards",
        "Construction",
        "Gates Duties",
      ];
  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-10 gap-6 md:gap-12 pb-10 px-6">
  {/* Image Section */}
  <div className="flex justify-center">
    <Image 
      src="/dog.jpg"  
      alt="Security Dog"
      width={800}   
      height={300}  
      className="w-full h-auto max-w-md md:max-w-full rounded-lg shadow-lg"
    />
  </div>

  {/* Text + Services Section */}
  <div>
    <p className="text-[16px] text-gray-700 text-center md:text-left">
      TopTech Security is a company that offers a wide range of superior security services in London and across the UK.
      We are committed to providing protection for the property of the clients we serve in a manner consistent with the 
      highest ideals within the industry. Whether your security concerns are personal or public, large or small… we 
      provide customised solutions to suit your needs in all situations.
    </p>

    {/* Services List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-4">
      {/* Left Column */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500 w-4 h-4" />
            <p className="text-gray-700 text-[16px]">{service}</p>
          </div>
        ))}
        <div>
          <Link href="Services">
            <button className="bg-green-500 font-semibold text-slate-100 rounded-full px-5 py-2">
              View More
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {services2.map((services2, index) => (
          <div key={index} className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500 w-4 h-4" />
            <p className="text-gray-700 text-[16px]">{services2}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default HomeSec2
