import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountCard = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [stats, setStats] = useState([
        { value: 0, target: 150, label: 'Projects Completed', suffix: '+' },
        { value: 0, target: 30, label: 'Team Members', suffix: '+' },
        { value: 0, target: 15, label: 'Years Experience', suffix: '' },
        { value: 0, target: 95, label: 'Client Satisfaction', suffix: '%' }
    ]);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setStats(prevStats =>
                prevStats.map(stat => ({
                    ...stat,
                    value: stat.value < stat.target ? stat.value + 1 : stat.target
                }))
            );
        }, 30);

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <div className='bg-black py-10 '>
            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-blue-400 pb-2">
                            {stat.value}{stat.suffix}
                        </div>
                        <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default CountCard;
