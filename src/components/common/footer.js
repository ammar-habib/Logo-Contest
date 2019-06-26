import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/footer.css';

class CommonFooter extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-footer-widget f_social_wd">
                                <h6 className="footer_title">Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="f_social">
                                    <a href="#"><i className="fa fa-facebook"/></a>
                                    <a href="#"><i className="fa fa-twitter"/></a>
                                    <a href="#"><i className="fa fa-dribbble"/></a>
                                    <a href="#"><i className="fa fa-behance"/></a>
                                </div>
                            </div>
                            <ul className="list-linline footer-links">
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">About Us</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={'#'} className="nav-link">Search Logo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-bottom d-flex justify-content-between align-items-center">
                        <p className="col-lg-12 footer-text text-center">
                            Copyright &copy;<span>2019</span>All rights reserved | This template is made with
                            <i className="fa fa-heart-o" aria-hidden="true"/> by
                            <a href="#" target="_blank">Experintsol</a>
                        </p>
                    </div>
                </div>
            </footer>

        );
    }
}

export default CommonFooter;
