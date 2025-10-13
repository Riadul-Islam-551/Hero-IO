import React from "react";
import "./Home.css";
import {  useLoaderData } from "react-router";
import Hero from "../../components/Hero/Hero";
import HeroDetails from "../../components/HeroDetails/HeroDetails";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Hero></Hero>
      <HeroDetails></HeroDetails>
    </div>
  );
};

export default Home;
