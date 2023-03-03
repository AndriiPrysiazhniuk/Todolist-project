import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    const todoTitle = 'todolist'

    const  [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (taskId: number) => {


        setTasks(tasks.filter(t => t.id!==taskId))
        console.log(tasks)
    }


    return (
        <div className="App">
            <Todolist removeTask={removeTask} todoTitle={todoTitle} tasks={tasks}/>
        </div>
    );
}

export default App;
