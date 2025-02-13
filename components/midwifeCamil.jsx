import React from "react";

const RuaMidwifeCamille = () => {
  return (
    <div className="bg-[#F1E5DA] p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-4 text-2xl font-serif tracking-wide">
        Rua Midwife Camille
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-5xl mx-auto mt-8 p-8 rounded-lg shadow-lg grid md:grid-cols-2 gap-6">
        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed">
            “Midwifery is a door that you cannot force open but one that will open for those it has chosen.”
            Midwifery has chosen me and I am honored you’ve decided to explore if Rua Midwifery is right for you!
            Hi, I’m Midwife Camille, native to a beautiful small town in Guyana, South America.
            Guyana is rich in cultural diversity and has shaped my afro-Indigenous cultural beliefs which
            encourage a woman’s ability to grow, nurture, and birth the children of their wombs and to also
            inspire future young mothers by allowing them to witness the power and strength of homebirth.
            I incorporate these cultural beliefs into my practice, and throughout the birth, my clients are
            empowered and encouraged to trust in their capabilities as mothers and in the capabilities of
            their bodies. We believe that pregnancy and birth are physiological events that do not require
            medical interventions, and we hold a safe space for the small percentage that requires our
            assistance.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/bf.png" // Replace with actual image path
            alt="Midwife Camille"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RuaMidwifeCamille;
