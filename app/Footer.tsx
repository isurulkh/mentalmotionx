'use client';

import Image from 'next/image';
import React from 'react';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0B2230] text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#1C3D52] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#1C3D52] rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Logo, Socials, Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4">
              <Image src="/Hero/logowithname.png" alt="Mental Motion X Logo" width={200} height={40} />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                {/* Facebook Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                {/* Instagram Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                {/* YouTube Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Subscribe to newsletter</p>
              <form className="flex items-center bg-[#2E4756] rounded-full p-1 max-w-sm">
                <input type="email" placeholder="Enter your email..." className="bg-transparent flex-grow px-4 py-2 text-white placeholder-gray-400 focus:outline-none" />
                <button type="submit" className="text-white p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>
          </div>
          {/* Right Column: Description & Sitemaps */}
          <div className="md:col-span-8 flex flex-col gap-8">
            <div>
                <p className="max-w-md">Mental MotionX provides personalized fitness & diet solutions through the power of coach.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Main Sitemap */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-400">MAIN SITEMAP</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Guides</a></li>
                    </ul>
                </div>
                {/* App Features */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-400">APP FEATURES</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white">Fitness Analytics</a></li>
                        <li><a href="#" className="hover:text-white">Activity Tracker</a></li>
                        <li><a href="#" className="hover:text-white">Workout Library</a></li>
                        <li><a href="#" className="hover:text-white">Diet & Nutrition</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-400">LEGAL</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">Copyright ©2025, All Rights Reserved</p>
        </div>
      </div>
       {/* Floating Action Buttons */}
       <div className="max-w-7xl mx-auto relative z-20 flex justify-between items-center mt-12">
            <button className="bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 backdrop-blur-sm hover:bg-gray-600/70 transition">
                <span>Apple Store</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
            <button onClick={scrollToTop} className="w-14 h-14 bg-[#4A8DAF] rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            </button>
            <button className="bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 backdrop-blur-sm hover:bg-gray-600/70 transition">
                <span>Google Play</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
        </div>
    </footer>
  );
};

export default Footer; 