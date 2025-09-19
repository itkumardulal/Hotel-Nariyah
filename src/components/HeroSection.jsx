import React from "react";


const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `
      linear-gradient(rgba(183, 28, 28, 0.5), rgba(224, 123, 88, 0.3)), 
      url(https://i.imgur.com/KaD3Dq3.png)
    `,
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Welcome to
            <span className="block text-yellow-400 text-6xl md:text-8xl font-extrabold mt-2 animate-pulse">
              Hotel Nariyah
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Nepali hospitality in the heart of Sindhuli.
            Where tradition meets modern comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Explore Rooms Button */}
            <a
              href="https://sindhulibazar.com/roombookingStore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center"
            >
              Explore Rooms
            </a>

            {/* Our Story Button */}
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 text-lg font-semibold rounded-md border border-white/40 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
