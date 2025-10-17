import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";
import { Link, useLoaderData } from "react-router";
import HomeApp from "../../components/HomeApp/HomeApp";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <HeroDetails></HeroDetails>
      {/* HomeApp  */}
      <div className="my-12 max-w-[1200px] mx-auto p-3 ">
        <h1 className="text-3xl font-bold mt-9 text-center">Trending Apps</h1>
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
      <div className="flex justify-center mb-3">
        <Link
          to="/app"
          className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 py-2 rounded-lg hover:opacity-90"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
