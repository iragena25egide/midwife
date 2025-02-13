import React from "react";

const RuaMidwifeCamille = () => {
  return (
    <div className="bg-[#F1E5DA] p-6 md:p-10">
      {/* Title Section */}
      <div className="bg-[#8B5B54] text-white text-center py-6 text-3xl font-serif tracking-wide shadow-md rounded-lg">
        Rua Midwife Camille
      </div>

      {/* Main Content Section */}
      <div className="bg-[#8B5B54] text-[#EDE3DD] max-w-6xl mx-auto mt-10 p-8 rounded-xl shadow-lg grid md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div>
          <p className="text-lg font-serif leading-relaxed text-justify">
            “Midwifery is a door that you cannot force open but one that will
            open for those it has chosen.”
            <br />
            <br />
            Midwifery has chosen me, and I am honored you’ve decided to explore
            if Rua Midwifery is right for you! Hi, I’m Midwife Camille, native
            to a beautiful small town in Guyana, South America. Guyana is rich
            in cultural diversity and has shaped my afro-Indigenous cultural
            beliefs which encourage a woman’s ability to grow, nurture, and
            birth the children of their wombs. I incorporate these cultural
            beliefs into my practice, empowering and encouraging my clients to
            trust their bodies.
            <br />
            <br />
            I began my journey into homebirth over 10 years ago, assisting in my
            first homebirth, which transformed my philosophy surrounding
            maternity care. My clinical midwifery training includes diverse
            experiences in community-based midwifery practices, high-volume
            birth centers, and traditional cultural training. I have attended
            extensive obstetrical and midwifery training programs, including
            neonatal resuscitation, fetal monitoring, and preventative newborn
            care.
            <br />
            <br />
            I currently serve families in Pennsylvania, primarily in Bucks
            County, and look forward to joining you on your journey through
            pregnancy and birth.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/image/car.png" // Replace with the correct image path
            alt="Midwife Camille"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RuaMidwifeCamille;
