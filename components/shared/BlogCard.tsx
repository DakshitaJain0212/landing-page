import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  date: string;
  description: string;
}

const BlogCard = ({ image, title, date, description }: BlogCardProps) => {
  return (
    <div className="max-w-sm bg-gray-100 shadow-md rounded-2xl overflow-hidden border border-grey-600 px-4 py-4">
      <Image
            src={image}
            alt={title}
            width={220}
            height={200}
            className="w-full rounded-2xl h-60 object-cover"
          />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2"><span className="border border-grey-600 rounded-full px-2">{date}</span></p>
        <h3 className="text-lg text-customBlue font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;