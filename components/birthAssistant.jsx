import React from "react";

const BirthAssistants = () => {
  return (
    <div className="bg-[#F1E5DA] p-6 md:p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-6 text-3xl font-serif tracking-wide shadow-md rounded-lg">
        Birth Assistants
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-6xl mx-auto mt-10 p-8 rounded-xl shadow-lg grid md:grid-cols-2 items-center gap-8">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/bass.png" // Replace with actual image path
            alt="Birth Assistant"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed text-justify">
          Rua Midwifery works with a small circle of sister midwives (CNM’s, CPM’s and Traditional Midwives), Nurse Bri and skilled Birth Assistants in the midwifery community as 2nd midwives and birth assistants at birth. This ensures each of our clients a solid, competent and well-trained birth team. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthAssistants;
