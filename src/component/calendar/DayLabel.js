import {Component} from 'react';
import './DayLabel.css';

export default class DayLabel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='dayLabel'>
            <p>{this.props.day}</p>
        </div>
        );
    }
}