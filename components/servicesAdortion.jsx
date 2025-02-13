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
        ? prevIndexes.filter((i) => i !== index) // Remove from open list
        : [...prevIndexes, index] // Add to open list
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-[#F5E8DF] p-4">
      {/* Image Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <img src="/image/bh.jpg" alt="Pregnancy" className="w-full rounded-lg" />
        <img src="/image/mb.jpg" alt="Newborn" className="w-full rounded-lg" />
        <img src="/image/bf.jpg" alt="Midwife Checkup" className="w-full rounded-lg" />
      </div>

      {/* Services Accordion */}
      {services.map((service, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold text-lg">{service.title}</span>
            <FaAngleDown
              className={`transition-transform ${
                openIndexes.includes(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndexes.includes(index) && (
            <div className="p-4 text-gray-700">{service.details}</div>
          )}
        </div>
      ))}
    </div>
  );
}
