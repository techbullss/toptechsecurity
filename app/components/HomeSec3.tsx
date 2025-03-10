import Link from 'next/link'
import React from 'react'

const HomeSec3 = () => {
  return (
    <div className='flex bg-white flex-col'>
    <div className="w-full bg-white grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-4 px-6 sm:px-12 max-w-screen-xl mx-auto">
    {/* Left Section - WHO WE ARE */}
    <div>
      <h1 className="text-3xl font-bold text-slate-950 pt-6 text-center md:text-left">WHO WE ARE?</h1>
      <p className="text-[16px] pt-6 text-center md:text-left">
        Toptech Security thrives on delivering superior and consistent customer service to each and every one of our customers.
        We invite you to take a closer look at Toptech Security, our commitment, values, and reputation. We are confident you
        will find unmatched solutions that are fair, equitable, and competitive.
      </p>
  
    </div>
  <div><h1 className="text-3xl font-bold text-slate-950 pt-6 text-center md:text-left">OUR VISION</h1>
      <p className="text-[16px] pt-4 pb-6 text-center md:text-left">
        Our vision is to see all our customers needs met through our excellent services.
        Toptech Security Limited will recognise the Value and Need of every customer 
        and constantly motivate and inspire employees to deliver the best possible service through commitment to excellence.
      </p></div>
    {/* Right Section - WHY CHOOSE US */}
    <div>
      <h1 className="text-3xl font-bold text-slate-950 pt-6 text-center md:text-left">WHY CHOOSE US</h1>
      <p className="text-[16px] pt-6 pb-6 text-center md:text-left">
        TopTech Services aims to provide quality security services to its customers in line with industry standards.
        Our security officers remain alert, aware, and prepared at all times. They are professional, highly trained, and certified.
        They are capable of providing you with the level of security that suits your business.
      </p>
  
      
    </div>
  </div>
  <div className="flex w-full pb-8 justify-center md:justify-center">
        <Link href="ContactUs">
          <button className="text-green-400 font-bold border-slate-950 border-2 py-2 px-5 rounded-full hover:text-black">
            Contact Us
          </button>
        </Link>
      </div>
  </div>
  )
}

export default HomeSec3
