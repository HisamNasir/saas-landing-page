import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";

const Product = () => {
  return (
    <Container maxWidth="md">
      <div className="flex flex-col items-center gap-20 justify-center min-h-[90vh]">
        <div className=" text-center flex flex-col gap-4">
          <h1 className=" text-6xl leading-none">
            Our plans scale with your product
          </h1>
          <p>in virtual space through communication platforms.</p>
        </div>
        <div className="flex max-lg:flex-col gap-2">
          <Card className="  px-6 py-10 rounded-lg shadow-lg flex flex-col justify-between">
            <Typography variant="h6" className="mb-4 text-center">
              For Starter
            </Typography>
            <Typography variant="h4" className="mb-6 text-center">
              $59
            </Typography>
            <ul className="mb-6 list-disc pl-6 text-sm leading-6">
              <li>Feedback Categorization</li>
              <li>Features Prioritization</li>
              <li>Real-Time Collaboration</li>
              <li>Feedback Loop Notifications</li>
              <li>Essential Dev Tools Integrations</li>
            </ul>
            <Button
              className="xl:w-full text-xs"
              variant="outlined"
              color="secondary"
            >
              Purchase Package
            </Button>
          </Card>
          <Card className="bg-[#481177] text-white px-6 py-10 rounded-lg shadow-lg flex flex-col justify-between">
            <Typography variant="h6" className="mb-4 text-center">
              For Teams
            </Typography>
            <Typography variant="h4" className="mb-6 text-center">
              $99
            </Typography>
            <ul className="mb-6 list-disc pl-6 text-sm leading-6">
              <li>Feedback Categorization</li>
              <li>Features Prioritization</li>
              <li>Real-Time Collaboration</li>
              <li>Feedback Loop Notifications</li>
              <li>Essential Dev Tools Integrations</li>
            </ul>
            <Button
              className="xl:w-full text-xs"
              variant="contained"
              color="secondary"
            >
              Purchase Package
            </Button>
          </Card>
          <Card className="px-6 py-10 rounded-lg shadow-lg flex flex-col justify-between">
            <Typography variant="h6" className="mb-4 text-center">
              For Company
            </Typography>
            <Typography variant="h4" className="mb-6 text-center">
              Custom
            </Typography>
            <ul className="mb-6 list-disc pl-6 text-sm leading-6">
              <li>Feedback Categorization</li>
              <li>Feedback Loop Notifications</li>
              <li>Essential Dev Tools Integrations</li>
            </ul>
            <Button
              className="xl:w-full text-xs"
              variant="outlined"
              color="secondary"
            >
              Purchase Package
            </Button>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Product;
