import React from 'react';
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
type PropsType={
    title:string
    callback:()=>void

}


export const TsarButton = ({title,callback}:PropsType) => {
    const onClickHandler=()=>{
    callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    );
};

