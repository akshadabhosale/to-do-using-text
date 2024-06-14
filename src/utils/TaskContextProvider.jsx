import React from "react";
import {  createContext,useState } from "react";


export const TaskContext=createContext();

export default function TaskContextProvider({children}){
    const [tasks,setTask]=useState([]);

    const addTask=(NewTask)=>{
        setTask([...tasks,NewTask])
    }

    

    return (<TaskContext.Provider value={{tasks,addTask}}>
        {children}

    </TaskContext.Provider>)
    

}