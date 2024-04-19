import { Button, Container } from "@mui/material";
import React from "react";
import User from "./animatedCards/User";
import BarChart from "./animatedCards/BarChart";
const followersData = [
  { followers: 8000 },
  { followers: 6000 },
  { followers: 4000 },
  { followers: 2000 },
];
const Hero = () => {
  return (
    <Container maxWidth="xl">
      <div className=" grid lg:grid-cols-3 min-h-[85vh] items-center ">
        <div className="">
          <h1 className=" text-lg md:text-6xl xl:text-[85px] leading-none">
            Tell a better brand story
          </h1>
          <p>
            Warrant present garrets limited cordial in inquiry to. Supported me
            sweetness behaviour shameless excellent so arranging.
          </p>
          <div className="flex gap-2 mt-[70px]">
            <Button variant="contained" size="large" color="secondary">
              Get Started
            </Button>
            <Button variant="outlined" size="large" color="secondary">
              Get Started
            </Button>
          </div>
        </div>
        <div></div>
        <div></div>
        {/* <div className="grid relative w-[1/2vw]"> */}
        {/* <User /> */}
        {/* <div className=" bg-white w-[188px] h-[217px] shadow-2xl rounded-xl shadow-neutral-300"> */}
        {/* <PercentageCard /> */}
        {/* </div> */}
        {/* <div className=" bg-white w-[306px] h-[339px] shadow-2xl rounded-xl shadow-neutral-300"> */}
        {/* <BarChart data={followersData} /> */}
        {/* </div> */}
        {/* <div className=" bg-white w-[188px] h-[217px] shadow-2xl rounded-xl shadow-neutral-300"></div> */}
        {/* </div> */}
      </div>
      <div className=" grid grid-flow-col gap-2">
        <img
          src="/assets/group logos/Group 542.svg"
          className=" max-lg:w-full max-w-[190px] max-h-[32px]  "
        />
        <img
          src="/assets/group logos/Group 543.svg"
          className=" max-lg:w-full max-w-[190px] max-h-[32px]  "
        />
        <img
          src="/assets/group logos/Group 544.svg"
          className=" max-lg:w-full max-w-[190px] max-h-[32px]  "
        />
        <img
          src="/assets/group logos/Group 545.svg"
          className=" max-lg:w-full max-w-[190px] max-h-[32px]  "
        />
        <img
          src="/assets/group logos/Group 546.svg"
          className=" max-lg:w-full max-w-[190px] max-h-[32px]  "
        />
      </div>
    </Container>
  );
};

export default Hero;
