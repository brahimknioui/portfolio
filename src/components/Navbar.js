import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link smooth={true} to="" class="navbar-brand" href="#">
          Brahim Knioui <br />
          <span className="nav-sub ">Webdeveloper </span>{" "}
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "salmon" }} />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link smooth={true} to="Home" class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="About" class="nav-link" href="#">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="Services" class="nav-link" href="#">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="Experience" class="nav-link" href="#">
                experience
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="Contact" class="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
