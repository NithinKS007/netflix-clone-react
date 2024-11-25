import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../fireBase/fireBase";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setScrolling(true); 
      } else {
        setScrolling(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`w-full px-6 py-5 flex justify-between fixed text-sm text-gray-300 z-10 ${
        scrolling ? "bg-black bg-opacity-95" : "bg-transparent"
      } transition-all duration-300`} 
    >
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
          <div className="w-36 absolute hidden  group-hover:block cursor-pointer">
            <p onClick={()=>{logout()}}> Sign out</p>
          </div>
        </div>
        <img className="cursor-pointer" src={caret_icon} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
