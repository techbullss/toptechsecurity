import { FaCheckCircle, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Uniformed Manned Guarding",
      description:
        "TopTech Security uniformed guards are trained to look out for, and react to any unusual or threatening situation with rapid response and efficiency. This ensures that all unwanted incidents are nipped in the bud, giving our valued client the most needed peace of mind.",
      points: [
        "Our officers conduct regular patrols, both inside and outside buildings including the perimeters of all facilities under our watch.",
        "By so doing we make sure that vandalism and theft are kept at bay.",
        "Our customers can count on our officers who are trained and vetted to the highest security standards.",
      ],
      image: "/man.jpg", // Add image path
    },
    {
      title: "Mobile Patrol",
      description:
        "Our mobile patrol service consists of pre-arranged number of visits to your premises. Sometimes the visits are carried out at random times. This acts as an effective deterrent to protect premises like schools, factories, car parks etc from acts of vandalism and theft.",
      points: [
        "Mobile patrol also plays a key role in preventing/minimising damage by early detection of fire or other safety hazards.",
        "Chemical spills, leaking pipes, unhealthy conditions etc.",
        "A complete record of every patrol is available upon request.",
      ],
      image: "/mobile.jpg", // Add image path
    },
    {
      title: "Retail Security",
      description:
        "TopTech Security provides the highest standard of service that is aimed at preventing threats of shoplifting incidents in your premises. Our officers also ensure that conflicts between staff and customers are kept at bay.",
      points: [
        "Our security officers have received training to enable them carry out their mandate with professionalism.",
      ],
      image: "/retail.jpg", // Add image path
    },
    {
      title: "Ware Housing Guarding",
      description:
        "We provide specialised services that help to deter theft and vandalism. Our security officers have extensive experience and expertise in providing the best services to your business.",
      points: [],
      image: "/warehouse.jpg", // Add image path
    },
    {
      title: "Key Holding and Alarm Response",
      description:
        "Key-holding is an integral part of running a successful business. TopTech Security is a trustworthy key holder. Our officers can hold keys to your premises when required. Our alarm response team is able to look after your property 24hrs a day.",
      points: [],
      image: "/s1.jpg", // Add image path
    },
    {
      title: "Static Guarding",
      description:
        "Static Guarding is key to reducing risks and preventing losses for business. Our security officers remain alert, aware and prepared at all times. They are professional, highly trained and certified. They are capable of providing you with the level of security that suits your business.",
      points: [
        "Guarding of vital installations.",
        "Protection of offices, equipment, and buildings.",
        "Static surveillance.",
        "Traffic control and parking protection.",
        "Security of materials and movement control.",
      ],
      image: "/s5.jpg", // Add image path
    },
    {
      title: "Canine Handling (Guard dog)",
      description:
        "Security patrol dog handler can be provided upon request. The dog service is vital especially in more vulnerable or even risky situations. These dogs are highly trained to deal with any eventuality (while showing controlled aggression) when confronted with a threatening situation.",
      points: [],
      image: "/dog.jpg", // Add image path
    },
    {
      title: "Construction Security",
      description:
        "TopTech Security provides security cover in your building site during the day or shutdown periods, weekends and holiday seasons. We pride ourselves in the fact that we have expert personnel and systems tailored to meet the needs of the construction industry. We have security officers who are specifically trained for construction site security.",
      points: [
        "TopTech Security is specialist in meeting short notice requirement.",
        "On each site are clocking on machine which records patrols carried out around the key points of the construction site.",
        "Our rates are exceptionally competitive.",
      ],
      image: "/s3.jpg", // Add image path
    },
    {
      title: "Events Security/ Events Stewards",
      description:
        "We provide services for any corporate event. Our team of dedicated staff are committed to offering our clients the highest standard of service.",
      points: [],
      image: "/s5.jpg", // Add image path
    },
  ];

  return (
    
    <div className="">
      <div className="relative h-64 md:h-66 w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/man.jpg" // Path to your background image
                  alt="About Us Background"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
      
              {/* Heading Text */}
              <div className="relative  flex flex-col items-center justify-center h-full">
                <div><h1 className="text-4xl font-bold text-white text-center">
                OUR SERVICES
                </h1></div>
                <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center text-white hover:text-blue-300 transition duration-300">
  <FaHome className="w-5 h-5" />
  <span className="ml-2 text-lg text-white">TopTech Security Services</span>
</Link>
            </div>
              <span className="text-white">/</span>
              <span className="text-white">Our Services</span>
            </div>
              </div>
            </div>
      <div className="max-w-[98%] mx-auto">
        {/* Page Heading */}
        

        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className=" p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8"
            >
              {/* Service Image */}
              <div className="w-full md:w-1/3">
                <div className="relative h-56 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Service Content */}
              <div className="w-full md:w-2/3">
                {/* Service Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h2>

                {/* Service Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Points */}
                {service.points.length > 0 && (
                  <div className="space-y-3">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-lg">{point}</p>
                        
                      </div>
                    ))}

                  </div>
                )}
              </div>
              
            </div>
            
          ))}
        </div>
        <div className='pb-12 pt-8'>
        <button className='text-green-400  rounded-full font-bold border-slate-950 border-2 pt-4 py-2 px-5 hover:text-black'><Link href="ContactUs">Contact Us</Link></button>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;