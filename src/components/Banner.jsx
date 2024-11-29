import React from "react";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import TitleCards from "./TitleCards";
import PlayButtonGroup from "./PlayerButtonGroup";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={hero_banner}
          className="w-full h-[75vh] sm:h-[80vh] md:h-[80vh] object-cover"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 100%)"
          }}
          alt="Hero Banner"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8 text-white bg-gradient-to-r">
          <div className="max-w-xl">
            <img 
              src={hero_title} 
              alt="Title" 
              className="w-full max-w-md mb-2 sm:mb-4"
            />
            <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
              Discovering his ties to a secret ancient order, a young man living 
              in modern Istanbul embarks on a quest to save the city from an 
              immortal army.
            </p>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <PlayButtonGroup />
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 space-y-4 sm:space-y-6">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Now Playing"} category={"now_playing"} />
      </div>
    </div>
  );
};

export default Banner;