import React, { useState } from "react";
import "./signup.scss";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    if (email === "" || phoneNo === "" || password === "" || name === "") {
      alert("please enter valid details!");
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}` + "auth/signup",
          {
            name,
            email,
            password,
            phoneNo,
          }
        );
        if (res.data.user) {
          alert("This email is already register, sign up with another email.");
        } else if (res.status === 200) {
          alert("Your Registration Successfully Compleated.");
          navigate("/signin");
          setEmail("");
          setphoneNo("");
          setName("");
          setPassword("");
        }
      } catch (error) {
        if (error.response.data.errors) {
          alert("Enter valid details!");
        }
      }
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="right">
          <h2 className="heading">Register Now</h2>
          <p>
            or,
            <Link to="/signin"> Login to account</Link>
          </p>
          <form action="">
            <label htmlFor="">*Enter Name</label>
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="">*Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">*PhoneNo</label>
            <input
              type="number"
              placeholder="phone number"
              pattern="/^\+?[1-9][0-9]{7,14}$/"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
              required
            />
            <label htmlFor="">*Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="signup" type="submit" onClick={registerUser}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
