import { Container } from "@mui/material";
import React from "react";

const Working = () => {
  return (
    <div className=" relative">
      <div className=" absolute left-0 bottom-0 z-20 ">
        <div className=" relative">
          <img
            className=" absolute -right-10 top-4 -z-20 animate-spin aspect-square h-[100px] max-lg:h-20"
            src="/assets/gold Star.svg"
          />
          <img className=" max-lg:h-40" src="/assets/curvy arrow.svg" />
        </div>
      </div>
      <Container maxWidth="lg">
        <div className="flex flex-col items-center gap-20 justify-center min-h-[90vh]">
          <div className="grid  md:grid-cols-2 md:grid-rows-6 gap-8">
            <div className="flex flex-col md:row-span-1 gap-4 ">
              <h1 className=" text-6xl leading-none">How it Works?</h1>
              <p>
                Resolving neglected sir tolerably but existence conveying for.
                Day his put off unaffected literature partiality inhabiting.
              </p>
            </div>
            <div className=" relative grid items-center justify-center  md:row-span-3">
              <img
                className="flex justify-center -z-50"
                src="/assets/DesignCard.png"
              />
            </div>
            <div className="relative grid items-center justify-center  md:row-span-4">
              <img src="/assets/DesignCard2.png" />
            </div>
            <div className="relative grid md:row-span-3">
              <img src="/assets/DesignCard3.png" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Working;
