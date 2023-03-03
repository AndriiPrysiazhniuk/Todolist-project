import React from "react";
import {List} from "./List";
import {FitlerValueType} from "../App";
import {TsarButton} from "./TsarButton";

 export type PropsType = {
    tasks: TasksArrType[]
    todoTitle: string
    filterTasks:(value:FitlerValueType)=>void
    removeTask:(taskId:number)=>void
}
export type TasksArrType = {
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
            {/*<List  removeTask={props.removeTask} tasks={props.tasks} todoTitle={props.todoTitle}/>*/}
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <TsarButton title={'X'} callback={ ()=>props.removeTask(task.id)}/>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div>
            <TsarButton title={'All'} callback={()=>props.filterTasks('All')}/>
            <TsarButton title={'Active'} callback={()=>props.filterTasks('Active')}/>
            <TsarButton title={'Completed'} callback={()=>props.filterTasks('Completed')}/>
        </div>
    </div>
}
