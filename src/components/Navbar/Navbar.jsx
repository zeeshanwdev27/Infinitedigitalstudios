import React, { useState, useEffect } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MbOverlay from "./MBOverlay";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Widget Hidden on Overlay
  useEffect(() => {
    const handleLiveChatVisibility = () => {
      if (typeof window.LiveChatWidget === "undefined") return;

      if (isMenuOpen) {
        window.LiveChatWidget.call("hide");
      } else {
        window.LiveChatWidget.call("minimize");
      }
    };

    const timer = setTimeout(handleLiveChatVisibility, 100);
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  const navClass = ({ isActive }) =>
    `transition-opacity duration-300 cursor-pointer ${
      isActive ? "text-orange-400 font-medium" : "text-white hover:opacity-80"
    }`;

  return (
    <div
      className={`fixed z-999 flex justify-between lg:justify-evenly px-6 lg:px-0 top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? " shadow-lg py-3 primary-bg" : "py-5  backdrop-blur-xs bg-white/20"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src="/Navbar/logo.png"
          className="w-50 h-12 cursor-pointer"
          alt="payinfinite_logo"
        />
      </Link>

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* ✅ Always white lines (your nav is dark) */}
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-around items-center gap-30">
        <ul className="flex rounded-4xl px-8 py-0.5 gap-7 justify-center items-center">
          <li>
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about-us" className={navClass}>
              About Us
            </NavLink>
          </li>

          {/* Services */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-2 rounded-2xl py-2 hover:opacity-80 transition-all duration-300 text-white">
              Services <ChevronDown className="w-5 h-5" />
            </div>

            {/* Invisible Gap Barrier */}
            <div className="absolute top-full left-0 right-0 h-3 hidden group-hover:block" />

            <div className="absolute left-0 mt-3 hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-xl py-3 w-50 z-50 gap-2">
              <NavLink
                to="/highrisk"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm ${
                    isActive ? "text-orange-600 font-semibold" : "hover:text-orange-400"
                  }`
                }
              >
                High-Risk
              </NavLink>

              <NavLink
                to="/lowrisk"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm ${
                    isActive ? "text-orange-600 font-semibold" : "hover:text-orange-400"
                  }`
                }
              >
                Low-Risk
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/contactus" className={navClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* CTA */}
       
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+8557706938"
            className={`p-2 px-5 rounded-md cursor-pointer transition-all duration-300 flex gap-3 items-center hover:opacity-90 font-medium text-base ${isScrolled ? 'bg-white' : 'primary-btn' }`}
          >
            Get Free Consultation
          </motion.a>
      
      </div>

      {isMenuOpen && <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
    </div>
  );
}

export default Navbar;