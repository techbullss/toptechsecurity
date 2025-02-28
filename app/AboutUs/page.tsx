"use client"
import Image from 'next/image'
import Link from "next/link"

const AboutUsPage = () => {
  return (
    <div className='bg-white'>
      {/* Page Heading with Image Background */}
      <div className="relative h-64 md:h-66">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/s2.jpg"   alt="About Us Background" layout="fill" objectFit="cover" className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Heading Text */}
        <div className="relative flex flex-col items-center justify-center h-full">
          <div><h1 className="text-4xl font-bold text-white text-center">
            ABOUT US
          </h1>
          </div>
          
        </div>
      </div>

      {/* Rest of the About Us Content */}
      <div className="py-6 px-4 sm:px-12 lg:px-6">
      <div className="grid grid-cols-3 gap-6">
  <div className='mt-8'>
    <h1 className="text-2xl font-semibold text-slate-400 pb-4">About Us</h1>
    <p className="text-[16px] text-gray-800 font-serif">
    Toptech Security thrives to deliver superior and consistent customer service to each and every one of our customers. We invite you to take a closer look at Toptech Security, our commitment, values, and reputation. 
    We are confident you will find unmatched solutions that are fair, equitable, and competitive.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center items-center">
    <Image
      src="/man.jpg"
      alt="image"
      width={400}  // Adjust size here
      height={400}
      className="rounded-lg w-[400px] h-[300px]" // Add Tailwind for control
    />
  </div>

  <div className='mt-8'>
    <h2 className="text-2xl font-semibold text-slate-400 pb-4">OUR VISION</h2>
    <p className='pb-4 text-gray-800 text-[16px] font-serif'>
    Our vision is to see all our customers needs met through our excellent services.
    </p>
    <h2 className="text-2xl font-semibold text-slate-400 pb-4">MISSION STATEMENT</h2>
    <p className='text-[16px] text-slate-800 font-serif'>
    Toptech Security Limited will recognise the Value and Need of every customer and constantly motivate 
    and inspire employees to deliver the best possible service through commitment to excellence.    </p>
  </div>
</div>

      </div>
      <div className='w-[80%] mx-auto'>
      <h2 className="text-2xl text-center font-semibold text-slate-400 pb-4">OUR METHOD</h2>
      <p className='text-[16px] text-center text-slate-800 font-serif'>
      We will maintain up-to-date reports which will be monitored and evaluated regularly to enhance the quality of our services.

Not every officer is Toptech material. Our standards are high. We will not hire individuals that cannot meet your specific requirements. We will not hire individuals with undesirable drug or criminal backgrounds.

We will not hire individuals with bad employment records or other problems. The problems of these unacceptable applicants should not become your problems. Whether you need commercial-residential security services or an integrated premises protection program for multiple locations, we have the experience, versatility, and resources to handle all of your security needs.

TopTech Services aims to provide a quality security service to its customers in line with the accepted industry standards. We will endeavour to go that extra mile to accomplish these aims.

Static Guarding is key to reducing risks and preventing losses for business. Our security officers remain alert, aware, and prepared at all times. They are professional, highly trained, and certified. They are capable of providing you with the level of security that suits your business.

      </p>

      </div>
      <div className='pb-12 px-8 pt-8 text-center'>
        <button className='text-green-400  rounded-full font-bold border-slate-950 border-2 pt-4 py-2 px-5 hover:text-black'><Link href="ContactUs">Contact Us</Link></button>

        </div>
    </div>
  );
};

export default AboutUsPage;