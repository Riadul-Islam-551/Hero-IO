import React from "react";
import GooglePlay from "../../assets/Google-play.png";
import GoogleApp from "../../assets/Google-app.png";
import HeroImg from "../../assets/hero.png";
import { Link } from "react-router";

const Hero = () => {
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
          <p className="text-center text-[#627382] text-sm">
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
    </div>
  );
};

export default Hero;
