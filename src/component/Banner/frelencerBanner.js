import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import { PopupButton } from "@typeform/embed-react";

class frelencerBanner extends Component {
  render() {
    return (
      <section className="frelencer_banner_area home-bg-color" id="home">
        {/* <div className="home_bubble">
          <div className="bubble b_one"></div>
          <div className="bubble b_two"></div>
          <div className="bubble b_three"></div>
          <div className="bubble b_four"></div>
          <div className="bubble b_five"></div>
          <div className="bubble b_six"></div>
        </div> */}
        <Reveal effect="fadeInRight" duration={500}>
          <img
            className="s_shap"
            src={require("../../image/home-logo/home2.jpeg")}
            alt=""
          />
        </Reveal>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="frelencer_content">
                <Reveal effect="fadeInUp" duration={500}>
                  <h2 className="t_color custom_color">We save your time</h2>
                </Reveal>
                <Reveal effect="fadeInUp" duration={700}>
                  <h4 className="custom_h4_color">
                    Match With Top Virtual Assistants
                    <br />
                    so you can work on what matters
                  </h4>
                </Reveal>
                <Reveal effect="fadeInUp" duration={900}>
                  <a
                    href="https://forms.zohopublic.com/ava3/form/BasicSignup/formperma/YBdv9ROrgsLJ7T9VbP-j0PTFYpu-8WQQJMlmdylPQR8"
                    target="_blank"
                    className="theme_btn active"
                  >
                    Hire A Virtual Assistant!
                  </a>
                </Reveal>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="frelencer_img"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default frelencerBanner;
