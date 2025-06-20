import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden text-white p-0">
      {/* Large Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src="/Hero/Union.png"
          alt="Background Logo"
          width={900}
          height={900}
          className="opacity-10 w-[60vw] max-w-3xl h-auto"
          aria-hidden
        />
      </div>

      {/* Navigation - centered logo */}
      <nav className="relative w-full z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
          {/* Left: Links */}
          <div className="hidden sm:flex flex-1 gap-8 text-base font-medium">
            <a href="#guides" className="hover:text-blue-300 transition">Guides</a>
            <a href="#about" className="hover:text-blue-300 transition">About</a>
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center relative z-50">
            <Image src="/Hero/logowithname.png" alt="MentalMotionX Logo" width={220} height={40} className="object-contain" />
          </div>
          {/* Right: Join Now */}
          <div className="flex-1 flex justify-end">
            <button className="border border-white/70 rounded-full px-7 py-2 text-base font-semibold hover:bg-white/10 transition">Join Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 w-full text-center z-10">

        {/* Mobile: Top Text */}
        <div className="lg:hidden absolute  left-4 right-4">
          <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg mt-10">
            The app that will reshape <br /> your body
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto drop-shadow mt-4">
            Challenge your limits. Unlock your potential.
          </p>
        </div>

        {/* Image container & Desktop Layout */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-[98vw] max-w-6xl aspect-[1/1] sm:aspect-[3/2] flex justify-center items-center">
            {/* Hero Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/Hero/hero.png"
                alt="MentalMotionX App"
                width={2000}
                height={1500}
                className="object-contain max-h-[80vh] md:max-h-[85vh] lg:max-h-none lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 md:w-[85vw] lg:w-[50vw] xl:w-[55vw] 2xl:w-[50vw]"
                priority
              />
            </div>
            {/* Play Button */}
            {/* <button className="absolute mb-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/80 hover:bg-blue-600/90  rounded-full p-3 sm:p-4 shadow-lg border-4 border-white/20">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.2" />
                <polygon points="13,10 24,16 13,22" fill="#fff" />
              </svg>
            </button> */}
            {/* Stats overlays */}
            <div className="absolute left-[8px] top-[15%] sm:top-[22%] flex flex-col items-end z-30">
              <div className="flex items-center gap-1 text-red-400 font-extrabold text-xl sm:text-2xl md:text-3xl">
                <span>🔥</span>251<span className="text-xs font-normal text-white/70 ml-1">kcal</span>
              </div>
              <div className="w-[30px] sm:w-[40px] h-0.5 bg-white mt-2 mr-0" style={{borderRadius:'2px'}} />
              <div className="w-2 h-2 bg-white rounded-full mt-[-5px] mr-[-6px]" />
            </div>
            <div className="absolute right-[8px] top-[15%] sm:top-[22%] flex flex-col items-start z-30">
              <div className="flex items-center gap-1 text-orange-400 font-extrabold text-xl sm:text-2xl md:text-3xl">
                <span>❤️</span>121<span className="text-xs font-normal text-white/70 ml-1">bpm</span>
              </div>
              <div className="w-[30px] sm:w-[40px] h-0.5 bg-white mt-2 ml-0" style={{borderRadius:'2px'}} />
              <div className="w-2 h-2 bg-white rounded-full mt-[-5px] ml-[-6px]" />
            </div>
            <div className="absolute left-[8px] bottom-[25%] sm:bottom-[34%] flex flex-col items-end z-30">
              <div className="flex items-center gap-1 text-blue-400 font-extrabold text-xl sm:text-2xl md:text-3xl">
                <span>💧</span>99<span className="text-xs font-normal text-white/70 ml-1">SpO2</span>
              </div>
              <div className="w-[30px] sm:w-[40px] h-0.5 bg-white mt-2 mr-0" style={{borderRadius:'2px'}} />
              <div className="w-2 h-2 bg-white rounded-full mt-[-5px] mr-[-6px]" />
            </div>
            <div className="absolute right-[8px] bottom-[25%] sm:bottom-[34%] flex flex-col items-start z-30">
              <div className="flex items-center gap-1 text-purple-400 font-extrabold text-xl sm:text-2xl md:text-3xl">
                <span>💜</span>118<span className="text-xs font-normal text-white/70 ml-1">mmHg</span>
              </div>
              <div className="w-[30px] sm:w-[40px] h-0.5 bg-white mt-2 ml-0" style={{borderRadius:'2px'}} />
              <div className="w-2 h-2 bg-white rounded-full mt-[-5px] ml-[-6px]" />
            </div>
            
            {/* Desktop: Headline, Subheadline & Buttons */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-[-4.5rem] w-full flex-col items-center z-20 px-2 mb-[230px]">
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                The app that will reshape <br className="hidden sm:block" /> your body.
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto drop-shadow">
                Challenge your limits. Unlock your potential.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="bg-black rounded-lg px-5 py-3 flex items-center gap-3 shadow hover:bg-gray-900 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.564 13.07c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.81.68 1.16-.02 1.89-1.06 2.6-2.1.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zM15.13 6.13c.59-.72.99-1.73.88-2.73-.85.03-1.88.57-2.5 1.29-.55.63-1.03 1.65-.85 2.62.97.08 1.98-.49 2.47-1.18z" fill="#fff"/></svg>
                  <span className="text-left"><span className="block text-xs">Download on the</span><span className="block font-semibold">App Store</span></span>
                </a>
                <a href="#" className="bg-white rounded-lg px-5 py-3 flex items-center gap-3 shadow hover:bg-gray-200 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g><path d="M21.805 12.18c0-.68-.61-1.09-1.13-1.23l-2.7-.8-2.13 2.13 2.13 2.13 2.7-.8c.52-.14 1.13-.55 1.13-1.23zM13.5 13.5l-2.13-2.13-7.17 2.13c-.52.14-1.13.55-1.13 1.23s.61 1.09 1.13 1.23l7.17 2.13 2.13-2.13zM13.5 10.5l2.13-2.13-7.17-2.13c-.52-.14-1.13-.55-1.13-1.23s.61-1.09 1.13-1.23l7.17-2.13-2.13 2.13z" fill="#000"/></g></svg>
                  <span className="text-left text-black"><span className="block text-xs">GET IT ON</span><span className="block font-semibold">Google Play</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile: Bottom Buttons */}
        <div className="lg:hidden absolute bottom-8 left-4 right-4 z-20">
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="bg-black rounded-lg px-5 py-3 flex items-center gap-3 shadow hover:bg-gray-900 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.564 13.07c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.81.68 1.16-.02 1.89-1.06 2.6-2.1.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zM15.13 6.13c.59-.72.99-1.73.88-2.73-.85.03-1.88.57-2.5 1.29-.55.63-1.03 1.65-.85 2.62.97.08 1.98-.49 2.47-1.18z" fill="#fff"/></svg>
                  <span className="text-left"><span className="block text-xs">Download on the</span><span className="block font-semibold">App Store</span></span>
                </a>
                <a href="#" className="bg-white rounded-lg px-5 py-3 flex items-center gap-3 shadow hover:bg-gray-200 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g><path d="M21.805 12.18c0-.68-.61-1.09-1.13-1.23l-2.7-.8-2.13 2.13 2.13 2.13 2.7-.8c.52-.14 1.13-.55 1.13-1.23zM13.5 13.5l-2.13-2.13-7.17 2.13c-.52.14-1.13.55-1.13 1.23s.61 1.09 1.13 1.23l7.17 2.13 2.13-2.13zM13.5 10.5l2.13-2.13-7.17-2.13c-.52-.14-1.13-.55-1.13-1.23s.61-1.09 1.13-1.23l7.17-2.13-2.13 2.13z" fill="#000"/></g></svg>
                  <span className="text-left text-black"><span className="block text-xs">GET IT ON</span><span className="block font-semibold">Google Play</span></span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
} 
