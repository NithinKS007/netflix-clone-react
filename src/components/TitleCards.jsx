import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../utils/axios";
import { tmdbImageApi } from "../utils/constants";

const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([])
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();

    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/${category ? category : "now_playing"}?language=en-US&page=1`);
        setApiData(response?.data?.results); 
        
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData()
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-12 mb-7 ">
      <h2 className="mb-2">{title ? title :"Popular on Netflix"}</h2>
      <div className="flex gap-3  overflow-hidden" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
           <Link to={`/player/${card.id}`} className="relative" key={index}>
              <img
                className="max-w-xs rounded-md cursor-pointer "
                src={`${tmdbImageApi + card?.backdrop_path}`}
                alt=""
              />
              <p className="absolute bottom-2 right-2">{card.original_title}</p>
           </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
