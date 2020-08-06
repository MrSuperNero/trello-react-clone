import React from 'react';
import TodoItem from './TodoItem';
import FontAwesome from 'react-fontawesome';


export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            title: this.props.title,
            numTasks: this.props.numTasks,
            todos: this.props.data,
            addActive: false,
        }; 
        this.handleComplete = this.handleComplete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayNewTask = this.displayNewTask.bind(this);
    }

    handleComplete(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });

            return {
                todos: updatedTodos,
            };
        });
    }

    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }

    handleAdd(task) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.concat({
                id: prevState.numTasks + 1,
                text: prevState.value,
                completed: false,
            });

            return {
                value: '',
                title: prevState.title,
                numTasks: prevState.numTasks + 1,
                todos: updatedTodos,
                addActive: prevState.addActive,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    displayNewTask() {
        this.setState(prevState => {
            return {
                addActive: !prevState.addActive,
            }
        })
    }

    render() {
        const todoList = this.state.todos.map(task => 
            <TodoItem 
                key={task.id} 
                task={task} 
                handleChange={this.handleComplete} 
            />);

        return (
            <div className="task-list">
                <h3>{this.state.title}</h3>
                {todoList}
                {this.state.addActive ? 
                    <form 
                        name="task"
                        className="new-input" 
                        onSubmit={this.handleSubmit} >
                        <input 
                            type="text" 
                            placeholder="Enter new task..." 
                            name="task" 
                            onChange={this.handleChangeValue}  
                            value={this.state.value} />
                        <button 
                            type="submit" 
                            value="Submit" 
                            onClick={() => {
                                this.handleAdd();
                                this.displayNewTask();}}>
                            <FontAwesome
                                name="check"
                            />
                        </button>
                    </form>
                    :
                    null
                }
                <button className="add-task" onClick={this.displayNewTask}>+ Add Task</button>
            </div>
        );
    }
}
