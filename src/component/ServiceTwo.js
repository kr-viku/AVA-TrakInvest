import React, { Component } from "react";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import { Reveal } from "react-reveal/";
import './ServiceTwo.css';
class ServiceTwo extends Component {
  render() {
    let { rowFlex } = this.props;
    return (
      <div className="service_area_two bg_color" id="service">
        <div className="container">
          <div className={`row align-items-center ${rowFlex}`}>
            <div className="col-lg-5">
              <div className="service_content">
                <SectionTitleTwo
                  stitle="What We do ?"
                  btitle="Easiest way to find a rockstar Virtual Assistant"
                />
                <p>
                  AVA is an intelligent marketplace, connecting best in class
                  virtual assistants with busy business leaders. Our platform
                  has over 1,000 pre screened Virtual Assistants that have been
                  hand picked to ensure best in class service.
                </p>
                <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                  <div className="row">
                    <button className="btn-serve">
                      ECommerce backend
                    </button>
                    <button className="btn-serve">
                      Social Media
                    </button>
                    <button className="btn-serve">
                      Data Entry
                    </button>
                    <button className="btn-serve">
                      Sales Outreach
                    </button>
                    <button className="btn-serve">
                      Email &amp; Calendar
                    </button>
                    <button className="btn-serve">
                      Market Research
                    </button>
                  </div>
                </div>
                <div className="book-btn-container frelencer_content">
                <Reveal effect="fadeInUp" duration={900}>
                  <a href="./" className="theme_btn active">
                  Book a consultation
                  </a>
                </Reveal>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="service_img">
                    <img src={require("../image/service.svg")} alt="" />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="service_img">
                    <img src={require("../image/service.svg")} alt="" />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="service_img">
                    <img src={require("../image/service.svg")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceTwo;
