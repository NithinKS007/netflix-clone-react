import play_icon from '../assets/play_icon.png';
import info_icon from '../assets/info_icon.png';

const PlayButtonGroup = () => (
  <div className="flex gap-3 mb-12">
    <button className="bg-white text-black border-0 outline-0 px-5 py-2 flex items-center gap-2 font-medium rounded-md cursor-pointer hover:bg-opacity-75">
      <img className="w-6" src={play_icon} alt="Play Icon" /> Play
    </button>
    <button className="bg-gray-200 bg-opacity-30 text-white border-0 outline-0 px-5 py-2 flex items-center gap-2 font-medium rounded-md cursor-pointer hover:bg-opacity-40">
      <img className="w-6" src={info_icon} alt="Info Icon" /> More Info
    </button>
  </div>
);

export default PlayButtonGroup;
