import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import TitleCards from "./TitleCards";
import PlayButtonGroup from "./PlayerButtonGroup";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative ">
        <img
          src={hero_banner}
          style={{
            maskImage: "linear-gradient(to right, transparent, black 75%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 75%)",
            width: "100%",
          }}
          alt=""
        />
        <div className="absolute w-full pl-6 bottom-0">
          <img src={hero_title} alt="" className="w-9/12 max-w-[420px] mb-8" />
          <p className="max-w-[700px] text-sm mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal army.
          </p>
          <PlayButtonGroup />
          <TitleCards />
        </div>
      </div>
      <div className=" pl-6 bottom-0 ">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Now Playing"} category={"now_playing"} />
      </div>
    </div>
  );
};

export default Banner;
