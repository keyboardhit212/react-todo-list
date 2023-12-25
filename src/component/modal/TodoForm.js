import { Component } from "react";
import "./TodoForm.css";
import IndexedDB from "../../classes/IndexedDB";
// import DatabaseHelper from "../../classes/db/DatabaseHelper";

export default class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const db = new IndexedDB('TodoList', 'Notes');
        const note = e.target.note.value;
        const date = this.props.currentDate;
        const entry = {
            date: date.toString(),
            note,
        }
        db.insert(entry);
        this.toggleModal();
    }

    toggleModal() {
        this.props.toggleModal((currentValue) => !currentValue);
    }

    render() {
        return (
            <div className="todo-form-container">
                <button className="close-btn" onClick={this.toggleModal}>x</button>
                <h1>Note</h1>
                <form onSubmit={this.submitForm}>
                    <textarea name="note" placeholder="Notes"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}