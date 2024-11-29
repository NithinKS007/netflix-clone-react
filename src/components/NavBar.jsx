import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { logout } from "../fireBase/fireBaseUtils";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
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

  const currentUser = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div
      ref={navRef}
      className={`w-full px-6 py-5 flex justify-between fixed text-sm text-gray-300 z-10 ${
        scrolling ? "bg-black bg-opacity-95" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex items-center space-x-12">
        <img className="w-24" src={logo} alt="Logo" />
        <ul className="hidden md:flex space-x-8 cursor-pointer list-none">
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
        <p className="hidden sm:block">Children</p>
        <img className="w-5 cursor-pointer" src={bell_icon} alt="" />
        <div className="relative group">
          <img
            className="rounded-md w-9 cursor-pointer"
            src={profile_img}
            alt="Profile"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)} 
          />
          {currentUser && (
            <div
              className={`${
                profileMenuOpen ? "block" : "hidden"
              } absolute right-0 w-36 bg-black text-white p-2 cursor-pointer`}
            >
              <p className="flex items-center justify-center" onClick={handleLogout}>Sign out</p>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            <img className="w-6" src={caret_icon} alt="menu" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-4 md:hidden">
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse My Language</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
