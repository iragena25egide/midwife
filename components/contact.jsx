import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="bg-[#F3E9E1] px-6 py-12">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {/** Address Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center text-center">
          <FaLocationDot className="text-[#E59572] text-5xl mb-4" />
          <h3 className="text-lg font-semibold">ADDRESS</h3>
          <p className="text-gray-700">14 Maple St. Ste.7 Terryville, CT 06786</p>
        </div>

        {/** Phone Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center text-center">
          <MdCall className="text-[#E59572] text-5xl mb-4" />
          <h3 className="text-lg font-semibold">TEL</h3>
          <p className="text-gray-700">(212) 542-0931</p>
        </div>

        {/** Email Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center text-center">
          <MdEmail className="text-[#E59572] text-5xl mb-4" />
          <h3 className="text-lg font-semibold">EMAIL</h3>
          <p className="text-gray-700">info@ruamidwives.com</p>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-1xl mx-auto">
        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-[350px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47227.60727216182!2d-73.04751444999999!3d41.682932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ed4a43a8a0c3%3A0x2f8d8b18a573e75b!2s14%20Maple%20St%2C%20Terryville%2C%20CT%2006786%2C%20USA!5e0!3m2!1sen!2sus!4v1707777000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800">CONTACT FORM</h2>
          <div className="border-b-2 border-gray-400 w-16 mb-6"></div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#E59572]"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#E59572]"
              />
            </div>

            <textarea
              placeholder="Message"
              className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#E59572]"
            ></textarea>

            <button className="bg-[#E59572] text-white py-3 px-6 rounded-lg hover:bg-[#C9785B] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
