import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import '../../styles/Banner.css';
import '../../styles/login-signup.css';
import LoginBg from "../../images/login.jpg";


class Login extends Component {

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
                <CommonHeader/>

                <div className="login-page" id="page-content">
                    <section className="banner_area logo_page_banner">
                        <div className="banner_inner logo_page_banner_inner d-flex align-items-center">
                            <div className="container">
                                <div className="banner_content text-center">
                                    <h2 className="banner_title">Login/Register</h2>
                                    <div className="banner_page_link">
                                        <a href="index.html">Home</a>
                                        <a href="login.html">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="login_box_area p_120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="login_box_img">
                                        <img className="img-fluid" src={LoginBg} alt=""/>
                                        <div className="hover">
                                            <h4>New to our website?</h4>
                                            <p>There are advances being made in science and technology everyday, and
                                                a good example of this is the</p>
                                            <div className="mb-2">
                                                <a className="main_btn" href="registration.html">Join as Client</a>
                                            </div>
                                            <div>
                                                <a className="main_btn" href="registration.html">Join as Designer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login_form_inner">
                                        <h3>Log in to enter</h3>
                                        <form className="row login_form">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="name"
                                                       placeholder="Username"/>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="password"
                                                       placeholder="Password"/>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div className="creat_account">
                                                    <input type="checkbox" id="f-option2" name="selector"/>
                                                    <label htmlFor="f-option2">Keep me logged in</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button type="submit" value="submit" className="btn submit_btn">Log In
                                                </button>
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                        </form>
                                    </div>
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

export default Login;
