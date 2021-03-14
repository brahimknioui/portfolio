import React from "react";
import author from "../author.jpeg";

const About = () => {
  return (
    <div id="About" className="container py-5 px-5">
      <div className="row">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <dvi className="img-wraper mb-5">
              {" "}
              <img src={author} alt="" className="img-profile" />
            </dvi>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About</h1>
            <p>
              Hi! I am Brahim. I have been developing websites for one year. I
              am a web developer. I am using (ReactJs, Angular, and Node.js). I
              am building responsive websites that are compatible with different
              smartphones and Desktops. It is obvious that there has to be for
              sure a draft before building a web-app, Design is a crucial part
              when it comes to building a website. I earned my diploma in
              international business, this helps me to build a profitable
              relationship with customers. I can implement different business
              tools when it comes to building a website. As an example, I can do
              a SWOT analysis, Marketing Mix, STP, and PESTEL. Those tools will
              help to understand the behavior of your customers and be a better
              competitor in the market. When the website is ready and deployed,
              this means that the product or the service is ready to be sold. it
              is always important to understand your target customer and the
              ways of communicating with them. I can help you to advertise your
              products on Facebook and Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
