import React from 'react'
import Image from "next/image"

const HomeSec5 = () => {
  return (
    <div className="flex flex-col w-full pt-12 pb-8 bg-white max-w-screen-xl mx-auto px-4 sm:px-8">
  {/* Title */}
  <div>
    <h1 className="text-center text-3xl pb-3 text-gray-800">Accreditations</h1>
    <hr className="w-[10%] mx-auto border-2 rounded-full border-gray-600" />
  </div>

  {/* Logos Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pt-12 pb-10">
    {["/log1.jpg", "/log8.jpg", "/log4.jpg", "/log5.png", "/log6.jpg"].map((src, index) => (
      <div key={index} className="flex justify-center">
        <Image src={src} alt={`Logo ${index + 1}`} width={150} height={150} />
      </div>
    ))}
  </div>

  {/* Description Section */}
  
</div>

  )
}

export default HomeSec5
