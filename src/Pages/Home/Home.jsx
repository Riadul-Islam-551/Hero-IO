import React from "react";
import "./Home.css";
import GooglePlay from "../../assets/Google-play.png";
import GoogleApp from "../../assets/Google-app.png";
import HeroImg from "../../assets/hero.png";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      {/* hero section  */}
      <div>
        {/* hero title  */}
        <div className="py-9">
          <h1 className="font-extrabold text-4xl text-center leading-12">
            We Build <br />
            <span className="home-active-text">Productive</span>
            <span> Apps</span>
          </h1>
        </div>
        {/* hero description  */}
        <div className="pb-9">
          <p className="text-center text-[#627382 text-sm]">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        {/* hero button  */}
        <div className="text-center mb-9">
          <button className="btn bg-white text-black border-gray-300 m-3 shadow-none">
            <img src={GooglePlay} width="20px" alt="Google play buttton" />{" "}
            <Link to="https://play.google.com/store/games?hl=en">
              Google Play
            </Link>
          </button>
          <button className="btn bg-white text-black border-gray-300 m-3 shadow-none">
            <img
              className="bg-blue-500"
              src={GoogleApp}
              width="20px"
              alt="Google play buttton"
            />
            <Link to="https://www.apple.com/app-store/">App Store</Link>
          </button>
        </div>
        {/* hero image  */}
        <div className="flex justify-center">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      {/* hero details  */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
        <h1 className="text-center font-extrabold text-4xl">Trusted by Millions, Built for You</h1>
        <div className="grid grid-cols-3 mt-12 max-w-[1200px] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-extralight">Total Downloads</p>
            <h2 className="font-extrabold text-3xl my-2">29.6M</h2>
            <p className="text-sm font-extralight">21% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-extralight">Total Reviews</p>
            <h2 className="font-extrabold text-3xl my-2">906K</h2>
            <p className="text-sm font-extralight">46% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-extralight">Active Apps</p>
            <h2 className="font-extrabold text-3xl my-2">132+</h2>
            <p className="text-sm font-extralight">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
