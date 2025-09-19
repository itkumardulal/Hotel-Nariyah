import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
      style={isScrolled ? { backgroundColor: "hsl(44 67% 96%)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}

          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow">
              <img
                src={logo}
                alt="Hotel Nariyah Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl text-red-700">
              Hotel Nariyah
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 cursor-pointer">
            {["home", "about", "rooms", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className=" hover:text-red-600 cursor-pointer transition-colors text-[hsl(0_0%_18%)] font-semibold text-sm sm:text-base md:text-lg"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://sindhulibazar.com/roombookingStore"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:shadow-lg transition-shadow text-center"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden shadow-md px-6 py-4 space-y-4"
          style={{ backgroundColor: "hsl(44 67% 96%)" }}
        >
          {["home", "about", "rooms", "gallery", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-gray-800 hover:text-red-600 transition-colors font-medium text-base"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          <a
            href="https://sindhulibazar.com/roombookingStore"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:shadow-lg transition-shadow text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
