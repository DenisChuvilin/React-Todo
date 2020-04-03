import React from 'react';

import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    console.log(props.tasks)
  return (
    <div className="list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleItem = {props.toggleItem}/>
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
