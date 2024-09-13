'use client';

import Navbar from '../shared/Navbar';
import designs from '../../app/asset/designs.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gray-900 h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src={designs}
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0"
          />
          {/* Full White Overlay with Opacity */}
          <div className="absolute inset-0 bg-white opacity-80"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-customBlue sm:text-6xl">
              Business Software 
            </h2>
            <h2 className="text-4xl font-semibold tracking-tight text-customBlue sm:text-6xl">
             Solutions and Services
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Software services and solutions to take your business to the next level 🚀
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg transition duration-300 hover:bg-blue-700">
              Know more
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-md text-lg font-semibold shadow-lg transition duration-300 hover:bg-blue-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
