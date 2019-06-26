import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png';
import '../../styles/header.css';

class CommonHeader extends Component {
    openNav() {
        document.getElementById("MobileSidenav").style.width = "250px";
        document.getElementById("wrapper").style.marginLeft = "250px";
    }

    closeNav() {
        document.getElementById("MobileSidenav").style.width = "0";
        document.getElementById("wrapper").style.marginLeft = "0";
    }
    render() {
        return (
            <header>

                {/*desktop header*/}

                <div className="header_area">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                {/*Brand and toggle get grouped for better mobile display */}
                                <a className="navbar-brand logo_h show-mobile" href="index.html">
                                    <img src={logo} alt=""/>
                                </a>
                                <button onClick={this.openNav} className="navbar-toggler" type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                {/*Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse offset">
                                    <ul className="nav navbar-nav menu_nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={'/'}><i className="fa fa-home"/>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            {/*<a className="nav-link" href="contests.html"></a>*/}
                                            <Link className="nav-link" to={'/contests'}><i className="fa fa-th-list"/>Contests</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/portfolio'}><i className="fa fa-th-large"/>Portfolio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/designers'}><i className="fa fa-users"/>Designers</Link>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link className="navbar-brand logo_h" to={'/'}>
                                                <img src={logo} alt=""/>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right ml-auto">
                                        <li className="nav-item">
                                            <Link className="genric-btn medium default radius" to={'/profile'}> <i className="fa fa-user mr-2"/>My Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="genric-btn medium danger radius" to={'/start'}>Start now<i className="fa fa-arrow-right ml-2"/></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {/*end desktop header*/}

                {/*Start mobile main menu*/}

                <div id="MobileSidenav" className="mobileMenu">
                    <ul className="nav navbar-nav menu_nav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html"><i className="fa fa-home"/>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contests.html"><i className="fa fa-th-list"/>Contests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html"><i className="fa fa-th-large"/>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="designers.html"><i className="fa fa-users"/>Designers</a>
                        </li>
                    </ul>
                </div>

                {/*End mobile main menu*/}

            </header>

        );
    }
}

export default CommonHeader;
