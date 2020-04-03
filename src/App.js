import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  // - All of your application data will be stored here on `<App />`.
  // - All of your `handler` functions should live here on `<App />`.
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: 'Buy Toilet Paper',
          id: 1,
          completed: false,
        },
        {
          name: 'Buy Hand Sanitizer',
          id: 2,
          completed: false,
        },
      ],
    };
  }

  // class methods to update state
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newItem],
    });
  };

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      // returns the items that havent been purchased and purges the ones that have been purchased
      tasks: this.state.tasks.filter(item => !item.completed),
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
