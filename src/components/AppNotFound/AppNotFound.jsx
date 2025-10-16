import React from "react";
import { Link, useRouteError } from "react-router";

const AppNotFound = () => {
  const error = useRouteError();

  let message = "Oops! You have no app.";
  if (error && error.status === 404) {
    const message = "Oops! The specific app you requested could not be found.";
  }

  return (
    <div className="bg-[#F6F6F6] py-12 text-center h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">{message}</h1>
      <p className="text-lg">Please check the ID and try again.</p>
      <Link to="/app">
        <button className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:opacity-90 mt-9">
          Go back to App List
        </button>
      </Link>
    </div>
  );
};
export default AppNotFound;
