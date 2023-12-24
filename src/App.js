import './App.css';
import Calendar from './component/calendar/Calendar';
import TodoList from './component/todolist/TodoList';
import { useState } from 'react';
import CustomDate from './classes/CustomDate';
import TodoForm from './component/modal/TodoForm';

function App() {

  const [currentDate, updateSelectedDate] = useState(new CustomDate());
  const [isModalToggled, toggleModal] = useState(false);

  if (isModalToggled) {
    return (
      <div className="App">
        <TodoForm currentDate={currentDate} toggleModal={toggleModal}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Calendar toggleModal={toggleModal} currentDate={currentDate} updateSelectedDate={updateSelectedDate}/>
        <TodoList currentDate={currentDate} updateSelectedDate={updateSelectedDate}/>
      </div>
    );
  }

}

export default App;
