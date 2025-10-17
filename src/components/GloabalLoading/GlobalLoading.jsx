import React from "react";
import { useNavigation } from "react-router";
import "./globalLoading.css"

const GlobalLoading = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  if (!isLoading) {
    return null;
  }
  return (
    <div className="flex justify-center items-center w-full h-screen z-50 animate-pulse">
      <p className=" loadingText font-bold text-5xl">Loading...</p>
    </div>
  );
};

export default GlobalLoading;
