import React from 'react';
import { motion } from 'framer-motion';



const PointCard = () => {
    const perks = [
        "Flexible work arrangements",
        "Professional development budget",
        "Wellness programs",
        "Hackathon Fridays",
        "Community volunteer days",
        "Cutting-edge tech stack",
        "Annual adventure retreat",
        "Stocked innovation lab"
    ];
    return (
        <div>
            <section className="py-5 md:py-14 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Perks That <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Matter</span></h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            We invest in our team's growth, wellbeing, and happiness
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {perks.map((perk, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
                            >
                                <div className="flex items-center">
                                    <div className="bg-blue-500/10 group-hover:bg-blue-500/20 p-3 rounded-full mr-4 transition-all duration-300">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                    <h3 className="text-lg font-medium">{perk}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default PointCard
