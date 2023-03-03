import React from "react";
import {PropsType} from "./Todolist";
import {TsarButton} from "./TsarButton";

export const List = (props: PropsType) => {

    return (
        <ul>
            {props.tasks.map((task) => {
const removeTask=()=>{
    console.log(task.id)
}
                return (
                    <li key={task.id}>
                        <TsarButton title={'X'} callback={removeTask}/>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}