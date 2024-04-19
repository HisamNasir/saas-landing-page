import { Container } from "@mui/material";
import React from "react";

const Offer = () => {
  return (
    <Container maxWidth="md">
      <div className="flex flex-col items-center gap-20 justify-center min-h-[90vh]">
        <div className=" text-center flex flex-col gap-4">
          <h1 className=" text-6xl leading-none">What we Offer?</h1>
          <p>
            {" "}
            in virtual space through communication platforms. Durable relations
            that extend beyond immediate genealogical ties.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 6.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">Community Support</h2>
              <p className="mt-2">
                Apps keep work and information right at your fingertips—and
                Slack keeps it all securely.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 7.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">Security First</h2>
              <p className="mt-2">
                Connect the tools you already use to get more from them every
                time you work.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 8.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">24/7 Admin Support</h2>
              <p className="mt-2">
                You can work with apps in channels, where they’re a seamless
                part of the conver.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 9.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">100+ Themes</h2>
              <p className="mt-2">
                Spend less time tracking down the people needed to get work
                done.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 10.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">Fully Integrated</h2>
              <p className="mt-2">
                Skip the follow-ups and back-and -forth. Easily standardize how
                you collect{" "}
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <img
              src="/assets/offer/Group 11.svg"
              alt="Logo 1"
              className="h-[60px] w-[60px]"
            />
            <div>
              <h2 className="text-base">Monthly Update</h2>
              <p className="mt-2">
                Take control of your work day. In a just a few minutes, create a
                customized workflow{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offer;
