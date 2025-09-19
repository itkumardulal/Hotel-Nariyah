import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "hsl(44 67% 96%)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Our Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#737373] max-w-3xl mx-auto leading-relaxed">
            Nestled in the beautiful hills of Sindhuli, Hotel Nariyah has been a
            beacon of Nepali hospitality for travelers seeking authentic
            cultural experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-red-600">
              Authentic Nepali Heritage
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#737373]  leading-relaxed">
              Hotel Nariyah embodies the warmth and tradition of Nepal. Our
              family-owned establishment has been welcoming guests with genuine
              care and respect for over two decades, sharing the rich cultural
              heritage of our beautiful country.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#737373] leading-relaxed">
              Every corner of our hotel tells a story of Nepal's history, from
              traditional architecture to local artwork, creating an immersive
              experience that connects you with the soul of our nation.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🏔️",
                title: "Mountain Views",
                desc: "Breathtaking Himalayan vistas",
                color: "from-red-600 to-yellow-400",
              },
              {
                icon: "🏛️",
                title: "Local Culture",
                desc: "Authentic Nepali experiences",
                color: "from-yellow-400 to-red-600",
              },
              {
                icon: "🍽️",
                title: "Local Cuisine",
                desc: "Traditional Nepali flavors",
                color: "from-red-600 to-yellow-400",
              },
              {
                icon: "❤️",
                title: "Warm Welcome",
                desc: "Genuine Nepali hospitality",
                color: "from-yellow-400 to-red-600",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-gray-300 bg-white text-[#737373] shadow-sm p-6 pt-0 text-center 
             hover:-translate-y-2 hover:border-transparent transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${card.color} text-white text-2xl mt-4`}
                >
                  {card.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  {card.title}
                </h4>
                <p className="text-sm sm:text-base text-[#737373]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h3>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              We believe in preserving our heritage while providing modern
              comfort and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">
                Namaste Spirit
              </h4>
              <p className="text-sm sm:text-base opacity-90">
                Every guest is family, welcomed with the traditional Nepali
                greeting and heartfelt respect.
              </p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">
                Cultural Pride
              </h4>
              <p className="text-sm sm:text-base opacity-90">
                We celebrate and share Nepal's rich traditions, festivals, and
                customs with our guests.
              </p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">
                Sustainable Tourism
              </h4>
              <p className="text-sm sm:text-base opacity-90">
                Committed to preserving our environment and supporting the local
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
