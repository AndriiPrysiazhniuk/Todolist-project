import React from 'react';

type PropsType={
    title:string
    callback:()=>void

}


export const TsarButton = ({title,callback}:PropsType) => {
    const onClickHandler=()=>{
    callback()
    }
    return (<button onClick={onClickHandler}>{title}</button>)}
