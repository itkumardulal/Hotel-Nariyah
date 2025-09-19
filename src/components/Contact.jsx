import React from "react";
  import { FaFacebookF, FaTiktok } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-6 px-4 md:px-8 lg:px-20"
      style={{ backgroundColor: "hsl(44 67% 96%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
            Contact & Visit
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#737373] max-w-3xl mx-auto leading-relaxed">
            Ready to experience authentic Nepali hospitality? Find us on the map
            or connect with us through social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow bg-white">
              <h3 className="text-2xl sm:text-3xl font-semibold text-red-600 flex items-center gap-3 mb-4">
                📍 Visit Us
              </h3>

              {/* Address */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base font-semibold">
                  Address:
                </p>
                <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
                  Sindhuli - Dhungrebas , 45900
                  <br />
                  Bagmati Province, Nepal
                </p>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base font-semibold">
                  Phone:
                </p>
                <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
                  9748362660
                </p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm sm:text-base font-semibold">
                  Email:
                </p>
                <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
                  hotelnariyah@gmail.com
                </p>
              </div>
            </div>

            <div className="rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow bg-white">
              <h3 className="text-2xl sm:text-3xl font-semibold text-red-600 flex items-center gap-3 mb-4">
                🌐 Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61572996814107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-red-50 transition-colors"
                >
                  <FaFacebookF className="text-blue-600 text-lg" />
                  Facebook
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@hotel.nariyah?_t=ZS-8zqroXYI2yH&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-red-50 transition-colors"
                >
                  <FaTiktok className="text-black text-lg" />
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <iframe
              title="Hotel Nariyah Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7095.474698176144!2d85.91618919999999!3d27.227394900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8d27463a1b55%3A0x44e603877421dcfd!2sHotel%20Nariyah%20PVT.LTD!5e0!3m2!1sen!2snp!4v1758265696060!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
