import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Download from "../../assets/icon-downloads.png";
import Rating from "../../assets/icon-ratings.png";
import Review from "../../assets/icon-review.png";
import { addInstalledApp } from "../../Pages/Utility/AddToDB";

const AppDetails = () => {
  const appDetails = useLoaderData();
  const { appId } = useParams();
  // console.log(appId);
  const {
    image,
    title,
    companyName,
    id,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = appDetails;
  // console.log(appDetails);

  // local Storage integration
  const addToInstallation = (id) => {
    addInstalledApp(id);
  };

  return (
    <div className="bg-[#F6F6F6] py-12">
      <div className="max-w-[1200px] mx-auto p-2">
        <div className="flex flex-col md:flex-row justify-start gap-5">
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              width="250px"
              height="250px"
              className="rounded-xl "
            />
          </div>
          <div className="w-full">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-[10px]">
              {" "}
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>
            <hr className="text-gray-400 my-3" />
            <div className="flex justify-start items-center gap-9">
              <div>
                <img src={Download} alt="Download" width="16px" />
                <p className="text-[10px] mt-1">Downloads</p>
                <h1 className="font-bold">{downloads}</h1>
              </div>
              <div>
                <img src={Rating} alt="Rating" width="16px" />
                <p className="text-[10px] mt-1">Average Ratings</p>
                <h1 className="font-bold">{ratingAvg}</h1>
              </div>
              <div>
                <img src={Review} alt="Review" width="16px" />
                <p className="text-[10px] mt-1">Total Reviews</p>
                <h1 className="font-bold">{reviews}</h1>
              </div>
            </div>
            <div className="mt-6">
              <Link>
                <button
                  onClick={() => addToInstallation(appId)}
                  className="btn bg-[#00D390] border-none"
                >
                  Install Now ({size} MB )
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ratings  */}
        <div className="my-9">
          <h1 className="text-xl font-bold mb-2">Ratings : </h1>
          <ResponsiveContainer width="100%" height="100%" className="border">
            <BarChart
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="counts" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* description  */}
        <div>
          <h1 className="text-xl font-bold mb-2">Description : </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
