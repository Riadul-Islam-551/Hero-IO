import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../Utility/AddToDB.js";
import InstalledApp from "../../components/InstalledApp/InstalledApp.jsx";

const Installation = () => {
  const data = useLoaderData();
  const [installedList, setInstalledList] = useState([]);
  const [sort, setSort] = useState("");
  // const [newInstalledList, setNewInstalledList] = useState([]);
  console.log(installedList);

  useEffect(() => {
    const storedAppData = getInstalledApp();
    const convertedStoredApp = storedAppData.map((appId) => parseInt(appId));
    const appList = data.filter((app) => convertedStoredApp.includes(app.id));
    setInstalledList(appList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Low to Heigh") {
      const sortedLowtoHeigh = [...installedList].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
      setInstalledList(sortedLowtoHeigh);
    }
    if (type === "Heigh to Low") {
      const sortedLowtoHeigh = [...installedList].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
      setInstalledList(sortedLowtoHeigh);
    }
  };

  console.log(sort);
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
            <details className="dropdown">
              <summary className="btn m-1">
                Sort By : {sort ? sort : ""}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-white">
                <li>
                  <a onClick={() => handleSort("Low to Heigh")}>Low to Heigh</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Heigh to Low")}>Heigh to Low</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div>
          {installedList.map((installedApp) => (
            <InstalledApp
              key={installedApp.id}
              installedApp={installedApp}
            ></InstalledApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
