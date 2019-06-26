import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/BasicCard.css';

class BasicCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"bacic_card_item " + (this.props.recentWinnerCard ? "recent_winner" : "")}>
                <div className="bacic_card_img">
                    <img className="img-fluid" src={this.props.designUrl} alt=""/>
                    <div className="card_left_tag" title="Contest winner">
                        <i className={"fa " + (this.props.isTrophyIcon ? "fa-trophy" : "fa-dollar")}/>
                    </div>
                    <div className="bacic_card_icon">
                        <span className="card-price">${this.props.price}</span>
                    </div>
                    {this.props.recentWinnerCard ? (
                        <div className="bacic_card_caption">
                            <div className="media align-items-center">
                                <div className="d-flex mr-3 avatar_img_div">
                                    <img src={this.props.winnerAvatarUrl} alt=""/>
                                </div>
                                <div className="media-body text-left">
                                    <h4 className="media-title">{this.props.winnerName}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bacic_card_caption d-none"/>
                    )}

                </div>
            </div>

        );
    }
}

export default BasicCard;
