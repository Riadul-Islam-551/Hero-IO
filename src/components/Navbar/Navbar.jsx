import React from "react";
import { Link, NavLink } from "react-router";
import "./Nav.css";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo.png"

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className=" mx-2 p-1 text-sm font-bold">
        Home
      </NavLink>
      <NavLink to="/app" className="mx-2 p-1  text-sm font-bold">
        App
      </NavLink>
      <NavLink to="/installation" className="mx-2 p-1  text-sm font-bold">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="shadow-sm">
      <div className="navbar  max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-10 mt-3 py-2 px-7  shadow"
            >
              <div className="flex flex-col">{links}</div>
            </ul>
          </div>
          <img src={Logo} width="20px" alt="" />
          <Link className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-lg font-bold">
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Riadul-Islam-551"
            className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
