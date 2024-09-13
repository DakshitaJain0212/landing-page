'use client'

import Image from 'next/image';

const SolutionCard = ({ title, image, description }) => {
    return (
      <div className="max-w-sm bg-gray-100 shadow-md rounded-2xl overflow-hidden border border-grey-600 px-4 py-4">
        <Image
            src={image}
            alt={title}
            width={336}
            height={245}
            className="w-full h-48 rounded-2xl object-cover"
          />
        <div className="p-6">
          <h3 className="text-lg text-customBlue font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default SolutionCard;