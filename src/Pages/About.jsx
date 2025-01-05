import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  const handleLinkClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="text-center pt-10 text-gray-500 animate-fadeInLine delay-500">
        <p className="text-2xl">
          ABOUT <span className="text-gray-700 font-medium">CryptoTracker</span>
        </p>
      </div>

      <div className="my-10 flex items-center justify-center ml-5 font-serif">
       
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 animate-fadeInLine delay-1000">
          <p>
            CryptoTracker is a real-time cryptocurrency dashboard designed to
            keep you informed about the dynamic world of digital currencies.
            With live price updates, users can monitor the latest market trends
            across a wide range of cryptocurrencies. Built with a focus on
            simplicity and usability, CryptoTracker ensures a smooth experience
            across all devices, making it accessible whether you're at home or
            on the go. The platform leverages reliable data from trusted
            cryptocurrency APIs to provide accurate and up-to-date information.
            Whether you're exploring the crypto market for the first time or
            need a quick way to stay updated, CryptoTracker is your go-to tool
            for staying informed in an ever-evolving industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
