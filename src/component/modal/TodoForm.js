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
        // const db = new IndexedDB('TodoList', 'Notes');
        // console.log(this.props.currentDate);
        // console.log(e.target.note.value);
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
                <form>
                    <textarea name="note" placeholder="Notes"></textarea>
                    <button onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}