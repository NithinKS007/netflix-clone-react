import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../utils/axios";
import { playerTrailerLink } from "../utils/constants";

const Player = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/${id}/videos?language=en-US`);
        console.log(response.data.results[0]); 
        setApiData(response?.data?.results[0]);  
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <img 
        onClick={() => { navigate(-2); }} 
        className="absolute top-5 left-5 w-12 cursor-pointer" 
        src={back_arrow_icon} 
        alt="" 
      />
      <iframe
        className="w-4/5 h-4/5" 
        src={`${playerTrailerLink}/${apiData.key}`}
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-between w-4/5 mt-4">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
