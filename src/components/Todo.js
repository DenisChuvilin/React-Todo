import React from 'react';

import './Todo.css';

const Todo = props => {
  console.log(props);
  return (
    <div className={`item${props.item.completed ? '_completed' : ''}`} onClick={() => props.toggleItem(props.item.id)}>
      <h3>
        {props.item.name}
        <span className={`${props.item.completed ? 'success' : 'not-done'}`}> completed</span>
      </h3>
    </div>
  );
};

export default Todo;
