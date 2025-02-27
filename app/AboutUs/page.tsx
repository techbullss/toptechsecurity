"use client"
import Image from 'next/image'
import Link from "next/link"
import { FaHome } from 'react-icons/fa'

const AboutUsPage = () => {
  return (
    <div>
      {/* Page Heading with Image Background */}
      <div className="relative h-64 md:h-66">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/man.jpg"   alt="About Us Background" layout="fill" objectFit="cover" className="object-cover"
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
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center text-white hover:text-blue-300 transition duration-300">
  <FaHome className="w-5 h-5" />
  <span className="ml-2 text-lg text-white">TopTech Security Services</span>
</Link>
            </div>
              <span className="text-white">/</span>
              <span className="text-white">about Us</span>
            </div>
        </div>
      </div>

      {/* Rest of the About Us Content */}
      <div className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* About Us Section */}
          <div className=" p-8 rounded-lg shadow-md space-y-8">
            {/* Introduction with Image */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/s1.jpg" // Path to your image
                    alt="About Us Introduction"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
              <h1 className='text-2xl pt-4 font-semibold text-gray-800'>About Us</h1>
                <p className="text-gray-600 pt-4 text-lg leading-relaxed">
                  Toptech Security thrives to deliver superior and consistent customer service to each and every one of our customers. We invite you to take a closer look at Toptech Security, our commitment, values, and reputation. We are confident you will find unmatched solutions that are fair, equitable, and competitive.
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">OUR VISION</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our vision is to see all our customers needs met through our excellent services. At Toptech Security, we strive to be the most trusted and reliable security provider in the UK, setting the benchmark for quality, innovation, and customer satisfaction.
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/s2.jpg" // Path to your image
                    alt="Our Vision"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Mission Statement Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/s3.jpg" // Path to your image
                    alt="Mission Statement"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">MISSION STATEMENT</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Toptech Security Limited will recognise the Value and Need of every customer and constantly motivate and inspire employees to deliver the best possible service through commitment to excellence.
                </p>
              </div>
            </div>

            {/* Our Method Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">OUR METHOD</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We will maintain up-to-date reports which will be monitored and evaluated regularly to enhance the quality of our services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Not every officer is Toptech material. Our standards are high. We will not hire individuals that cannot meet your specific requirements. We will not hire individuals with undesirable drug or criminal backgrounds.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We will not hire individuals with bad employment records or other problems. The problems of these unacceptable applicants should not become your problems. Whether you need commercial-residential security services or an integrated premises protection program for multiple locations, we have the experience, versatility, and resources to handle all of your security needs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                TopTech Services aims to provide a quality security service to its customers in line with the accepted industry standards. We will endeavour to go that extra mile to accomplish these aims.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Static Guarding is key to reducing risks and preventing losses for business. Our security officers remain alert, aware, and prepared at all times. They are professional, highly trained, and certified. They are capable of providing you with the level of security that suits your business.
              </p>
            </div>

            {/* Optional: Add a Full-Width Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/s5.jpg" // Path to your image
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='pb-12 px-8 pt-8'>
        <button className='text-green-400  rounded-full font-bold border-slate-950 border-2 pt-4 py-2 px-5 hover:text-black'><Link href="ContactUs">Contact Us</Link></button>

        </div>
    </div>
  );
};

export default AboutUsPage;