import React from "react";
import "./about_us.scss";
import pradipImg from "../../../assets/pradip.png";
import indranilImg from "../../../assets/indranil.jpg";
import dl from "../../../assets/dl1.jpg";
const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <div>
        <div className="about-section">
          <h1>About Us</h1>
          <br />
          <p>
            We are a team of passionate individuals who have come together to
            create innovative solutions for our clients.
            <br /> Our company has been in business for over 1 years, and we
            have a proven track record of delivering high-quality products and
            services
          </p>
          <br />
          <p>
            Our mission is to help businesses of all sizes achieve their goals
            by providing them with the tools and expertise they need to succeed.
          </p>
        </div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={pradipImg} alt="pradip" style={{ width: "100%" }} />
              <div className="container">
                <h2>Pradip Bedre</h2>
                <p className="title">Team Member</p>
                <p className="desc">
                  "I am a skilled software developer with a passion for creating
                  innovative products that solve real-world problems."
                </p>
                <h4>
                  Email: <a href="">pradipbedreofficial@gmail.com</a>
                </h4>
                <div className="links">
                  <a href="https://github.com/pradipbedre">GitHub</a>
                  <a href="https://www.linkedin.com/in/pradipbedre/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={indranilImg} alt="indranil" style={{ width: "100%" }} />
              <div className="container">
                <h2>Indranil Tiwary </h2>
                <p className="title">Mentor</p>
                <p className="desc">
                  " I wish to bring a revolution in the field of Information &
                  Technology with my full integrity and enthusiasm."
                </p>
                <h4>
                  Email: <a href="">itukul@gmail.com</a>
                </h4>
                <div className="links">
                  <a href="https://github.com/indranil-tiwary">GitHub</a>
                  <a href="https://www.linkedin.com/in/indraniltiwary/">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={dl} alt="Dhunanjaya" style={{ width: "100%" }} />
              <div className="container">
                <h2>Dhanunjaya Lakshmi</h2>
                <p className="title">Team Member</p>
                <p className="desc">
                  "Passionate about software development and product building,
                  always pushing for innovation in my work."
                </p>
                <h4>
                  Email: <a href="">dhanunjaya.lakshmi60@gmail.com</a>
                </h4>
                <div className="links">
                  <a href="https://github.com/dhanunjayalakshmi">GitHub</a>
                  <a href="https://www.linkedin.com/in/dhanunjaya-lakshmi-46a32876">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
