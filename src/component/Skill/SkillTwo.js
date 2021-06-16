import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
import CounterItem from '../Skill/CounterItem';
class SkillTwo extends Component {
    componentDidMount(){
        function countup(el, target) {
            let data = { count: 0 };
            anime({
              targets: data,
              count: [0, target],
              duration: 2000,
              round: 1,
              delay: 200,
              easing: 'easeOutCubic',
              update() {
                el.innerText = data.count.toLocaleString();
              } });
          
          }
          
          function makeCountup(el) {
            const text = el.textContent;
            const target = parseInt(text, 10);
          
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                  countup(el, target);
                  io.unobserve(entry.target);
                }
              });
            });
          
            io.observe(el);
          }
          
          const els = document.querySelectorAll('[data-countup]');
          
        els.forEach(makeCountup);
    }
    render(){
        return(
            <section className="skill_area_two bg_color" id="skill">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                <SectionTitleTwo stitle="Who We Serve?" btitle="Enabling thousands of entrepreneurs be more effective."/>
                                <p>Our remote assistants have the top administrative skills and know all the best tools to get things done quickly. It's not just easier, it's cost effective too - saving you up to 90% compared to hiring an assistant full-time.</p>
                                <div className="row">
                                    <CounterItem col="col-md-6 s_item" CText='1000' pdescription='Pre Screened VA’s'/>
                                    <CounterItem col="col-md-6 s_item" CText='50000' pdescription='Hours saved'/>
                                    <CounterItem col="col-md-6 s_item" CText='500' pdescription='Happy Entrepreneurs'/>
                                    <CounterItem col="col-md-6 s_item" CText='10' pdescription='Product Partners'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <img className="fact_img" src={require('../../image/mobile.svg')} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SkillTwo;