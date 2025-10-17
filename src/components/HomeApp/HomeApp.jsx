import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const HomeApp = ({ appData }) => {
  // console.log(appData);
  const {id} = appData
  return (
    <Link to={`/apps/${id}`}>
      <div className="p-3 rounded-xl bg-[#F3F3F3] shadow-2xl max-w-[300px] bg-[]">
        <div className="flex justify-center mb-3">
          <img
            className="rounded-xl"
            src={appData.image}
            width="250"
            height="250"
            alt=""
          />
        </div>
        <div>
          <p className="font-bold mb-2">{appData.title}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center py-1 px-2 rounded bg-[#DCE9C1]">
            <img src={download} width="14px" alt="download" />
            <p className="text-sm ml-1 text-[#00D390] font-bold">
              {appData.downloads}
            </p>
          </div>
          <div className="flex justify-center items-center py-1 px-2 rounded bg-[#F0DBC7]">
            <img src={rating} width="14px" alt="rating" />
            <p className="text-sm ml-1 text-[#FF8811]">{appData.ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeApp;
