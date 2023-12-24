import {Component} from 'react';
import './TodoList.css';
import MonthConverter from '../../classes/MonthConverter';
import NoteContainer from './NoteContainer';

export default class TodoList extends Component {

    render() {
        const currentDate = this.props.currentDate.getDate();
        const monthName = MonthConverter.getName(this.props.currentDate.getMonth());
        const nameOfTheDate = this.props.currentDate.getName();

        return (
            <div className='todolist'>
                <span className='currentDateLabel'>{currentDate} {monthName}</span>
                <span className='dayOfTheWeekLabel'>{nameOfTheDate}</span>
                <hr/>
                <NoteContainer currentDate={this.props.currentDate} />
            </div>
        );
    }

}