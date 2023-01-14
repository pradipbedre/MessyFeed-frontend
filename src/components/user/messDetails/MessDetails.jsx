import React, { useState } from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./mess_details.scss";
const MessDetails = () => {
  const [formActive, setFormActive] = useState(false);
  const urls = [
    "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];

  return (
    <div className="messDetailsContainer">
      <nav>
        <h1>MessyFeed</h1>
      </nav>

      <div className="name-rating">
        <h2>Jay Ram Mess</h2>
        <p>rating</p>
      </div>

      <div className="images">
        <ImageSlider urls={urls} />
      </div>

      <div className="mess-info">
        <div className="mess">
          <h3>Address</h3>
          <p>Sivaji nagger, goregav park pune 202222 </p>
          <h3>Contact Details</h3>
          <p>
            Mo: 9168207235
            <br />
            Email: mess@gmail.com
          </p>
        </div>
        <div className="plans">
          <h3>Plans</h3>
          <div className="onetime">
            <h4>one Time Plan</h4>
            <p>2000 RS</p>
          </div>
          <div className="twotime">
            <h4>Two Time Plan</h4>
            <p>2000 RS</p>
          </div>
        </div>
      </div>

      <div className="listofrating">
        <h2>All Ratings By Mess Customers</h2>
        <button className="givebtn" onClick={() => setFormActive(!formActive)}>
          Give Rating
        </button>
        {formActive && (
          <div className="ratingform">
            <div className="email-star">
              <input type="text" placeholder="enter email" />
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <textarea name="rating" cols="50" rows="6" />
            <button>Submit</button>
          </div>
        )}
      </div>

      <div className="all-reviews">
        <div className="review">
          <p>best mess in theafasfsfffsafsafafafafafafafa world</p>
          <div className="rating">
            <p>rating number</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© Copyright 2022, All Rights Reserved | MessyFeed </p>
      </div>
    </div>
  );
};

export default MessDetails;
