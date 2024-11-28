import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-black text-gray-400">
      <div className="flex space-x-4 mb-6">
        <img src={facebook_icon} alt="Facebook" className="w-6 h-6 " />
        <img src={instagram_icon} alt="Instagram" className="w-6 h-6" />
        <img src={twitter_icon} alt="Twitter" className="w-6 h-6" />
        <img src={youtube_icon} alt="YouTube" className="w-6 h-6" />
      </div>
      <ul className="grid gap-4 text-sm text-center  grid-cols-4">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="mt-6 text-xs">&#169; 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
