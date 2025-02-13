import React from "react";



export default function BookAppointment() {
    return (
      <div className="bg-[#8B5A5A] py-16 flex flex-col items-center text-center px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F5E8DD] tracking-wide mb-4">
          Book An Appointment Today
        </h2>
  
        {/* Description */}
        <p className="text-lg md:text-xl text-[#F5E8DD] max-w-3xl leading-relaxed">
          Whether you're just looking for guidance in navigating the new and exciting world of pregnancy 
          or you're looking to empower and educate yourself in creating a pregnancy and birth experience 
          specific to you and your family needs, we are here to help you achieve your goals.
        </p>
  
        {/* Button */}
        <button className="mt-6 bg-[#2C2A35] text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-[#1F1E28] transition">
          BOOK NOW
        </button>
      </div>
    );
  }
  