import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
          className="Typed-text"
          strings={["Web-development", "Digital-marketing", "Googleads"]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
        <a href="" className="btn-infor">
          Contact Me
        </a>
      </div>
      <Particles
        className="Particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 8,
                color: "#0ff6e3",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Header;
