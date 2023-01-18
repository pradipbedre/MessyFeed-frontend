import React, { useState } from "react";
import "./signup.scss";
import welcome from "../../../../assets/welcome.svg";
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
          `${import.meta.env.VITE_BASE_URL}auth/signup`,
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
        // console.log(error.response.data.errors[0].param);
        if (error.response.data.errors) {
          alert("Enter valid details!");
        }
      }
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="left">
          <img src={welcome} alt="signup" />
        </div>
        <div className="right">
          <h2>Register Now</h2>
          <p>
            or,
            <Link to="/signin"> Login to account</Link>
          </p>
          <form action="">
            <label htmlFor="">Enter Name:*</label>
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="">Email:*</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">PhoneNo:*</label>
            <input
              type="number"
              placeholder="phone number"
              pattern="/^\+?[1-9][0-9]{7,14}$/"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
              required
            />
            <label htmlFor="">Password:*</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
