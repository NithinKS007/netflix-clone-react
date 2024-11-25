import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([])
  const cardRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTkyZDgwZTk4NGU3ZWUzMTc1NDgyMWI5MGNjOWI4OCIsIm5iZiI6MTczMjUxNzE2OC4wOTcyNzU1LCJzdWIiOiI2NzQwMDFhYmRkNTNmYTAwNjAzMzFkMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n7sKaYlyCeKR9ilc9zSEvsunFXK0fULSenbzC9irX7M'
    }
  };
  


  const handleWheel = (event) => {
    event.preventDefault();

    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

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
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
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
