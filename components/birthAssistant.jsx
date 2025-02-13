import React from "react";

const BirthAssistants = () => {
  return (
    <div className="bg-[#F1E5DA] p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-4 text-2xl font-serif tracking-wide">
        Birth Assistants
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-5xl mx-auto mt-8 p-8 rounded-lg shadow-lg grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/pm.png" // Replace with actual image path
            alt="Birth Assistant"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed">
            Rua Midwifery works with a small circle of sister midwives (CNM’s, CPM’s, and Traditional Midwives),
            Nurse Bri and skilled Birth Assistants in the midwifery community as 2nd midwives and birth assistants at birth.
            This ensures each of our clients a solid, competent, and well-trained birth team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthAssistants;
