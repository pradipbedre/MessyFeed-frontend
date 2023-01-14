import React from "react";
import "./mess_list.scss";
import { Link, useNavigate } from "react-router-dom";

const MessList = () => {
  const navigate = useNavigate();
  const handelMessSelect = (id) => {
    navigate(`/messList/${id}`);
  };

  return (
    <div className="messListContainer">
      <nav>
        <h1>MessyFeed</h1>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </nav>
      <div className="mess-list">
        <div className="mess-card" onClick={()=>handelMessSelect(1234)}>
          <img src="https://bit.ly/3iHlC6Q" alt="" />
          <h3>Jay Ram Mess</h3>
          <p>Pune, main road 654532</p>
        </div>
      </div>
      <div className="footer">
        <p>All mess in 654532</p>
        <div className="rights">
          <p>© Copyright 2022, All Rights Reserved | MessyFeed </p>
        </div>
      </div>
    </div>
  );
};

export default MessList;
