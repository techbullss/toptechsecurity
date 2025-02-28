"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  details: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Uniformed Manned Guarding",
    description: "Professional guarding services ",
    details:
      `TopTech Security uniformed guards are trained to look out for, 
      and react to any unusual or threatening situation with rapid response and efficiency.
      This ensures that all unwanted incidents are nipped in the bud, 
      giving our valued client the most needed peace of mind.Our officers conduct regular patrols, 
      both inside and outside buildings including the perimeters of all facilities under our watch.
      By so doing we make sure that vandalism and theft are kept at bay.
      Our customers can count on our officers who are trained and vetted to the highest security standards.
      Static Guarding is key to reducing risks and preventing losses for business. Our security officers remain alert, aware and prepared at all times. They are professional, highly trained and certified. They are capable of providing you with the level of security that suits your business.
TopTech Security officers have the experience and the confidence that will meet your expectations at all times. Key security functions include:

Guarding of vital installations
Protection of offices, equipment, and buildings
Static surveillance
Traffic control and parking protection.
Security of materials and movement control.
      `,
    image: "/man.jpg",
  },
  {
    title: "CCTV Monitoring",
    description: "24/7 surveillance and monitoring services.",
    details:
      "With the increased rate of criminal activities on premises and properties, the need for image recording and recognition is ever increasing. Our professionally qualified technical team will carry out a survey and install CCTV cameras to suit your circumstances. We provide CCTV systems to fit all applications from the small corner shop, to an office block, a hospital, town centre or airport system with thousands of cameras.Toptech Control room is fully equipped with a Remote Monitoring station that is manned 24hours a day 365 days of the year. Toptech can monitor your premises from our control centre, This is done using the very latest wireless technology and Internet Protocol (IP) capability. Our clients have commented on the effectiveness",
    image: "/cctv.jpg",
  },
  {
    title: "Mobile Patrols",
    description: "Regular security patrols for enhanced safety.",
    details:
      `Our mobile patrol service consists of pre-arranged number of visits to your premises. 
Sometimes the visits are carried out at random times.

This acts as an effective deterrent to protect premises like schools, factories, car parks, etc., from acts of vandalism and theft.

Mobile patrol also plays a key role in preventing/minimizing damage by early detection of fire or other safety hazards:
- Chemical spills
- Leaking pipes
- Unhealthy conditions, etc.

A complete record of every patrol is available upon request.`,
    image: "/mobilev.jpg",
  },
  {
    title: "Special Project",
    description: "Specially tailored security and safety services.",
    details:`Toptechsecurity Services provides an array of specially tailored security and safety services for our client’s unique needs.

Our tailored services include:

Event security, crowd control and management 
Risk management
Security, crime mapping and Intelligence gathering
Health and Safety including Environment training (HS&E)
Reception duties:
Client expectations are continually evolving, and DSG acknowledges this trend. Increasingly, clients are telling us that exceptional customer service is a minimum requirement but on our side a great deal of energy has gone into defining what this means for our clients and for the stakeholders concerned.
Where our corporate reception teams are deployed, our clients can be reassured that their guests will be effortlessly assisted – from the time of their arrival until the time they leave.

Working together with our security and front of house personnel, the corporate reception teams are required not only to protect, but also to welcome, and to smooth the passage of all visitors.`,
        image: "/special.jpeg",
  },
  {
    title: "Traffic Marshal/Banksman",
    description: "Direct vehicle and plant movement.",
    details:`A Traffic Marshal or Banksman is an operative trained to direct vehicle and plant movement on or around a construction or parking site. They also monitor and manage traffic entering and leaving site related to deliveries or pickups as well as create temporary or permanent routes and barriers.

The same can be said for the use of heavy duty equipment and machinery, which when operated by trained staff is not a threat. However, safety could be compromised if the equipment or machinery has been tampered with on the back of criminal activity.

Therefore, numerous constructions companies are choosing to employ the services of dedicated security firms to protect their building sites, redevelopment areas, civil engineering projects, and more.

At DSG Services we offer the best trained personel tailered to sout your needs.`,
    image: "/mar.jpg",
  },
  {
    title: "Key Holding",
    description: "Key holding for enhanced safety.",
    details:`Finding a trustworthy keyholder is an integral part of running a successful business.

An increasing number of businesses understand the risks associated with having their own employees as a keyholder. With this in mind, more companies are now opting to manage this risk by outsourcing their key holding to a professional security company.

Why should ToptechSecurity Services be your keyholder?

All ToptechSecurity Services Mobile Security Guards are fully trained and licensed in accordance with SIA regulations. The largest dedicated fleet of vehicles providing nationwide coverage via a network of local branches for our keyholding service.

As your keyholder, we ensure your keys are secured on your site.  In the event of an alarm activation our nearest mobile patrol officer can attend, therefore reducing time spent collecting keys from a central point.`,
        image: "/key.jpg",
  },
  {
    title: "Canine Handling (Guard dog)",
    description: "Canine Handling for enhanced safety.",
    details:`Security patrol dog handler can be provided upon request. The dog service is vital especially in more vulnerable or even risky situations.
These dogs are highly trained to deal with any eventuality (while showing controlled aggression) when confronted with a threatening situation.`,
    image: "/dog.jpg",
  },
  {
    title: "Cleaning Services",
    description: "Efficient constraction cleaning services.",
    details:`Since establishment ToptechSecurity Services has bult an excellent repupation for providing reliable and efficient constraction cleaning services.Whether it’s one house being built or a big project, we have experienced construction cleaners that have worked in partnership with some major construction companies in London and all over UK.

Even when the builders have packed away their tools for the last time, there is still a lot of work to be done before a project can be considered truly complete. While they will do their best to clear out all the dust and debris from the site, they will not complete the builders cleaning as effectively as our highly skilled and experienced cleaners.

No matter how big the project, whether it’s one house, a block of flats or a huge commercial building being built from the ground up, our service is especially designed to complete the task to the highest standard.

Our services are tailored to meet all the requirements and deadlines of the client. Our professional cleaners will pay close attention to detail to remove every last speck of dust from every nook and cranny.

We guarantee all our construction cleaning work is completed to a high quality, using only the best tools available and environmentally friendly cleaning products.

we also provide day to day site cleaning serveces in your offices and other site facilities to enhace day to day activities.

This is part of our promise to all clients in the construction industry. All our operatives are fully insured and trained in health and safety protocol.`,
    image: "/cleaning.png",
  },
  {
    title: "Construction security",
    description: "Security cover in your building site.",
    details:`TopTech Security provides security cover in your building site during the day or shutdown periods, weekends and holiday seasons. We pride ourselves in the fact that we have expert personnel and systems tailored to meet the needs of the construction industry. We have security officers who are specifically trained for construction site security.
TopTech Security is specialist in meeting short notice requirement. On each site are clocking on machine which records patrols carried out around the key points of the construction site.

Our rates are exceptionally competitive.`,
    image: "/cons.jpg",
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openDialog = (service: Service) => {
    setSelectedService(service);
  };

  const closeDialog = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-white bg-cover bg-fixed" style={{ backgroundImage: "url('bg4.jpeg')" }}>
      <div className="relative h-64 md:h-66 z-10">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image src="/s2.jpg"   alt="About Us Background" layout="fill" objectFit="cover" className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
      
              {/* Heading Text */}
              <div className="relative flex flex-col items-center justify-center h-full">
                <div><h1 className="text-4xl font-bold text-white text-center">
                OUR SERVICES
                </h1>
                </div>
                
              </div>
            </div>
      <div className="  p-12">
        {/* Page Heading */}
        

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg border-2 border-slate-100"
            >
              {/* Image Header */}
              <div className=" ">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className=" w-[400px] h-[200px]"
                  
                  
                />
              </div>

              {/* Card Content */}
              <div className="p-6  ">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {service.title}
                  <hr className="w-[40%]  border-t-4 border-green-500 rounded" />
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => openDialog(service)}
                  className=" text-green-500 px-4 py-2 rounded-lg hover:text-sky-500 outline-0 transition duration-300 after:below "
                  
                >
                  Read More
                  <hr />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Dialog */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-[1000] justify-center ">
          <div className="bg-white rounded-lg  w-4/5 h-[90vh] p-8 overflow-auto relative">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {selectedService.title}
            </h2>
            <Image
              src={selectedService.image}
              alt={selectedService.title}
              width={300}
              height={300}
              className="rounded-lg mb-4 "
            />
            <div className="text-gray-600 text-md">
  {selectedService.details.split("\n").map((line, index) => 
    line.startsWith("-") ? (
      <li key={index} className="list-disc ml-6">{line.substring(1).trim()}</li>
    ) : (
      <p key={index} className="mb-2">{line}</p>
    )
  )}
</div>
<div className='pb-12 px-8 pt-8 text-center'>
        <button className='bg-green-400  rounded-full font-bold border-slate-950 border-2 pt-4 py-2 px-5 hover:text-black'><Link href="ContactUs">Contact Us</Link></button>

        </div>
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
