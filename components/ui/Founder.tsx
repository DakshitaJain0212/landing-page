import React from 'react';
import star from '../../app/asset/icons/star-shooting-sharp-regular.png';
import linkedin from '../../app/asset/icons/linkedin.png';
import founder from '../../app/asset/founder.png';
import Image from 'next/image';

const Founder = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="lg:pr-12">
            <h2 className="text-5xl font-semibold text-gray-600 mb-6 flex items-center space-x-2">
              <Image src={star} alt="star" width={36} height={36} />
              <span className="text-customBlue">Meet Our </span> <space/> Founder
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              With decades of industry experience, <span className="font-semibold">Mayank</span> is a highly skilled software developer, solution architect, and technology entrepreneur. He specializes in building modular and scalable cross-platform software solutions.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Over the past, he has worked with numerous businesses, helping them overcome complex business challenges by building innovative technology solutions.
            </p>
            <p className="text-lg text-gray-600">
              Admired by clients, developers, and designers alike, his entrepreneurial vision drives <span className="font-semibold">Imeleo</span>, empowering businesses with cutting-edge technology solutions, thus fueling growth and innovation.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="text-center lg:text-right mt-3">
            <div className="inline-block">
              <Image 
                src={founder} 
                alt="founder" 
                width={541} 
                height={370} 
                className="rounded-xl shadow-lg" 
              />
              <div className="mt-4 mr-[350px]" >
              <h3 className="text-xl font-bold text-customBlue flex items-center justify-start lg:justify-end">
                Mayank Mahajan
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="ml-2 text-blue-600 hover:underline"
                  rel="noreferrer"
                >
                  <Image src={linkedin} alt="linkedin" width={32} height={32} />
                </a>
              </h3>
              <p className="font-semibold text-100 text-gray-700 lg:text-right mr-[90px]">Founder, Imeleo</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
