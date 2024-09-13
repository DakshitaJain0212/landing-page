'use client'

import SolutionCard from '../shared/SolutionCard';
import content from '../../app/asset/content.png'
import employee from '../../app/asset/employee.png'
import hospital from '../../app/asset/hospital.png'
import lead from '../../app/asset/lead.png'
import vehicle from '../../app/asset/vehicle.png'
import inventory from '../../app/asset/inventory.png'
import vector from '../../app/asset/icons/Vector.png';
import Image from 'next/image';

const Solutions = () => {

  interface Solutions {
    title: string;
    icon: string;
    description: string;
  } 


  const solutions: Solutions = [
    {
      title: 'Content Management',
      image: content, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
    {
      title: 'Employee Management',
      image: employee,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
    {
      title: 'Vehicle Management',
      image: vehicle,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
    {
      title: 'Lead Management',
      image: lead,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
    {
      title: 'Inventory Management',
      image: inventory,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
    {
      title: 'Hospital Management',
      image: hospital,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu'
    },
  ];

  return (
    <div className="w-full bg-white py-16"> {/* Full-width white background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-customBlue text-center mb-6">Solutions</h2>
        <p className="text-center mb-8 text-gray-500">
          Innovative software solutions tailored to streamline your <br/> business operations and maximize efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              image={solution.image}
              description={solution.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-white-500 text-black border border-blue-600 py-2 px-4 rounded-md transition duration-300 hover:bg-blue-100 flex items-center">
 <span className="pr-2"> View More </span>
  <Image src={vector} width={10} height={18} alt="Arrow Icon" />
</button>


        </div>
      </div>
    </div>
  );
};

export default Solutions;
