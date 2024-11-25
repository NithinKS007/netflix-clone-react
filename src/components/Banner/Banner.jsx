import hero_banner from "../../assets/others/hero_banner.jpg";
import hero_title from "../../assets/others/hero_title.png";
import play_icon from "../../assets/others/play_icon.png";
import info_icon from "../../assets/others/info_icon.png";
import TitleCards from "../TitleCards/TitleCards";
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
          <div className="flex gap-3 mb-12">
            <button className="bg-white text-black border-0 outline-0 px-5 py-2 flex items-center gap-2 font-medium rounded-md cursor-pointer  hover:bg-opacity-75">
              <img className="w-6" src={play_icon} alt="Play icon" /> Play
            </button>
            <button className="bg-gray-200 bg-opacity-30  text-white border-0 outline-0 px-5 py-2 flex items-center gap-2 font-medium rounded-md cursor-pointer hover:bg-opacity-40">
              <img className="w-6" src={info_icon} alt="Info icon" /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className=" pl-6 bottom-0">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on netflix"} />
        <TitleCards title={"Top Pics for you"} />
      </div>
    </div>
  );
};

export default Banner;
