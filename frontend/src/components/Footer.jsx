import React from "react";
import { Copyright, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
     <footer className="bg-gray-800 fixed bottom-0 left-0 right-0 w-full text-white py-8">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Copyright className="w-5 h-5" />
            <p className="text-gray-300">
              2026 Birla Group. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="font-semibold text-gray-200">Our Social Media</h3>
            <div className="flex items-center gap-4">
              <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-sky-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
