import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out your information and give a short description about
          your project{" "}
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/****Input name****/}
            <div className="text-center">
              <input
                className="form-control"
                type="text"
                Name="name"
                placeholder="Name"
              />
              <div className="line"></div>
            </div>
            {/****Input email****/}
            <div className="text-center">
              <input
                className="form-control"
                type="text"
                Name="email"
                placeholder="email"
              />
              <div className="line"></div>
            </div>
            {/****Input phone****/}
            <div className="text-center">
              <input
                className="form-control"
                type="text"
                id="phone"
                Name="phone"
                placeholder="Phone number"
              />
              <div className="line"></div>
            </div>
          </div>

          <div className="col-md-6 col-xd-12">
            {/****Input phone****/}
            <div className="text-center">
              <input
                className="form-control"
                type="text"
                id="phone"
                Name="phone"
                placeholder="Phone number"
              />
              <div className="line"></div>
            </div>
            {/****Input phone****/}
            <div className="text-center">
              <input
                className="form-control"
                type="text"
                id="phone"
                Name="phone"
                placeholder="Phone number"
              />
              <div className="line"></div>
            </div>
            {/****textare****/}
            <div className="text-center">
              <textarea
                className="form-control"
                type="text"
                id="subject"
                Name="subject"
                placeholder="Please describe your project"
              ></textarea>
              <div className="line"></div>
            </div>

            <button className="btn-main-inb contact-btn" type="submit">
              Contact me{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
