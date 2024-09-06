import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="navbar ">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{ cursor: "pointer" }}
          className="home1"
        >
          Home
        </Link>
        <div className="navcontent" id="navlistitem">
          <Link
            to="Mousemain"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            style={{ cursor: "pointer" }}
            className="about1"
            id="navlistitem"
          >
            About
          </Link>
          <Link
            to="Horizontal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            style={{ cursor: "pointer" }}
            className="projects1"
            id="navlistitem"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            style={{ cursor: "pointer" }}
            className="contact1"
            id="navlistitem"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="navmobile">
        <MenuIcon
          onClick={() => {
            setShow(!show);
          }}
        />
        <div style={{ display: show ? "flex" : "none" }} className="mobileview">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="home2"
            onClick={() => {
              setShow(!show);
            }}
          >
            Home
          </Link>

          <hr></hr>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="about2"
            onClick={() => {
              setShow(!show);
            }}
          >
            about
          </Link>
          <hr></hr>
          <Link
            to="Horizontal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="project2"
            onClick={() => {
              setShow(!show);
            }}
          >
            project
          </Link>
          <hr></hr>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="contact2"
            onClick={() => {
              setShow(!show);
            }}
          >
            contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
