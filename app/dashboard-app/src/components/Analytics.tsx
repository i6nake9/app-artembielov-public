import React from 'react';
import Laptop from '../assets/laptop.jpeg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            A dashboard for data analytics is a tool used to multi-task,
            organize, visualize, analyze, and track data. The overall purpose of
            a data analytics dashboard is to make it easier for data analysts,
            decision makers, and average users to understand their data, gain
            deeper insights, and make better data-driven decisions.
          </p>
          <button className="text-[#00df9a] bg-black  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
