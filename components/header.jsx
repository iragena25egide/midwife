import React from "react";
import { Link } from "react-router-dom";



export default function Header() {
    return (
      <header className="bg-[#F4E8DF]">
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-2">
            <span className="text-[#8B5E56]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 15.75v-7.5m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 8.25m19.5 0v7.5m-19.5 0a2.25 2.25 0 002.25 2.25h14.25a2.25 2.25 0 002.25-2.25v-7.5m-10.5 0l8.25 5.25m-16.5 0L12 8.25"
                />
              </svg>
            </span>
            <span className="text-[#8B5E56] text-sm">info@ruamidwives.com</span>
          </div>
        </div>
  
        <div className="bg-[#8B5E56] flex flex-col items-center justify-center py-24 relative">
          <img
            src="/image/feather.png"
            alt="Feather"
            className="absolute opacity-30 w-64"
          />
          <h1 className="text-white text-4xl font-light tracking-wide">RUA</h1>
          <h2 className="text-white text-3xl font-light tracking-wide">
            MIDWIFERY
          </h2>
        </div>
  
        <nav className="bg-[#F4E8DF] flex justify-center py-4">
          <ul className="flex space-x-8 text-[#8B5E56] text-sm font-light">
            <Link to={'/'}><li className="hover:underline">HOME</li></Link>
            
            
            <Link to={'/rua-midwifery'}><li className="hover:underline">ABOUT RUA MIDWIFERY</li></Link>
            
            <Link to={'/services'}><li className="hover:underline">SERVICES</li></Link>
            <Link to={'/faq'}><li className="hover:underline">FAQ</li></Link>

            
            <Link to={'/clients'}><li className="hover:underline">HAPPY CLIENTS</li></Link>
            <Link to={'/contact'}><li className="hover:underline">CONTACT</li></Link>
            
          </ul>
        </nav>
      </header>
    );
  }
  