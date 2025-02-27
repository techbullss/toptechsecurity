import Link from 'next/link'
import React from 'react'

const HomeSec1 = () => {
  return (
    <div className="w-full bg-[rgb(14,181,21)] min-h-[30vh] flex items-center px-6 sm:px-12">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center w-full">
      {/* Text Section */}
      <p className="text-center sm:text-left text-2xl sm:text-3xl text-gray-100">
        For all your security guard services, get in touch
      </p>
  
      {/* Button Section */}
      <button className="border-4 border-slate-200 text-lg rounded-full px-5 py-2.5 text-slate-50 mt-4 sm:mt-0">
        <Link href="ContactUs">Contact Us</Link>
      </button>
    </div>
  </div>
  
  )
}

export default HomeSec1
