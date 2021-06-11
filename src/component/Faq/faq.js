import { data } from "isotope-layout";
import React, { Component } from "react";
import SectionTitleTwo from "../../component/Banner/SectionTitleTwo";
import "./Faq.scss";
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
        q1: true,
        q2: true,
        q3: true,
        q4: true,
        q5: true,
        collapse1: true,
        collapse2: true,
        collapse3: true,
        collapse4: true,
        collapse5: true,
    };
    this.toggleClass1.bind(this);
    this.toggleClass2.bind(this);
    this.toggleClass3.bind(this);
    this.toggleClass4.bind(this);
    this.toggleClass5.bind(this);
  }

  toggleClass1 = (e) => {
    const currentState = this.state.q1;
    const prevCollapse = this.state.collapse1;
    this.setState({ collapse1: !prevCollapse });
    this.setState({ q1: !currentState });
  };

  toggleClass2 = (e) => {
    const currentState = this.state.q2;
    const prevCollapse = this.state.collapse2;
    this.setState({ collapse2: !prevCollapse });
    this.setState({ q2: !currentState });
  };

  toggleClass3 = (e) => {
    const currentState = this.state.q3;
    const prevCollapse = this.state.collapse3;
    this.setState({ collapse3: !prevCollapse });
    this.setState({ q3: !currentState });
  };

  toggleClass4 = (e) => {
    const currentState = this.state.q4;
    const prevCollapse = this.state.collapse4;
    this.setState({ collapse4: !prevCollapse });
    this.setState({ q4: !currentState });
  };

  toggleClass5 = (e) => {
    const currentState = this.state.q5;
    const prevCollapse = this.state.collapse5;
    this.setState({ collapse5: !prevCollapse });
    this.setState({ q5: !currentState });
  };

  render() {
    return (
      <section className="faq_area_two" id="faq">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg">
              <div className="skill_content_two">
                <SectionTitleTwo
                  stitle="FAQ's"
                  btitle="Get answers about our ready-to-help freelance virtual assistants."
                />
                  
                <ul class="faq">
                  <li onClick={this.toggleClass1}>
                    <h3 class="question">
                      How many hours a week can I save?
                      <div
                        class={
                          this.state.collapse1
                            ? "plus-minus-toggle collapsed"
                            : "plus-minus-toggle"
                        }
                      ></div>
                    </h3>
                    <div class={this.state.q1 ? "answer" : null}>
                      With AVA, you can save anywhere between 20 to 60 hours per
                      week. You’ll save even more time than your assistant
                      clocks in because we’re very experienced in administrative
                      tasks and can typically handle them faster.
                    </div>
                  </li>
                  <li onClick={this.toggleClass2}>
                    <h3 class="question">
                      What functions should I outsource to AVA first?
                      <div
                        class={
                          this.state.collapse2
                            ? "plus-minus-toggle collapsed"
                            : "plus-minus-toggle"
                        }
                      ></div>
                    </h3>
                    <div class={this.state.q2 ? "answer" : null}>
                      Our clients (small business owners and executives) usually
                      outsource data entry, social media management, ecommerce
                      backend stores along with inbox and calendar management
                      because these are sneakily time consuming tasks. When
                      offloaded, you get time back in your day immediately.
                      However, you can start with whatever task or project is
                      most pressing. Learn more about what we do and book a call
                      to talk about your specific needs.
                    </div>
                  </li>
                  <li onClick={this.toggleClass3}>
                    <h3 class="question">
                      What if I’m too overwhelmed to train someone?
                      <div
                        class={
                          this.state.collapse3
                            ? "plus-minus-toggle collapsed"
                            : "plus-minus-toggle"
                        }
                      ></div>
                    </h3>
                    <div class={this.state.q3 ? "answer" : null}>
                      That happens. Fortunately, we can pair you with an AVA
                      Assistant who is already trained in the skills you need.
                      Of course, you will have to show them the ropes of your
                      specific business, but the good news is that they’ve
                      already done similar work for other clients and they have
                      a ton of experience in serving clients remotely.
                    </div>
                  </li>
                  <li onClick={this.toggleClass4}>
                    <h3 class="question">
                      Why should I pick AVA?
                      <div
                        class={
                          this.state.collapse4
                            ? "plus-minus-toggle collapsed"
                            : "plus-minus-toggle"
                        }
                      ></div>
                    </h3>
                    <div class={this.state.q4 ? "answer" : null}>
                      If you want to work with a smart, experienced freelance
                      virtual assistant who is trained and ready to help you,
                      then you should choose AVA. Our proprietary tech does an
                      excellent job assessing our handpicked VA’s and matching
                      them with clients.{" "}
                    </div>
                  </li>
                  <li onClick={this.toggleClass5}>
                    <h3 class="question">
                      Can I talk to someone about my unique needs?
                      <div
                        class={
                          this.state.collapse5
                            ? "plus-minus-toggle collapsed"
                            : "plus-minus-toggle"
                        }
                      ></div>
                    </h3>
                    <div class={this.state.q5 ? "answer" : null}>
                      Of course. We’d love to chat with you. Many of our clients
                      prefer to have a consultation before signing up. Ask us
                      any additional questions you might have and talk to us
                      about your outsourcing needs so we can make sure that
                      there will be an VA who can expertly assist you.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Faq;
