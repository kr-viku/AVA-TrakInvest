import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
class FooterTwo extends Component {
  render() {
    let jhonData = this.props.jhonData;
    let { className } = this.props;
    return (
      <section className={`footer-area-two ${className}`}>
        <div className="container">
          {/* <div className="row footer-content">
            <img loading="lazy" src={require("./../image/Ava_logo.png")} alt="footerImage" />
          </div> */}
          <div className="row footer-content">
            <div className="col-sm-4">
              <Fade top cascade>
                <ul className="list_style">
                  {jhonData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </div>
            <div className="col-sm-8 text-right">
              <h6>
                Email :&nbsp;
                <a href="amar@ava.work">
                amar@ava.work
                </a>
              </h6>
              <p>© 2021 Ava. All Right Reserved.</p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-4">
              <Fade top cascade>
                <div className="footer-nav-container">
                  <div>
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
                  </div>
                  <div className="contact-us-container">
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
                  </div>
                  </div>
              </Fade>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}
export default FooterTwo;
