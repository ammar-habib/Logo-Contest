import React, {Component} from 'react';

class TestimoialCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="f_p_item testimoial_card">
                <div className="f_p_img">
                    <img className="img-fluid" src={this.props.designUrl} alt=""/>
                </div>
                <div className="comment">
                    <img src={this.props.AvatarUrl} className="avatar"/>
                    <i className="fa fa-quote-left"/>
                    {this.props.testimoinal}
                    <i className="fa fa-quote-right"/>
                </div>
                <div className="d-inline-block rating btmrating">
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                </div>
                <time> {this.props.time}</time>
            </div>

        );
    }
}

export default TestimoialCard;
