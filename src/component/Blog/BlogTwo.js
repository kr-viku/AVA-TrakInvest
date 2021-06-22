import React , {Component} from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
import BlogTwoitems from '../Blog/BlogTwoitems';
import Reveal from 'react-reveal/Reveal/';
class BlogTwo extends Component{
    render(){
        return(
            <section className="blog_area_two " id="blog">
                <div className="container">
                    <SectionTitleTwo tCenter="text-center" stitle="Pricing" btitle="No contracts. Only pay for what you use."/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            <BlogTwoitems bHours="40 hours" bTitle="Enterpreneur Pack" bDetails="Dedicated assistant + Team Lead support" btnText="750" image="price-img/cost1.webp" Pdata="Jan 14" path="#"/>
                            <BlogTwoitems bHours="20 hours" bTitle="Starter Pack" bDetails="Dedicated assistant" btnText="400" image="price-img/cost3.jpg" Pdata="Mar 30" path="#1"/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default BlogTwo;