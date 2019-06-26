import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'
import WOW from 'wow.js';
import makeAnimated from 'react-select/lib/animated';
import '../../styles/Banner.css';
import '../../styles/StartContest.css';


import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import LogoOnly from "../../images/only-logo.png";
import BandOnly from "../../images/band-lcon.png";
import BasicCard from "../common/basic-card";
import Favater from "../../images/profile.png";
import DesignSamples from "./partials/sample-modal";
import fProduct3 from "../../images/cards/card-3.png";

const options = [
    {value: 'business-card', label: 'Business Card'},
    {value: 'letterhead-envelope', label: 'Letterhead & Envelope'},
    {value: 'tshirt', label: 'T-shirt'},
    {value: 'social-media', label: 'Social media cover design'},
    {value: 'car-truck-wrap', label: 'Car/Truck Wrap'},
    {value: 'others', label: 'Others'}
];
const dateoptions = [
    {value: '0', label: 'Select contest duration'},
    {value: '1-day', label: '1 day'},
    {value: '2-day', label: '2 days'},
];

class StartContest extends Component {
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

                <div className="start-contest-page" id="page-content">
                    <section className="banner_area logo_page_banner">
                        <div className="banner_inner logo_page_banner_inner d-flex align-items-center">
                            <div className="overlay"/>
                            <div className="container">
                                <div className="banner_content text-center">
                                    <h2 className="banner_title text-white">Easy, Fast, and Affordable Design
                                        Contest</h2>
                                    {/*<div className="banner_page_link">*/}
                                    {/*<a href="index.html">Home</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="">
                        <div className="main_box common_white_box">
                            <div className="container">
                                <div className="main_title">
                                    <h2> What You Need Designed?</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 wow zoomIn" data-wow-offset="50" data-wow-duration="1s">
                                        <div className="card requriment-card" data-toggle="collapse"
                                             data-target="#LogoDesignCollapse" aria-expanded="false"
                                             aria-controls="LogoDesignCollapse">
                                            <div className="card-header">
                                                LOGO DESIGN ONLY
                                            </div>
                                            <div className="card-body">
                                                <div className="card-img-div">
                                                    <img src={LogoOnly} alt="" className="img-fluid"/>
                                                </div>
                                                <p className="card-text">Professional quality logo design</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span></small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="LogoDesignCollapse">
                                            <div className="card card-body">
                                                <ol>
                                                    <li>Multiple designers</li>
                                                    <li>Dozens of logo concepts</li>
                                                    <li>Multiple designers</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow zoomIn" data-wow-offset="50" data-wow-duration="2s">
                                        <div className="card requriment-card" data-toggle="collapse"
                                             data-target="#BrandDesignCollapse" aria-expanded="false"
                                             aria-controls="BrandDesignCollapse">
                                            <div className="card-header">
                                                BRAND IDENTITY DESIGN
                                            </div>
                                            <div className="card-body">
                                                <div className="card-img-div">
                                                    <img src={BandOnly} alt="" className="img-fluid"/>
                                                </div>
                                                <p className="card-text">Essentials to establish your brand</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span></small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="BrandDesignCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={makeAnimated()}
                                                // defaultValue={[options[1], options[2]]}
                                                isMulti
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow zoomIn" data-wow-offset="50" data-wow-duration="3s">
                                        <div className="card requriment-card" data-toggle="collapse"
                                             data-target="#LogoBrandCollapse" aria-expanded="false"
                                             aria-controls="LogoBrandCollapse">
                                            <div className="card-header">
                                                LOGO + BRAND IDENTITY
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="card-img-div">
                                                        <img src={LogoOnly} alt="" className="img-fluid"/>
                                                    </div>
                                                    <i className="fa fa-plus-circle fa-2x mx-4" aria-hidden="true"/>
                                                    <div className="card-img-div">
                                                        <img src={BandOnly} alt="" className="img-fluid"/>
                                                    </div>
                                                </div>
                                                <p className="card-text">Save big with our logo bundle</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span> (save<span
                                                        className="ml-1">$15%</span>)
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="LogoBrandCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={makeAnimated()}
                                                isMulti
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="common_green_box">
                        <div className="container">
                            <div className="main_title">
                                <h2>Design Brief</h2>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="form-row align-items-center wow fadeInUp">
                                        <div className="col-xl-10 form-group">
                                            <Select
                                                components={makeAnimated()}
                                                options={options}
                                            />
                                        </div>
                                        <div className="col-xl-2 form-group">
                                            <button className="genric-btn danger radius medium" data-toggle="modal" data-target="#samplesModal">
                                                <i className="fa fa-plus fa-lg"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group wow fadeInUp">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="bacic_card_item selected-sample">
                                                    <div className="bacic_card_img">
                                                        <i className="del fa fa-times"/>
                                                        <img className="img-fluid" src={fProduct3} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="bacic_card_item selected-sample">
                                                    <div className="bacic_card_img">
                                                        <i className="del fa fa-times"/>
                                                        <img className="img-fluid" src={fProduct3} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="bacic_card_item selected-sample">
                                                    <div className="bacic_card_img">
                                                        <i className="del fa fa-times"/>
                                                        <img className="img-fluid" src={fProduct3} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wow fadeInUp">
                                        <label htmlFor="exampleInputEmail1">What's your logo/company name?</label>
                                        <input type="text" name="text" required="" className="form-control"/>
                                        <small className="form-text text-muted">We'll never share
                                            your email with anyone else.
                                        </small>
                                    </div>

                                    <div className="form-group wow fadeInUp">
                                        <label htmlFor="exampleInputEmail1">Briefly describe your business or
                                            product</label>
                                        <textarea className="form-control"/>
                                    </div>

                                    <div className="form-group wow fadeInUp">
                                        <label htmlFor="exampleInputEmail1">Anything specific you would like to
                                            communicate to the designers?</label>
                                        <textarea className="form-control"/>
                                    </div>

                                    <div className="form-group wow fadeInUp">
                                        <label htmlFor="exampleInputEmail1">Do you have any reference designs or
                                            sketches that might be helpful?</label>
                                        <div className="upload-btn-wrapper">
                                            <button className="genric-btn danger radius medium">
                                                <i class="fa fa-paperclip mr-2"/> Attach image
                                            </button>
                                            <input type="file" name="myfile"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contacts-options-section">
                        <div className="main_box common_white_box">
                            <div className="container">
                                <div className="main_title">
                                    <h2>Contest Options</h2>
                                    <p><strong className="text-dark">Select Your Prize Package </strong>(Higher prize
                                        will attract more designers):</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1s">
                                        <div className="card requriment-card contest-options-card"
                                             data-toggle="collapse"
                                             data-target="#LogoDesignCollapse" aria-expanded="false"
                                             aria-controls="LogoDesignCollapse">
                                            <div className="card-header">
                                                <b>Minimum for</b><br/>Creative design on a budget
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">logo design</p>
                                            </div>
                                            <div className="card-footer text-right">
                                                <p className="mb-0">
                                                    <small>
                                                        Total prize:<span className="ml-1">$128</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="LogoDesignCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                defaultValue={dateoptions[0]}
                                                options={dateoptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="1.5s">
                                        <div className="card requriment-card contest-options-card"
                                             data-toggle="collapse"
                                             data-target="#BrandDesignCollapse" aria-expanded="false"
                                             aria-controls="BrandDesignCollapse">
                                            <div className="card-header">
                                                <b>Standard</b><br/> Best value for money
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">Essentials to establish your brand</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span></small>
                                                </p>
                                            </div>
                                            <div className="card-footer text-right">
                                                <p className="mb-0">
                                                    <small>
                                                        Total prize:<span className="ml-1">$128</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="BrandDesignCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                defaultValue={dateoptions[0]}
                                                options={dateoptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="2s">
                                        <div className="card requriment-card contest-options-card"
                                             data-toggle="collapse"
                                             data-target="#LogoBrandCollapse" aria-expanded="false"
                                             aria-controls="LogoBrandCollapse">
                                            <div className="card-header">
                                                <b>Gold</b><br/> Attract top designers
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">Save big with our logo bundle</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span> (save<span
                                                        className="ml-1">$15%</span>)
                                                    </small>
                                                </p>
                                            </div>
                                            <div className="card-footer text-right">
                                                <p className="mb-0">
                                                    <small>
                                                        Total prize:<span className="ml-1">$128</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="LogoBrandCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                defaultValue={dateoptions[0]}
                                                options={dateoptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 wow fadeInUp" data-wow-duration="2.5s">
                                        <div className="card requriment-card contest-options-card"
                                             data-toggle="collapse"
                                             data-target="#LogoBrandCollapse" aria-expanded="false"
                                             aria-controls="LogoBrandCollapse">
                                            <div className="card-header">
                                                <b>Custom</b><br/> Name your own prize
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">Save big with our logo bundle</p>
                                                <p>
                                                    <small>From<span className="ml-1">$128</span> (save<span
                                                        className="ml-1">$15%</span>)
                                                    </small>
                                                </p>
                                            </div>
                                            <div className="card-footer text-right">
                                                <div className="input-group align-items-center">
                                                    <small className="mr-3">Total prize:</small>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">$</span>
                                                    </div>
                                                    <input type="text" className="form-control"
                                                           aria-label="Amount (to the nearest dollar)"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="collapse" id="LogoBrandCollapse">
                                            <Select
                                                closeMenuOnSelect={false}
                                                defaultValue={dateoptions[0]}
                                                options={dateoptions}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="common_green_box">
                        <div className="container">
                            <div className="main_title">
                                <h2>Please Select Options:</h2>
                            </div>
                            <div className="row align-items-start justify-content-center">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                    <ul className="list-unstyled select-swite-area shadow">
                                        <li className="media contest_li wow fadeInUp" data-wow-duration="1s">
                                            <div className="media-icon">
                                                <i className="fa fa-lock fa-4x text-red"/>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-2">Private Upgrade</h5>
                                                Hide your contest from the public and search engines. It's
                                                only visible to our registered logo designers.
                                            </div>
                                            <div className="entriesnum">
                                                <div className="primary-switch">
                                                    <input type="checkbox" id="default-switch"/>
                                                    <label htmlFor="default-switch"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media contest_li wow fadeInUp" data-wow-duration="1.5s">
                                            <div className="media-icon">
                                                <i className="fa fa-bullhorn fa-4x text-red"/>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-2">Featured Upgrade</h5>
                                                Featured contests are highlighted above regular contest to
                                                attract more designers. On average, featured contests receive about 25%
                                                more design entries.
                                            </div>
                                            <div className="entriesnum">
                                                <div className="primary-switch">
                                                    <input type="checkbox" id="featured-upgrade"/>
                                                    <label htmlFor="featured-upgrade"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media contest_li wow fadeInUp" data-wow-duration="2s">
                                            <div className="media-icon">
                                                <i className="fa fa-dollar fa-4x text-red"/>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-2">Guaranteed Contest</h5>
                                                By paying your contest prize upfront, you are letting
                                                designers know that you will definitely purchase a design. Guaranteed
                                                contests attract more and higher caliber designers.
                                            </div>
                                            <div className="entriesnum">
                                                <div className="primary-switch">
                                                    <input type="checkbox" id="guaranteed-contest"/>
                                                    <label htmlFor="guaranteed-contest"/>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                    <div className="order_box shadow bg-white">
                                        <ul className="list">
                                            <li><a href="#">Product <span>Total</span></a></li>
                                            <li><a href="#">Fresh Blackberry <span className="middle">x 02</span> <span
                                                className="last">$720.00</span></a></li>
                                            <li><a href="#">Fresh Tomatoes <span className="middle">x 02</span> <span
                                                className="last">$720.00</span></a></li>
                                            <li><a href="#">Fresh Brocoli <span className="middle">x 02</span> <span
                                                className="last">$720.00</span></a></li>
                                        </ul>
                                        <ul className="list list_2">
                                            <li><a href="#">Subtotal <span>$2160.00</span></a></li>
                                            <li><a href="#">Shipping <span>Flat rate: $50.00</span></a></li>
                                            <li><a href="#">Total <span>$2210.00</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <CommonFooter/>
                <DesignSamples/>
            </div>
        );
    }
}

export default StartContest;
