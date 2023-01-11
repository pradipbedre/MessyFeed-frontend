import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { RiProfileLine } from "react-icons/Ri";
import { CgProfile } from "react-icons/Cg";
import { BiLogOutCircle } from "react-icons/Bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggalMenu = () => setIsOpen(!isOpen);
  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <h1 className="logo">MessyFeed</h1>
        <img
          src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
          alt="user profile"
          className="user-pic"
          onClick={toggalMenu}
        />
        <div
          className="sub-menu-wrap"
          style={{
            maxHeight: isOpen ? "300px" : "0px",
          }}
        >
          <div className="sub-menu">
            <div className="user-info">
              <img
                src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
                alt=""
              />
              <h3>Pradip Bedre</h3>
            </div>
            <hr />
            <Link to="/dashboard/userProfile" className="sub-menu-links">
              <i>
                <CgProfile />
              </i>
              <p> User Profile</p>
            </Link>
            <Link to="/dashboard/messProfile" className="sub-menu-links">
              <i>
                <RiProfileLine />
              </i>
              <p> Mess Profile</p>
            </Link>
            <Link to="/" className="sub-menu-links">
              <i>
                <BiLogOutCircle />
              </i>
              <p> Logout</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
