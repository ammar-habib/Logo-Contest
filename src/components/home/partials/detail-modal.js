import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "masonry-layout/dist/masonry.pkgd.min";
import '../../../styles/DetailModal.css';
import BasicCard from "../../common/basic-card";
import fProduct1 from "../../../images/cards/card-1.gif";
import fProduct2 from "../../../images/cards/card-2.png";
import fProduct3 from "../../../images/cards/card-3.png";

class DetailModal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 160,
        });
        $('#detailModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    }

    render() {
        return (
            <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog"
                 aria-labelledby="detailModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <BasicCard
                                        designUrl = {fProduct3}
                                        price="100"
                                    />
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                    <h3 className="modal-title">For <strong>$148,</strong>
                                        <strong>Client62531</strong> picked a winner from <strong>203</strong> designs
                                        by <strong>34</strong> designers.</h3>
                                    <ul className="list-inline text-center">
                                        <li className="list-inline-item">
                                            <a href="#" className="genric-btn danger-border radius">Contest Details</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="genric-btn danger-border radius">Start My Own</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="wining-other-detail">
                                <div className="card-columns">
                                    <BasicCard
                                        designUrl = {fProduct3}
                                        price="100"
                                    />
                                    <BasicCard
                                        designUrl = {fProduct2}
                                        price="100"
                                    />
                                    <BasicCard
                                        designUrl = {fProduct1}
                                        price="100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailModal;
