import {Component} from 'react';
import './Week.css';
import DaySlot from './DaySlot';

export default class Week extends Component {

    render() {
        return (
            <div className='week'>
                {this.#populatedWeekComponent()}
            </div>
        )
    }

    #populatedWeekComponent() {
        const renderList = this.props.days.map((day, index) =>
            <DaySlot toggleModal={this.props.toggleModal} updateSelectedDate={this.props.updateSelectedDate} key={index} day={day} year={this.props.year} month={this.props.month}/>
        );
        return renderList;
    }

    
}