import React, {Component} from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
import Slider from 'react-slick';
class PortfolioSlider extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            pauseOnHover:true,
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
                    dots: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return(
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <SectionTitleTwo tCenter="text-center" stitle="Why Choose Us?" btitle="We match your needs."/>
                    <Slider {...settings} className="portfolio_slider">
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
                    </Slider>
                </div>
            </section>
        )
    }
}

export default PortfolioSlider;