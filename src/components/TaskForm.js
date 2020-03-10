import React from "react";


class TaskForm extends React.Component {
    //constructor + super + state: task
    constructor() {
        super();
        this.state = { task: '' };
    }

    // update state with each keystroke
    handleChanges = e => {
        this.setState({ task: e.target.value });
    }

    // property to submit form 
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>

        )
    }
}

export {TaskForm};