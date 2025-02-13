import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is Midwifery care?",
    answer: "Midwifery care provides personalized support during pregnancy, birth, and postpartum.",
  },
  {
    question: "What should I expect at my appointments?",
    answer: "Expect detailed check-ups, discussions about health, and answers to your pregnancy-related questions.",
  },
  {
    question: "What is a home birth?",
    answer: "A home birth is a planned birth at home with the support of a qualified midwife or healthcare provider.",
  },
  {
    question: "Is home birth safe? What happens if there is a complication?",
    answer: "Home birth is safe for low-risk pregnancies, but emergency plans are always in place for hospital transfer if needed.",
  },
  {
    question: "How do I prepare for my home birth?",
    answer: "Prepare by discussing with your midwife, setting up your birth space, and gathering essential supplies.",
  },
  {
    question: "How do I prepare for natural childbirth?",
    answer: "Preparation includes breathing techniques, childbirth education classes, and maintaining a positive mindset.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close if open
        : [...prevIndexes, index] // Open if closed
    );
  };

  const toggleAll = () => {
    if (openIndexes.length === faqs.length) {
      setOpenIndexes([]); // Collapse all
    } else {
      setOpenIndexes(faqs.map((_, index) => index)); // Expand all
    }
  };

  return (
    <div className="max-w-1xl mx-auto bg-[#F5E8DF] p-6 md:p-10 rounded-xl shadow-lg">
      
      {/* Header with Expand/Collapse Button */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-400">
        <h2 className="text-3xl font-serif text-[#8B5E56] font-semibold">Frequently Asked Questions</h2>
        <button
          onClick={toggleAll}
          className="text-md font-semibold text-white bg-[#8B5E56] px-4 py-2 rounded-lg hover:bg-[#75493E] transition"
        >
          {openIndexes.length === faqs.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* FAQ List */}
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg bg-white shadow-sm">
            <button
              className="w-full flex justify-between items-center p-5 text-left text-[#8B5E56] font-semibold text-lg bg-[#F5E8DF] hover:bg-[#e4d4c5] transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndexes.includes(index) ? (
                <FaMinus className="text-[#8B5E56]" />
              ) : (
                <FaPlus className="text-[#8B5E56]" />
              )}
            </button>
            {openIndexes.includes(index) && (
              <div className="p-5 text-gray-700 text-md leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
