'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "I'm a beginner — is this program suitable for me?",
    answer: 'Yes! Our program is designed to be scalable for all fitness levels. We provide detailed instructions and modifications for every exercise to ensure you can start safely and progress at your own pace.',
  },
  {
    question: 'I\'m just starting out — is this program right for me?',
    answer: "Absolutely. We specialize in helping beginners build a strong foundation. The program starts with the basics and gradually increases in intensity as you get stronger and more confident.",
  },
  {
    question: "I'm new to fitness — can I follow this program?",
    answer: "Of course. This program is perfect for newcomers. We focus on proper form and technique to prevent injury and help you build long-lasting habits for a healthier lifestyle.",
  },
  {
    question: 'Is this program beginner-friendly?',
    answer: 'Yes, it is extremely beginner-friendly. We have helped thousands of beginners achieve their fitness goals. You will have all the support and guidance you need to succeed.',
  },
];

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 14, stiffness: 120 } },
  };


  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Got any questions before we dive in?
        </h2>
        <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
                key={index} 
                className="bg-[#11212E] rounded-2xl overflow-hidden"
                variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-[#4A8DAF] flex items-center justify-center flex-shrink-0">
                  <motion.span
                    className="text-2xl font-light"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Section8; 