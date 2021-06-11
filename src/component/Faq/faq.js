import React, {Component} from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';

class Faq extends Component {
    render(){
        return(
            <section className="skill_area_two bg_color" id="faq">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                <SectionTitleTwo stitle="FAQ's" btitle="Get answers about our ready-to-help freelance virtual assistants."/>
                                <h5>How many hours a week can I save?</h5>
                                <p>With AVA, you can save anywhere between 20 to 60 hours per week. You’ll save even more time than your assistant clocks in because we’re very experienced in administrative tasks and can typically handle them faster.</p>
                                <h5>What functions should I outsource to AVA first?</h5>
                                <p>Our clients (small business owners and executives) usually outsource data entry, social media management, ecommerce backend stores along with inbox and calendar management because these are sneakily time consuming tasks. When offloaded, you get time back in your day immediately. However, you can start with whatever task or project is most pressing. Learn more about what we do and book a call to talk about your specific needs.</p>
                                <h5>What if I’m too overwhelmed to train someone?</h5>
                                <p>That happens. Fortunately, we can pair you with an AVA Assistant who is already trained in the skills you need. Of course, you will have to show them the ropes of your specific business, but the good news is that they’ve already done similar work for other clients and they have a ton of experience in serving clients remotely.</p>
                                <h5>Why should I pick AVA?</h5>
                                <p>If you want to work with a smart, experienced freelance virtual assistant who is trained and ready to help you, then you should choose AVA. Our proprietary tech does an excellent job assessing our handpicked VA’s and matching them with clients. </p>
                                <h5>Can I talk to someone about my unique needs?</h5>
                                <p>Of course. We’d love to chat with you. Many of our clients prefer to have a consultation before signing up. Ask us any additional questions you might have and talk to us about your outsourcing needs so we can make sure that there will be an VA who can expertly assist you.</p>
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
export default Faq;