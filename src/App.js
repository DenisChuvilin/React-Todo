import React from 'react';

//import components
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import "./styles.css"

//raw item data
const tasks = [
  {
    name: 'test',
    id: 0,
    completed: false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {tasks};
  }

//persist data
persist = (tasks) => {
  window.localStorage.setItem('Task List', JSON.stringify(this.state.tasks));
  console.log(window.localStorage)
}


// methods to update state
toggleCompleted = clickedTaskId => {
  this.setState({
    tasks: this.state.tasks.map(task => {
      if (task.id === clickedTaskId) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      else {return task};
    })
  })
}

addTask = taskName => {
  // add a new task to the tasks
  const newTask = {
    name: taskName,
    id: new Date(),
    completed: false
  }
  
  this.setState({
    tasks: [...this.state.tasks, newTask]
  }); 
    };
    
  //clear completed
clearCompleted = (e) => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.filter( task => 
      task.completed === false
  )});
 }
 
  render() {
    
    return (

      <div className="App">
        <div className="header">
          <h1>
            Task List
  </h1>
          <TaskForm addTask={this.addTask} />
        </div>
        <TaskList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>

    )
  }
}

export default App;
