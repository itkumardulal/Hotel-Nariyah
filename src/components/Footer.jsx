import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "hsl(0 75% 37%)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl sm:text-2xl">
                Hotel Nariyah
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">
              Experience authentic Nepali hospitality in the heart of Sindhuli.
              Where tradition meets modern comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Rooms & Facilities", href: "#rooms" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Our Services</h3>
            <div className="space-y-2 text-white/90 text-sm sm:text-base">
              <p>🏨 Comfortable Accommodation</p>
              <p>🍽️ Traditional Nepali Cuisine</p>
              <p>🎭 Cultural Experiences</p>
              <p>🧳 Tour Arrangements</p>
              <p>📶 Free WiFi</p>
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base">
              {[
                {
                  name: "Facebook",
                  icon: <FaFacebookF className="text-blue-600 text-lg" />,
                  link: "https://www.facebook.com/profile.php?id=61572996814107",
                },
                {
                  name: "TikTok",
                  icon: <FaTiktok className="text-black text-lg" />,
                  link: "https://www.tiktok.com/@hotel.nariyah?_t=ZS-8zqroXYI2yH&_r=1",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                📍 Sindhuli - Dhungrebas , 45900
              </p>
              <p className="flex items-center gap-2">📞 9748362660</p>
              <p className="flex items-center gap-2">
                ✉️ hotelnariyah@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12">
          <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row justify-center items-center gap-4 text-white text-sm sm:text-base">
            <p>
              © {new Date().getFullYear()} Nepal Leadership Technology. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
