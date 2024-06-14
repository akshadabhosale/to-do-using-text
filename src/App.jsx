import React, { useEffect, useState } from "react";
import TaskContextProvider from "./utils/TaskContextProvider";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './ErrorBoundary';

"use client";




function MyComponent() {
  throw new Error('Error occurred in MyComponent');
}
export default function App() {

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      {/* <CustomErrorBoundary> */}

      
        <TaskContextProvider>
          <h1 className="text-xxl font-extrabold">
            Simple Task App using React and Context
          </h1>
          <div className="container flex gap-4">
            <div className=" w-2/5">
              <AddTaskForm />
            </div>

            <div className="flex-1 mt-8">
              <h1 className="text-xl font-extrabold">My Tasks</h1>
              <div className="flex-1">
                <TaskList />
              </div>
            </div>
          </div>
        </TaskContextProvider>
        </ErrorBoundary>
      {/* </CustomErrorBoundary> */}
    </div>
  );
}
