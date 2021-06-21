import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import { PopupButton } from '@typeform/embed-react'

class frelencerBanner extends Component {
  render() {
    return (
      <section className="frelencer_banner_area" id="home">
        <div className="home_bubble">
          <div className="bubble b_one"></div>
          <div className="bubble b_two"></div>
          <div className="bubble b_three"></div>
          <div className="bubble b_four"></div>
          <div className="bubble b_five"></div>
          <div className="bubble b_six"></div>
        </div>
        <Reveal effect="fadeInRight" duration={500}>
          <img
            className="s_shap"
            src={require("../../image/banner_img.svg")}
            alt=""
          />
        </Reveal>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="frelencer_content">
                <Reveal effect="fadeInUp" duration={500}>
                  <h2 className="t_color">
                    We save your time
                    <br />
                     {/* I'm Martin Solonick Independent{" "} */}
                    <span>So you can work on<br></br> what matters!</span>
                  </h2>
                </Reveal>
                <Reveal effect="fadeInUp" duration={700}>
                  <h4>
                    <span>MATCHING THE TOP 1% VIRTUAL ASSISTANTS WITH BUSY PROFESSIONALS</span>
                  </h4>
                </Reveal>
                <Reveal effect="fadeInUp" duration={900}>
                <PopupButton id="j7uZzaQO" style={{ fontSize: 20 }} className="theme_btn active">
                   Try a Virtual Assistant now!
                  </PopupButton>
                </Reveal>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="frelencer_img">
                <Reveal effect="fadeInLeft" duration={1400}>
                  <img
                    className="f_img_one"
                    src={require("../../image/f_man.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInRight" duration={1200}>
                  <img
                    className="f_img_two"
                    src={require("../../image/table.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_three"
                    src={require("../../image/cup.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_four"
                    src={require("../../image/shadow.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={2000}>
                  <div className="f_img_five">
                    <img
                      className=""
                      src={require("../../image/home-logo/socail.png")}
                      alt=""
                    />
                  </div>
                </Reveal>
                <div className="f_img_six">
                  <img
                    className=""
                    src={require("../../image/home-logo/email.png")}
                    alt=""
                  />
                </div>
                <div className="f_img_seven">
                  <img
                    className=""
                    src={require("../../image/search.png")}
                    alt=""
                  />
                </div>
                <div className="f_img_eight">
                  <img
                    className=""
                    src={require("../../image/home-logo/ecommerce.png")}
                    alt=""
                  />
                </div>
                <div className="f_img_nine">
                  <img
                    className=""
                    src={require("../../image/home-logo/dataentry.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default frelencerBanner;
