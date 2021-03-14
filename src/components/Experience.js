import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/**:)*** **/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Cleaner</h3>
            <h4>RTK palvelu</h4>
            <h6>August 2020 - , Joensuu Finland </h6>
            <ul>
              <li type>Waxing floors</li>
              <li>
                Using different products against corona in public places like
                Trains
              </li>
              <li>Cleaning buildings,schools,restaurants</li>
            </ul>
          </div>
        </div>
        {/**:) */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Web Developer Intern</h3>
            <h4>Tovari Oy</h4>
            <h6>Feb 2020 - July 2020 - 6 Months, Joensuu Finland </h6>
            <p>
              experience Software Developer Intern Tovari Oy • I Worked closely
              with design and backend team to make sure the responsiveness,
              accessibility and performance of the web applications. • I was
              responsible to build website for clients using Wordpress and Divi.
            </p>
          </div>
        </div>
        {/**:)*** **/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Customer service coordinator</h3>
            <h4>Hotel (Kasbah Imdoukal)</h4>
            <h6>Juin 2017 - August 2017 - 2 Months, Nkob Morocco </h6>
            <p>
              {" "}
              <ul>
                <li type> Customer service coordinato</li>
                <li> Coordinating between travel agencies and the hotel</li>
                <li>Customer service, filling in information about tourists</li>
                <li>Invoicing and project managament</li>
              </ul>
            </p>
          </div>
        </div>
        {/**:)*** **/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Manager of Internet Coffee Space</h3>
            <h4>Cyber la cave</h4>
            <h6>Feb 2016 - Mai 2016 - 3 Months, Marrakech Morocco </h6>
            <p>
              • Maintenance of computers, faxing and printing papers. • Filling
              passport, contracts and dealing with municipalities. . • Providing
              students guidance to study abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
