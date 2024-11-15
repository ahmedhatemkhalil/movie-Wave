import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import { movieLists } from "../../data/series and movies lists";
import { Link } from "react-router-dom";
import GridItems from "../GridItems/GridItems";
import SearchBar from "../SearchBar/SearchBar";
import moviePoster from "../../assets/poster3.jpg";

function Movies() {
  return (
    <>
      <HeroBanner bgImage="movies" />
      <div className="relative px-0 sm:px-16 z-50 -mt-[50vh] pb-6 md:py-12 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-3 md:gap-6 px-4 sm:px-0 ">
          <h2 className=" text-3xl md:text-4xl text-white font-medium">
            Movies
          </h2>
          <ul className=" flex flex-wrap gap-y-2 gap-x-6 text-xl text-white">
            {movieLists.map(({ path, text, id }) => (
              <li key={id}>
                <Link to={path}> {text} </Link>
              </li>
            ))}
          </ul>

          <SearchBar />

          <GridItems
            posterImage={moviePoster}
            name="Harry Potter"
            date="Apr 26, 2024"
          />
        </div>
      </div>
    </>
  );
}

export default Movies;
