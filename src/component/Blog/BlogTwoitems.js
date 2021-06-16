import React, { Component } from "react";
import { Reveal } from "react-reveal/";
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
            {/* <div className="blog-meta">
                            <span>
                                <i className="icon_tags_alt"></i>
                                BY : Tasnim
                            </span>
                            <span>
                                <i className="icon_chat_alt"></i>
                                <a href="/#">0 comment</a>
                            </span>
                        </div> */}
            <a href="/#">
              <h2>{bTitle}</h2>
            </a>
            <a href="/#" className="read_btn">
              {btnText}
            </a>
            <p>{bHours}</p>
            <p>{bDetails}</p>
            <div className="frelencer_content">
              <Reveal effect="fadeInUp" duration={900}>
                <a href={path} className="theme_btn active theme_btn_custom">
                Get started now
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogTwoitems;
