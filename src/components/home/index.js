import React, {Component} from 'react';
import '../../styles/Banner.css';
import '../../styles/home.css';
import '../../styles/BasicCard.css';
import fProduct1 from "../../images/cards/card-1.gif";
import fProduct2 from "../../images/cards/card-2.png";
import fProduct3 from "../../images/cards/card-3.png";
import fProduct4 from "../../images/cards/card-4.jpg";
import fProduct5 from "../../images/product/feature-product/f-p-1.jpg";
import Avatar from "../../images/review-avatar1.jpg";
import WOW from 'wow.js';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import DetailModal from "./partials/detail-modal";
import BasicCard from "../common/basic-card";
import TestimoialCard from "./common/testimoial-card";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }

    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
            // isHidden: false
        })
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
                <div className="homepage" id="page-content">

                    {/*// home banner section*/}

                    <section className="banner_area home_banner_area">
                        <div className="banner_inner home_banner_inner d-flex align-items-center">
                            <div className="overlay"/>
                            <div className="container">
                                <div className="banner_content text-center">
                                    <h2 className="banner_title"> Easy, Fast, and Affordable Idea Design Contest</h2>
                                    <p className="banner_subtitle"> 48hourslogo is simply the fastest, easiest and most
                                        affordable logo crowsourcing
                                        website. With contest prize starting at just $99, more than 40,000 small
                                        businesses
                                        and entrepreneurs have used our amazing logo design service.</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                                        <div className="wow fadeIn text-center" data-wow-offset="50"
                                             data-wow-duration="0.5s">
                                            <i className="fa fa-edit fa-4x text-danger mb-2"/>
                                            <p className="text-center">1. Post a design brief</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                                        <div className="wow fadeIn text-center" data-wow-offset="50"
                                             data-wow-duration="0.8s">
                                            <i className="fa fa-lightbulb-o fa-4x text-danger mb-2"/>
                                            <p className="text-center">2. Receive 20+ Idea concepts</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wow fadeIn text-center" data-wow-offset="50"
                                             data-wow-duration="1.5s">
                                            <i className="fa fa-trophy  fa-4x text-danger mb-2"/>
                                            <p className="text-center">1. Choose the best</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <a href={'#'} className="genric-btn danger radius btn-block">Post your project
                                            now
                                            <i className="fa fa-angle-right ml-2"/></a>
                                    </div>
                                </div>


                            </div>
                            {/*<div className="container">*/}
                            {/*<div className="banner_content row pt-0">*/}
                            {/*<div className="col-lg-12">*/}
                            {/*<h3>Affordable Logo Designs <br/>Done Fast… </h3>*/}
                            {/*<p>"Start an online logo design contest for only $29 and receive logo concepts*/}
                            {/*within hours!"</p>*/}
                            {/*<a className="genric-btn danger e-large banner_bg_btn" href="#">Get Your Logos<i*/}
                            {/*className="fa fa-angle-right ml-2"></i></a>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </section>

                    {/*// end home banner section*/}

                    <section className="recent_contests_winner_section">
                        <div className="main_box common_white_box">
                            <div className="container">
                                <div className="main_title">
                                    <h2 className="h2_big text-yellow"> Congratulations </h2>
                                    <h2>
                                        <i className="fa fa-trophy text-warning mr-2 text-yellow"/>Recent Contests
                                        Winners
                                        <i className="fa fa-trophy text-warning ml-2 text-yellow"/>
                                    </h2>
                                    <p>48hourslogo is simply the fastest,
                                        easiest and most affordable logo crowsourcing website. With contest prize
                                        starting at
                                        just $99, more than 40,000 small businesses and entrepreneurs have used our
                                        amazing logo
                                        design service.</p>
                                </div>
                                <div className="row recent_winner_inner">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <BasicCard
                                            designUrl={fProduct1}
                                            winnerAvatarUrl={Avatar}
                                            winnerName="Blake Ruiz"
                                            isTrophyIcon={true}
                                            recentWinnerCard={true}
                                            price="200"/>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <BasicCard
                                            designUrl={fProduct1}
                                            winnerAvatarUrl={Avatar}
                                            winnerName="Blake Ruiz Ruiz"
                                            isTrophyIcon={true}
                                            recentWinnerCard={true}
                                            price="100"/>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <BasicCard
                                            designUrl={fProduct1}
                                            winnerAvatarUrl={Avatar}
                                            winnerName="Blake Blake Blake"
                                            isTrophyIcon={true}
                                            recentWinnerCard={true}
                                            price="50"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*Count Staties Area */}

                    <section className="count_area">
                        <div className="container">
                            <div className="main_title">
                                <h2> Million Logos Submitted by Our Designers!</h2>
                                <p> Web Designers? Outsource Your Logo Design With 48hourslogo</p>
                                <a className="main_btn" href="#">Learn More</a>
                            </div>
                            <div className="count_inner">
                                <div id="timer" className="counter_wrapper">
                                    <div className="counter__section days wow fadeInUp" data-wow-offset='50'
                                         data-wow-delay='0.5s'>
                                        <div className="counter__number"><CountUp start={0} end={30} delay={.5}/></div>
                                        <div className="counter__label">New Contests Today</div>
                                    </div>
                                    <div className="counter__section hours wow fadeInUp" data-wow-offset='50'
                                         data-wow-delay='0.8s'>
                                        <div className="counter__number"><CountUp start={0} end={100} delay={.5}/></div>
                                        <div className="counter__label">Open Contests</div>
                                    </div>
                                    <div className="counter__section minutes wow fadeInUp" data-wow-offset='50'
                                         data-wow-delay='1s'>
                                        <div className="counter__number"><CountUp start={0} end={57097} delay={.5}/>
                                        </div>
                                        <div className="counter__label">Contests to Date</div>
                                    </div>
                                    <div className="counter__section seconds wow fadeInUp" data-wow-offset='50'
                                         data-wow-delay='1.2s'>
                                        <div className="counter__number">$<CountUp start={0} end={67183} delay={.5}/>
                                        </div>
                                        <div className="counter__label">Payout Last Month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*End Deal Timer Area */}


                    {/*Tabs section */}

                    <section className="tabs_section">
                        <div className="main_box common_white_box">
                            <div className="container">
                                {/*<div className="main_title">*/}
                                {/*<h2>Latest Products</h2>*/}
                                {/*<p>Who are in extremely love with eco friendly system.</p>*/}
                                {/*</div>*/}
                                <ul className="home-tabs nav nav-tabs nav-pills nav-justified mb-5" id="myTab"
                                    role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#recent-contests"
                                           role="tab" aria-controls="recent-contests" aria-selected="true">Recent
                                            Contests</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#consulting"
                                           role="tab" aria-controls="consulting" aria-selected="false">Consulting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#internet"
                                           role="tab" aria-controls="internet" aria-selected="false">Internet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#restaurant"
                                           role="tab" aria-controls="restaurant" aria-selected="false">Restaurant</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#technology"
                                           role="tab" aria-controls="technology" aria-selected="false">Technology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#internet">More</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="recent-contests" role="tabpanel"
                                         aria-labelledby="recent-contests-tab">
                                        <div className="feature_product_inner row">
                                            <div className="col-lg-3 col-md-4 col-sm-6" onClick={this.toggleHidden.bind(this)}>
                                                <BasicCard
                                                    designUrl={fProduct1}
                                                    isTrophyIcon={true}
                                                    price="200"
                                                />

                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6" data-toggle="modal"
                                                 data-target="#detailModal">
                                                <BasicCard
                                                    designUrl={fProduct2}
                                                    isTrophyIcon={false}
                                                    price="100"
                                                />
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <BasicCard
                                                    designUrl={fProduct3}
                                                    isTrophyIcon={false}
                                                    price="100"
                                                />
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <BasicCard
                                                    designUrl={fProduct4}
                                                    isTrophyIcon={false}
                                                    price="100"
                                                />
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <BasicCard
                                                    designUrl={fProduct5}
                                                    isTrophyIcon={false}
                                                    price="100"
                                                />
                                            </div>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <div className='col-4'>
                                                <button type='button' className="main_btn btn-block">
                                                    Load More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="consulting" role="tabpanel"
                                         aria-labelledby="consulting-tab">
                                        <div className="feature_product_inner">

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="internet" role="tabpanel"
                                         aria-labelledby="internet-tab">
                                        <div className="feature_product_inner">

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="restaurant" role="tabpanel"
                                         aria-labelledby="restaurant-tab">
                                        <div className="feature_product_inner">

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="technology" role="tabpanel"
                                         aria-labelledby="technology-tab">
                                        <div className="feature_product_inner">
                                            technology
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/*End Tabs section*/}


                    {/*logo designs industry */}

                    <section className="industry_logo_area">
                        <div className="container">
                            <div className="main_title">
                                <h2> Logo Designs By Industry </h2>
                            </div>
                            <ul className="list-inline industry-logo-area wow fadeInUp" data-wow-offset='20'
                                data-wow-delay='0.5s'>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Accounting <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Automotive <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Beauty <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Construction <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Consulting <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Education <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Entertainment <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Events <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Financial Insurance <span
                                        className="count">(707)</span>
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Home Garden <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Internet <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Legal <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Manufacturing Wholesale <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Media <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Medical Dental <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Natural Resources <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Nonprofit <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Real Estate <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Religious <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Restaurant <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Retail <span className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Sports Recreation <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Technology <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="genric-btn danger-border radius">
                                        <span className="plus"> + </span> Travel Hospitality <span
                                        className="count">(707)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/*End logo designs industry */}

                    {/*start video section */}

                    <section className="video_section">
                        <div className="main_box common_white_box">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                                        <div className="main_title">
                                            <h2> Hear Why You Want to Design Your Business Logo with Us.</h2>
                                        </div>
                                        <ol className="video_section_ol">
                                            <li>More Logos for Your Money</li>
                                            <li>We Keep It Simple & Fun</li>
                                            <li>Only $29 to Launch A Contest</li>
                                        </ol>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                        <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/Zztt99A_x4E"
                                                frameBorder="0" allowFullScreen=""></iframe>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>

                    {/*End start video section*/}

                    {/*testimonial section */}

                    <section className="testimonal_section">
                        <div className="testimonal_inner d-flex align-items-center">
                            <div className="overlay"/>
                            <div className="container">
                                <div className="main_title">
                                    <h2> What People Are Saying About 48hourslogo </h2>
                                    <p>
                                        <div className="d-inline-block rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star-half-o"/>
                                        </div>
                                        4.9 (out of 5) overall rating from 15575 customers
                                    </p>
                                </div>
                                <OwlCarousel
                                    className="feature_p_slider owl-carousel owl-theme"
                                    loop
                                    margin={10}
                                    nav>
                                    <div className="item">
                                        <TestimoialCard
                                            AvatarUrl={Avatar}
                                            designUrl={fProduct1}
                                            testimoinal="I like how 48hourslogo keeps it simple, fun, and most importantly
                                                affordable for solopreneurs like myself"
                                            time="1-10-2019"
                                        />
                                    </div>
                                    <div className="item">
                                        <TestimoialCard
                                            AvatarUrl={Avatar}
                                            designUrl={fProduct2}
                                            testimoinal="I like how 48hourslogo keeps it simple, fun, and most importantly
                                                affordable for solopreneurs like myself"
                                            time="2-10-2019"
                                        />
                                    </div>
                                    <div className="item">
                                        <TestimoialCard
                                            AvatarUrl={Avatar}
                                            designUrl={fProduct3}
                                            testimoinal="I like how 48hourslogo keeps it simple, fun, and most importantly
                                                affordable for solopreneurs like myself"
                                            time="3-10-2019"
                                        />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </section>

                    {/*End testimonial section */}

                </div>
                <CommonFooter/>
                {!this.state.isHidden && <DetailModal />}
                {/*<DetailModal/>*/}
            </div>


        );
    }
}

export default Home;
