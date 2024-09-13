import React from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import person from '../../app/asset/person.png'; // Replace with your image path
import bgImage from '../../app/asset/Background.png'; 

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
         {/* Heading and Subtext Outside Blue Box */}
         <div className="max-w-5xl mx-auto p-6 rounded-lg relative">
        <div className="text-center pb-12">
          <h2 className="text-4xl text-customBlue font-semibold tracking-wide">Contact Us</h2>
         
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Imeleo provides cutting-edge solutions and expert insights to drive your business success in the digital age.
          </p>
        </div>
       
        <div 
          className="relative rounded-2xl px-8 h-[300px] py-4 flex flex-col md:flex-row items-center justify-between mt-12"
          style={{ 
            backgroundImage: `url(${bgImage.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Left Side Image */}
          <div className="relative w-full md:w-[40%] h-[300px] flex justify-center md:justify-start items-end">
            <div className="absolute bottom-0 transform lg:-translate-x-10">
              <Image 
                src={person} 
                alt="Person with laptop" 
                width={512}  
                height={800} 
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-[55%] text-white text-center md:text-left">
            <h3 className="text-3xl font-bold">
              We help you to grow your business faster & easier.
            </h3>
            <p className="mt-4">
              Partner with us to simplify the path to your success. We’ll help
              reaching your business goals faster than ever.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="h-6 w-6 text-white mr-2" />
                <p className="text-lg">+91-8873-33-8873</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <EnvelopeIcon className="h-6 w-6 text-white mr-2" />
                <p className="text-lg">
                  <a href="mailto:contact@imeleo.com" className="underline">
                    contact@imeleo.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-white text-customBlue font-semibold rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
