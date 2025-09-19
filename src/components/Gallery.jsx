import React from "react";

export const Gallery = () => {
  const galleryImages = [
    {
      src: "https://i.imgur.com/0Fx7kWe.jpeg",
      alt: "Hotel Nariyah exterior with mountain backdrop",
      category: "Hotel",
      title: "Hotel Exterior",
    },
    {
      src: "https://i.imgur.com/j9H6HUK.jpeg",
      alt: "Suite room with traditional Nepali decor",
      category: "Rooms",
      title: "Suite Room for Couple",
    },
    {
      src: "https://i.imgur.com/er7vFMS.jpeg",
      alt: "Traditional restaurant with authentic atmosphere",
      category: "Dining",
      title: "Restaurant",
    },
    {
      src: "https://i.imgur.com/lWoiNdg.jpeg",
      alt: "Beautiful garden terrace with mountain views",
      category: "Rooms",
      title: "Double Bed - 3 Person with Balcony ",
    },
    {
      src: "https://i.imgur.com/Ww0S8Qz.jpeg",
      alt: "Sunset view from hotel balcony",
      category: "Rooms",
      title: "Double Bed - 2 Person",
    },
    {
      src: "https://i.imgur.com/j9H6HUK.jpeg",
      alt: "Single Bedroom with traditional craftsmanship",
      category: "Rooms",
      title: "Single Bedroom",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 md:px-8 lg:px-20"
      style={{ backgroundColor: "hsl(44 67% 96%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
            Gallery
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#737373] max-w-3xl mx-auto leading-relaxed">
            Discover the beauty of Hotel Nariyah through our collection of
            photographs showcasing our rooms, facilities, and the stunning
            Nepali landscape.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-2 py-1 bg-red-600 text-white rounded text-xs sm:text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Experience Hotel Nariyah
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Can't wait to visit? Take a virtual tour of our beautiful property
              and imagine yourself enjoying authentic Nepali hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://sindhulibazar.com/roombookingStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" cursor-pointer px-8 py-3 bg-white text-red-600 rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base md:text-lg">
                  Virtual Tour
                </button>
              </a>

              <button className="px-8 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base md:text-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
