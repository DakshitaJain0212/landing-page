import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { 
  FlagIcon, 
  LinkIcon,
} from '@heroicons/react/24/solid';
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import logo from '../../app/asset/image.png';
import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto pt-8">
        <div className="flex justify-between flex-wrap text-sm">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold"><Image src={logo} alt="logo" width={240} height={88} /></h2>
            <p className="mt-4 text-2xl"><span className="font-bold">Business Software</span><br/> Solutions And Services</p>
            <div className="flex space-x-3 mt-4">
              {/* Icons */}
              <a href="#" className="hover:opacity-80">
                <FaFacebook className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaLinkedin className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80">
                <IoLogoInstagram className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaYoutube className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80">
                <BsTwitterX className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold">Links</h4>
            <ul className="mt-2">
              <li className="pt-4"><a href="#aboutus" className="hover:underline">About</a></li>
              <li className="pt-4"><a href="#services" className="hover:underline">Services</a></li>
              <li className="pt-4"><a href="#solutions" className="hover:underline">Solutions</a></li>
              <li className="pt-4"><a href="#why-choose-us" className="hover:underline">Why Us</a></li>
              <li className="pt-4"><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="mt-2">
              <li className="pt-4"><a href="#" className="hover:underline ">Web App Dev</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Mobile App Dev</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">IT Consulting</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Custom Software</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Cloud Services</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Data Engineering</a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="font-bold text-lg">Solutions</h4>
            <ul className="mt-2">
              <li className="pt-4"><a href="#" className="hover:underline">Content Management</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Employee Management</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Vehicle Management</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Leads Management</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Inventory Management</a></li>
              <li className="pt-4"><a href="#" className="hover:underline">Hospital Management</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="mt-2">
              <li className="flex items-center pt-4"><PhoneIcon className="h-4 w-4 mr-2" /> +91-9873-53-8873</li>
              <li className="flex items-center pt-4"><EnvelopeIcon className="h-4 w-4 mr-2" /> contact@imeleo.com</li>
              <li className="flex items-center pt-4"><MapPinIcon className="h-4 w-4 mr-2" /> Noida, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
      <div className="border-t border-gray-400 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8">
          {/* Text Section */}
          <div className="text-xs text-center md:text-left">
            © 2023 Imeleo Consulting. All rights reserved.
          </div>
          {/* Links Section */}
          <div className="text-xs text-center md:text-left">
            <a href="/privacy-policy" className="hover:underline">Privacy policy</a> |{' '}
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
          </div>
          {/* Contact and Flag Section */}
          <div className="flex items-center space-x-1">
            <a href="mailto:info@imeleo.com" className="text-xs">info@imeleo.com</a>
            <div className="w-5 h-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="India Flag"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>


      </div>
    </footer>
  );
};

export default Footer;