import React, { Component } from "react";
import SectionTitleTwo from "../../component/Banner/SectionTitleTwo";
import Slider from "react-slick";
class PortfolioSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="portfolio_slider_area bg_color" id="portfolio">
        <div className="container">
          <SectionTitleTwo
            tCenter="text-center"
            stitle="Why Choose Us?"
            btitle="The world’s busiest trust us"
          />
          <div className="service-parent-container">
            <div className="service-cell slider-child">
              <div className="service-child-wrapper service-child-gap">
                <div className="service-child-container">
                  <span className="slider-logo-container">
                    <img src={require('./../../image/service-logo/trust.png')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container-new">
                    <p>
                      Annie has ramped up quickly to become an indispensable
                      member of our team. She has magically taken on lots of
                      responsibilities and gained our absolute trust and
                      confidence. She has freed up hours of our time which we
                      now use to tackle other key priorities.
                    </p>
                    <div className="media-container">
                      <div className="author_img">
                        <img
                          src={require("../../image/our-coaches-7.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h6>Sabrina Heng</h6>
                        <span>CEO, Online4Toys</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell slider-child">
              <div className="service-child-wrapper service-child-gap">
                <div className="service-child-container">
                  <span className="slider-logo-container">
                  <img src={require('./../../image/service-logo/medal.png')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container-new">
                    <p>
                      My dedicated VA is one of the hardest working and most
                      responsive individuals I have had the privilege to work
                      with. Her expertise in customer support has helped improve
                      our existing processes 3x and her overall support has been
                      key to scale our business during the pandemic!
                    </p>
                    <div className="media-container">
                      <div className="author_img">
                        <img
                          src={require("../../image/our-coaches-2.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h6>Jessica Leong</h6>
                        <span>CEO, ProHealthFoods</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cell slider-child">
              <div className="service-child-wrapper service-child-gap">
                <div className="service-child-container">
                  <span className="slider-logo-container">
                  <img src={require('./../../image/service-logo/cost.png')} alt="" />
                  </span>
                  <span
                    style={{ display: "block", height: "2em", width: "100%" }}
                  ></span>
                  <div className="service-name-container-new">
                    <p>
                      Hiring a VA from AVA has been one of the best investments
                      I have ever made. Their VA’s cost a fraction of someone
                      based in Singapore and I am now able to spend a great deal
                      of time working on the big picture while my assistant
                      takes care of the details.
                    </p>
                    <div className="media-container">
                      <div className="author_img">
                        <img src={require("../../image/slider2.png")} alt="" />
                      </div>
                      <div className="media-body">
                        <h6>Sam Harris</h6>
                        <span>CEO, Social Key</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Slider {...settings} className="portfolio_slider">
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../assets/images/FirstPages/microcertificates.png')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Top Notch Quality</h4></a>
                                    <a href=".#">We find and train only the best</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../assets/images/FirstPages/dig.png')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Organised &amp; Secure</h4></a>
                                    <a href=".#">Background checks and secure password-sharing tools</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../assets/images/FirstPages/accesstalent.png')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>No contractual commitments</h4></a>
                                    <a href=".#">No long term contracts, billed per usage</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../assets/images/FirstPages/Workshops.png')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Delegation made easy</h4></a>
                                    <a href=".#">Custom-built tools with in built templates</a>
                                </div>
                            </div>
                        </div>
                    </Slider> */}
        </div>
      </section>
    );
  }
}

export default PortfolioSlider;
