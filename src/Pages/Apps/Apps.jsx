import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import AppCard from "../../components/AppCard/AppCard";

const Apps = () => {
  const appsData = useLoaderData();

  // console.log(appsData);

  const [filteredApps, setFilteredApps] = useState(appsData);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredApps(appsData);
  }, [appsData]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredApps(appsData);
    } else {
      const lowerCaseTerm = term.toLowerCase();

      const results = appsData.filter((app) =>
        app.title.toLowerCase().includes(lowerCaseTerm)
      );

      setFilteredApps(results);
    }
  };

  return (
    <div className="my-12 max-w-[1200px] mx-auto p-3 ">
      {filteredApps.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold mt-7 text-center">
            Our All Applications
          </h1>
          <p className="text-sm text-[#627382] mt-1 mb-7 text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </>
      ) : (
        <div className="h-[200px] flex flex-col gap-7 items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-500">No apps found</h1>
          <div className="flex justify-center mb-3">
            <Link
              to="/app"
              className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 py-2 rounded-lg hover:opacity-90"
            >
              Show All
            </Link>
          </div>
        </div>
      )}
      {/* ................ */}
      {appsData.length > 0 && (
        <div className="flex justify-between items-center mb-5">
          {/* number of apps  */}
          <div>
            <p className="font-bold">
              <span>({filteredApps.length})</span> Apps Found
            </p>
          </div>
          {/* search apps  */}
          <div className="flex justify-start items-center gap-2 border border-gray-300 rounded py-1 px-2 text-sm">
            <CiSearch />

            <input
              type="text"
              placeholder="Search Apps"
              className="focus:outline-none"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
      {/* ................. */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {filteredApps.map((appCard) => (
            <AppCard key={appCard.id} appCard={appCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
