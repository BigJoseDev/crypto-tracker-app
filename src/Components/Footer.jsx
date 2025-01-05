import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-gray-900 text-white py-16 mt-20
     bg-gradient-to-t from-black  "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 gap-14">
          {/* Left Section */}

          <div className="space-y-6">
            
            
          </div>

          

          {/* Right Section */}
          <div className="text-gray-300 space-y-4">
            <p className="text-xl font-semibold text-green-400">GET IN TOUCH</p>
            <ul className="space-y-2">
              
              
              <li className="hover:text-green-400 font-bold">
                Cell
                <p>+234 704 992 4540</p>
              </li>
              
              <li className="hover:text-green-400 cursor-pointer font-bold">
                Email
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                josemaria14.work@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10">
          <hr className="border-gray-700" />
          <p className="py-4 text-center text-sm text-gray-400">
            Copyright 2024 @CryptoTracker - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
