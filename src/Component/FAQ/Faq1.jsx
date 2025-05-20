import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Faq1= () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1, // Added unique ID for each FAQ item
      question: 'How long does it take to build a website?',
      answer:
        'The timeline for a website typically ranges from 4 to 8 weeks depending on the complexity of the project, the number of pages, and custom features. E-commerce websites or highly complex projects may take longer.',
    },
    {
      id: 2,
      question: 'What determines the cost of a website project?',
      answer:
        'Several factors contribute to the overall cost of a website, including the type of website (e.g., business site, e-commerce), design complexity, the features you need (like custom forms or integrations), and how much content you want to include. We’ll work with you to create a customized plan that fits your budget.',
    },
    {
      id: 3,
      question: 'Do you offer ongoing support and maintenance?',
      answer:
        'Yes! We offer ongoing support and maintenance after launch. This includes regular updates, security patches, bug fixes, and performance optimizations to ensure your site continues to run smoothly.',
    },
    {
      id: 4,
      question: 'Can I update my website myself?',
      answer:
        'Yes! We build websites using user-friendly CMS platforms like WordPress or Webflow, allowing you to easily update content, images, and other elements without needing technical knowledge. We also offer training to get you started.',
    },
    {
      id: 5,
      question: 'Will my website be mobile-friendly?',
      answer:
        'Absolutely! All of our websites are designed with a mobile-first approach, ensuring they are fully responsive and look great on all devices, including smartphones, tablets, and desktops.',
    },
  ];

  // Animation variants
  const itemVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id} // Use the unique id for key
              className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none transition duration-300  ${
                  expandedId === item.id
                    ? 'bg-gray-700 rounded-t-xl border-b border-gray-600'
                    : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                }`}
              >
                <span className="text-lg text-start">{item.question}</span>
                {expandedId === item.id ? (
                  <ChevronUpIcon className="h-7 w-7 text-blue-400" />
                ) : (
                  <ChevronDownIcon className="h-7 w-7 text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="bg-gray-900 text-gray-300 overflow-hidden rounded-b-xl"
                  >
                    <div className="py-5 px-6">
                      <p className="leading-relaxed text-start">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq1;
