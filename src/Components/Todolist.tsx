import React from "react";
import {List} from "./List";

export type PropsType = {
    tasks: TasksArrType[]
    todoTitle: string
    removeTask:(taskId:number)=>void
}
type TasksArrType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {



    return <div>
        <h3>{props.todoTitle}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <div>
            <List removeTask={props.removeTask} tasks={props.tasks} todoTitle={props.todoTitle}/>
        </div>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
