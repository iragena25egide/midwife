import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="bg-[#F3E9E1] p-10">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <div className="text-[#E59572] text-4xl mb-3 justify-center"><FaLocationDot /></div>
          <h3 className="text-lg font-semibold tracking-wide">ADDRESS:</h3>
          <p className="text-gray-700">
            14 Maple St. Ste.7 Terryville, CT 06786
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <div className="text-[#E59572] text-4xl mb-3"><MdCall /></div>
          <h3 className="text-lg font-semibold tracking-wide">TEL:</h3>
          <p className="text-gray-700">(212) 542-0931</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <div className="text-[#E59572] text-4xl mb-3"><MdEmail /></div>
          <h3 className="text-lg font-semibold tracking-wide">EMAIL:</h3>
          <p className="text-gray-700">info@ruamidwives.com</p>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div>
          <iframe
            title="Google Map"
            className="w-full h-[350px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47227.60727216182!2d-73.04751444999999!3d41.682932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ed4a43a8a0c3%3A0x2f8d8b18a573e75b!2s14%20Maple%20St%2C%20Terryville%2C%20CT%2006786%2C%20USA!5e0!3m2!1sen!2sus!4v1707777000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            CONTACT FORM
          </h2>
          <div className="border-b-2 border-gray-400 w-16 mb-4"></div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
            <button className="bg-[#9A9F7F] text-white py-3 px-6 rounded-lg hover:bg-[#7F8665] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
