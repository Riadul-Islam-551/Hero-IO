import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import { useLoaderData } from "react-router";
import HomeApp from "../../components/HomeApp/HomeApp";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <HeroDetails></HeroDetails>
      <div className="my-12 max-w-[1200px] mx-auto p-3 ">
        <h1 className="text-3xl font-bold mt-12 text-center">Trending Apps</h1>
        <p className="text-sm text-[#627382] mt-1 mb-7 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {data.map((appData) => (
            <HomeApp key={appData.id} appData={appData}></HomeApp>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
