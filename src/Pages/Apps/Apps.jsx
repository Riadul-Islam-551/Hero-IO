import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";

const Apps = () => {
  const appsData = useLoaderData();
  console.log(appsData);
  return (
    <div className="my-12 max-w-[1200px] mx-auto p-3 ">
      <h1 className="text-3xl font-bold mt-7 text-center">Our All Applications</h1>
      <p className="text-sm text-[#627382] mt-1 mb-7 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {appsData.map((appCard) => (
            <AppCard key={appCard.id} appCard={appCard}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
