import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../Utility/AddToDB.js";

const Installation = () => {
  const data = useLoaderData();
  const [installedList, setInstalledList] = useState([]);
  console.log(data);

  useEffect(() => {
    const storedAppData = getInstalledApp();
    const convertedStoredApp = storedAppData.map((appId) => parseInt(appId));
    const appList = data.filter((app) => convertedStoredApp.includes(app.id));
    setInstalledList(appList);
  }, []);

  return (
    <div className="bg-[#F9F9F9]">
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-1">Your Installed Apps</h1>
        <p className="font-sm text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <h1>Installed App : {installedList.length}</h1>

      {console.log(installedList)}
    </div>
  );
};

export default Installation;
