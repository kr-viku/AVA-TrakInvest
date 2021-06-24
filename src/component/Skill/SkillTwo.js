import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import SectionTitleTwo from "../../component/Banner/SectionTitleTwo";
import CounterItem from "../Skill/CounterItem";
class SkillTwo extends Component {
  componentDidMount() {
    function countup(el, target) {
      let data = { count: 0 };
      anime({
        targets: data,
        count: [0, target],
        duration: 2000,
        round: 1,
        delay: 200,
        easing: "easeOutCubic",
        update() {
          el.innerText = data.count.toLocaleString();
        },
      });
    }

    function makeCountup(el) {
      const text = el.textContent;
      const target = parseInt(text, 10);

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            countup(el, target);
            io.unobserve(entry.target);
          }
        });
      });

      io.observe(el);
    }

    const els = document.querySelectorAll("[data-countup]");

    els.forEach(makeCountup);
  }
  render() {
    return (
      <section className="skill_area_two bg_color" id="skill">
        <div className="container">
          <div className="skill_content_two text-center">
            <SectionTitleTwo
              // stitle="Who We Serve?"
              btitle="Enabling Busy Entrepreneurs Be More Effective"
            />
            <p className="skill_content_gap">
              Leaders across the world's best companies are already using AVA.
            </p>
            <div className="container">
              <div className="company-logo-row skill_content_gap">
                <span className="company-logo-container">
                  <img
                    src={require("./../../image/company-img/google1.png")}
                    alt=""
                  />
                </span>
                <span className="company-logo-container company-img-gap">
                  <img
                    src={require("./../../image/company-img/bloomberg-logo-transparent.png")}
                    alt=""
                  />
                </span>
                <span className="company-logo-container">
                  <img
                    src={require("./../../image/company-img/conviva-logo.svg")}
                    alt=""
                  />
                </span>
              </div>
              <div className="company-logo-row skill_content_gap">
                <span className="company-logo-container">
                  <img
                    src={require("./../../image/company-img/acc2.png")}
                    alt=""
                  />
                </span>
                <span className="company-logo-container company-img-gap">
                  <img
                    className="company-logo-custom"
                    src={require("./../../image/company-img/ef.png")}
                    alt=""
                  />
                </span>
                <span className="company-logo-container">
                  <img
                    src={require("./../../image/company-img/Antler.svg")}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="row">
              <CounterItem
                col="col-md-6 s_item"
                CText="69"
                CLogo="Days"
                pdescription="Saved annually by hiring a VA"
              />
              <CounterItem
                col="col-md-6 s_item"
                CText="50"
                CLogo="K"
                pdescription="Saved annually by hiring remotely"
              />
              {/* <CounterItem col="col-md-6 s_item" CText='500' CLogo="+" pdescription='Happy Entrepreneurs'/>
                                    <CounterItem col="col-md-6 s_item" CText='10' pdescription='Product Partners'/> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SkillTwo;
