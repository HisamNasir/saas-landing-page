import { Button, Container } from "@mui/material";
import React from "react";

const EndPage = () => {
  return (
    <div className=" relative">
      <div className=" absolute -z-20 bottom-[30%] opacity-30 right-5  xl:right-40 ">
        <img
          className=" animate-spin aspect-square max-lg:h-20"
          src="/assets/gold Star.svg"
        />
      </div>
      <div className=" absolute -z-20 bottom-0 right-1 max-xl:opacity-45">
        <img className=" max-lg:h-40" src="/assets/arrow2.svg" />
      </div>
      <Container maxWidth="md">
        <div className="flex flex-col  xl:w-full items-center gap-20 justify-center min-h-[90vh]">
          <div className="text-center flex flex-col  items-center gap-16">
            <h1 className="text-6xl leading-none  w-[80%] ">
              Social Media Its Ways Of Our Excellence.
            </h1>
            <div className=" h-[73px] flex items-center pl-8 max-w-[445px] rounded-lg p-2 bg-[#0A0A0A]">
              <input
                type="text"
                placeholder="Enter your Email"
                className=" placeholder:opacity-80 focus:outline-none bg-[#0A0A0A]"
              />
              <button className=" text-xs pl-8 p-1 h-[60px] w-[190px] bg-[#AE68FA] rounded-md text-white flex justify-between gap-4 items-center">
                <span>Get Started</span>{" "}
                <div className=" h-full aspect-square rounded-md bg-[#FFFFFF] bg-opacity-50 flex items-center justify-center">
                  <img src="/assets/arrow.svg" />
                </div>
              </button>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className=" relative items-center flex">
              <div className="  -right-[16px] -top-[16px] outline  outline-3 outline-[#AE68FA] rounded-full">
                <img src="/assets/avatar.png" />
              </div>
              <div className="absolute -right-[11px]">
                <img src="/assets/play video.svg" />
              </div>
            </div>
            <div className=" underline">Watch our video</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EndPage;
