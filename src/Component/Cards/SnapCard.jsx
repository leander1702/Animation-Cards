import React from 'react';

import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import secure from '../../assets/Service/secure.svg';
import final from '../../assets/Service/Final.svg';

const SnapCard = () => {
  const expertisePoints = [
    {
      title: 'Experienced Full-Stack Developers',
      description:
        'Our team brings 8+ years of combined experience building robust web applications using modern technologies like React, Node.js, and cloud platforms.',
      list: [
        'Seamless System Integration',
        'Continuous Testing for High Quality',
        'Scalable Deployment & Maintenance',
      ],
      image: web1,
    },
    {
      title: 'SEO-Optimized, Clean Code',
      description:
        'We write semantic, performant code that ranks well on search engines while being maintainable and well-documented for future updates.',
      list: [
        'Seamless System Integration',
        'Continuous Testing for High Quality',
        'Scalable Deployment & Maintenance',
      ],
      image: web2,
    },
    {
      title: 'Scalable & Secure Architecture',
      description:
        'Applications built with enterprise-grade security and scalability in mind, ready to handle your growing user base and traffic spikes.',
      list: [
        'Seamless System Integration',
        'Continuous Testing for High Quality',
        'Scalable Deployment & Maintenance',
      ],
      image: secure,
    },
    {
      title: 'Post-Launch Support',
      description:
        'Comprehensive maintenance packages including updates, security patches, and feature additions after deployment.',
      list: [
        'Seamless System Integration',
        'Continuous Testing for High Quality',
        'Scalable Deployment & Maintenance',
      ],
      image: final,
    },
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Our Development Edge
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
          Why clients trust us with their digital products
        </p>
      </div>

      {/* Sticky scroll container */}
      <div className="relative h-[400vh]">
        {expertisePoints.map((point, index) => (
          <div
            key={index}
            className="sticky top-10 h-screen flex items-center justify-center"
          style={{ zIndex: index }}

          >
            <div className="w-full max-w-5xl bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-3xl rounded-xl shadow-xl  px-6 py-10">
              <div className="flex flex-col md:flex-row items-center">
                {/* Left: Text */}
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{point.description}</p>
                  <ul className="space-y-2 mt-4">
                    {point.list.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200">                        
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 flex justify-center p-8">
                  <img
                    src={point.image}
                    alt={point.title}
                    className= "w-3/4 md:w-3/4 max-w-md h-auto object-contain pt-4 md:pt-10"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapCard;
