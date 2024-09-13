'use client'

import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ServiceCardProps {
    title: string;
    icon: StaticImageData; 
    description: string;
  }
  
  const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
    return (
      <div className="bg-white border border-grey-600 shadow-md rounded-2xl p-6 max-w-sm">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
            <Image
            src={icon}
            alt={title}
            width={45}
            height={36}
            className="w-8 h-8"
          />
          </div>
        </div>
        <h3 className="text-lg text-customBlue font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;


 