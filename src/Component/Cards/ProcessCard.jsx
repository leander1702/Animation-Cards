import React from 'react';
import { motion } from 'framer-motion';
import {
    BsCompassFill,
    BsBrushFill,
    BsCodeSlash,
    BsBugFill,
    BsRocketTakeoffFill,
    BsWrench
} from 'react-icons/bs';


const primaryColorClass = 'bg-blue-600';
const iconSize = 40;

const processSteps = [
    {
        title: 'Discover & Planning',
        description: 'We define goals, research your market, and outline the project strategy.',
        icon: <BsCompassFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Discovery and Planning Icon" />,
    },
    {
        title: 'UI/UX Design',
        description: 'We design user-friendly, on-brand interfaces with clear navigation.',
        icon: <BsBrushFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="UI/UX Design Icon" />,
    },
    {
        title: 'Development',
        description: 'Our team builds responsive, high-performance applications using modern tech.',
        icon: <BsCodeSlash className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Development Icon" />,
    },
    {
        title: 'Testing & Quality Assurance',
        description: 'We test across devices and browsers to ensure stability and security.',
        icon: <BsBugFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Testing and Quality Assurance Icon" />,
    },
    {
        title: 'Deployment & Launch',
        description: 'We launch your app smoothly with minimal downtime and full optimization.',
        icon: <BsRocketTakeoffFill className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Deployment and Launch Icon" />,
    },
    {
        title: 'Maintenance & Support',
        description: 'We monitor, update, and support your app to keep it running flawlessly.',
        icon: <BsWrench className={`text-white ${primaryColorClass} px-2 py-2 rounded-lg mb-4`} size={iconSize} aria-label="Maintenance and Support Icon" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ProcessCard = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto p-3 md:px-6 ">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white tracking-tight">
                    Our Web Development Process
                </h2>
                <h3 className="text-lg text-center text-gray-400 mt-4">
                    Delivering quality at every stage of development</h3>

                <div className="border border-gray-700 rounded-xl p-2 md:p-10 backdrop-blur-md bg-gray-800/30 mt-5 md:mt-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative p-4 border border-gray-600 rounded-md hover:shadow-md transition duration-300"
                            >
                                {step.icon}
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>

                                {/* Optional directional arrow for horizontal flow */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 right-[-28px] transform -translate-y-1/2 text-blue-500 font-bold text-lg">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;