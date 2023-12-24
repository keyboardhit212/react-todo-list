import {Component} from 'react';
import './Calendar.css';
import DayLabel from './DayLabel';
import Week from './Week';
import MonthYearIndicator from './MonthYearIndicator';
import CustomDate from '../../classes/CustomDate';

export default class Calendar extends Component {

    constructor(props) {
        super(props);
        this.calendar = require('node-calendar');
        this.date = new CustomDate();
        this.daysOfMonth = new this.calendar.Calendar(0).monthdayscalendar(this.date.getYear(), this.date.getMonth());
        this.state = {
             date: this.date,
             daysOfMonth: this.daysOfMonth,
        }
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    render() {
        return (
            <div className='calendar'>
                <MonthYearIndicator nextMonth={this.nextMonth} previousMonth={this.previousMonth} date={this.state.date}/>
                <div className="daysLabel">
                    <DayLabel day="MON"/>
                    <DayLabel day="TUE"/>
                    <DayLabel day="WED"/>
                    <DayLabel day="THU"/>
                    <DayLabel day="FRI"/>
                    <DayLabel day="SAT"/>
                    <DayLabel day="SUN"/>
                </div>
                {this.#weekListComponent()}
            </div>
        );
    }

    nextMonth() {
        this.date = this.date.nextMonth();
        this.daysOfMonth = new this.calendar.Calendar(0).monthdayscalendar(this.date.getYear(), this.date.getMonth());
        this.setState({
            date: this.date,
            daysOfMonth: this.daysOfMonth,
        });
    }

    previousMonth() {
        this.date = this.date.previousMonth();
        this.daysOfMonth = new this.calendar.Calendar(0).monthdayscalendar(this.date.getYear(), this.date.getMonth());
        this.setState({
            date: this.date,
            daysOfMonth: this.daysOfMonth,
        });
    }

    #weekListComponent() {
        const weeks = this.state.daysOfMonth.map((week, index) => 
            <Week toggleModal={this.props.toggleModal} updateSelectedDate={this.props.updateSelectedDate} key={index} days={week} month={this.date.getMonth()} year={this.date.getYear()}/>
        );
        return weeks;
    }

}