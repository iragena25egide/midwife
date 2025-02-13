import React from "react";
import { FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1F36] text-[#E5E7EB] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a midwifery practice that specializes in full-scope midwifery care during all phases of reproductive life.
            This includes care of low-risk women during pregnancy, birth, postpartum, lactation, traditional practices, and beyond.
          </p>
          <div className="flex gap-4 mt-3">
            <FaTwitter className="text-[#E5E7EB] hover:text-gray-400 cursor-pointer" size={18} />
            <FaInstagram className="text-[#E5E7EB] hover:text-gray-400 cursor-pointer" size={18} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Let's Talk */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Let’s Talk</h3>
          <div className="flex items-center gap-2 text-sm">
            <FaPhone /> <span>(212) 542-0931</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope /> <span>info@ruamidwives.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-2">
            <FaMapMarkerAlt /> <span>14 Maple St. Terryville, CT 06786</span>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
          <p className="text-sm">Mon-Fri: 9:00AM - 6:00PM</p>
          <p className="text-sm">Sat: Closed</p>
          <p className="text-sm">Sun: 10:30AM - 6:00PM</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 border-t border-gray-600 pt-4">
      Copyright &copy; {currentYear} Ruamidwives.com - All Rights Reserved.
    </div>
    </footer>
  );
}
