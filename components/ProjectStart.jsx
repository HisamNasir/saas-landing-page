import { Button, Container, Typography } from "@mui/material";
import React from "react";

const ProjectStart = () => {
  return (
    <div className="bg-[#F8F3FF]">
      <Container maxWidth="md">
        <div className="flex flex-col  xl:w-full items-center gap-20 justify-center min-h-[70vh]">
          <div className="text-center flex justify-between xl:w-full items-center gap-4">
            <div className=" text-center space-y-8">
              <h1 className="text-6xl leading-none ">25,356</h1>
              <p className="  ">Projects Done</p>
            </div>
            <div className=" text-center space-y-8">
              <h1 className="text-6xl leading-none ">1M+</h1>
              <p className=" ">Projects Done</p>
            </div>
            <div className=" text-center space-y-8">
              <h1 className="text-6xl leading-none ">95%</h1>
              <p className="">Happy Customers</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-8">
            <h1 className="text-6xl leading-none tracking-tight ">
              Want to start a Project With us?
            </h1>
            <p className=" w-[60%] flex">
              Warrant present garrets limited cordial in inquiry to. Supported
              me sweetness behaviour shameless excellent so arranging.
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className=" text-xs rounded-none px-8"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectStart;
