import React from 'react';

import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  // - All of your application data will be stored here on `<App />`.
  // - All of your `handler` functions should live here on `<App />`.
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Buy Toilet Paper',
          id: 1,
          comleted: false,
        },
      ],
    };
  }

  toggleItem = (event, taskId) => {
    event.preventDefault();

    tasks: this.state.tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.comleted,
        };
      }
    });
  };

  render() {
    // console.log(this.state.tasks)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
