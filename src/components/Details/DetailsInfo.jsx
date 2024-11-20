import React from "react";

function DetailsInfo({ data }) {
  const formatRunTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m `;
  };
  return (
    <>
      <div className="movie-info flex flex-col md:flex-row gap-1.5 md:gap-4">
        <div className="status flex gap-2">
          <p className=" text-white text-lg font-medium">Status:</p>
          <p className=" text-gray-300 text-lg"> {data?.status} </p>
        </div>
        <div className="status flex gap-2">
          <p className=" text-white text-lg font-medium">Release Date:</p>
          <p className=" text-gray-300 text-lg">
            {" "}
            {data?.release_date || data?.air_date}{" "}
          </p>
        </div>
        <div className="status flex gap-2">
          <p className=" text-white text-lg font-medium">RunTime:</p>
          <p className=" text-gray-300 text-lg">
            {" "}
            {formatRunTime(data?.runtime) || data?.episode_run_time}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailsInfo;