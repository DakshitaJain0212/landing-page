import React from 'react';
import tick from '../../app/asset/icons/tick.png';
import office from '../../app/asset/office.png';
import vector from '../../app/asset/icons/Vector.png';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl text-customBlue font-semibold tracking-wide">About Imeleo</h2>
         
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Imeleo provides cutting-edge solutions and expert insights to drive your business success in the digital age.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="flex justify-center items-start lg:items-start"> 
            <div className="lg:w-1/2">
              <Image 
                src={office} 
                width={568} 
                height={516}
                alt="People working in office"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <p className="mt-2 text-4xl leading-8 font-semibold tracking-tight text-gray-800 sm:text-4xl ">
                We Are Increasing <span className="text-customBlue">Business</span> Success With <span className="text-customBlue">Technology</span>
              </p>
              <p className="mt-4 max-w-2xl text-medium text-gray-500 lg:mx-auto pb-4">
              At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today's digital world.
          </p>
              

              <ul className="space-y-4 pt-4">
                <li className="flex items-center">
                  <Image src={tick} width={28} height={20} alt="tick"/>
                  <span className="ml-3 text-2xl font-medium text-gray-900">Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <Image src={tick} width={28} height={20} alt="tick"/>
                  <span className="ml-3 text-2xl font-medium text-gray-900">Strategic Growth</span>
                </li>
                <li className="flex items-center">
                  <Image src={tick} width={28} height={20} alt="tick"/>
                  <span className="ml-3 text-2xl font-medium text-gray-900">Enhanced Performance</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <span className="pr-2">View More</span>
                  <Image src={vector} width={10} height={18} alt="Arrow Icon" />
                  </button>
                  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
