import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.scss";
import welcome from "../../../../assets/welcome.svg";
import axios from "axios";
import { setCookie } from "../../../../utils/Cookie";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter valid details!");
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}auth/signin`,
          {
            email,
            password,
          }
        );
        if (res.data.Msg) {
          alert(`${res.data.Msg}`);
        }
        if (res.status === 200 && res.data.auth) {
          setCookie("jwt_token", res.data.token);
          navigate("/user");
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
      <div className="signin-container">
        <div className="left">
          <img src={welcome} alt="signup" />
        </div>
        <div className="right">
          <h2>Login</h2>
          <p>
            or,
            <Link to="/signup"> create a account</Link>
          </p>
          <form action="">
            <label htmlFor="">Email:*</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">Password:*</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="signin" type="submit" onClick={loginUser}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
