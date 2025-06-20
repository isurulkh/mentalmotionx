'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Section3() {
  const filters = [
    "Hybrid Training",
    "Size & Strength",
    "Weight Loss",
    "Legs",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 14, stiffness: 120 } },
  };

  return (
    <AnimatedSection className="my-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-8 sm:p-12">
        {/* Centered Heading and Filter Buttons at Top */}
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-white text-center">
            Access my personal training<br />library with 30+ exclusive guides.
          </h2>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {filters.map((label, i) => (
              <motion.button
                key={label}
                variants={buttonVariants}
                className={
                  i === 0
                    ? "px-6 py-2 rounded-full border border-blue-400 text-blue-200 bg-white/5 hover:bg-blue-400/20 transition"
                    : "px-6 py-2 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition-colors"
                }
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>
        {/* Two-column layout below */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6">
            <h3 className="text-2xl font-bold text-white mb-2">Hybrid Athlete Challenge</h3>
            <p className="text-white/80 mb-6 max-w-lg">
              Join the Hybrid Athlete Challenge and transform your fitness! This program combines strength, endurance, and conditioning to help you achieve peak performance. With 3 resistance training sessions and 3 cardio-focused workouts each week, you'll build muscle, boost endurance, and improve your overall athleticism.
            </p>
            <div className="flex gap-8 mb-6">
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <span className="text-2xl">🤖</span> 550<span className="text-yellow-400">K</span>
                <span className="block text-xs font-normal text-white/60 ml-2">AI LLM DATAS</span>
              </div>
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <span className="text-2xl">🤖</span> 99.2<span className="text-yellow-400">%</span>
                <span className="block text-xs font-normal text-white/60 ml-2">AI ACCURACY</span>
              </div>
            </div>
            <button className="mt-2 px-7 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition flex items-center gap-2">
              Join Now <span aria-hidden>→</span>
            </button>
          </div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Section3/mobile.png"
                alt="Mobile App Preview"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 