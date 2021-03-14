import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  return (
    <div id="Services" className="services">
      <h1 className="py-5 text-center">Services</h1>
      <div className="container">
        <div className="row">
          {/**** col-1**** */}
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="icon"
                  size="2x"
                />
              </div>
              <h3>Facebook ads</h3>
              <p>
                You will get a big customer base through the visibility of your
                webiste on social media{" "}
              </p>
            </div>
          </div>
          {/**** col-2**** */}
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} className="icon" size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                {" "}
                You can provide your own design and we will make it the way you
                want, or you can get customized design according your
                preferences
              </p>
            </div>
          </div>
          {/****col-6****/}
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle} className="icon" size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                {" "}
                Your website will have a great performance because it will be
                built with cutting-edge technologies.
              </p>
            </div>
          </div>
          {/**** col-4**** */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="icon"
                  size="2x"
                />
              </div>
              <h3>Business Consulting</h3>
              <p>
                {" "}
                Your website will have a great performance because it will be
                built with cutting-edge technologies.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
