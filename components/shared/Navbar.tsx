'use client'

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '../../app/asset/image.png'; 

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-customBlue shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image src={logo} alt="logo" width={114} height={26} />
          </a>
        </div>

        {/* Links Section */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#solutions" className="text-sm font-light text-white">Solutions</a>
          <a href="#services" className="text-sm font-light text-white">Services</a>
          <a href="#aboutus" className="text-sm font-light text-white">About Us</a>
          <a href="#careers" className="text-sm font-light text-white">Careers</a>
          <a href="#why-choose-us" className="text-sm font-light text-white">Why Us</a>
          <a href="#blogs" className="text-sm font-light text-white">Blogs</a>
        </div>

        {/* Search Bar in Center */}
        <div className="flex items-center justify-center px-8">
  <div className="relative w-[261px] h-[52px] ">
    <input
      type="text"
      placeholder="Search"
      className="w-full h-full pl-10 pr-4 py-[14px] text-sm rounded-full border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[14px] top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
      />
    </svg>
  </div>
</div>



        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} alt="logo" width={114} height={26} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Solutions
                </a>
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Services
                </a>
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  About Us
                </a>
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Careers
                </a>
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Why Us
                </a>
                <a href="#" className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Blogs
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
