
"use client";
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from "next/navigation";
import { X } from 'lucide-react';
import { nav_links } from '../constant/Constant';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  const [navBgs,setnavBg]=useState(false);
  useEffect(()=>{
    const hadler= ()=>{
      if(window.scrollY>=90)setnavBg(true);
      if(window.scrollY<90)setnavBg(false);
    };
  window.addEventListener('scroll',hadler);
return ()=>{
  window.removeEventListener('scroll',hadler)
}

},[]);
  
  return (
    <div 
    className={`  bg-[rgb(221,153,51)]  justify-center  
      ${navBgs ? 'fixed bg-gray-100 top-0 rounded-sm left-0 right-0 w-[90%] mx-auto z-[1000] shadow-md h-[12vh] ' : ''} 
     md:h-[10vh] lg:h-[10vh] sm:h-[8vh]  `}
  >
    <div className='w-[95%] mx-auto flex   justify-between  lg:justify-between  md:justify-between'>
      
        <div className='hidden lg:flex  text-sm p-2 items-center md: gap-1'>
            {nav_links.map((Links)=>{
               const isActive = hydrated && currentPath === Links.url;
                return(
                    <Link href={Links.url} key={Links.id} > <button style={{ color: isActive ? "green" : "", fontWeight: "bold",fontSize:isActive ?"30px":""}}
                    className={`text-slate-900  text-lg transition duration-300 delay-200 rounded-md hover:bg-[rgb(14,181,22)] px-12 py-1.5  relative 
                     
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}>{Links.label}
                        </button>   </Link>     );
            })}
           
        </div>
        <div className='flex items-center gap-3'>
          <HiBars3BottomRight className=' w-8 cursor-pointer text-white h-8 lg:hidden ' onClick={() => setIsOpen(true)}/>
        </div>
       
    </div>
    {/* Sidebar (Mobile) */}
    {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-[1000] sm:block lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Content */}
        <nav className="flex flex-col gap-6 p-6 text-gray-800">
          {nav_links.map((Links) => (
            <Link
              href={Links.url}
              key={Links.id}
              className="text-lg font-semibold hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {Links.label}
            </Link>
          ))}
        </nav>
        <div className='text-black items-center gap-5 flex flex-col'>
            <p className="text-sm flex items-center gap-2">
  <FaPhone className="text-black text-2xl" /> <span>0208 5345 645</span>
</p>
<p className="text-sm flex items-center gap-2">
  <MdEmail className="text-black text-3xl" /> <span>info@toptechsecurity.co.uk</span>
</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
