import React, { useRef, useEffect } from "react";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({title,category}) => {

  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();

    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="mt-12 mb-7">
      <h2 className="mb-2">{title ? title :"Popular on Netflix"}</h2>
      <div className="flex gap-3 overflow-hidden" ref={cardRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="relative" key={index}>
              <img
                className="max-w-screen-lg rounded-sm cursor-pointer "
                src={card.image}
                alt=""
              />
              <p className="absolute bottom-2 right-2">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
