import React from 'react';
import ServiceCard from '../shared/ServiceCard';

import Image from 'next/image';
import web from '../../app/asset/icons/laptop-code-sharp-regular.png'
import app from '../../app/asset/icons/mobile-regular.png'
import it from '../../app/asset/icons/user-tie-regular.png'
import software from '../../app/asset/icons/uncharted-brands-solid.png'
import cloud from '../../app/asset/icons/cloud-binary-regular.png'
import database from '../../app/asset/icons/database-regular.png';
import vector from '../../app/asset/icons/Vector.png';
import type { StaticImageData } from 'next/image';

interface Service {
  title: string;
  icon: StaticImageData;
  description: string;
}

const services: Service[] = [
  {
    title: 'Web App Development',
    icon: web,
    description: 'Building cutting-edge, high-performing web apps tailored to your business needs.',
  },
  {
    title: 'App Development',
    icon: app,
    description: 'Crafting exceptional mobile experiences that revolutionize user engagement on the go.',
  },
  {
    title: 'IT Consulting',
    icon: it,
    description: 'Providing expert insights and solutions to optimize business growth through technology.',
  },
  {
    title: 'Software Development',
    icon: software,
    description: 'Enterprise-grade, bespoke solutions that perfectly align with your business needs.',
  },
  {
    title: 'Cloud Services',
    icon: cloud,
    description: 'Empowering businesses to harness the full potential of cloud computing with flexible solutions.',
  },
  {
    title: 'Data Engineering',
    icon: database,
    description: 'Robust data pipelines ensuring seamless data storage, transformation, and access at scale.',
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-semibold text-customBlue text-center mb-4">Services</h2>
      <p className="text-center mb-8 text-gray-500">
        Comprehensive business services designed to support <br/> growth and enhance your competitive edge.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
      <button className="bg-white-500 text-black border border-blue-600 py-2 px-4 rounded-md transition duration-300 hover:bg-blue-100 flex items-center">
  <span className="pr-2">View More</span>
  <Image src={vector} width={10} height={18} alt="Arrow Icon" />
</button>


      </div>
      </div>
    </div>
  );
};

export default Services;