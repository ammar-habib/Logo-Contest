import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommonHeader from "../common/header";
import Avatar from "../../images/review-avatar1.jpg";
import '../../styles/ContestDetail.css';
import {Link} from "react-router-dom";

class ContestDetail extends Component {
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
                <div className="contest-detail-page" id="page-content">
                    <section className="blog_area single-post-area p_120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 posts-list">
                                    <div className="single-post row">
                                        <div className="col-lg-12">
                                            <div className="feature-img">
                                                <img className="img-fluid" src="" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-3  col-md-3">
                                            <div className="blog_info text-right">
                                                <div className="post_tag">
                                                    <a className="active" href="#">Sports Recreation </a>
                                                    <a href="#">Technology, </a>
                                                    <a href="#">Politics, </a>
                                                    <a href="#">Lifestyle </a>
                                                </div>
                                                <ul className="blog_meta list">
                                                    <li>Winner Selected<i className="lnr lnr-user"/></li>
                                                    <li>12 Dec, 2017<i className="lnr lnr-calendar-full"/></li>
                                                    <li>$148 Prize<i className="lnr lnr-diamond"/></li>
                                                    <li>138 Entries<i className="lnr lnr-users"/></li>
                                                    <li>1.2M Views<i className="lnr lnr-eye"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 blog_details">
                                            <h2>Churn & Burn Tageline: Inquiry Removal ServiceI logo design</h2>
                                            <h5>Logo Name</h5>
                                            <p>
                                                Churn & Burn Tageline: Inquiry Removal ServiceI logo design
                                            </p>
                                            <h5>Business Brief</h5>
                                            <p>
                                                We are a personal credit repair company. We take people negative credit
                                                and clean it up
                                            </p>
                                            <h5>Industry</h5>
                                            <p>
                                                Sports Recreation
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="quotes">
                                                <h5>Ideas & concepts</h5>
                                                MCSE boot camps have its supporters and its detractors. Some people do
                                                not understand why you should have to spend money on boot camp when you
                                                can get the MCSE study materials yourself at a fraction of the camp
                                                price. However, who has the willpower to actually sit through a
                                                self-imposed MCSE training.
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <img className="img-fluid" src="" alt=""/>
                                                </div>
                                                <div className="col-6">
                                                    <img className="img-fluid" src="" alt=""/>
                                                </div>
                                                <div className="col-lg-12 mt-25">
                                                    <p>
                                                        MCSE boot camps have its supporters and its detractors. Some
                                                        people do not understand why you should have to spend money on
                                                        boot camp when you can get the MCSE study materials yourself at
                                                        a fraction of the camp price. However, who has the willpower.
                                                    </p>
                                                    <p>
                                                        MCSE boot camps have its supporters and its detractors. Some
                                                        people do not understand why you should have to spend money on
                                                        boot camp when you can get the MCSE study materials yourself at
                                                        a fraction of the camp price. However, who has the willpower.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-area">
                                        <h4>Contest Discussions</h4>
                                        <div className="quotes">
                                            <p>
                                                Thank you for launching your design contest at 48hourslogo. Here are
                                                some helpful tips to get the most out of your project.
                                            </p>
                                            <p>
                                                1. Keep your design brief simple and upload sample pictures to explain
                                                what you really want in your design. </p>
                                            <p>
                                                2. Rate and leave feedback directly under the designs you see potential
                                                to help guide the designers in the right direction.
                                            </p>
                                            <p>
                                                3. Have fun, and be encouraging to your designers to keep them motivated
                                                about your contest.
                                            </p>
                                            <p className="text-right mb-0">
                                                <small>Admin</small>
                                            </p>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src={Avatar} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <h5><a href="#">Emilly Blunt</a></h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <p className="comment">
                                                            Never say goodbye till the end comes!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="" className="btn-reply text-uppercase">reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list left-padding">
                                            <div className="single-comment justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src={Avatar} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <h5><a href="#">Elsie Cunningham</a></h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <p className="comment">
                                                            Never say goodbye till the end comes!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="" className="btn-reply text-uppercase">reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list left-padding">
                                            <div className="single-comment justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src={Avatar} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <h5><a href="#">Annie Stephens</a></h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <p className="comment">
                                                            Never say goodbye till the end comes!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="" className="btn-reply text-uppercase">reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src={Avatar} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <h5><a href="#">Maria Luna</a></h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <p className="comment">
                                                            Never say goodbye till the end comes!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a src={Avatar} href="" className="btn-reply text-uppercase">reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src={Avatar} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <h5><a href="#">Ina Hayes</a></h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <p className="comment">
                                                            Never say goodbye till the end comes!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="" className="btn-reply text-uppercase">reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-form">
                                        <h4>Leave a Reply</h4>
                                        <form>
                                            <div className="form-group form-inline">
                                                <div className="form-group col-lg-6 col-md-6 name">
                                                    <input type="text" className="form-control" id="name"
                                                           placeholder="Enter Name"/>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 email">
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="Enter email address"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="subject"
                                                       placeholder="Subject"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control mb-10" rows="5" name="message"
                                                          placeholder="message"  required="">

                                                </textarea>
                                            </div>
                                            <a href="#" className="primary-btn submit_btn">Post Comment</a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog_right_sidebar">
                                        <aside className="single_sidebar_widget author_widget">
                                            <Link className="profile_avatar" to={'/profile'}>
                                                <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                            </Link>
                                            <h4>Charlie Barber</h4>
                                            <p>Contest Holder</p>
                                            <p>updated this contest 3 hours 44 minutes ago!</p>
                                            <div className="br"/>
                                        </aside>
                                        <aside className="single_sidebar_widget author_widget">
                                            <h3 className="widget_title">Contest Winner</h3>
                                            <Link className="profile_avatar" to={'/profile'}>
                                                <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                            </Link>
                                            <h4>Charlie Barber</h4>
                                            <div className="br"/>
                                        </aside>
                                        <aside className="single_sidebar_widget popular_post_widget">
                                            <h3 className="widget_title">Finalist Designers…</h3>
                                            <div className="small-avater-row">
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="br"/>
                                        </aside>
                                        <aside className="single_sidebar_widget popular_post_widget">
                                            <h3 className="widget_title">Participating Designers…</h3>
                                            <div className="small-avater-row participate-designers">
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                                <Link className="profile_avatar" to={'/profile'}>
                                                    <img src={Avatar} className="author_img rounded-circle" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="br"/>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ContestDetail;
