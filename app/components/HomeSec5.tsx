import React from 'react'
import Image from "next/image"

const HomeSec5 = () => {
  return (
    <div className="flex flex-col w-full pt-12 pb-8 bg-white max-w-screen-xl mx-auto px-4 sm:px-8">
  {/* Title */}
  <div>
    <h1 className="text-center text-2xl pb-3 text-gray-400">Accreditations</h1>
    <hr className="w-[20%] mx-auto border-2 rounded-full border-gray-600" />
  </div>

  {/* Logos Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pt-8">
    {["/log1.jpg", "/log8.jpg", "/log4.jpg", "/log5.png", "/log6.jpg"].map((src, index) => (
      <div key={index} className="flex justify-center">
        <Image src={src} alt={`Logo ${index + 1}`} width={150} height={150} />
      </div>
    ))}
  </div>

  {/* Description Section */}
  <div className="w-full">
    <h1 className="text-center text-2xl font-serif text-slate-500 pt-12">TopTech Security</h1>
    <hr className="w-[10%] mx-auto border-t-4 rounded-full border-gray-600" />

    <p className="pt-8 text-xl text-center px-4 sm:px-12">
      TopTech Security is a company that offers a wide range of superior security services in London and across the UK.
    </p>
  </div>
</div>

  )
}

export default HomeSec5
