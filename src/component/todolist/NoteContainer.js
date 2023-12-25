import { Component } from "react";
import "./NoteContainer.css";
import Note from "./Note";
import IndexedDB from "../../classes/IndexedDB";


export default class NoteContainer extends Component {

    constructor(props) {
        super(props);
        this.db = new IndexedDB('TodoList', 'Notes');
        this.state = {
            note: [],
        };
    }

    componentDidMount() {
        const notes = this.db.get(this.props.currentDate.toString(), (result) => {
            this.setState({note: result});
        });
    }

    componentDidUpdate() {
        const notes = this.db.get(this.props.currentDate.toString(), (result) => {
            this.setState({note: result});
        });
    }

    render() {
        
        const renderList = this.state.note.map((value, index) => 
            <Note key={index} note={value.note}/>
        );

        return (
            <div className="noteContainer">
                {renderList}
            </div>
        );
    }

}