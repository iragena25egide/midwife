import React from "react";

const MidwifeAssistant = () => {
  return (
    <div className="bg-[#F1E5DA] p-6 md:p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-6 text-3xl font-serif tracking-wide shadow-md rounded-lg">
        Midwife's Assistant
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-6xl mx-auto mt-10 p-8 rounded-xl shadow-lg grid md:grid-cols-2 items-center gap-8">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/ass.png" // Replace with actual image path
            alt="Midwife Assistant"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed text-justify">
            Ama Grant is our current Midwife’s assistant and aspires to one day be a student midwife.
            <br /><br />
            My journey to becoming a midwife’s assistant began with the birth of my daughter, Amayah.
            Through my successful home birth, my eyes were opened to all the ins and outs of midwifery and 
            out-of-hospital maternal care. I’ve had the pleasure of shadowing and assisting both hospital 
            and home birth midwives.
            <br /><br />
            I have studied and trained under several well-known midwives, learning essential skills and gaining 
            valuable experience. Currently, I am assisting at Rua Midwifery, with the goal of continuing my 
            education and eventually becoming an apprentice midwife.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidwifeAssistant;
