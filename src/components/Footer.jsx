import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <div className="mt-10 flex justify-around items-center py-2 bg-slate-400">
      <div>
        <p>
          © 2024 The American National Red Cross . ContactUs . AboutUs .
          RedCross.org . Accessibility . Terms of Use . Privacy Policy .
          Supporters . News
        </p>
      </div>
      <div className="flex">
        <div className="flex border border-black h-full px-2 py-1 border-t-0 border-b-0">
          <FaFacebook className="text-3xl cursor-pointer" /> 
        </div>
        <div className="flex border border-black h-full px-2 py-1 border-t-0 border-b-0 border-s-0">
          <FaTwitter className="text-3xl cursor-pointer" /> 
        </div>
        <div className="flex border border-black h-full px-2 py-1 border-t-0 border-b-0 border-s-0">
          <FaInstagram className="text-3xl cursor-pointer" /> 
        </div>
        <div className="flex border border-black h-full px-2 py-1 border-t-0 border-b-0 border-s-0">
          <FaTiktok className="text-3xl cursor-pointer" /> 
        </div>
      </div>
    </div>
  );
}
