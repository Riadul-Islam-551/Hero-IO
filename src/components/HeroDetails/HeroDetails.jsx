import React from 'react'

const HeroDetails = () => {
  return (
    <div>
      {/* hero details  */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
        <h1 className="text-center font-extrabold text-4xl">
          Trusted by Millions, Built for You
        </h1>
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
  )
}

export default HeroDetails
