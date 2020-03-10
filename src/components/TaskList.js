import React from "react";

 // import components
 import {Task} from "./Task"

 const TaskList = props => {
return (
    <div className = "Task-List">
{props.tasks.map(task => (
    <Task 
        key = {task.id}

        task = {task}

        toggleCompleted = {props.toggleCompleted}

    />
))}
<button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
    </div>
);
 };
 export {TaskList};
