import {Component} from "react";
import "./Note.css";

export default class Note extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note">
                <span>{this.props.note}</span>
            </div>
        );
    }
}