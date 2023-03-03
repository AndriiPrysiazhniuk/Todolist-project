import React from "react";
import {PropsType} from "./Todolist";
import {TsarButton} from "./TsarButton";

export const List = (props: PropsType) => {


    return (<>
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
    </>


    )
}