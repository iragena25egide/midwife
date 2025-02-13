import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const babyImages = Array.from({ length: 38 }, (_, i) => `/image/baby${i + 1}.jpg`);

const BabyGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-[#F5E8DF] px-4 py-10 text-center">
      {/* Title */}
      <h2 className="text-3xl font-serif text-[#8B5E56] font-semibold mb-8">
        SOME OF OUR RUA BABES
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {babyImages.map((src, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
            <img
              src={src}
              alt={`Baby ${index + 1}`}
              className="w-full h-48 object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyGallery;
