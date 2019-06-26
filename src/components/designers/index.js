import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../../styles/Banner.css';

import '../../styles/desingersListing.css';
import '../../styles/gradient.css';
import Avatar from "../../images/review-avatar1.jpg";
import CountryFlag from "../../images/elements/f1.jpg";
import fProduct1 from "../../images/cards/card-1.gif";
import fProduct2 from "../../images/cards/card-2.png";
import Masonry from 'react-masonry-component';
import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import fProduct3 from "../../images/cards/card-3.png";
import fProduct4 from "../../images/cards/card-4.jpg";
import ProfileCard from "./common/profile-card";

const masonryOptions = {
    transitionDuration: 0
};


class Designers extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="wrapper">
                {/*<div className="background gradient">*/}
                {/*<ul className="bg-bubbles">*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*<li/>*/}
                {/*</ul>*/}
                {/*</div>*/}
                <CommonHeader/>
                <div className="designers-page" id="page-content">
                    {/*// home banner section*/}
                    <section className="banner_area inner_page_banner">
                        <div className="banner_inner inner_page_banner_inner d-flex align-items-center">
                            <div className="overlay"/>
                            <div className="container">
                                <div className="banner_content row pt-0">
                                    <div className="col-lg-12">
                                        <h2 className="banner_title text-white">Professional Logo Designers Online</h2>
                                    </div>
                                </div>
                                <div className="col-6 m-auto banner-input-field">
                                    <div className="input-group-icon">
                                        <input type="text" name="address" placeholder="Search Designers"
                                               onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Search Designers'"
                                               required="" className="single-input"/>
                                        <div className="icon">
                                            <button className="genric-btn default">
                                                <i className="fa fa-search" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*// end home banner section*/}

                    <section className="bg-light profile_listing_section">
                        <div className="container">
                            <Masonry
                                className={'row'}
                                elementType={'div'}>
                                <div className="col-xl-4">
                                    <ProfileCard
                                        AvatarUrl={Avatar}
                                        CountryFlag={CountryFlag}
                                        isonline = {true}
                                        DesingerName="Charlie Barber"
                                        SubTitle="Senior blog writer"
                                        Entered="35161"
                                        Finalist="8051"
                                        Invites="4671"
                                        Sold="233"
                                        Description="Boot camps have its supporters andit sdetractors. Some people do not understand
                            why you should have to spend money on boot camp when you can get. Boot camps
                            have itssuppor ters andits detractors."
                                        PositiveRating="99"
                                        ContestWon="99"
                                    />
                                </div>
                                <div className="col-xl-4">
                                    <ProfileCard
                                        AvatarUrl={Avatar}
                                        CountryFlag={CountryFlag}
                                        DesingerName="Charlie Barber"
                                        SubTitle="Senior blog writer"
                                        Entered="35161"
                                        Finalist="8051"
                                        Invites="4671"
                                        Sold="233"
                                        Description="Boot camps have its supporters andit sdetractors. Some people do not understand
                            why you should have to spend money on boot camp when you can get. Boot camps
                            have itssuppor ters andits detractors."
                                        PositiveRating="99"
                                        ContestWon="99"
                                    />
                                </div>
                            </Masonry>
                        </div>
                    </section>
                </div>
                <CommonFooter/>
            </div>
        );
    }
}

export default Designers;
