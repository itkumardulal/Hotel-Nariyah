import React from "react";


export const Room = () => {
  const rooms = [
    {
      id: 1,
      name: "Suite Room for Couple",
      image: "https://i.imgur.com/j9H6HUK.jpeg",
      price: "NPR 3000",
      description:
        "Luxurious suite designed exclusively for couples, offering elegance, comfort, and privacy.",
      amenities: [
        "Privacy",
        "AC",
        "WiFi",
        "Traditional Decor",
        "Private Bathroom",
      ],
      featured: true,
      bookingLink: "https://sindhulibazar.com/confirmbooking", 
    },
    {
      id: 2,
      name: "Double Bed - 3 Person",
      image: "https://i.imgur.com/lWoiNdg.jpeg",
      price: "NPR 3000",
      description:
        "Spacious room with a double bed, comfortably accommodating up to three people with ample space",
      amenities: [
        "Ample Space",
        "Balcony",
        "Double Bed",
        "Comfortably",
        "Room Service",
      ],
      featured: false,
      bookingLink: "https://sindhulibazar.com/confirmbooking", 
    },
    {
      id: 3,
      name: "Suite Room Plus",
      image: "https://i.imgur.com/j9H6HUK.jpeg",
      price: "NPR 3,500",
      description:
        "Luxurious suite designed exclusively for couples, offering elegance, comfort, and privacy..",
      amenities: ["Elegance", "WiFi", "AC", "Comfortable Bed", "Tea/Coffee"],
      featured: false,
      bookingLink: "https://sindhulibazar.com/confirmbooking"
    },
  ];

  return (
    <section
      id="rooms"
      className="py-6 px-4 md:px-8 lg:px-20"
      style={{ backgroundColor: "hsl(44 67% 96%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
            Comfortable Accommodations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#737373] max-w-3xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to blend traditional Nepali
            aesthetics with modern comfort, ensuring a memorable stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
            >
              {/* Image + Price */}
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                    {room.price}
                  </span>
                  <span className="ml-2 text-xs sm:text-sm md:text-base opacity-90">
                    per night
                  </span>
                </div>
                {room.featured && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-red-600 mb-2">
                  {room.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-base text-[#737373] mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-semibold mb-2">
                    Amenities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm md:text-base lg:text-base px-3 py-1 border border-red-200 text-red-600 rounded-full bg-white shadow-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <a
                  href={room.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 mb-4">
              Hotel Facilities
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#737373] max-w-2xl mx-auto">
              Enjoy our range of facilities designed to make your stay
              comfortable and memorable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🍽️",
                name: "Restaurant",
                desc: "Traditional Nepali cuisine",
              },
              { icon: "🌸", name: "Garden", desc: "Beautiful outdoor spaces" },
              { icon: "📶", name: "Free WiFi", desc: "High-speed internet" },
              { icon: "🚗", name: "Parking", desc: "Secure parking area" },
              {
                icon: "🛎️",
                name: "24/7 Service",
                desc: "Round-the-clock assistance",
              },
              {
                icon: "🧳",
                name: "Concierge",
                desc: "Local tour arrangements",
              },
              { icon: "☕", name: "Café", desc: "Fresh coffee & snacks" },
              {
                icon: "🎭",
                name: "Cultural Shows",
                desc: "Traditional performances",
              },
            ].map((facility, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="text-2xl sm:text-3xl mb-3">{facility.icon}</div>
                <h4 className="text-red-600 font-semibold text-base sm:text-lg mb-1">
                  {facility.name}
                </h4>
                <p className="text-[#737373] text-xs sm:text-sm">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
