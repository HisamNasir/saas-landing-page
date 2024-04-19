import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from "../utils/reviews.json";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
      }
      style={{ ...style, zIndex: "9999" }}
      onClick={onClick}
    >
      {/* Use your own previous arrow SVG or icon here */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
      }
      style={{ ...style, zIndex: "9999" }}
      onClick={onClick}
    >
      {/* Use your own next arrow SVG or icon here */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 10.707a1 1 0 010 1.414L10 15.414l-4.293-4.293a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const settings = {
  dots: false, // Hide dot indicator
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />, // Custom previous arrow component
  nextArrow: <CustomNextArrow />, // Custom next arrow component
};

const ReviewsPage = () => {
  return (
    <Container maxWidth="md">
      <div className="flex flex-col items-center gap-20 justify-center min-h-[90vh]">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-6xl leading-none">
            What Our Clients Say About Us
          </h1>
          <p>
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations,
          </p>
        </div>
        <Slider {...settings} className="w-full my-4">
          {reviewsData.map((review) => (
            <div key={review.id} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">{review.user}</h3>
                <p className="text-gray-500 mb-2">{review.place}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span>{review.rating}/5</span>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ReviewsPage;
