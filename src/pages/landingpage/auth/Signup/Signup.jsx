import React, { useState } from "react";
import "./signup.scss";
import { FcGoogle } from "react-icons/Fc";
import welcome from "../../../../assets/welcome.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, provider } from "../../../../utils/Firebase";
import { signInWithPopup } from "firebase/auth";

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
        const res = await axios.post("http://localhost:8800/api/auth/signup", {
          name,
          email,
          password,
          phoneNo,
        });
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

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post(`http://localhost:8800/api/auth/signup`, {
            name: result.user.displayName,
            email: result.user.email,
          })
          .then((res) => {
            console.log(res);
            navigate("/signin");
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
            <button className="google" onClick={signInWithGoogle}>
              <FcGoogle />
              signup with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
