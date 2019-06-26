import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/ContestList.css';
import BasicCard from "../../common/basic-card";
import {Link} from "react-router-dom";


class ContestList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li className={"media contest_li " + (this.props.active ? "active" : "")}>
                <BasicCard
                    designUrl={this.props.ContestDesignUrl}
                    price="100"
                />
                <div className="media-body">
                    <h5 className="mt-0 mb-2">
                        <Link className="list-title" to={'/contest-detail'}>{this.props.contestName}</Link>
                    </h5>
                    <h6 className="mt-0 mb-1">{this.props.contestSubTitle}</h6>
                    {this.props.contestDestription}
                </div>
                <div className="entriesnum">
                    <strong>Prize:</strong>
                    <strong className="text-danger">${this.props.contestPrize}</strong>
                    <span className="split mx-2">|</span>
                    <strong>Entries:</strong>
                    <strong className="text-danger">{this.props.contestEntries}</strong>
                </div>

                {this.props.isFinalists ? (
                    <div className="finalistavatar">
                        <strong className="mr-2">Finalists:</strong>
                        <img src={this.props.FinalistAvatar} alt="" title="lestatic22"/>
                        <img src={this.props.FinalistAvatar} alt="" title="lestatic22"/>
                        <img src={this.props.FinalistAvatar} alt="" title="lestatic22"/>
                    </div>
                ) : (
                    <div className="finalistavatar">
                        <strong className="mr-2">Finalists: Not yet selected</strong>
                    </div>
                )}
            </li>

        );
    }
}

export default ContestList;
