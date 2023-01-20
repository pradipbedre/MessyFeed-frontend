import React, { useEffect, useState } from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./mess_details.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import StarRating from "../starrRating/StarRating";

const MessDetails = () => {
  const [formActive, setFormActive] = useState(false);
  const messId = useSelector((state) => state.setCommonMessId);
  const [mess, setMess] = useState("");
  const [plans, setPlans] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  /* This states for review sections  */
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  // fetching mess details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}user/mess/${messId}`
        );
        console.log("Mess Details: ", res);
        const resPlans = await axios.get(
          `${import.meta.env.VITE_BASE_URL}user/mess/plans/${messId}`
        );
        console.log("mess plans: ", resPlans);
        setMess(res.data);
        setPlans(resPlans.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // fetching Review  details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resReview = await axios.get(
          `${import.meta.env.VITE_BASE_URL}home/reviews/${messId}`
        );
        setAllReviews(resReview.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [allReviews]);

  // adding review to DB
  const reviewSubmit = async (e) => {
    try {
      const isReviewed = await axios.post(
        `${import.meta.env.VITE_BASE_URL}` + "home/isReviewed",
        {
          email,
        }
      );
      if (isReviewed && isReviewed.data.isCheck) {
        alert("your review already submitted!");
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}home/review`,
          {
            email,
            review,
            messId,
            rating,
          }
        );
        if (res) {
          setEmail("");
          setRating("");
          setReview("");
        }
      }
    } catch (error) {
      console.log(error);
      if (error) {
        alert("Enter valid details or you are not customer of this mess.");
        setEmail("");
        setRating("");
        setReview("");
      }
    }
  };

  /* // Mess Images
  const urls = [
    mess && mess.photos[0],
    mess && mess.photos[1],
    mess && mess.photos[2],
  ]; */

  // Average Rating
  let count = 0;
  let averageRating = 0;
  for (let i = 0; i < allReviews.length; i++) {
    count = count + 1;
    averageRating = averageRating + allReviews[i].rating;
  }
  let totalRating = averageRating / count;

  return (
    <div className="messDetailsContainer">
      {/* Navbar */}
      <nav>
        <h1>MessyFeed</h1>
      </nav>

      {/* Mess Topbar */}
      <div className="name-rating">
        <h1>{mess.name}</h1>
        <h2>{<StarRating rating={totalRating} />}</h2>
      </div>

      {/* Mess Images */}
      <div className="images">
        <ImageSlider urls={mess && mess.photos} />
      </div>

      {/* Mess Info */}
      <div className="mess-info">
        <div className="mess">
          <h3>Address</h3>
          <p>{`${mess.address}, ${mess.pincode}`} </p>
          <br />
          <h3>Contact Details</h3>
          <p>
            {`Mobile: ${mess.contactNo}`}
            <br />
            {`Email: ${mess.email}`}
          </p>
        </div>
        <div className="plans">
          <h3 className="title">Plans</h3>
          {plans &&
            plans.map((plan) => (
              <div className="plan" key={plan._id}>
                <h4>{plan.name}</h4>
                <p className="cost">{`Cost: ${plan.planCost} Rs`}</p>
                <p className="meal">{`Total Meals: ${plan.mealCount}`}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Rating System */}
      <div className="rating-system-form">
        <h2>All Ratings By Mess Customers</h2>
        <button className="givebtn" onClick={() => setFormActive(!formActive)}>
          Give Rating
        </button>
        {formActive && (
          <div className="ratingform">
            <div className="email-star">
              <input
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <textarea
              name="rating"
              cols="30"
              rows="6"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button onClick={reviewSubmit}>Submit</button>
          </div>
        )}
      </div>

      {/* List Of All Ratings */}
      <div className="all-reviews">
        {allReviews &&
          allReviews.map((rev) => (
            <div className="review" >
              <p>{rev.review}</p>
              <div className="rating">
                <p>{<StarRating rating={rev.rating} />}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="footer">
        <p>© Copyright 2023, All Rights Reserved | MessyFeed </p>
      </div>
    </div>
  );
};

export default MessDetails;
