import React, { useState, useEffect } from "react";
import "./mess_list.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessId } from "../../../redux-store/actions";

const MessList = () => {
  const [messList, setMessList] = useState([]);
  const pincode = useSelector((state) => state.setCommonPincode);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handelMessSelect = (id) => {
    dispatch(setMessId(id));
    navigate(`/messList/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/home/search?q=${pincode}`
      );
      //console.log(res);
      setMessList(res.data);
    };

    fetchData();
  }, [pincode]);

  return (
    <div className="messListContainer">
      <nav>
        <h1>MessyFeed</h1>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </nav>
    
      <div className="mess-list">
        {messList &&
          messList.map((mess) => (
            <div
              className="mess-card"
              onClick={() => handelMessSelect(mess._id)}
              id={mess._id}
            >
              <img src={mess.photos[0]} />
              <h3>{mess.name}</h3>
              <p>{`${mess.address}, ${mess.pincode}`}</p>
            </div>
          ))}
        {messList.length === 0 && <h1>No Mess Found!</h1>}
      </div>
      <div className="footer">
        <p>{`All Messes In This Area ${pincode} Pincode`}</p>
        <div className="rights">
          <p>© Copyright 2023, All Rights Reserved | MessyFeed </p>
        </div>
      </div>
    </div>
  );
};

export default MessList;
