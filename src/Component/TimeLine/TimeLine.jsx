import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineCard = ({ year, description, isLeft, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, delay: index * 0.1 }
        },
        hidden: {
            opacity: 0,
            x: isLeft ? 150 : -150
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`flex items-center w-full my-12 md:my-0 ${isLeft ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`relative p-4 rounded-2xl shadow-lg w-full max-w-[28rem] border border-gray-700 
                ${isLeft 
                    ? 'bg-gradient-to-t from-black via-gray-900 to-blue-900 border-l border-t border-r text-white ml-0 md:mr-12 text-right' 
                    : 'bg-gradient-to-t from-black via-gray-900 to-blue-900 text-white md:ml-12 mr-0 text-left'}`}
            >
                <h3 className="text-2xl md:text-3xl  font-bold mb-2 md:mb-3 md:text-center">{year}</h3>
                <p className="text-base md:text-lg leading-relaxed text-start">{description}</p>

                {/* Connector line */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 ${isLeft ? 'right-full w-10 md:w-20' : 'left-full w-10 md:w-20'}`}>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`h-full w-full origin-${isLeft ? 'right' : 'left'} 
                        ${isLeft 
                            ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400' 
                            : 'bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600'}`}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const TimeLine = () => {
    const timelineData = [
        { year: '2024', description: ' Creating the AI and machine learning based innovate products for the education and robotics industries', isLeft: true },
        { year: '2022', description: ' Step forward to support the various industries in embedded system and IoT.', isLeft: false },
        { year: '2021', description: 'Adventure started to provide one stop solution for the customized software development', isLeft: true },
        { year: '2019', description: ' created software division to create the website development', isLeft: false },
        { year: '2017', description: 'created end to end solution for embedded products from design, development and deployment', isLeft: true },
        { year: '2016', description: '  Established with IoT based products in various part of the industries', isLeft: false },
        { year: '2015', description: 'With consistent effort, we started to create the embedded products in automotive andare industry', isLeft: true },
        { year: '2014', description: 'Created the vision for developing the small products support to the various client companies', isLeft: false },
    ];

    return (
        <div id='timeline' className="bg-gradient-to-b from-black via-gray-900 to-blue-950 min-h-screen w-full overflow-hidden py-10 md:py-20 px-4 md:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white mb-12 md:mb-20 text-center"
          >
            A Timeline of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Innovation</span>
          </motion.h2>
      
          <div className="relative">
            {/* Vertical line and glow - only on desktop */}
            <div className="hidden md:block">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-800 via-blue-500 to-blue-700"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-blue-400 opacity-30 blur-lg" />
            </div>
      
            {/* Timeline Cards */}
            {timelineData.map((item, index) => (
              <TimelineCard key={index} {...item} index={index} />
            ))}
      
            {/* Top Dot - only on desktop */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-white animate-ping" />
            </motion.div>
      
            {/* Bottom Dot - only on desktop */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-white animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
      
    );
};

export default TimeLine;
