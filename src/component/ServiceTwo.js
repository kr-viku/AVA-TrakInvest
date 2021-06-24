import React, { Component } from "react";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import { Reveal } from "react-reveal/";
import "./ServiceTwo.css";
class ServiceTwo extends Component {
  render() {
    return (
      <div className="service_area_two" id="service">
        <div className="container">
          <SectionTitleTwo
            // stitle="Our Services"
            btitle="Our rockstar Virtual Assistants are experts at"
            tCenter="text-center"
          />
          <div className="service-parent-container">
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                    <img src={require('./../image/service-logo/inbox.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                      Inbox Management
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/data.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>Data Entry</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/sales.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                      Sales Outreach
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/admin.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                      Admin Support
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/socail.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                    Social Media Management 
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/customer.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                      Customer Service Support
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/cart.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>
                      E-Commerce Store Management
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell service-child">
              <div className="service-child-wrapper">
                <div className="service-child-container">
                  <span className="service-logo-container">
                  <img src={require('./../image/service-logo/research.svg')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container">
                    <h6 style={{ padding: "0px !important" }}>Market Research</h6>
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
