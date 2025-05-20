import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';


// Individual FAQ Item
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg  overflow-hidden transition-all duration-300 mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-blue-50  border-blue-200 transition-colors duration-200"
        onClick={onClick}
      >
        <span className="font-medium text-[#0057D3]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="h-5 w-5 text-black" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-4 "
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: { duration: 0.2 }
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.2 }
            }}
          >
            <div className="py-4">
              <p className="text-gray-800 text-base font-medium">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ List Container
const FAQ = ({ faqs }) => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-2 ">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItem === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

// Full Section Component
const Faq2 = () => {
  const faqItems = [
    {
      question: 'Do I need coding experience to join?',
      answer:
        'No, the course at Adventure Learning starts from the basics and builds up, so anyone can join, even without prior coding knowledge.',
    },
    {
      question: 'What technologies will I learn?',
      answer:
        'Youll learn HTML5, CSS3, JavaScript, React, Node.js, MongoDB, Git, Express, and deployment tools like Heroku and AWS at Adventure Learning.',
    },
    {
      question: 'How long is the course?',
      answer:
        'It typically takes 3 to 6 months depending on whether you study full-time or part-time at Adventure Learning.',
    },
    {
      question: 'Will I get a certificate?',
      answer:
        'Yes, you receive a certificate from Adventure Learning upon completing the course, showcasing your full-stack development skills.',
    },
    {
      question: 'Do you offer online and offline options?',
      answer:
        'Yes, Adventure Learning provides both online and offline learning options to fit your schedule.',
    },
    {
      question: 'What is the course structure?',
      answer:
        'The course at Adventure Learning covers front-end and back-end development, followed by real-world projects, and ends with a capstone project.',
    },
  ];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 py-16 bg-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-[#0057D3] tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Find answers to common questions about our courses.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mt-6">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 w-full lg:max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <FAQ faqs={faqItems} />
        </motion.div>

        <motion.div
          className="w-full lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        >
          {/* Second card content here */}
        </motion.div>
      </div>

    </section>
  );
};

export default Faq2;