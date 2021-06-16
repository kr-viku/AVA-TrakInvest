import React , {Component} from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
import BlogTwoitems from '../Blog/BlogTwoitems';
import Reveal from 'react-reveal/Reveal/';
class BlogTwo extends Component{
    render(){
        return(
            <section className="blog_area_two bg_color" id="blog">
                <div className="container">
                    <SectionTitleTwo tCenter="text-center" stitle="Pricing" btitle="No contracts. Only pay for what you use."/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            <BlogTwoitems bHours="40 hours per week" bTitle="Enterpreneur Pack" bDetails="Dedicated assistant + Team Lead support" btnText="USD $750 monthly" image="post-img1.jpg" Pdata="Jan 14" path="#"/>
                            <BlogTwoitems bHours="20 hours per week" bTitle="Starter Pack" bDetails="Dedicated assistant" btnText="USD $400 monthly" image="post-img2.jpg" Pdata="Mar 30" path="#1"/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default BlogTwo;