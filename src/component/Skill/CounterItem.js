import React, {Component} from 'react';

class CounterItem extends Component{
    render(){
        let {col, CText,CType,CLogo, pdescription,icon} = this.props;
        return(
            <div className={`col-md-3 col-sm-6 ${col}`}>
                 <div className="counter_item text-center wow fadeInUp" data-wow-delay="0.1s">
                    <i className={`icon-${icon}`}></i>
                    <div className="counter-container-custom">
                    <h3 className="t_color t_color_left_gap">{CType}</h3>
                    <h3 className="t_color" data-countup>{CText}</h3>
                    <h3 className="t_color t_color_gap">{CLogo}</h3>
                    </div>
                    <p>{pdescription}</p>
                </div>
            </div>
        )
    }
}
export default CounterItem;