import React,{useContext,useState} from 'react'
import { TaskContext } from '../utils/TaskContextProvider'
import Accordian from './Accordian';


export default function TaskList() {
    const {tasks}=useContext(TaskContext);
    const [currentIndex,setIndex]=useState(0)

    const expand=(newValue)=>{
        setIndex(newValue)
        
    }

        
  return (
    <div>
        {tasks.map((item,index)=>{
            return (<div key={index} style={{gap:'20px !important'}}><Accordian title={item.heading} description={item.description} index={index} isShow={currentIndex==index} expandAccordian={expand}/> </div>)
        })}
        
    </div>
  )
}
