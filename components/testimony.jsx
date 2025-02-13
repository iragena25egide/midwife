import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const testimonials = [
  {
    text: "Choosing Rua Midwifery was one of the best decisions I made for my pregnancy journey. Camille’s expertise, warmth, and commitment to holistic care provided me with an unparalleled experience. She took the time to educate me on every step of the process, empowering me with knowledge and confidence. During my labor, her calm presence and reassuring words helped me push through the most intense moments. She didn’t just provide medical care—she nurtured my spirit, giving me the strength I needed. I will forever be grateful for her support and highly recommend Rua Midwifery to any expectant mother.",
    author: "Niya W.",
  },
  {
    text: "From the moment I met Camille, I knew I was in good hands. Her compassion and deep understanding of midwifery shone through in every interaction. Throughout my pregnancy, she ensured that I felt heard and valued, answering my questions with patience and care. When labor arrived, she was by my side, guiding me through the pain with unwavering encouragement. I truly believe that having her as my midwife made my birthing experience not only manageable but empowering. I couldn't have asked for a better partner in this journey!",
    author: "Emily R.",
  },
  {
    text: "I cannot express enough gratitude for Camille and Rua Midwifery. She provided the most compassionate and professional care I could have hoped for. Unlike a traditional hospital experience, Camille made sure that I was in control of my birth plan while also ensuring the highest level of safety. Her holistic approach helped me feel at peace, even in the most difficult moments. Labor can be an overwhelming experience, but with Camille’s guidance and knowledge, I felt prepared, supported, and ultimately victorious. If you're looking for someone who genuinely cares and will stand by you every step of the way, look no further than Rua Midwifery!",
    author: "Sarah K.",
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#fdf3ee] py-12 flex flex-col items-center text-center px-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[#8B5A45] tracking-widest mb-6">
        OUR TESTIMONIALS
      </h2>

      <p className="text-lg md:text-xl text-[#5C3C2E] italic max-w-3xl">
        {testimonials[currentIndex].text}
      </p>

      <p className="mt-4 text-[#8B5A45] font-semibold text-lg">
        {testimonials[currentIndex].author}
      </p>

      <div className="flex items-center justify-between w-full max-w-4xl mt-6 relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 text-[#8B5A45] hover:text-[#5C3C2E] transition text-xl md:text-2xl"
        >
          <FaChevronLeft />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#8B5A45]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 text-[#8B5A45] hover:text-[#5C3C2E] transition text-xl md:text-2xl"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
