import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { Link, useNavigate } from "react-router";

const AppCard = ({ appCard }) => {
  const {id, title, downloads, ratingAvg} = appCard;

 

  return (
    <div>
      <Link to={`/apps/${id}`}>
        <div className="p-3 rounded-xl bg-[#F3F3F3] shadow-2xl max-w-[300px] bg-[]">
          <div className="flex justify-center mb-3">
            <img
              className="rounded-xl"
              src={appCard.image}
              width="250"
              height="250"
              alt={title}
            />
          </div>
          <div>
            <p className="font-bold mb-2">{title}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center py-1 px-2 rounded bg-[#DCE9C1]">
              <img src={download} width="14px" alt="download" />
              <p className="text-sm ml-1 text-[#00D390] font-bold">
                {downloads} M
              </p>
            </div>
            <div className="flex justify-center items-center py-1 px-2 rounded bg-[#F0DBC7]">
              <img src={rating} width="14px" alt="rating" />
              <p className="text-sm ml-1 text-[#FF8811]">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
