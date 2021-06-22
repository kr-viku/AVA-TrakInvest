import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import { PopupButton } from '@typeform/embed-react'
import "./BlogTwo.css";
class BlogTwoitems extends Component {
  render() {
    let { bTitle, bDetails, btnText, bHours, image, Pdata, path } = this.props;
    return (
      <div className="col-lg-6 col-md-6">
        <div className="blog_post">
          <div className="blog_img">
            <img
              className="img-fluid"
              src={require("../../image/" + image)}
              alt=""
            />
          </div>
          <div className="post_content">
            <h2>{bTitle}</h2>
            <div className="post_content_custom">
              <div className="read_btn">
                <span className="read-btn-logo">$</span>
                <span>{btnText}</span>
                <span className="read-btn-month">/mo</span>
              </div>
            </div>
            <p><b>{bHours}</b> per week</p>
            <p>{bDetails}</p>
            <div className="frelencer_content">
              <Reveal effect="fadeInUp" duration={900}>
              <PopupButton id="RveFk1uj" style={{ fontSize: 20 }} className="theme_btn active theme_btn_custom">
                Find your perfect Match!
               </PopupButton>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogTwoitems;
