import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const services = [
  {
    title: "PRECONCEPTION CARE",
    details: "Support for individuals planning pregnancy, including nutrition, fertility tracking, and health assessments.",
  },
  {
    title: "MIDWIFERY SUPPLEMENTAL CARE",
    details: "Additional support during pregnancy with prenatal visits, education, and emotional well-being.",
  },
  {
    title: "BEYOND THE 4TH TRIMESTER",
    details: "Postpartum care, lactation support, and newborn wellness guidance for up to a year.",
  },
  {
    title: "RATES",
    details: "Transparent pricing for consultations, birth packages, and home visits.",
  },
];

export default function Services() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close section
        : [...prevIndexes, index] // Open section
    );
  };

  return (
    <div className="max-w-1xl mx-auto bg-[#F5E8DF] p-6 md:p-10 rounded-xl shadow-lg">
      
      {/* Image Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <img src="/image/bh.jpg" alt="Pregnancy" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src="/image/mb.jpg" alt="Newborn" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src="/image/bf.jpg" alt="Midwife Checkup" className="w-full h-60 object-cover rounded-lg shadow-md" />
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl font-serif text-[#8B5E56] font-semibold mb-6">
        Our Services
      </h2>

      {/* Services Accordion */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <button
              className="w-full flex justify-between items-center p-5 text-left text-[#8B5E56] font-semibold text-lg bg-[#F5E8DF] hover:bg-[#e4d4c5] transition duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span>{service.title}</span>
              <FaAngleDown
                className={`transition-transform duration-300 ${openIndexes.includes(index) ? "rotate-180" : ""}`}
              />
            </button>
            {openIndexes.includes(index) && (
              <div className="p-5 text-gray-700 text-md leading-relaxed">
                {service.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
