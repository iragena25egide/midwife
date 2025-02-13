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
    <div className="max-w-4xl mx-auto bg-[#F5E8DF] p-6">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <button onClick={toggleAll} className="text-lg font-semibold text-gray-700">
          {openIndexes.length === faqs.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            {openIndexes.includes(index) ? (
              <FaMinus className="text-gray-700" />
            ) : (
              <FaPlus className="text-gray-700" />
            )}
          </button>
          {openIndexes.includes(index) && (
            <div className="p-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
