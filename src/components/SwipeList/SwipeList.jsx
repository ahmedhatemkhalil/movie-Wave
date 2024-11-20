import React from "react";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

function SwipeList({ data , rate }) {
  return (
    <>
      <div className="movie mt-3 flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-8 ">
        {/* Placeholder movie items to fetch data */}
        {data?.map((poster) => {
          console.log(poster, "poster");
          return (
            <Link key={poster.id} to={`/series-details/${poster.id}`}>
              <div className="poster w-44 h-64 cursor-pointer flex-shrink-0 mb-14  relative group">
                <img
                  src={`https://image.tmdb.org/t/p/original${poster.poster_path}`}
                  alt={poster.title}
                  className=" w-full h-full object-cover"
                />
                <div className="shadow-layer absolute inset-0 bg-black opacity-35 group-hover:opacity-60 transition duration-300"></div>
                {/* Rating  */}
                <Rating rate={poster.vote_average} type="swipe" />
                <div className="poster-details text-white ">
                  <h2 className=" text-white mt-4 ">
                    {poster.title || poster.name}{" "}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SwipeList;