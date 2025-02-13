import React from "react";

const MidwifeAssistant = () => {
  return (
    <div className="bg-[#F1E5DA] p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-4 text-2xl font-serif tracking-wide">
        Midwife's Assistant
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-5xl mx-auto mt-8 p-8 rounded-lg shadow-lg grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/bm.png" // Replace with actual image path
            alt="Midwife Assistant"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed">
            Ama Grant is our current Midwife’s assistant and aspires to one day be a student midwife.
            My journey to becoming a midwife’s assistant began with the birth of my daughter Amayah.
            Through my successful home birth, my eyes were open to all the ins and outs of midwifery &
            out-of-hospital maternal care. I’ve gotten the pleasure to shadow and assist in both hospital
            and with home birth midwives. I’ve also had the honor to study and learn from a few well-known
            midwives in terms of skills, training, and education. As of now, I am assisting Rua Midwifery
            in hopes of being able to learn and develop and one day apprentice with the midwives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidwifeAssistant;
