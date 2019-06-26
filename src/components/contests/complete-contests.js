import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import '../../styles/Banner.css';
import '../../styles/contests.css';
import CatBg3 from "../../images/cat-post-3.jpg";
import CatBg2 from "../../images/cat-post-2.jpg";
import CatBg1 from "../../images/cat-post-1.webp";
import fProduct1 from "../../images/cards/card-1.gif";
import fProduct2 from "../../images/cards/card-2.png";
import fProduct3 from "../../images/cards/card-3.png";
import Favater from "../../images/profile.png";
import WOW from 'wow.js';
import ContestList from "./common/contest-list";


class completeContests extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const wow = new WOW();
        wow.init();
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className="wrapper">
                <CommonHeader/>
                <div className="contests-listing-page" id="page-content">
                    <section className="banner_area inner_page_banner">
                        <div
                            className="banner_inner inner_page_banner_inner contest_banner_bg d-flex align-items-center">
                            <div className="overlay"/>
                            <div className="container">
                                <div className="banner_content">
                                    <div className="col-lg-12">
                                        <h2 className="banner_title text-white">57,431 Design Contests Completed</h2>
                                        <p className="banner_subtitle text-white">With more than 30,000 happy customers,
                                            Design48hours is one of the top Design contest websites on the Internet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="contest_tabs_area">
                        <div className="container">
                            <ul className="nav nav-tabs contest_tabs" id="myTab" role="tablist">
                                <li className="nav-item contest-tab wow zoomIn" data-wow-offset="50"
                                    data-wow-duration="1s">
                                    <img src={CatBg3} alt="post"/>
                                    <a className="nav-link contest_tab_details active" id="completed-contests-tab"
                                       data-toggle="tab" href="#completed-contests"
                                       role="tab" aria-controls="completed-contests" aria-selected="true">
                                        <span className="contest_tab-text">Completed Contests</span>
                                        <span className="contest_tab-line"/>
                                    </a>
                                </li>

                                <li className="nav-item contest-tab wow zoomIn" data-wow-offset="50"
                                    data-wow-duration="1.5s">
                                    <img src={CatBg2} alt="post"/>
                                    <a className="nav-link contest_tab_details" id="judging-contests-tab"
                                       data-toggle="tab" href="#judging-contests"
                                       role="tab" aria-controls="judging-contests" aria-selected="false">
                                        <span className="contest_tab-text">Judging Contests</span>
                                        <span className="contest_tab-line"/>
                                    </a>
                                </li>
                                <li className="nav-item contest-tab wow zoomIn" data-wow-offset="50"
                                    data-wow-duration="2s">
                                    <img src={CatBg1} alt="post"/>
                                    <a className="nav-link contest_tab_details" id="open-contests-tab" data-toggle="tab"
                                       href="#open-contests"
                                       role="tab" aria-controls="open-contests" aria-selected="false">
                                        <span className="contest_tab-text">Open Contests</span>
                                        <span className="contest_tab-line"/>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content contest_tabs_content">

                                <div className="tab-pane fade active show" id="completed-contests" role="tabpanel"
                                     aria-labelledby="completed-contests-tab">
                                    <ul className="list-unstyled contest_listing">
                                        <ContestList
                                            // isFinalists = {true}
                                            ContestDesignUrl={fProduct1}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"

                                        />
                                        <ContestList
                                            // isFinalists = {true}
                                            ContestDesignUrl={fProduct2}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"/>
                                        <ContestList
                                            // isFinalists = {true}
                                            ContestDesignUrl={fProduct3}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"/>
                                    </ul>
                                    <div className="row justify-content-center">
                                        <div className="col-4">
                                            <button type="button" className="main_btn btn-block">Load More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="judging-contests" role="tabpanel"
                                     aria-labelledby="judging-contests-tab">
                                    <ul className="list-unstyled contest_listing">
                                        <ContestList
                                            active = {true}
                                            isFinalists={false}
                                            ContestDesignUrl={fProduct3}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"/>
                                        <ContestList
                                            isFinalists={true}
                                            ContestDesignUrl={fProduct2}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"/>
                                        <ContestList
                                            isFinalists={true}
                                            ContestDesignUrl={fProduct1}
                                            FinalistAvatar={Favater}
                                            contestName="List-based media object"
                                            contestDestription=" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus."
                                            contestPrize="100"
                                            contestEntries="500"/>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="open-contests" role="tabpanel"
                                     aria-labelledby="open-contests-tab">
                                    <ul className="list-unstyled contest_listing">

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <CommonFooter/>
            </div>
        );
    }
}

export default completeContests;
