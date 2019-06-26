import React, {Component} from 'react';
import '../../../styles/ProfileCard.css';

const SocialIcons = ["fa fa-facebook", "fa fa-twitter", "fa fa-github", "fa fa-behance"];

function SocialList(props) {
    return (
        <div>
            <div className="social_icon">{SocialIcons.map(SocialIcon => <a href="#">
                <i className={SocialIcon}/></a>)}
            </div>
        </div>
    );

}

class ProfileCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="card profile_card shadow masonry_profile_card">
                <div className="card-content">
                    <div className="profile_avatar">
                        <img className="author_img rounded-circle"
                             src={this.props.AvatarUrl} alt=""/>
                        <span className={"dot " + (this.props.isonline ? "online" : "offline")}/>
                    </div>
                    <h4>
                        {this.props.DesingerName}
                        <div className="country_flag_div">
                            <img src={this.props.CountryFlag} alt="" className="d-inline-block"/>
                        </div>
                    </h4>
                    <p className="sub-title">{this.props.SubTitle}</p>
                    <SocialList/>
                    <p className="tj">
                        <span className="cate">Entered:</span>
                        <span className="num">{this.props.Entered}</span>
                        <span className="cate"> | Finalist:</span>
                        <span className="num">{this.props.Finalist}</span>
                        <span className="cate"> | Invites:</span>
                        <span className="num">{this.props.Invites}</span>
                        <span className="cate"> | Sold:</span>
                        <span className="num">{this.props.Sold}</span>
                    </p>
                    <p>{this.props.Description}</p>
                    <div className="row no-gutters card_rating_section">
                        <div className="col-6">
                            <p><b>{this.props.PositiveRating}</b></p>
                            <p className="text-uppercase">POSITIVE RATING</p>
                        </div>
                        <div className="col-6">
                            <p><b>{this.props.ContestWon}</b></p>
                            <p className="text-uppercase">CONTESTS WON</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
