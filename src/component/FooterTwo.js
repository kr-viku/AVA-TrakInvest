import React, { Component } from "react";
import Fade from "react-reveal/Fade";
class FooterTwo extends Component {
  render() {
    let jhonData = this.props.jhonData;
    let { className } = this.props;
    return (
      <section className={`footer-area-two ${className}`}>
        <div className="container">
          <div className="row footer-content">
            <div className="col-sm-4">
              <Fade top cascade>
                <ul className="list_style">
                  {jhonData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </div>
            <div className="col-sm-8 text-right">
              <h6>
              Email :&nbsp; 
                <a href="amarbedi86@gmail.com">
                 amarbedi86@gmail.com
                </a>
              </h6>
              <p>© 2015-2016 Ava. All Right Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FooterTwo;
