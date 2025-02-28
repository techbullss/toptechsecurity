
import { FaPhone, FaFax, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaClock} from 'react-icons/fa';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading with Image */}
        <div className="relative h-64 md:h-66 mb-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/s1.jpg" // Path to your background image
              alt="Contact Us Background"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Heading Text */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div><h1 className="text-4xl font-bold text-white text-center">
              CONTACT US
            </h1></div>
            
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Side: Google Map */}
          <div className="w-full px-6 h-[100%] pb-8 rounded-lg overflow-hidden order-1 md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423904384!2d-0.127758384229427!3d51.50735097963448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1633012345678!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side: Contact Info */}
          <div className="space-y-8 pb-8 order-2 md:order-2">
            {/* Get in Touch Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Get in touch with us today</h2>
              <div className="space-y-3 ">
                {/* Phone Numbers */}
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">National: 08450563683</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">London: 02085345645</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">Leicester: 01164070528</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">Oxford: 01865658780</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">Cardiff: 02921730530</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">Manchester: 01619207116</p>
                </div>
                {/* Fax */}
                <div className="flex items-center space-x-3">
                  <FaFax className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">Fax: 0845 056 3683</p>
                </div>
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">info@toptechsecurity.co.uk</p>
                </div>
                {/* Website */}
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-green-500 w-5 h-5" />
                  <p className="text-gray-700">www.toptechsecurity.co.uk</p>
                </div>
              </div>
            </div>

            {/* Office Addresses */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Our Offices</h2>
              <div className="space-y-3">
                {/* London Office */}
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold">1. LONDON OFFICE</p>
                    <p className="text-gray-600">Suite 2000, 16/18 Woodford Road</p>
                    <p className="text-gray-600">London, E7 0HA</p>
                  </div>
                </div>
                {/* Oxford Office */}
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold">2. OXFORD OFFICE</p>
                    <p className="text-gray-600">54 Winters Garden Way</p>
                    <p className="text-gray-600">Banbury, OX16 1UT</p>
                  </div>
                </div>
                {/* Birmingham Office */}
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold">3. BIRMINGHAM OFFICE</p>
                    <p className="text-gray-600">11 Avenue Road</p>
                    <p className="text-gray-600">Erdington, Birmingham, B23 6UY</p>
                  </div>
                </div>
                {/* Leicester Office */}
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-green-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold">4. LEICESTER OFFICE</p>
                    <p className="text-gray-600">33 Dareth Drive</p>
                    <p className="text-gray-600">LE4 0PJ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center space-x-3">
              <FaClock className="text-green-500 w-5 h-5" />
              <p className="text-gray-700">Open 24 hours a day / 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;