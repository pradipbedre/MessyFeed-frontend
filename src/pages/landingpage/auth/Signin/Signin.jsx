import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.scss";
import axios from "axios";
import { setCookie } from "../../../../utils/Cookie";
import { Input } from "antd";

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
          `${import.meta.env.VITE_BASE_URL}` + "auth/signin",
          {
            email,
            password,
          }
        );
        console.log(res);
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

  const visiblePassword = () => {};

  return (
    <div>
      <div className="signin-container">
        <div className="right">
          <h2 className="heading">Login</h2>
          <p>
            or,
            <Link to="/signup"> create a account</Link>
          </p>
          <form action="">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
