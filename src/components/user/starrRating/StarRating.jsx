import React from "react";
import { AiFillStar } from "react-icons/Ai";
import { BsStarHalf } from "react-icons/Bs";
import { BsStar } from "react-icons/Bs";

const StarRating = ({ rating }) => {
  const star = [];
  // put stars in array
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<AiFillStar style={{ color: "yellow" }} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(<BsStarHalf style={{ color: "yellow" }} />);
    } else {
      star.push(<BsStar style={{ color: "yellow" }} />);
    }
  }
  return <>{star}</>;
};

export default StarRating;
