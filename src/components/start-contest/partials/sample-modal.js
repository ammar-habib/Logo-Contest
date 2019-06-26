import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "masonry-layout/dist/masonry.pkgd.min";
import '../../../styles/BasicCard.css';
import '../../../styles/DetailModal.css';
import BasicCard from "../../common/basic-card";
import fProduct1 from "../../../images/cards/card-1.gif";
import fProduct2 from "../../../images/cards/card-2.png";
import fProduct3 from "../../../images/cards/card-3.png";

class DesignSamples extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $( ".sample-card" ).click(function() {
            $( this ).toggleClass( "selected" );
        });
    }

    render() {
        return (
            <div className="modal fade" id="samplesModal" tabIndex="-1" role="dialog"
                 aria-labelledby="samplesModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title mb-0">Which designs do you like?</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-primary" role="alert">
                                5 is good; selecting too many might actually confuse your designers.
                            </div>
                            <div className="wining-other-detail">
                                <div className="card-columns">
                                    <div className="bacic_card_item sample-card">
                                        <div className="bacic_card_img">
                                            <img className="img-fluid" src={fProduct1} alt=""/>
                                        </div>
                                    </div>
                                    <div className="bacic_card_item sample-card">
                                        <div className="bacic_card_img">
                                            <img className="img-fluid" src={fProduct2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="bacic_card_item sample-card">
                                        <div className="bacic_card_img">
                                            <img className="img-fluid" src={fProduct3} alt=""/>
                                        </div>
                                    </div>
                                    <div className="bacic_card_item sample-card">
                                        <div className="bacic_card_img">
                                            <img className="img-fluid" src={fProduct2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="bacic_card_item sample-card">
                                        <div className="bacic_card_img">
                                            <img className="img-fluid" src={fProduct1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="genric-btn danger-border radius">Select</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignSamples;
