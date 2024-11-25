import React from "react";
import logo from "../../assets/others/logo.png";
import search_icon from "../../assets/others/search_icon.svg";
import bell_icon from "../../assets/others/bell_icon.svg";
import profile_img from "../../assets/others/profile_img.png";
import caret_icon from "../../assets/others/caret_icon.svg";

const NavBar = () => {
  return (
    <div className="w-full px-6 py-5 flex justify-between fixed text-sm text-gray-300  z-10">
      <div className="flex items-center space-x-12">
        <img className="w-24" src={logo} alt="Logo" />
        <ul className="flex space-x-8 cursor-pointer list-none">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse My Language</li>
        </ul>
      </div>
      <div className="flex items-center space-x-8">
        <img className="w-5 cursor-pointer" src={search_icon} alt="" />
        <p>Children</p>
        <img className="w-5 cursor-pointer" src={bell_icon} alt="" />
        <div className="group">
          <img
            className="rounded-md w-9 cursor-pointer"
            src={profile_img}
            alt=""
          />
          <div className="w-36 absolute hidden mt-5 group-hover:block cursor-pointer ">
       Sign out
          </div>
        </div>
        <img className="cursor-pointer" src={caret_icon} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
