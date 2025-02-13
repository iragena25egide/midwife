import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "fixed top-0 left-0 w-full shadow-md bg-white" : "relative"
      } transition-all duration-500 ease-in-out z-50`}
      data-aos={isScrolled ? "fade-down" : ""}
    >
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
          <span className="text-[#8B5E56] text-sm">info@wisesaga.com</span>
        </div>
      </div>

        <div className="flex justify-around">
        <div className="bg-[#FFF] flex  items-center justify-center py-2 relative">
        <img src="/image/7.png" alt="logo image" width={40} height={40} />
        <h1 className="text-[#8B5E56] text-4xl font-light tracking-wide">
          WISE SAGA
        </h1>
      </div>

      <nav className="bg-[#fff] flex justify-center py-4">
        <ul className="flex space-x-8 text-[#8B5E56] text-sm font-light">
          <Link to={"/"}>
            <li className="hover:underline">HOME</li>
          </Link>
          <Link to={"/rua-midwifery"}>
            <li className="hover:underline">ABOUT RUA MIDWIFERY</li>
          </Link>
          <Link to={"/services"}>
            <li className="hover:underline">SERVICES</li>
          </Link>
          <Link to={"/faq"}>
            <li className="hover:underline">FAQ</li>
          </Link>
          <Link to={"/clients"}>
            <li className="hover:underline">HAPPY CLIENTS</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:underline">CONTACT</li>
          </Link>
        </ul>
      </nav>
        </div>
      
    </header>
  );
}
