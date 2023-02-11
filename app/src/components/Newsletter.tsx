import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
      </div>
      <div className="my-4">
        <div>
          <input
            className="p-3 flex w-full rounded-md text-black"
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
