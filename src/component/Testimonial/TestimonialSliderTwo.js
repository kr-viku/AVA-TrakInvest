import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSliderTwo extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider_Two">
                <div className="item">
                    <p>Annie has ramped up quickly to become an indispensable member of our team. She's fast to respond, learns quickly, and adapts at lightning speed to the needs of our company. She's seamlessly integrated herself into our team and magically taken on lots of responsibilities, which has freed up our time to tackle other priorities that we were never quite able to get to before she came along.</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/our-coaches-7.jpg')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Sabrina Heng</h6>
                            <span>CEO, Online4Toys</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <p>Hiring a VA from AVA is one of the best investments I have ever made. I've been very pleased with the results and am now able to spend a great deal of time working on the big picture while my assistant takes care of the details.</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/our-coaches-2.jpg')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Jessica Leong</h6>
                            <span>CEO, ProHealthFoods</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <p>My dedicated VA is one of the hardest working and most responsive individuals I have had the privilege to work with. And the larger AVA team is always available to jump in and support me when required. I don't know how I managed before this, thank you for helping organise my life!</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/slider2.png')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Sam Harris</h6>
                            <span>CEO, Social Key</span>
                        </div>
                    </div>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSliderTwo;