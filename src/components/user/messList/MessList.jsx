import React, { useState, useEffect } from "react";
import "./mess_list.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessId } from "../../../redux-store/actions";
import { Loading } from "../shared/SharedComponent";
import { NotFoundMess } from "../shared/SharedComponent";

const MessList = () => {
  const [messList, setMessList] = useState([]);
  const pincode = useSelector((state) => state.setCommonPincode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  /* Function for Navigate */
  const handelMessSelect = (id) => {
    dispatch(setMessId(id));
    navigate(`/messList/${id}`);
  };

  /* Fetch all messes */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}home/search?q=${pincode}`
        );
        setMessList(res.data);
        if (res.data) {
          setLoading(false);
        }
        if (res.data.length == 0) {
          setNotFound(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pincode]);

  return (
    <div className="messListContainer">
      <nav>
        <h1>MessyFeed</h1>
        <h1 className="title">{`All Messes In ${pincode} Area Pincode`}</h1>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </nav>
      {loading && <Loading />}
      <div className="mess-list">
        {messList &&
          messList.map((mess) => (
            <div
              className="mess-card"
              onClick={() => handelMessSelect(mess._id)}
              key={mess._id}
            >
              <img src={mess.photos[0]} />
              <h3>{mess.name}</h3>
              <p>{`${mess.address}, ${mess.pincode}`}</p>
            </div>
          ))}
      </div>
      {notFound && <NotFoundMess />}
      <div className="footer">
        <p className="title">{`All Messes In ${pincode} Area Pincode`}</p>
        <div className="rights">
          <p>© Copyright 2023, All Rights Reserved | MessyFeed </p>
        </div>
      </div>
    </div>
  );
};

export default MessList;
