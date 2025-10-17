import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../Utility/AddToDB.js";
import InstalledApp from "../../components/InstalledApp/InstalledApp.jsx";

const Installation = () => {
  const data = useLoaderData();
  const [installedList, setInstalledList] = useState([]);
  // const [newInstalledList, setNewInstalledList] = useState([]);
  console.log(data);

  useEffect(() => {
    const storedAppData = getInstalledApp();
    const convertedStoredApp = storedAppData.map((appId) => parseInt(appId));
    const appList = data.filter((app) => convertedStoredApp.includes(app.id));
    setInstalledList(appList);
  }, []);


  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[1200px] py-12 px-2 mx-auto ">
        <h1 className="text-3xl font-bold mb-1 text-center">
          Your Installed Apps
        </h1>
        <p className="font-sm text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center mt-14">
          <div>
            <p className="font-bold">{installedList.length} App Found</p>
          </div>
          <div>
            <button className="btn">Sort By</button>
          </div>
        </div>
        <div>
          {installedList.map((installedApp) => (
            <InstalledApp installedApp={installedApp}></InstalledApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
