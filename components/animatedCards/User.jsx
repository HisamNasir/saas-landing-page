import React from "react";

export default function User() {
  return (
    <div className=" bg-white max-w-[188px] h-[217px]  flex flex-col justify-between relative shadow-2xl rounded-xl shadow-neutral-300">
      <div className=" absolute -right-[16px] -top-[16px] outline  outline-3 outline-[#AE68FA] rounded-full">
        <img src="/assets/avatar.png" />
      </div>
      <p className="text-center p-8">Amanda M. Data</p>
      <div className="bg-gray-200 rounded-lg shadow-lg m-3 h-[94px] relative">
        <div className="absolut inset-0 bg-gray-300  rounded-lg blur-3xl"></div>
        <div className="relative z-10 p-2 text-sm text-center">
          {/* Your card content here */}
          <p className="">Your Growth</p>
        </div>
      </div>
    </div>
  );
}
