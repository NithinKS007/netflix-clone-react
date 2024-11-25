import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/others/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type:""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTkyZDgwZTk4NGU3ZWUzMTc1NDgyMWI5MGNjOWI4OCIsIm5iZiI6MTczMjUxNzE2OC4wOTcyNzU1LCJzdWIiOiI2NzQwMDFhYmRkNTNmYTAwNjAzMzFkMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n7sKaYlyCeKR9ilc9zSEvsunFXK0fULSenbzC9irX7M'
    }
  };
  


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  }, []);
  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      <img onClick={()=>{navigate(-2)}}
        className="absolute top-5 left-5 w-12 cursor-pointer"
        src={back_arrow_icon}
        alt="Back"
      />
      <iframe
        style={{width:"90%",height:"90%"}}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
      ></iframe>

      <div className="flex items-center justify-between w-4/5 mt-4">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
