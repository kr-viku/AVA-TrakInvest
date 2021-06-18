import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import Form from "./Form";
class ContactTwo extends Component {
  render() {
    let contactDetails  = this.props.jhonData.contact[0].menuItems;
    // console.log( contactDetails)
    return (
      <section
        className={`contact-area contact-area-two bg_color`}
        id="contacts"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="get_info">
                <SectionTitleTwo
                  stitle="Get in Touch"
                  btitle="Talk or Meet with Us"
                />
                <div className="media get_item">
                  <i className="flaticon-phone"></i>
                  <div className="media-body">
                    <h6>Call Me Now</h6>
                    <a href=".#">{contactDetails[1].text}</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-chat"></i>
                  <div className="media-body">
                    <h6>Contact Me</h6>
                    <a href=".#">{contactDetails[2].text}</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-pin"></i>
                  <div className="media-body">
                    <h6>Get Me Here</h6>
                    <p>{contactDetails[0].text}</p>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-sound"></i>
                  <div className="media-body">
                    <h6>Listen To Me</h6>
                    <a href=".#">{contactDetails[3].text}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <SectionTitleTwo
                    stitle="Contact us"
                    btitle="Let us know how we can support you"
                  />
                  <Form />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTwo;
