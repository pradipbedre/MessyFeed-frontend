import React, { useEffect, useState } from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./mess_details.scss";
import { useSelector } from "react-redux";
import axios from "axios";

const MessDetails = () => {
  const [formActive, setFormActive] = useState(false);
  const messId = useSelector((state) => state.setCommonMessId);
  const [mess, setMess] = useState("");

  // fetching mess details
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/user/mess/${messId}`
      );
      setMess(res.data);
    };
    fetchData();
  }, []);

  // Mess Images
  const urls = [
    mess && mess.photos[0],
    mess && mess.photos[1],
    mess && mess.photos[2],
  ];

  return (
    <div className="messDetailsContainer">
      <nav>
        <h1>MessyFeed</h1>
      </nav>

      <div className="name-rating">
        <h2>{mess.name}</h2>
        <p>rating</p>
      </div>

      <div className="images">
        <ImageSlider urls={mess && urls} />
      </div>

      <div className="mess-info">
        <div className="mess">
          <h3>Address</h3>
          <p>{mess.address} </p>
          <h3>Contact Details</h3>
          <p>
            {mess.contactNo}
            <br />
            {mess.email}
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
