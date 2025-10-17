import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { removeInstalledApp } from "../../Pages/Utility/AddToDB";

const InstalledApp = ({ installedApp }) => {
  const { image, title, downloads, ratingAvg, size, id } = installedApp;

  const handleUninstalledList = (id) => {
    removeInstalledApp(id);
     window.location.reload();
  };
  return (
    <div className="flex justify-between items-center my-4 p-3 max-w-[1200px] rounded-xl bg-[#ffffff]">
      <div className="flex justify-start items-center  gap-3">
        <div>
          <img src={image} width="100px" className="rounded-xl" alt={title} />
        </div>
        <div>
          <h1 className="font-bold">{title}</h1>
          <div className="flex justify-start items-center gap-5">
            <div className="flex items-center gap-1">
              <img src={download} width="16px" alt="" />
              <p className="text-sm">{downloads} M</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={rating} width="16px" alt="" />
              <p className="text-sm">{ratingAvg}</p>
            </div>
            <div>
              <p className="text-sm">{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleUninstalledList(id)}
          className="btn btn-accent text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
