import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    const todoTitle = 'todolist title 11111'

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist todoTitle={'todolist title '} tasks={tasks1 }/>
            <Todolist todoTitle={'todolist title 22222'} tasks={tasks2}/>
        </div>
    );
}

export default App;
