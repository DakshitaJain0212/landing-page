import React from 'react';
import ServiceCard from '../shared/ServiceCard';

import Image from 'next/image';
import bullseyes from '../../app/asset/icons/bullseye-arrow-sharp-light.png'
import business from '../../app/asset/icons/business-time-regular.png'
import rightLeft from '../../app/asset/icons/up-right-and-down-left-from-center-solid.png'
import handshake from '../../app/asset/icons/handshake-angle-regular.png'
import lightbulb from '../../app/asset/icons/lightbulb-gear-regular.png'
import gear from '../../app/asset/icons/user-gear-regular.png';
import vector from '../../app/asset/icons/Vector.png';
import { StaticImageData } from 'next/image';


interface Service {
  title: string;
  icon: StaticImageData;
  description: string;
}

const services: Service[] = [
  {
    title: 'Technical Expertise',
    icon: gear,
    description: 'Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,',
  },
  {
    title: 'Business Centric Approach',
    icon: business,
    description: 'Putting business first, providing tailored IT solutions based on the unique needs of each business',
  },
  {
    title: 'Procrss & Quality Assurance',
    icon: bullseyes,
    description: 'Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.',
  },
  {
    title: 'Support',
    icon: handshake,
    description: 'Offering timely support and quick resolution of issues to minimize downtime and disruptions.',
  },
  {
    title: 'Innovation',
    icon: lightbulb,
    description: 'Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions.',
  },
  {
    title: 'Scalabilty',
    icon: rightLeft,
    description: 'Providing scalable IT infrastructure and services that grow as the clients business grows.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-semibold text-customBlue text-center mb-4">Why Choose Us</h2>
      <p className="text-center mb-8 text-gray-500">
        rusted expertise, cutting-edge technology, and a customer- <br/> first approach to drive your success.
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
      </div>
    </div>
     );
};

export default WhyChooseUs;