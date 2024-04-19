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
    <div className=" relative">
      <div className=" absolute -z-20  -left-9 max-xl:opacity-45">
        <img className=" max-lg:h-40" src="/assets/curvy arrow2.svg" />
      </div>
      <Container maxWidth="xl">
        <div className=" grid lg:grid-cols-3 min-h-[85vh] items-center ">
          <div className="p-0">
            <h1 className=" text-lg md:text-6xl xl:text-[85px] leading-none">
              Tell a better brand story
            </h1>
            <p>
              Warrant present garrets limited cordial in inquiry to. Supported
              me sweetness behaviour shameless excellent so arranging.
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
          <div className="lg:col-span-2 p-0">
            <img className="" src="/assets/Hero content.svg" />
          </div>
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
    </div>
  );
};

export default Hero;
