import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";
import { Reveal } from "react-reveal/";
import { PopupButton } from "@typeform/embed-react";

class NavbarTwo extends Component {
  render() {
    var { mClass, mContainer, mainlogo, stickylogo } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            <a className="navbar-brand logo_h" href="./">
              <img src={require("../../image/" + mainlogo)} alt="" />
              <img src={require("../../image/" + stickylogo)} alt="" />
            </a>
            <a
              href="./"
              className="btn get-btn get-btn-two d-lg-none d-md-block login"
            >
              Login
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav m-auto">
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Home
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Our services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Who We Serve
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Our USP
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Satisfied Customers
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Pricing
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    FAQ's
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://forms.zohopublic.com/ava3/form/BasicSignup/formperma/YBdv9ROrgsLJ7T9VbP-j0PTFYpu-8WQQJMlmdylPQR8"
                    target="_blank"
                    className="custom-button-form"
                  >
                    Find your VA
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWEQFt8ZsKJrv6I8jvKzDMPRy_b5ukHk2cTlOQ4-p4t9estw/viewform?usp=sf_link"
                    target="_blank"
                    className="custom-button-form"
                  >
                    Sign up as a VA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default NavbarTwo;
