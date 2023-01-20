import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.svg";
import SearchMess from "../../assets/search-mess.svg";
import WhyWe from "../../assets/whywe.svg";
import "./landingpage.scss";
import { useSelector, useDispatch } from "react-redux";
import { setPin } from "../../redux-store/actions/index";
import logo from "../../assets/logo.png";
import pradipImg from "../../assets/pradip.png";
import indranilImg from "../../assets/indranil.jpg";
import dl from "../../assets/dl1.jpg";
const Landingpage = () => {
  const [pincode, setPincode] = useState("");
  const pincodeSetting = useSelector((state) => state.setCommonPincode);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="main">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <input
            type="checkbox"
            id="menu"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="menu" className="menu-btn">
            <HiMenu className="menu-btn" />
          </label>
          <ul>
            <li>
              <a href="#hero" onClick={handleCheckboxChange}>
                Home
              </a>
            </li>
            <li>
              <a href="#searchmess" onClick={handleCheckboxChange}>
                SearchMess
              </a>
            </li>
            <li>
              <a href="#whywe" onClick={handleCheckboxChange}>
                Why us
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleCheckboxChange}>
                Testimonial
              </a>
            </li>
            <li>
              <a href="#team" onClick={handleCheckboxChange}>
                About us
              </a>
            </li>
            <li>
              <Link to="/signup">
                <a className="signup">Signup </a>
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <a className="signin">Signin </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="hero">
          <h1 className="heading">
            Grow your business 10 X by digitizing your <br />
            business with mesyfeed
          </h1>
          <div className="subheading">
            <p>
              Best mess management service ,what we do is about more than money,
              it's about helping
              <br /> our clients automate there business by using tech.
            </p>

            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="signup">Register Now</button>
            </Link>

            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="hero-signup">Signup</button>
            </Link>

            <Link to="/signin" style={{ textDecoration: "none" }}>
              <button className="hero-signin">Signin</button>
            </Link>
          </div>
          <img src={hero} alt="Hero" />
        </div>
        <section id="searchmess">
          <h1 className="heading">Search Mess</h1>
          <div className="left">
            <img src={SearchMess} alt="searchmess" />
          </div>
          <div className="right">
            <h1>Search Mess</h1>
            <p>
              You can search any mess according to your area pincode, it will
              help you to find best suitable mess for you.
            </p>
            <input
              type="number"
              placeholder="Enter your area pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            {pincode && (
              <Link to={`/messList`}>
                <button onClick={() => dispatch(setPin(pincode))}>
                  Search
                </button>
              </Link>
            )}
          </div>
        </section>
        <section id="whywe">
          <div className="rightSide">
            <h1 className="heading">Why MessyFeed?</h1>
            <ul>
              <li>
                Automate tasks, save time and reduce errors with food mess
                management software like messyfeed.
              </li>
              <li>
                Enhance customer service, improve satisfaction and boost revenue
                with food mess management software.
              </li>
              <li>
                Cut costs, increase efficiency and identify profitable
                opportunities with messyfeed.
              </li>
              <li>
                Make data-driven decisions, track key metrics and optimize
                operations with messyfeed.
              </li>
            </ul>
          </div>
          <div className="leftSide">
            <img src={WhyWe} alt="whywe" />
          </div>
        </section>

        <section id="testimonials">
          <h1>Testimonials</h1>
          <p>See our users view</p>

          <div className="slide-container">
            <div className="slide">
              <h3>Sandeep More</h3>
              <p>
                "This software has made it so much easier for us to track our
                sales and analyze data. We're now able to make better decisions
                and optimize our operations."
              </p>
            </div>
            <div className="slide">
              <h3>Javed Sharma</h3>
              <p>
                "The reporting and analytics features of this software have been
                incredibly useful. It's given us valuable insights into our
                business that we never had before."
              </p>
            </div>
            <div className="slide">
              <h3>Neha Khare</h3>
              <p>
                "We have been able to streamline our data access and share
                information more easily with this software. It has improved
                coordination between different departments and helped us work
                more effectively as a team."
              </p>
            </div>
            <div className="slide">
              <h3>Soham Bansal</h3>
              <p>
                "Since implementing this software, we've seen a drastic
                reduction in labor costs and an increase in efficiency. It has
                made managing our food mess so much easier!"
              </p>
            </div>
          </div>
        </section>
        <section id="team">
          <h1>Meet Our Team</h1>
          <div className="profiles">
            <div className="team-member">
              <img src={pradipImg} alt="Pradip" />
              <p className="role">Team Member</p>
              <h3 className="name">Pradip Bedre</h3>
              <p className="desc">
                "I am a skilled software developer
                <br /> with a passion for creating innovative products
                <br /> that solve real-world problems."
              </p>
            </div>
            <div className="team-member">
              <img src={indranilImg} alt="Indranil" />
              <p className="role">Mentor</p>
              <h3 className="name">Indranil Tiwary</h3>
              <p className="desc">
                " I wish to bring a revolution in the
                <br /> field of Information & Technology with my full <br />
                integrity and enthusiasm."
              </p>
            </div>
            <div className="team-member">
              <img src={dl} alt="Dhanunjaya" />
              <p className="role">Team Member</p>
              <h3 className="name">Dhanunjaya Lakshmi</h3>
              <p className="desc dldesc">
                " Passionate about software development
                <br /> and product building, always pushing for <br />
                innovation in my work."
              </p>
            </div>
          </div>
        </section>
      </div>
      <section id="footer">
        <div className="copyright">
          <h1>Messyfeed</h1>
          <p>© Copyright 2023, All Rights Reserved | MessyFeed</p>
        </div>
        <div className="features">
          <h1>Features</h1>
          <p>Mess Management</p>
          <p>Grow Your Business</p>
        </div>
        <div className="company">
          <h1>Company</h1>
          <p>
            <Link to="/aboutUs">
              <a href="">About Us</a>
            </Link>
          </p>
          <p>
            <Link to="/aboutUs">
              <a href="">Contact Us</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
