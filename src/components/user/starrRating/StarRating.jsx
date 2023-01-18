import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const StarRating = ({ rating }) => {
  const star = [];
  // put stars in array
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<BsStarFill style={{ color: "#e8c205" }} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(<BsStarHalf style={{ color: "#e8c205" }} />);
    } else {
      star.push(<BsStar style={{ color: "#e8c205" }} />);
    }
  }
  return <>{star}</>;
};

export default StarRating;
