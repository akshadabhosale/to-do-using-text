import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../utils/TaskContextProvider";



export default function AddTaskForm() {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const {addTask}=useContext(TaskContext)

    const onSubmit=(data)=>{
        addTask(data);

    }

   



  return (
    <form className="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  pr-3 pl-3 pb-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-3 w-80">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
          <div className="sm:col-span-4">
            <label
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Task Heading
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
             
                <input
                  type="text"
                  {...register(("heading"),{ required: true })}
                  className="p-1 block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Heading"
                />

              </div>
              {errors.heading && <span className="flex text-left text-xs mt-1 text-red-500">This field is required</span>}

            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <label
              for="about"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              About
            </label>
            <div className="mt-2">
              <textarea
                {...register("description",{required:true,minLength:20})}
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
              ></textarea>
              {errors.description?.type==='required' &&<span className="flex text-left mt-1 text-xs text-red-500">This field is required</span>}
              {errors.description?.type==='minLength' &&<span className="flex text-left mt-1 text-xs text-red-500">This field is requires minium 20 characters</span>}

            </div>
          
          </div>
        </div>
        <button className="mt-4  bg-slate-100 shadow-md rounded-lg border-2 border-dotted p-2 " >Add Task</button>
      </div>
      
    </form>
  );
}
