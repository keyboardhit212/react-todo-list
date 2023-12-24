import {Component} from 'react';
import './MonthYearIndicator.css';
import MonthConverter from '../../classes/MonthConverter';

export default class MonthYearIndicator extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="monthYearIndicator">
                <a href="#" className="previous" onClick={this.props.previousMonth}>&lt;</a>
                <span className="monthLabel">{MonthConverter.getName(this.props.date.getMonth())}</span>
                <span className="yearLabel">{this.props.date.getYear()}</span>
                <a href="#" className="next" onClick={this.props.nextMonth}>&gt;</a>
            </div>
        );
    }
}