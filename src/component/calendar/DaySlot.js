import {Component} from 'react';
import './DaySlot.css';
import CustomDate from '../../classes/CustomDate';


export default class DaySlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasNotes: false,
        };
        this.updateSelectedDate = this.updateSelectedDate.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (this.props.day !== 0) ? this.#concreteDaySlotComponent() : this.#hollowDaySlotComponent();
    }

    updateSelectedDate() {
        this.props.updateSelectedDate((previousDate) => {
            return CustomDate.createCustomDate(this.props.year, this.props.month, this.props.day);
        })
    }

    toggleModal() {
        this.props.toggleModal((currentValue) => !currentValue);
    }

    #concreteDaySlotComponent() {
        let localDate = CustomDate.createCustomDate(this.props.year, this.props.month, this.props.day); 
        return (
            <div onDoubleClick={this.toggleModal} onClick={this.updateSelectedDate} style={(localDate.equals(CustomDate.getCurrentDate())) ? {backgroundColor: '#E57373'} : {}} className='daySlot hover'>
                    <p>{this.props.day}</p>
                    {(this.state.hasNotes) ? (<div className="dot"></div>) : (<></>)}
            </div>
        );
    }

    #hollowDaySlotComponent() {
        return (
            <div className='daySlot'>
            </div>
        );
    }
    
}