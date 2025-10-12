import React from "react";
import { Link } from "react-router";
import "./ErrorPage.css";
import ErrorImg from "../../assets/error-404.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      {/* .............main part .......... */}

      <div className="flex flex-col justify-center items-center">
        <div className="mt-16">
          <img src={ErrorImg} alt="Error Image" />
        </div>
        <div className="text-center mt-9">
          <h1 className="text-xl md:text-3xl font-bold">
            Oops, page not found!
          </h1>
          <p className="text-sm text-gray-800">
            The page you are looking for is not available.
          </p>
        </div>
        <div className="my-9">
          <Link
            to="/"
            className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-9 py-2 rounded hover:opacity-90"
          >
            Go Back!
          </Link>
        </div>
      </div>
      {/* ......footer part ........ */}
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
