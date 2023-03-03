import React, {useState} from 'react';
import './App.css';
import {TasksArrType, Todolist} from "./Components/Todolist";

export type FitlerValueType = 'All' | 'Active' | 'Completed'

function App() {
    const todoTitle = 'todolist'

    const [tasks, setTasks] = useState<Array<TasksArrType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    const [filter, setFilter] = useState<FitlerValueType>('All')

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    let tasksForTodo = tasks

const filterTasks=(value:FitlerValueType)=>{
        setFilter(value)
}
    if(filter==='Active'){
        tasksForTodo=tasks.filter(el=>el.isDone===false)
    }
    if(filter==='Completed'){
        tasksForTodo=tasks.filter(el=>el.isDone===true)
    }


    return (
        <div className="App">
            <Todolist filterTasks={filterTasks} removeTask={removeTask} todoTitle={todoTitle} tasks={tasksForTodo}/>
        </div>
    );
}

export default App;
