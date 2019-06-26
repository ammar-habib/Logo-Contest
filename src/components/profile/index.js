import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/new-profile.css';
import "magnific-popup/dist/magnific-popup.css";
import '../../styles/ionicons.css';
import '../../styles/gradient.css';
import '../../styles/profile-template-colors/green.css';
import $ from 'jquery';
import "magnific-popup/dist/jquery.magnific-popup.min";
import "imagesloaded/imagesloaded.pkgd.min";
import "masonry-layout/dist/masonry.pkgd.min";
import "../../script/masonry-filter";
import "jquery-slimscroll/jquery.slimscroll.min";


import Avatar from "../../images/profile.png";
import Work1 from "../../images/work1.jpg";
import Work2 from "../../images/work2.jpg";
import Work3 from "../../images/work3.jpg";
import Work4 from "../../images/work4.jpg";
import Work5 from "../../images/work5.jpg";
import Work6 from "../../images/work6.jpg";
import Work7 from "../../images/work7.jpg";
import Work8 from "../../images/work8.jpg";
import CountryFlag from "../../images/elements/f1.jpg";


class Profile extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        // $(window).on("load", function () {
        //     let preload = $('.preloader');
        //     preload.find('.spinner').fadeOut(function () {
        //         preload.fadeOut();
        //     });
        // });
        $(function () {
            'use strict';

            /*
                lets
            */

            let width = $(window).width();
            let height = $(window).height();


            /*
                Header Menu Desktop
            */

            let container = $('.container');
            let card_items = $('.card-inner');
            let animation_in = container.data('animation-in');
            let animation_out = container.data('animation-out');

            $('.top-menu').on('click', 'a', function () {
                /* lets */
                let width = $(window).width();
                let id = $(this).attr('href');
                let h = parseFloat($(id).offset().top);
                let card_item = $(id);
                let menu_items = $('.top-menu li');
                let menu_item = $(this).closest('li');
                let d_lnk = $('.lnks .lnk.discover');

                if ((width >= 1024)) {

                    /* if desktop */
                    if (!menu_item.hasClass('active') & (width > 1023) & $('#home-card').length) {

                        /* close card items */
                        menu_items.removeClass('active');
                        container.find(card_items).removeClass('animated ' + animation_in);

                        if ($(container).hasClass('opened')) {
                            container.find(card_items).addClass('animated ' + animation_out);
                        }

                        /* open card item */
                        menu_item.addClass('active');
                        container.addClass('opened');
                        container.find(card_item).removeClass('animated ' + animation_out);
                        container.find(card_item).addClass('animated ' + animation_in);

                        $(card_items).addClass('hidden');

                        $(card_item).removeClass('hidden');
                        $(card_item).addClass('active');
                    }
                }
                /* if mobile */
                if ((width < 1024) & $('#home-card').length) {

                    /* scroll to section */
                    $('body,html').animate({
                        scrollTop: h - 76
                    }, 800);
                }
                return false;
            });

            $(window).on('resize', function () {
                let width = $(window).width();
                let height = $(window).height();

                if ((width < 1024)) {
                    $('.card-inner').removeClass('hidden');
                    $('.card-inner').removeClass('fadeOutLeft');
                    $('.card-inner').removeClass('rotateOutUpLeft');
                    $('.card-inner').removeClass('rollOut');
                    $('.card-inner').removeClass('jackOutTheBox');
                    $('.card-inner').removeClass('fadeOut');
                    $('.card-inner').removeClass('fadeOutUp');
                    $('.card-inner').removeClass('animated');

                    $(window).on('scroll', function () {
                        let scrollPos = $(window).scrollTop();
                        $('.top-menu ul li a').each(function () {
                            let currLink = $(this);
                            let refElement = $(currLink.attr("href"));
                            if (refElement.offset().top - 76 <= scrollPos) {
                                $('.top-menu ul li').removeClass("active");
                                currLink.closest('li').addClass("active");
                            }
                        });
                    });

                    $('.card-inner .card-wrap').slimScroll({destroy: true});
                    $('.card-inner .card-wrap').attr('style', '');
                }
                else {
                    $($('.top-menu li.active a').attr('href')).addClass('active');
                    $('.card-inner .card-wrap').slimScroll({
                        height: '570px'
                    });
                }
            });


            /*
                Smoothscroll
            */

            if ((width < 1024) & $('#home-card').length) {
                $(window).on('scroll', function () {
                    let scrollPos = $(window).scrollTop();
                    $('.top-menu ul li a').each(function () {
                        let currLink = $(this);
                        let refElement = $(currLink.attr("href"));
                        if (refElement.offset().top - 76 <= scrollPos) {
                            $('.top-menu ul li').removeClass("active");
                            currLink.closest('li').addClass("active");
                        }
                    });
                });
            }


            /*
slimScroll
            */

            if (width > 1024) {
                $('.card-inner .card-wrap').slimScroll({
                    height: '570px'
                });
            }


            /*
                Hire Button
            */

            $('.lnks').on('click', '.lnk.discover', function () {
                $('.top-menu a[href="#contacts-card"]').trigger('click');
            });


            /*
                Initialize masonry items
            */

            let $container = $('.grid-items');

            $container.imagesLoaded(function () {
                $container.multipleFilterMasonry({
                    itemSelector: '.grid-item',
                    filtersGroupSelector: '.filter-button-group',
                    percentPosition: true,
                    gutter: 0
                });
            });


            /*
                12. Initialize masonry filter
            */

            $('.filter-button-group').on('change', 'input[type="radio"]', function () {
                if ($(this).is(':checked')) {
                    $('.f_btn').removeClass('active');
                    $(this).closest('.f_btn').addClass('active');
                }
                /* popup image */
                $('.has-popup-image').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    mainClass: 'popup-box',
                    image: {
                        verticalFit: true
                    }
                });

                /* popup video */
                $('.has-popup-video').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                    mainClass: 'popup-box'
                });

                /* popup music */
                $('.has-popup-music').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                    mainClass: 'popup-box'
                });

                /* popup media */
                $('.has-popup-media').magnificPopup({
                    type: 'inline',
                    overflowY: 'auto',
                    closeBtnInside: true,
                    mainClass: 'popup-box-inline'
                });
            });


            /*
                Popups
            */

            /* popup image */
            $('.has-popup-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'popup-box',
                image: {
                    verticalFit: true
                }
            });

            /* popup video */
            $('.has-popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'popup-box'
            });

            /* popup music */
            $('.has-popup-music').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'popup-box'
            });

            /* popup media */
            $('.has-popup-media').magnificPopup({
                type: 'inline',
                overflowY: 'auto',
                closeBtnInside: true,
                mainClass: 'popup-box-inline',
                callbacks: {
                    open: function () {
                        $('.popup-box-inline .popup-box').slimScroll({
                            height: height + 'px'
                        });
                    }
                }
            });
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="page">

                {/*<div className="preloader">*/}
                    {/*<div className="centrize full-width">*/}
                        {/*<div className="vertical-center">*/}
                            {/*<div className="spinner">*/}
                                {/*<div className="double-bounce1"/>*/}
                                {/*<div className="double-bounce2"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*background */}

                <div className="background gradient">
                    <ul className="bg-bubbles">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                </div>

                {/*Container*/}

                <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

                    {/*Header*/}

                    <header className="header">

                        {/*menu */}

                        <div className="top-menu">
                            <ul>
                                <li className="active">
                                    <a href="#about-card">
                                        <span className="icon ion-person"/>
                                        <span className="link">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#works-card">
                                        <span className="icon ion-paintbrush"/>
                                        <span className="link">Works</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </header>


                    {/*Card - Started*/}

                    <div className="card-started" id="home-card">


                        {/*Profile*/}

                        <div className="profile">

                            {/*profile image */}

                            <div className="slide slide-bg"/>

                            {/*profile photo */}

                            <div className="image">
                                <img src={Avatar} alt=""/>
                            </div>

                            <div className="title">Ryan Adlard
                                <div className="country_flag_div">
                                    <img src={CountryFlag} alt="" className="d-inline-block"/>
                                </div>
                            </div>
                            <div className="subtitle">Web Designer</div>


                            <div className="social">
                                <a target="_blank" href="https://dribbble.com/"><span className="fa fa-dribbble"/></a>
                                <a target="_blank" href="https://twitter.com/"><span className="fa fa-behance"/></a>
                            </div>
                            <div className="lnks row no-gutters">
                                <div className="col-6 border-divider">
                                    <p>Basic Rate</p>
                                    <div className="bottom-amount">
                                        <span className="dollar">$</span>
                                        <span className="number">22</span>
                                        <span className="period">hour</span>
                                    </div>
                                </div>
                                <div className="col-6 border-divider">
                                    <p>Complext Rate</p>
                                    <div className="bottom-amount">
                                        <span className="dollar">$</span>
                                        <span className="number">22</span>
                                        <span className="period">hour</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card-inner animated active" id="about-card">
                        <div className="card-wrap">


                            <div className="content about">

                                <div className="title">About Me</div>

                                <div className="row">
                                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                        <div className="text-box">
                                            <p>
                                                I am Ryan Adlard, web designer from USA, California. I have rich
                                                experience in
                                                web site design and building and customization, also I am good at
                                                wordpress.
                                                I love to talk with you about our unique.
                                            </p>
                                        </div>
                                        <div className="row rating-row justify-content-center align-items-center">
                                            <div className="col-6">
                                                <p><strong>99%</strong></p>
                                                <p>POSITIVE RATING</p>
                                            </div>
                                            <div className="col-6">
                                                <p><strong>3650</strong></p>
                                                <p>CONTESTS WON</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"/>
                                </div>

                            </div>

                            <div className="content fuct">

                                <div className="title">Stats</div>

                                <div className="row fuct-items">

                                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                        <div className="fuct-item">
                                            <div className="icon"><span className="ion ion-disc"/></div>
                                            <div className="name">80 Entered</div>
                                        </div>
                                    </div>
                                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                        <div className="fuct-item">
                                            <div className="icon"><span className="ion ion-flag"/></div>
                                            <div className="name">10 Finalist</div>
                                        </div>
                                    </div>


                                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                        <div className="fuct-item">
                                            <div className="icon"><span className="ion ion-coffee"/></div>
                                            <div className="name">1 000 Invites</div>
                                        </div>
                                    </div>

                                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                        <div className="fuct-item">
                                            <div className="icon"><span className="ion ion-trophy"/></div>
                                            <div className="name">15 Sold</div>
                                        </div>
                                    </div>


                                    <div className="clear"/>
                                </div>

                            </div>

                            <div className="content clients">

                                <div className="title">Clients</div>

                                <div id="carouselExampleIndicators" className="carousel slide testimonial-slide"
                                     data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"/>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>

                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="media">
                                                <div className="client-img mr-3">
                                                    <img className="img-fluid" src={Avatar} alt=""/>
                                                </div>
                                                <div className="media-body client-content">
                                                    <q>
                                                        Cras sit amet nibh libero, in
                                                        gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                                        Cras
                                                        purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                        Fusce
                                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                                        congue
                                                        felis in faucibus.
                                                    </q>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="media">
                                                <div className="client-img mr-3">
                                                    <img className="img-fluid" src={Avatar} alt=""/>
                                                </div>
                                                <div className="media-body client-content">
                                                    <q>
                                                        Cras sit amet nibh libero, in
                                                        gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                                        Cras
                                                        purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                        Fusce
                                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                                        congue
                                                        felis in faucibus.
                                                    </q>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="media">
                                                <div className="client-img mr-3">
                                                    <img className="img-fluid" src={Avatar} alt=""/>
                                                </div>
                                                <div className="media-body client-content">
                                                    <q>
                                                        Cras sit amet nibh libero, in
                                                        gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                                        Cras
                                                        purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                        Fusce
                                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                                        congue
                                                        felis in faucibus.
                                                    </q>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="card-inner" id="works-card">
                        <div className="card-wrap">


                            <div className="content works">

                                <div className="title">Recent Works</div>

                                <div className="filter-menu filter-button-group">
                                    <div className="f_btn active">
                                        <label><input type="radio" name="fl_radio" value="grid-item"/>All</label>
                                    </div>
                                    <div className="f_btn">
                                        <label><input type="radio" name="fl_radio" value="recent-contests"/>Recent
                                            Contests</label>
                                    </div>
                                    <div className="f_btn">
                                        <label><input type="radio" name="fl_radio" value="portfolio"/>Portfolio</label>
                                    </div>
                                </div>

                                <div className="row grid-items border-line-v">

                                    <div className="col col-d-6 col-t-6 col-m-12 grid-item portfolio border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work1} className="has-popup-image">
                                                    <img src={Work1} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work1} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Portfolio</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col col-d-6 col-t-6 col-m-12 grid-item recent-contests border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work2} className="has-popup-image">
                                                    <img src={Work2} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work2} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Recent Contests</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-d-6 col-t-6 col-m-12 grid-item portfolio border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work3} className="has-popup-image">
                                                    <img src={Work3} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work3} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Portfolio</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col col-d-6 col-t-6 col-m-12 grid-item recent-contests border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work4} className="has-popup-image">
                                                    <img src={Work4} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work4} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Recent Contests</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-d-6 col-t-6 col-m-12 grid-item portfolio border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work5} className="has-popup-image">
                                                    <img src={Work5} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work5} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Portfolio</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col col-d-6 col-t-6 col-m-12 grid-item recent-contests border-line-h">
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={Work6} className="has-popup-image">
                                                    <img src={Work6} alt=""/>
                                                    <span className="info">
												<span className="ion ion-image"/>
											</span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={Work6} className="name has-popup-image">Motorcycle
                                                    Helmet</a>
                                                <div className="category">Recent Contests</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="https://vimeo.com/97102654" className="has-popup-video">*/}
                                    {/*<img src={Work2} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-videocamera"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="https://vimeo.com/97102654" className="name has-popup-video">Minimalism*/}
                                    {/*Shapes</a>*/}
                                    {/*<div className="category">Video</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"*/}
                                    {/*className="has-popup-music">*/}
                                    {/*<img src={Work3} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-music-note"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="#" className="name has-popup">Staircase</a>*/}
                                    {/*<div className="category">Music</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="#popup-1" className="has-popup-media">*/}
                                    {/*<img src={Work4} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-images"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="#popup-1" className="name has-popup-media">Mobile*/}
                                    {/*Application</a>*/}
                                    {/*<div className="category">Design</div>*/}
                                    {/*</div>*/}
                                    {/*<div id="popup-1" className="popup-box mfp-fade mfp-hide">*/}
                                    {/*<div className="content">*/}
                                    {/*<div className="image">*/}
                                    {/*<img src={Work4} alt=""/>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<div className="post-box">*/}
                                    {/*<h1>Mobile Application</h1>*/}
                                    {/*<div className="blog-detail">Design</div>*/}
                                    {/*<div className="blog-content">*/}
                                    {/*<p>*/}
                                    {/*So striking at of to welcomed resolved. Northward by*/}
                                    {/*described up household therefore*/}
                                    {/*attention. Excellence decisively nay man yet*/}
                                    {/*impression for contrasted remarkably.*/}
                                    {/*</p>*/}
                                    {/*<p>*/}
                                    {/*Forfeited you engrossed but gay sometimes explained.*/}
                                    {/*Another as studied it to evident.*/}
                                    {/*Merry sense given he be arise. Conduct at an replied*/}
                                    {/*removal an amongst. Remaining*/}
                                    {/*determine few her two cordially admitting old.*/}
                                    {/*</p>*/}
                                    {/*<blockquote>*/}
                                    {/*Vestibulum ante ipsum primis in faucibus orci luctus*/}
                                    {/*et ultrices posuere cubilia*/}
                                    {/*Curae; Pellentesque suscipit.*/}
                                    {/*</blockquote>*/}
                                    {/*<p>*/}
                                    {/*Tiled say decay spoil now walls meant house. My mr*/}
                                    {/*interest thoughts screened of outweigh*/}
                                    {/*removing. Evening society musical besides inhabit ye*/}
                                    {/*my. Lose hill well up will he over on.*/}
                                    {/*Increasing sufficient everything men him admiration*/}
                                    {/*unpleasing sex.*/}
                                    {/*</p>*/}
                                    {/*<ul className="list-style">*/}
                                    {/*<li>Greatest properly off ham exercise all.</li>*/}
                                    {/*<li>Unsatiable invitation its possession nor off.*/}
                                    {/*</li>*/}
                                    {/*<li>All difficulty estimating unreserved increasing*/}
                                    {/*the solicitude.*/}
                                    {/*</li>*/}
                                    {/*</ul>*/}
                                    {/*<p>*/}
                                    {/*Unpleasant astonished an diminution up partiality.*/}
                                    {/*Noisy an their of meant. Death means*/}
                                    {/*up civil do an offer wound of.*/}
                                    {/*</p>*/}
                                    {/*</div>*/}
                                    {/*<a href="#" className="button">*/}
                                    {/*<span className="text">View Project</span>*/}
                                    {/*<span className="arrow"/>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href={Work5} className="has-popup-image">*/}
                                    {/*<img src={Work5} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-image"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href={Work5} className="name has-popup-image">Gereal*/}
                                    {/*Travels</a>*/}
                                    {/*<div className="category">Photo</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"*/}
                                    {/*className="has-popup-music">*/}
                                    {/*<img src={Work8} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-music-note"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="#" className="name has-popup">Daylight Entrance</a>*/}
                                    {/*<div className="category">Music</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="https://vimeo.com/97102654" className="has-popup-video">*/}
                                    {/*<img src={Work7} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-videocamera"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="https://vimeo.com/97102654"*/}
                                    {/*className="name has-popup-video">Architecture</a>*/}
                                    {/*<div className="category">Video</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">*/}
                                    {/*<div className="box-item">*/}
                                    {/*<div className="image">*/}
                                    {/*<a href="#popup-2" className="has-popup-media">*/}
                                    {/*<img src={Work7} alt=""/>*/}
                                    {/*<span className="info">*/}
                                    {/*<span className="ion ion-images"/>*/}
                                    {/*</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<a href="#popup-2" className="name has-popup-media">Social Website</a>*/}
                                    {/*<div className="category">Design</div>*/}
                                    {/*</div>*/}
                                    {/*<div id="popup-2" className="popup-box mfp-fade mfp-hide">*/}
                                    {/*<div className="content">*/}
                                    {/*<div className="image">*/}
                                    {/*<img src={Work7} alt=""/>*/}
                                    {/*</div>*/}
                                    {/*<div className="desc">*/}
                                    {/*<div className="post-box">*/}
                                    {/*<h1>Mobile Application</h1>*/}
                                    {/*<div className="blog-detail">Design</div>*/}
                                    {/*<div className="blog-content">*/}
                                    {/*<p>*/}
                                    {/*So striking at of to welcomed resolved. Northward by*/}
                                    {/*described up household therefore*/}
                                    {/*attention. Excellence decisively nay man yet*/}
                                    {/*impression for contrasted remarkably.*/}
                                    {/*</p>*/}
                                    {/*<p>*/}
                                    {/*Forfeited you engrossed but gay sometimes explained.*/}
                                    {/*Another as studied it to evident.*/}
                                    {/*Merry sense given he be arise. Conduct at an replied*/}
                                    {/*removal an amongst. Remaining*/}
                                    {/*determine few her two cordially admitting old.*/}
                                    {/*</p>*/}
                                    {/*<blockquote>*/}
                                    {/*Vestibulum ante ipsum primis in faucibus orci luctus*/}
                                    {/*et ultrices posuere cubilia*/}
                                    {/*Curae; Pellentesque suscipit.*/}
                                    {/*</blockquote>*/}
                                    {/*<p>*/}
                                    {/*Tiled say decay spoil now walls meant house. My mr*/}
                                    {/*interest thoughts screened of outweigh*/}
                                    {/*removing. Evening society musical besides inhabit ye*/}
                                    {/*my. Lose hill well up will he over on.*/}
                                    {/*Increasing sufficient everything men him admiration*/}
                                    {/*unpleasing sex.*/}
                                    {/*</p>*/}
                                    {/*<ul className="list-style">*/}
                                    {/*<li>Greatest properly off ham exercise all.</li>*/}
                                    {/*<li>Unsatiable invitation its possession nor off.*/}
                                    {/*</li>*/}
                                    {/*<li>All difficulty estimating unreserved increasing*/}
                                    {/*the solicitude.*/}
                                    {/*</li>*/}
                                    {/*</ul>*/}
                                    {/*<p>*/}
                                    {/*Unpleasant astonished an diminution up partiality.*/}
                                    {/*Noisy an their of meant. Death means*/}
                                    {/*up civil do an offer wound of.*/}
                                    {/*</p>*/}
                                    {/*</div>*/}
                                    {/*<a href="#" className="button">*/}
                                    {/*<span className="text">View Project</span>*/}
                                    {/*<span className="arrow"/>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}

                                    <div className="clear"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
