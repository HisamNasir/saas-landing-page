import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from "../utils/reviews.json";

const ReviewsPage = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default slidesToShow

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 740) {
        setSlidesToShow(1); // Set slidesToShow to 1 for screen size below lg
      } else {
        setSlidesToShow(3); // Set slidesToShow to 3 for screen size lg and above
      }
    };

    // Call handleResize on initial render and when window is resized
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false, // Hide dot indicator
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use state value for slidesToShow
    slidesToScroll: 1,
  };

  // Function to generate star icons based on the rating
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-500">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <Container maxWidth="xl">
      <div className="flex flex-col items-center gap-20 justify-center min-h-[90vh]">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl lg:text-6xl leading-none">
            What Our Clients Say About Us
          </h1>
          <p>
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations,
          </p>
        </div>
        <Slider {...settings} className="w-full my-4">
          {reviewsData.map((review) => (
            <div key={review.id} className="p-2">
              <div className="bg-white aspect-square text-center flex flex-col items-center text-sm rounded-lg shadow-md p-6">
                <div className="flex items-center ">
                  {generateStars(review.rating)}
                </div>
                <p className=" h-full">{review.review}</p>
                <h3 className=" ">{review.user}</h3>
                <p className="">{review.place}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ReviewsPage;
