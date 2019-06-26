import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../../styles/profile.css';
import Avatar from "../../images/review-avatar1.jpg";
import CountryFlag from "../../images/elements/f1.jpg";
import fProduct1 from "../../images/cards/card-1.gif";
import fProduct2 from "../../images/cards/card-2.png";
import fProduct3 from "../../images/cards/card-3.png";
import fProduct4 from "../../images/cards/card-4.jpg";


class ProfileOld extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        $(".filter-button").click(function () {
            let value = $(this).attr('data-filter');
            if (value == "all") {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="profile-page">

                <section className="bg-light profile_card_section">
                    <div className="container">
                        <div className="main_title">
                            <h2> Designer Profile Detail</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <aside className="profile_card shadow">
                                    <div className="profile_avatar">
                                        <img className="author_img rounded-circle"
                                             src={Avatar} alt=""/>
                                        <span className="dot online"></span>
                                    </div>
                                    <h4>
                                        Charlie Barber
                                        <div className="country_flag_div">
                                            <img src={CountryFlag} alt="" className="d-inline-block"/>
                                        </div>
                                    </h4>
                                    <p>Senior blog writer</p>
                                    <div className="social_icon">
                                        <a href="#"><i className="fa fa-facebook"/></a>
                                        <a href="#"><i className="fa fa-twitter"/></a>
                                        <a href="#"><i className="fa fa-github"/></a>
                                        <a href="#"><i className="fa fa-behance"/></a>
                                    </div>
                                    <p className="tj">
                                        <span className="cate">Entered:</span>
                                        <span className="num">35161</span>
                                        <span className="cate"> | Finalist:</span>
                                        <span className="num">8051</span>
                                        <span className="cate"> | Invites:</span>
                                        <span className="num">4671</span>
                                        <span className="cate"> | Sold:</span>
                                        <span className="num">233</span>
                                    </p>
                                    <p>Boot camps have its supporters andit sdetractors. Some people do not understand
                                        why you should have to spend money on boot camp when you can get. Boot camps
                                        have itssuppor ters andits detractors.</p>
                                    <div className="row no-gutters card_rating_section">
                                        <div className="col-6">
                                            <p><b>99%</b></p>
                                            <p className="text-uppercase">POSITIVE RATING</p>
                                        </div>
                                        <div className="col-6">
                                            <p><b>99%</b></p>
                                            <p className="text-uppercase">CONTESTS WON</p>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-8">
                                <div className="profile-tabs">
                                    <div className="filter-button-row btn-group">
                                        <button className="btn genric-btn danger-border filter-button"
                                                data-filter="all">All
                                        </button>
                                        <button className="btn genric-btn danger-border filter-button"
                                                data-filter="recent-contests">Recent Contests
                                        </button>
                                        <button className="btn genric-btn danger-border filter-button"
                                                data-filter="portfolio">Portfolio
                                        </button>
                                    </div>
                                    <div className="fillter_tabs_contents">
                                        <div className="card-columns mb-5">
                                            <div className="card filter recent-contests">
                                                <div className="bacic_card_item">
                                                    <div className="bacic_card_img">
                                                        <img className="img-fluid" src={fProduct1} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card filter portfolio">
                                                <div className="bacic_card_item">
                                                    <div className="bacic_card_img">
                                                        <img className="img-fluid" src={fProduct2} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card filter portfolio">
                                                <div className="bacic_card_item">
                                                    <div className="bacic_card_img">
                                                        <img className="img-fluid" src={fProduct2} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card filter recent-contests">
                                                <div className="bacic_card_item">
                                                    <div className="bacic_card_img">
                                                        <img className="img-fluid" src={fProduct2} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card filter portfolio">
                                                <div className="bacic_card_item">
                                                    <div className="bacic_card_img">
                                                        <img className="img-fluid" src={fProduct1} alt=""/>
                                                    </div>
                                                </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*// Start stats section*/}

                {/*<section className="stats_section">*/}
                    {/*<div className="main_box common_white_box">*/}
                        {/*<div className="container">*/}
                            {/*<div className="main_title">*/}
                                {/*<h2>*/}
                                   {/*jaize's Contest Performance(Mar.2018-Feb.2019)*/}
                                {/*</h2>*/}
                            {/*</div>*/}
                            {/*<div className="stats_lists_wrap">*/}
                                {/*<div className="row stats_list">*/}
                                    {/*<div className="col-2">*/}
                                        {/*<p className="mb-0"><strong>2</strong></p>*/}
                                        {/*<p className="mb-0">2019</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-10">*/}
                                        {/*<div className="stats_header">*/}
                                            {/*<span className="num">9%</span> Success*/}
                                            {/*<span className="split">|</span>*/}
                                            {/*Entered <span className="num">224</span>*/}
                                            {/*<span className="split">|</span>*/}
                                            {/*Won <span className="num">18</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="card-columns">*/}
                                            {/*<div className="card">*/}
                                                {/*<img className="card-img-top" src={fProduct1} alt="Card image cap"/>*/}
                                                    {/*<div className="card-body">*/}
                                                        {/*<h5 className="card-title">Card title that wraps to a new*/}
                                                            {/*line</h5>*/}
                                                        {/*<p className="card-text">This is a longer card with supporting*/}
                                                            {/*text below as a natural lead-in to additional content. This*/}
                                                            {/*content is a little bit longer.</p>*/}
                                                    {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="card p-3">*/}
                                                {/*<blockquote className="blockquote mb-0 card-body">*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer*/}
                                                        {/*posuere erat a ante.</p>*/}
                                                    {/*<footer className="blockquote-footer">*/}
                                                        {/*<small className="text-muted">*/}
                                                            {/*Someone famous in <cite title="Source Title">Source*/}
                                                            {/*Title</cite>*/}
                                                        {/*</small>*/}
                                                    {/*</footer>*/}
                                                {/*</blockquote>*/}
                                            {/*</div>*/}
                                            {/*<div className="card">*/}
                                                {/*<img className="card-img-top" src={fProduct2} alt="Card image cap"/>*/}
                                                    {/*<div className="card-body">*/}
                                                        {/*<h5 className="card-title">Card title</h5>*/}
                                                        {/*<p className="card-text">This card has supporting text below as*/}
                                                            {/*a natural lead-in to additional content.</p>*/}
                                                        {/*<p className="card-text">*/}
                                                            {/*<small className="text-muted">Last updated 3 mins ago*/}
                                                            {/*</small>*/}
                                                        {/*</p>*/}
                                                    {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="card bg-primary text-white text-center p-3">*/}
                                                {/*<blockquote className="blockquote mb-0">*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer*/}
                                                        {/*posuere erat.</p>*/}
                                                    {/*<footer className="blockquote-footer">*/}
                                                        {/*<small>*/}
                                                            {/*Someone famous in <cite title="Source Title">Source*/}
                                                            {/*Title</cite>*/}
                                                        {/*</small>*/}
                                                    {/*</footer>*/}
                                                {/*</blockquote>*/}
                                            {/*</div>*/}
                                            {/*<div className="card text-center">*/}
                                                {/*<div className="card-body">*/}
                                                    {/*<h5 className="card-title">Card title</h5>*/}
                                                    {/*<p className="card-text">This card has supporting text below as a*/}
                                                        {/*natural lead-in to additional content.</p>*/}
                                                    {/*<p className="card-text">*/}
                                                        {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
                                                    {/*</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="card">*/}
                                                {/*<img className="card-img" src={fProduct3} alt="Card image"/>*/}
                                            {/*</div>*/}
                                            {/*<div className="card p-3 text-right">*/}
                                                {/*<blockquote className="blockquote mb-0">*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer*/}
                                                        {/*posuere erat a ante.</p>*/}
                                                    {/*<footer className="blockquote-footer">*/}
                                                        {/*<small className="text-muted">*/}
                                                            {/*Someone famous in <cite title="Source Title">Source*/}
                                                            {/*Title</cite>*/}
                                                        {/*</small>*/}
                                                    {/*</footer>*/}
                                                {/*</blockquote>*/}
                                            {/*</div>*/}
                                            {/*<div className="card">*/}
                                                {/*<div className="card-body">*/}
                                                    {/*<h5 className="card-title">Card title</h5>*/}
                                                    {/*<p className="card-text">This is a wider card with supporting text*/}
                                                        {/*below as a natural lead-in to additional content. This card has*/}
                                                        {/*even longer content than the first to show that equal height*/}
                                                        {/*action.</p>*/}
                                                    {/*<p className="card-text">*/}
                                                        {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
                                                    {/*</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}

                {/*End stats Area */}

            </div>
        );
    }
}

export default ProfileOld;
