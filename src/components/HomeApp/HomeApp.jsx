import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";

const HomeApp = ({ appData }) => {
  console.log(appData);
  return (
    <div className="p-3 rounded-xl bg-[#F3F3F3] shadow-2xl">
      <div className="flex justify-center mb-3">
        <img
          className="rounded-xl"
          src={appData.image}
          width="200"
          height="200"
          alt=""
        />
      </div>
      <div>
        <p className="font-bold">{appData.title}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <img src={download} width="14px" alt="download" />
          <p className="text-sm ml-1">{appData.downloads}</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={rating} width="14px" alt="rating" />
          <p className="text-sm ml-1">{appData.ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
