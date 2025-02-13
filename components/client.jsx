import React from "react";

const babyImages = [
  "/image/baby1.jpg",
  "/image/baby2.jpg",
  "/image/baby3.jpg",
  "/image/baby4.jpg",
  "/image/baby5.jpg",
  "/image/baby6.jpg",
  "/image/baby7.jpg",
  "/image/baby8.jpg",
  "/image/baby9.jpg",
  "/image/baby10.jpg",
  "/image/baby11.jpg",
  "/image/baby12.jpg",
  "/image/baby13.jpg",
  "/image/baby14.jpg",
  "/image/baby15.jpg",
  "/image/baby16.jpg",
  "/image/baby17.jpg",
  "/image/baby18.jpg",
  "/image/baby19.jpg",
  "/image/baby20.jpg",
  "/image/baby21.jpg",
  "/image/baby22.jpg",
  "/image/baby23.jpg",
  "/image/baby24.jpg",
  "/image/baby25.jpg",
  "/image/baby26.jpg",
  "/image/baby27.jpg",
  "/image/baby28.jpg",
  "/image/baby29.jpg",
  "/image/baby30.jpg",
  "/image/baby31.jpg",
  "/image/baby32.jpg",
  "/image/baby33.jpg",
  "/image/baby34.jpg",
  "/image/baby35.jpg",
  "/image/baby36.jpg",
  "/image/baby37.jpg",
  "/image/baby38.jpg"
];


const BabyGallery = () => {
    return (
      <div className="bg-beige px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          SOME OF OUR RUA BABES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {babyImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Baby ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    );
  };

  
  export default BabyGallery;