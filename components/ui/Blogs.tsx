import React from 'react';
import BlogCard from '../shared/BlogCard'; 
import vector from '../../app/asset/icons/Vector.png';
import dataDriven from '../../app/asset/dataDriven.png';
import jan10 from '../../app/asset/jan10.png';
import sept1 from '../../app/asset/sept1.png';
import Image from 'next/image';

const BlogSection = () => {
  const blogs = [
    {
      image: dataDriven,
      title: 'Why Data-Driven Decision Making is Key for Business Growth',
      date: 'January 15, 2024',
      description: 'Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.',
    },
    {
      image: sept1,
      title: 'Top 5 Business Services to Boost Customer Satisfaction',
      date: 'September 1, 2024',
      description: 'Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty',
    },
    {
      image: jan10,
      title: 'Leveraging Software Solutions to Enhance Business Efficiency',
      date: 'January 20, 2024',
      description: 'Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-customBlue text-center mb-4">Blogs</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our blog for expert tips, industry insights, and <br/> engaging content on the latest trends.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-white-500 text-black border border-blue-600 py-2 px-4 rounded-md transition duration-300 hover:bg-blue-100 flex items-center">
            <span className="pr-2">View More</span>
            <Image src={vector} width={10} height={18} alt="Arrow Icon" />
            
        </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;